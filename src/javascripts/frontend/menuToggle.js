export function toggleMenu() {
    const hamburgerBtn = document.querySelector('section.bg-midnight-200 button:last-of-type');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');

    if (hamburgerBtn && mobileNavMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNavMenu.classList.toggle('hidden');
        });
    }
}