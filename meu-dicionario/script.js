document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = bodyElement.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            bodyElement.setAttribute('data-bs-theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            bodyElement.setAttribute('data-bs-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const tableSections = document.querySelectorAll('.table-section');
        const sidebarLinks = document.querySelectorAll('#sidebarNav .nav-item');

        tableSections.forEach((section, index) => {
            const textContent = section.textContent.toLowerCase();
            if (textContent.includes(query)) {
                section.style.display = 'block';
                if (sidebarLinks[index]) sidebarLinks[index].style.display = 'block';
            } else {
                section.style.display = 'none';
                if (sidebarLinks[index]) sidebarLinks[index].style.display = 'none';
            }
        });
    });

    const derModal = document.getElementById('derModal');
    let panzoomInstance = null;

    derModal.addEventListener('shown.bs.modal', () => {
        const elem = document.getElementById('derImage');
        if (!panzoomInstance && elem) {
            panzoomInstance = Panzoom(elem, {
                maxScale: 5,
                minScale: 0.5,
                contain: 'outside'
            });
            elem.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);

            document.getElementById('zoomInBtn').addEventListener('click', () => panzoomInstance.zoomIn());
            document.getElementById('zoomOutBtn').addEventListener('click', () => panzoomInstance.zoomOut());
            document.getElementById('zoomResetBtn').addEventListener('click', () => panzoomInstance.reset());
        }
    });
});