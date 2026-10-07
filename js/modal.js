// Practical 4: Modal Popup with accessibility support
document.addEventListener('DOMContentLoaded', function () {
    const openAddress = document.getElementById('open-address-modal');
    const closeAddress = document.getElementById('close-address-modal');
    const addressModal = document.getElementById('address-modal');

    if (!openAddress || !closeAddress || !addressModal) return;

    // Open modal
    openAddress.addEventListener('click', function (event) {
        event.preventDefault();
        addressModal.classList.add('active');
    });

    // Close modal via close button
    closeAddress.addEventListener('click', function () {
        addressModal.classList.remove('active');
    });

    // Close modal when clicking outside on overlay
    addressModal.addEventListener('click', function (event) {
        if (event.target === addressModal) {
            addressModal.classList.remove('active');
        }
    });

    // Accessibility: Close modal on ESC key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && addressModal.classList.contains('active')) {
            addressModal.classList.remove('active');
        }
    });
});
