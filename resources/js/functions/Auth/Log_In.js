document.addEventListener('DOMContentLoaded', () => {

    function setupPasswordToggle(inputId, openEyeId, closeEyeId) {
        const input = document.getElementById(inputId);
        const openEye = document.getElementById(openEyeId);
        const closeEye = document.getElementById(closeEyeId);

        function update() {
            const isHidden = input.type === "password";

            openEye.classList.toggle('hidden', !isHidden);
            openEye.classList.toggle('flex', isHidden);

            closeEye.classList.toggle('hidden', isHidden);
            closeEye.classList.toggle('flex', !isHidden);
        }

        openEye.addEventListener('click', () => {
            input.type = "text";
            input.focus();
            update();
        });

        closeEye.addEventListener('click', () => {
            input.type = "password";
            input.focus();
            update();
        });

        update();
    }

    // DESKTOP
    setupPasswordToggle( 'passwordInput_desktop', 'openedEye_desktop', 'closedEye_desktop' );
    // MOBILE
    setupPasswordToggle( 'passwordInput_mobile', 'openedEye_mobile', 'closedEye_mobile' );

});