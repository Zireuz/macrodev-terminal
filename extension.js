const vscode = require('vscode');
const http   = require('http');

// Mapa titulo → instancia de terminal de VS Code
let terminalesActivas = {};
let servidor = null;

// ─────────────────────────────────────────────
//  ACTIVACIÓN
// ─────────────────────────────────────────────
function activate(context) {

    servidor = http.createServer((req, res) => {

        // CORS: por si en algún momento se llama desde el navegador directamente
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');

        if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const datos = body ? JSON.parse(body) : {};
                manejarRuta(req.method, req.url, datos, res);
            } catch (e) {
                res.writeHead(400);
                res.end(JSON.stringify({ status: 'error', message: 'JSON inválido.' }));
            }
        });
    });

    servidor.listen(4001, '127.0.0.1', () => {
        // Icono en la barra de estado inferior de VS Code
        const barraEstado = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
        barraEstado.text  = '$(terminal) MacroDev :4001';
        barraEstado.tooltip = 'MacroDev Terminal Extension activa';
        barraEstado.show();
        context.subscriptions.push(barraEstado);

        console.log('[MacroDev Extension] Servidor escuchando en puerto 4001.');
    });

    // Cuando el usuario cierra una terminal manualmente, limpiar el mapa
    vscode.window.onDidCloseTerminal(terminalCerrada => {
        for (const [titulo, t] of Object.entries(terminalesActivas)) {
            if (t === terminalCerrada) {
                delete terminalesActivas[titulo];
                console.log(`[MacroDev Extension] Terminal cerrada manualmente: "${titulo}"`);
                break;
            }
        }
    });
}

// ─────────────────────────────────────────────
//  ROUTER
// ─────────────────────────────────────────────
function manejarRuta(metodo, url, datos, res) {

    // GET /ping  →  verificar que la extensión está viva
    if (metodo === 'GET' && url === '/ping') {
        responder(res, 200, { status: 'ok', message: 'MacroDev Extension activa.' });
        return;
    }

    // POST /terminal/start  →  abrir terminal integrada con un comando
    if (metodo === 'POST' && url === '/terminal/start') {
        const { ruta, comando, titulo } = datos;

        if (!ruta || !comando || !titulo) {
            responder(res, 400, { status: 'error', message: 'Faltan campos: ruta, comando, titulo.' });
            return;
        }

        // Si ya hay una terminal con ese título abierta, reutilizarla (cierra la vieja)
        if (terminalesActivas[titulo]) {
            try { terminalesActivas[titulo].dispose(); } catch (_) {}
        }

        const terminal = vscode.window.createTerminal({ name: titulo, cwd: ruta });
        terminal.show(false); // false = no robar el foco del editor
        terminal.sendText(comando);
        terminalesActivas[titulo] = terminal;

        console.log(`[MacroDev Extension] Terminal abierta: "${titulo}" → ${comando}`);
        responder(res, 200, { status: 'success', message: `Terminal "${titulo}" lista.` });
        return;
    }

    // POST /terminal/stop  →  cerrar terminal por título
    if (metodo === 'POST' && url === '/terminal/stop') {
        const { titulo } = datos;

        if (!titulo) {
            responder(res, 400, { status: 'error', message: 'Falta campo: titulo.' });
            return;
        }

        // Buscar primero en nuestro mapa
        let terminal = terminalesActivas[titulo];

        // Si no está en el mapa, buscar entre todas las terminales abiertas de VS Code
        if (!terminal) {
            terminal = vscode.window.terminals.find(t => t.name === titulo);
        }

        if (terminal) {
            terminal.dispose();
            delete terminalesActivas[titulo];
            console.log(`[MacroDev Extension] Terminal cerrada: "${titulo}"`);
            responder(res, 200, { status: 'success', message: `Terminal "${titulo}" cerrada.` });
        } else {
            responder(res, 404, { status: 'warn', message: `No se encontró terminal "${titulo}".` });
        }
        return;
    }
// POST /terminal/clear  →  ejecuta cls en la terminal
if (metodo === 'POST' && url === '/terminal/clear') {
    const { titulo } = datos;
    let terminal = terminalesActivas[titulo]
        || vscode.window.terminals.find(t => t.name === titulo);

    if (terminal) {
        terminal.sendText('cls');
        responder(res, 200, { status: 'success', message: `Terminal "${titulo}" limpiada.` });
    } else {
        responder(res, 404, { status: 'warn', message: `No hay terminal activa "${titulo}".` });
    }
    return;
}
    // Ruta no encontrada
    responder(res, 404, { status: 'error', message: `Ruta "${url}" no existe.` });
}

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function responder(res, codigo, objeto) {
    res.writeHead(codigo);
    res.end(JSON.stringify(objeto));
}

// ─────────────────────────────────────────────
//  DESACTIVACIÓN
// ─────────────────────────────────────────────
function deactivate() {
    if (servidor) servidor.close();
}

module.exports = { activate, deactivate };