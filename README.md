
<div align="center">

<table>
  <tr>
    <td align="center" bgcolor="#0d1117" style="padding: 40px; border: 2px solid #38bdf8; border-radius: 12px;">
      <br />
      <sub>⚡ ORIGINAL PROJECT BY ⚡</sub>
      <h1 style="font-size: 2.8rem; margin: 10px 0; color: #ffffff; letter-spacing: 1px;">William Londoño Morales</h1>
      <h2 style="font-size: 2rem; margin: 5px 0; color: #38bdf8; letter-spacing: 2px;">✨ ZIREUZ ✨</h2>
      <p style="font-size: 1.2rem; color: #8b949e; max-width: 550px; margin-top: 15px;">
        <b>Software Developer & Systems Architect</b><br />
        Crafting high-performance applications and clean, production-ready code.
      </p>
      <br />
      <a href="mailto:willdevmor@gmail.com">
        <img src="https://img.shields.io/badge/Email-Contact%20Me-blue?style=for-the-badge&logo=gmail&logoColor=white&color=1473e6" alt="Email" />
      </a>
      <a href="https://linkedin.com/in/zireuz-software">
        <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin&logoColor=white&color=0077b5" alt="LinkedIn" />
      </a>
      <a href="https://github.com/Zireuz">
        <img src="https://img.shields.io/badge/GitHub-Zireuz%20Hub-black?style=for-the-badge&logo=github&logoColor=white&color=24292e" alt="GitHub" />
      </a>
      <br /><br />
    </td>
  </tr>
</table>

---

### 🛡️ Aviso de Autoría y Propiedad Intelectual

> ⚠️ **IMPORTANT NOTICE FOR RECRUITERS & DEVELOPERS**
> Este proyecto, su arquitectura, lógica y código fuente son de la autoría exclusiva de **William Londoño Morales (Zireuz)**. Si estás viendo este código en el portafolio o entrevista de un tercero, por favor solicita una validación técnica en vivo o comunícate conmigo a través de los canales oficiales arriba indicados. *La copia no autorizada sin atribución viola los términos de la licencia del desarrollador.*

</div>


---


# MacroDev Extension for VS Code

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
