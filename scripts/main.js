const roleElement = document.getElementById("role");

let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (charIndex <= currentRole.length) {
        roleElement.textContent = currentRole.substring(0, charIndex);
        charIndex++;
        setTimeout(typeRole, 150);
    } else {
        setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            charIndex = 0;
            typeRole();
        }, 1500);
    }
}

// Close the mobile navbar menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const toggle = document.getElementById('navbar_mobile_toggle');
        if (toggle.checked) {
            toggle.checked = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    typeRole();
});