document.addEventListener('DOMContentLoaded', () => {

    function setupToggle(inputId, openEyeId, closeEyeId) {
        const input    = document.getElementById(inputId);
        const openEye  = document.getElementById(openEyeId);
        const closeEye = document.getElementById(closeEyeId);

        if (!input || !openEye || !closeEye) return;

        openEye.classList.remove('hidden');
        openEye.classList.add('flex');
        closeEye.classList.add('hidden');
        closeEye.classList.remove('flex');

        openEye.addEventListener('click', () => {
            input.type = 'text';
            openEye.classList.add('hidden');
            openEye.classList.remove('flex');
            closeEye.classList.remove('hidden');
            closeEye.classList.add('flex');
            input.focus();
        });

        closeEye.addEventListener('click', () => {
            input.type = 'password';
            closeEye.classList.add('hidden');
            closeEye.classList.remove('flex');
            openEye.classList.remove('hidden');
            openEye.classList.add('flex');
            input.focus();
        });
    }

    // Desktop - Password
    setupToggle('passwordInput_desktop', 'openedEye_desktop', 'closedEye_desktop');
    // Desktop - Confirm Password
    setupToggle('confirm_passwordInput_desktop', 'confirm_openedEye_desktop', 'confirm_closedEye_desktop');
    // Mobile - Password
    setupToggle('passwordInput_mobile', 'openedEye_mobile', 'closedEye_mobile');
    // Mobile - Confirm Password
    setupToggle('confirm_passwordInput_mobile',  'confirm_openedEye_mobile',  'confirm_closedEye_mobile');

});