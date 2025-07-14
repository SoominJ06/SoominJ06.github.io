const skillItemTemplate = `
<li class="project_details_skill_item">
    <div class="project_details_skill">
        <div class="project_skill_img">
            <img src="/public/icons/skills/%SKILL_IMG%" alt="%SKILL_NAME%">
        </div>
        <div class="project_skill_title font_title">%SKILL_NAME%</div>
    </div>
</li>
`;

const params = new URLSearchParams(window.location.search);
const projectName = params.get("name");

const container = document.getElementById("project_detail_container");

if (!projectName) {
    window.location.href = "/404.html";;
} else {
    const project = projects.find(p => p.name === decodeURIComponent(projectName));
    
    if (!project) {
        window.location.href = "/404.html"; // or show error
    } else {
        document.getElementById("project_title").innerHTML = project.name;
        document.getElementById("project_image").src = `/public/img/projects/${project.imgUrl}`;
        document.getElementById("project_description").textContent = project.description;

        // Tasks
        const taskElement = document.getElementById("project_tasks");
        taskElement.innerHTML = "<li>-  " + project.tasks.join("</li><li>- ");

        // Skills
        const skillsElement = document.getElementById("project_skills");
        project.skills.forEach((skill) => {
            const newSkill = skills.find(s => s.name === skill);
            skillsElement.innerHTML += skillItemTemplate.replaceAll("%SKILL_NAME%", newSkill.name).replace("%SKILL_IMG%", newSkill.imgUrl);
        })

        // Links
        const linksElement = document.getElementById("project_links");
        for (const label in project.links) {
            // Replacing link, icon and hover animation
            let linkHover = "hoverable_btn_tilt";
            let linkLabel = label.toLowerCase();
            let linkIcon = "icon_github_white.png";
            if (linkLabel.includes("host")) {
                linkIcon = "icon_cursor_white.png";
                linkHover = "hoverable_btn_scaledown";
            } else if (linkLabel.includes("presentation") || linkLabel.includes("demo")) {
                linkIcon = "icon_play_white.png";
                linkHover = "hoverable_btn_move"
            }

            // Adding links to list
            linksElement.innerHTML += `
            <li class="font_title">
                <a class="${linkHover} hoverable" href="${project.links[label]}" target="_blank">
                    ${label}
                    <p><img src="/public/icons/${linkIcon}"></p>
                </a>
            </li>`;
        }
    }
}