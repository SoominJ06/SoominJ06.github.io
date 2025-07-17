const navbarTemplate = `
<header class="navbar font_title">
    <div class="logo">
        <div id="light_dark_toggle" class="light_dark_toggle">
            <p id="darkmode_icon" class="darkmode_icon"></p>
            <p id="lightmode_icon" class="lightmode_icon" style="display:none"></p>
        </div>
        <a href="/">
            Soomin Jeong
        </a>
    </div>
    <div class="navbar_contents_wrap">
        <ul class="navbar_elements_wrap">
            <li class="navbar_top_element">
                <a href="/#projects">Projects</a>
                <p class="navbar_border"></p>
            </li>
            <li class="navbar_top_element">
                <a href="/#awards">Awards & Licenses</a>
                <p class="navbar_border"></p>
            </li>
            <li class="navbar_top_element">
                <a href="/#skills">Skills</a>
                <p class="navbar_border"></p>
            </li>
        </ul>
        <ul class="navbar_side_elements">
            <li class="navbar_side_element">
                <a href="mailto:sjeong0643@gmail.com">Contact Me</a>
            </li>
        </ul>
    </div>
    <div class="navbar_mobile_toggle">
        <label class="navbar_toggle_icon" for="navbar_mobile_toggle"></label>
    </div>
    <input type="checkbox" id="navbar_mobile_toggle" name="navbar_mobile_toggle" hidden>
</header>`;

const footerTemplate = `
<footer class="footer font_title">
    <div class="footer_wrap">
        <div class="footer_con">
            <div class="footer_contact_info">
                <div class="footer_name">
                    Soomin Jeong
                </div>
                <ul class="footer_contact">
                    <li>
                        <a href="mailto:sjeong0643@gmail.com">
                            sjeong0643@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="footer_con">
            <ul class="footer_socialMedia">
                <li class="footer_icons"><a href="mailto:sjeong0643@gmail.com"><img class="themed-icon" src="public/icons/icon_email_white.png" data-icon="email" alt="Email Icon"></a></li>
                <li class="footer_icons"><a href="https://github.com/SoominJ06" target="_blank"><img class="themed-icon" src="public/icons/icon_github_white.png" data-icon="github" alt="GitHub Icon"></a></li>
                <li class="footer_icons"><a href="https://www.linkedin.com/in/jeong-soomin/" target="_blank"><img class="themed-icon" src="public/icons/icon_linkedin_white.png" data-icon="linkedin" alt="LinkedIn Icon"></a></li>
            </ul>
        </div>
    </div>
</footer>
`;

function lightDarkToggle() {
    const lightDarkToggle = document.getElementById("light_dark_toggle");
    const lightIcon = document.getElementById("lightmode_icon");
    const darkIcon = document.getElementById("darkmode_icon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        enableLightMode();
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    }

    lightDarkToggle.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            enableDarkMode();
            localStorage.setItem("theme", "dark");
            lightIcon.style.display = "none";
            darkIcon.style.display = "inline";
        } else {
            enableLightMode();
            localStorage.setItem("theme", "light");
            lightIcon.style.display = "inline";
            darkIcon.style.display = "none";
        }
    });
}

function updateThemedIcons(isLightMode) {
    const icons = document.querySelectorAll('.themed-icon');
    const color = isLightMode ? 'black' : 'white';

    icons.forEach(icon => {
        const iconName = icon.dataset.icon;
        icon.src = `public/icons/icon_${iconName}_${color}.png`;
    });
}

function enableDarkMode() {
    document.body.classList.remove("light-mode");
    document.documentElement.style.setProperty('--white', '#eee');
    document.documentElement.style.setProperty('--dark', '#1e1e22');
    document.documentElement.style.setProperty('--dark-shadow', '#444');
    document.documentElement.style.setProperty('--black', '#030303');
    updateThemedIcons(false);
}

function enableLightMode() {
    document.body.classList.add("light-mode");
    document.documentElement.style.setProperty('--white', '#030303');
    document.documentElement.style.setProperty('--dark', '#d1d1d1');
    document.documentElement.style.setProperty('--dark-shadow', '#5d6378');
    document.documentElement.style.setProperty('--black', '#eee');
    updateThemedIcons(true);
}

function initLayout() {
    document.getElementById("navbar").outerHTML = navbarTemplate;
    document.getElementById("footer").outerHTML = footerTemplate;
    
    // Close the mobile navbar menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            const toggle = document.getElementById('navbar_mobile_toggle');
            if (toggle.checked) {
                toggle.checked = false;
            }
        });
    });

    lightDarkToggle();
}

document.addEventListener("DOMContentLoaded", () => {
    initLayout();
});