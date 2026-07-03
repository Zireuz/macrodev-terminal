MacroDev Extension for VS Code

La extensión oficial de MacroDev que actúa como puente entre tu entorno de desarrollo y tu dispositivo móvil. Esta herramienta permite ejecutar scripts de terminal, gestionar procesos de Node.js y controlar tu entorno local sin tocar el teclado.
🚀 Características Principales

    Ejecución Remota: Lanza comandos de terminal (ej. npm run dev, npm test) directamente desde la pantalla táctil de tu smartphone.

    Bridge de Comunicación: Integración nativa con Ngrok para exponer tu entorno local de forma segura hacia el dispositivo móvil.

    Logs en tiempo real: Envía el output de tu terminal al panel de control móvil para monitoreo constante.

    Configuración Ligera: Diseñada para no consumir recursos del sistema mientras programas.

🛠️ Requisitos previos

Para que la extensión funcione, debes tener configurado el backend de MacroDev:

    El servidor de MacroDev debe estar ejecutándose en tu máquina local.

    La extensión debe tener acceso al puerto donde escucha tu servidor local (configurable en las Settings de VS Code).

⚙️ Configuración

    Instalación: Instala la extensión desde el archivo .vsix o a través del marketplace.

    Settings: Ve a File > Preferences > Settings y busca MacroDev.

    Configura los siguientes campos:

        macrodev.serverUrl: La URL de tu servidor local (ej. http://localhost:3000).

        macrodev.apiKey: Tu llave secreta para autenticar la comunicación móvil.

⌨️ Comandos Disponibles

Abre la paleta de comandos (Ctrl+Shift+P o Cmd+Shift+P en Mac) y escribe:

    MacroDev: Start Connection: Inicia el túnel y conecta la extensión con tu móvil.

    MacroDev: Send Terminal Command: Envía una instrucción personalizada al terminal.

    MacroDev: Stop Connection: Cierra la sesión activa.

🔒 Seguridad

La comunicación entre la extensión y tu dispositivo móvil utiliza tokens de autenticación para asegurar que solo tú puedas ejecutar comandos en tu entorno de desarrollo.

🤝 Contribuciones

Este proyecto es una pieza de portafolio personal. Si deseas sugerir mejoras de UI/UX o correcciones en el contenido, siéntete libre de abrir un Pull Request.

Landing page diseñada y mantenida por [William / Zireuz] Linkedin: https://www.linkedin.com/in/zireuz-software. Contacto: +57 3156374818 Correo: willdevmor@gmail.com
