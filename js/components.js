const components = {
    sidebar: `
        <aside class="sidebar-index">
            <h4 class="sidebar-title">Plan de Estudios</h4>
            <nav class="sidebar-list">
                <a href="/modules/01-base/index.html" class="sidebar-item" id="mod-01">
                    <i data-lucide="terminal"></i>
                    <span>Base</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-02">
                    <i data-lucide="variable"></i>
                    <span>Variables</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-03">
                    <i data-lucide="list"></i>
                    <span>Arrays</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-04">
                    <i data-lucide="repeat"></i>
                    <span>Bucles</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-05">
                    <i data-lucide="git-branch"></i>
                    <span>Condicionales</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-06">
                    <i data-lucide="file-input"></i>
                    <span>Formularios</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-07">
                    <i data-lucide="function"></i>
                    <span>Funciones</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-08">
                    <i data-lucide="shield-check"></i>
                    <span>Formularios 2</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-09">
                    <i data-lucide="file-text"></i>
                    <span>Ficheros</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-10">
                    <i data-lucide="mail"></i>
                    <span>E-Mails</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-11">
                    <i data-lucide="key"></i>
                    <span>Sesiones</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-12">
                    <i data-lucide="cookie"></i>
                    <span>Cookies</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-13">
                    <i data-lucide="box"></i>
                    <span>Objetos</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-14">
                    <i data-lucide="database"></i>
                    <span>Bases de datos</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-15">
                    <i data-lucide="layout"></i>
                    <span>CRUD</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-16">
                    <i data-lucide="columns"></i>
                    <span>Paginador</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-17">
                    <i data-lucide="log-in"></i>
                    <span>Login</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-18">
                    <i data-lucide="user-plus"></i>
                    <span>Registro</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-19">
                    <i data-lucide="cloud"></i>
                    <span>API</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-20">
                    <i data-lucide="shield-alert"></i>
                    <span>Seguridad</span>
                </a>
                <a href="#" class="sidebar-item" id="mod-21">
                    <i data-lucide="flag"></i>
                    <span>Final</span>
                </a>
            </nav>
        </aside>
    `
};

function injectComponents() {
    const isInsideModule = window.location.pathname.includes('/modules/');
    
    // Inyectar Sidebar
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        sidebarPlaceholder.innerHTML = components.sidebar;

        if (isInsideModule) {
            const links = sidebarPlaceholder.querySelectorAll('.sidebar-item');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href !== '#' && href.includes('/modules/')) {
                    link.href = `../${href.split('/modules/')[1]}`;
                }
            });

            // Activar ítem actual
            const pathParts = window.location.pathname.split('/');
            const currentDir = pathParts[pathParts.length - 2];
            if (currentDir) {
                const activeId = currentDir.split('-')[0];
                const activeItem = document.getElementById(`mod-${activeId}`);
                if (activeItem) activeItem.classList.add('active');
            }
        }
    }

    if (window.lucide) lucide.createIcons();

    // Actualizar Año de Copyright
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
}

document.addEventListener('DOMContentLoaded', injectComponents);
