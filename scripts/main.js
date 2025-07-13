const navbarTemplate = `
<header class="navbar font_title">
    <div class="logo">
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
                <li class="footer_icons"><a href="mailto:sjeong0643@gmail.com"><img src="/public/icons/icon_email_white.png" alt="Email Icon"></a></li>
                <li class="footer_icons"><a href="https://github.com/SoominJ06" target="_blank"><img src="/public/icons/icon_github_white.png" alt="GitHub Icon"></a></li>
                <li class="footer_icons"><a href="https://www.linkedin.com/in/jeong-soomin/" target="_blank"><img src="/public/icons/icon_linkedin_white.png" alt="LinkedIn Icon"></a></li>
            </ul>
        </div>
    </div>
</footer>
`;

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
}

document.addEventListener("DOMContentLoaded", () => {
    initLayout();
});