document.addEventListener("DOMContentLoaded", function() {
    // Get the consent bar element
    var consentBar = document.querySelector('.cky-consent-bar');
    var launcher = document.querySelector('#purechat-container .purechat-launcher-frame.purechat-launcher-frame-bottom-right');
    if (consentBar && launcher) {
        // Get computed style to check display property
        var style = window.getComputedStyle(consentBar);
        if (style.display !== "none") {
            // Set the Pure Chat launcher position with !important
            launcher.style.setProperty('bottom', '70px', 'important');
            launcher.style.setProperty('right', '10px', 'important');
        } else {
            // Optionally reset to default if consent bar is hidden
            launcher.style.removeProperty('bottom');
            launcher.style.removeProperty('right');
        }
    }
});
