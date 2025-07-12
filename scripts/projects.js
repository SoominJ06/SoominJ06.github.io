const projectDetailTemplate = `
<div class="projects_project_title font_title">%PROJECT_NAME%</div>
<div class="projects_project_details">
    <div class="projects_project_img">
        <img src="public/img/projects/%PROJECT_IMG%" alt="%PROJECT_NAME%">
    </div>
    <div class="projects_project_text">
        <div class="projects_project_desc">
            %PROJECT_DESC%
        </div>
        <ul class="projects_project_links font_title">
            %PROJECT_LINKS%
        </ul>
    </div>
</div>
`;

const projectsElement = document.getElementById("projects_project_list");

function createProjectHTML(project) {
    let linksHTML = "";

    // Inserting associated links
    for (const [label, url] of Object.entries(project.links)) {
        // Replacing link and icon
        let linkLabel = label.toLowerCase();
        let linkIcon = "icon_github_white.png";
        if (linkLabel.includes("host")) {
            linkIcon = "icon_cursor_white.png";
        } else if (linkLabel.includes("presentation") || linkLabel.includes("demo")) {
            linkIcon = "icon_play_white.png";
        }

        // Adding links to project item
        linksHTML += `
            <li>
                <a class="hoverable_btn" href="${url}" target="_blank" rel="noopener noreferrer">
                    ${label}
                    <p><img src="public/icons/${linkIcon}"></p>
                </a>
            </li>`;
    }

    // Replace project details and return
    return projectDetailTemplate
        .replaceAll("%PROJECT_NAME%", project.name)
        .replace("%PROJECT_IMG%", project.imgUrl)
        .replace("%PROJECT_DESC%", project.description)
        .replace("%PROJECT_LINKS%", linksHTML);
}

function loadProjects(filteredProjects = projects) {
    projectsElement.innerHTML = "";

    // If there are no projects under the chosen filter item
    if (filteredProjects.length === 0) {
        projectsElement.innerHTML = `<li class="error_message">No projects found for this category.</li>`;
        return;
    }

    // Append filtered project
    filteredProjects.forEach((project) => {
        const projectElement = document.createElement("li");
        projectElement.classList.add("projects_project");
        projectElement.innerHTML = createProjectHTML(project);
        projectsElement.appendChild(projectElement);
    });

    // Resize project size
    resizeProjectTitle();
}

function resizeProjectTitle() {
    if (document.body.clientWidth <= 700) {
        return;
    }
    // calculate maximum height
    let maxHeight = 0;
    document.querySelectorAll(".projects_project_title").forEach((title) => {
        if (title.clientHeight > maxHeight) {
            maxHeight = title.clientHeight;
        }
    });
    // Set all project height to max
    document.querySelectorAll(".projects_project_title").forEach((title) => {
        title.style.height = `${maxHeight}px`;
        title.style.marginTop = `40px`;
    });
}

function resizeProject(documentWidth) {
    // Calculating project width
    let division = 3;
    let gapBetweenProjects = window.getComputedStyle(document.getElementById("projects_project_list")).gap.slice(0, -2);
    if (documentWidth <= 700) {
        division = 1;
        gapBetweenProjects = 0;
    } else if (documentWidth <= 1024) {
        division = 2;
    }
    const newWidth = (projectsElement.clientWidth / division) - gapBetweenProjects;
    // Resizing projects with the new width
    document.querySelectorAll(".projects_project").forEach((title) => {
        title.style.width = `${newWidth}px`;
    });
    // Resizing the height of the project images with the correct aspect ratio
    document.querySelectorAll(".projects_project_img").forEach((image) => {
        image.style.height = `${newWidth * 225 / 400}px`;
    });
    resizeProjectTitle();
}

window.addEventListener("resize", () => {
    resizeProject(document.body.clientWidth);
});


// ==== Projects Filter ==== \\

const projectFiltersElement = document.getElementById("projects_filter");

function loadProjectsFilters() {
    projectFiltersElement.innerHTML = "";

    // Insert filter items
    projectFilters.forEach((filter, index) => {
        const value = filter.toLowerCase();
        const isChecked = index === 0 ? "checked" : "";

        const li = document.createElement("li");
        li.innerHTML = `
            <input type="radio" name="projects_filter_option" id="projects_filter_${value}" ${isChecked} hidden>
            <label for="projects_filter_${value}">${filter}</label>
        `;
        projectFiltersElement.appendChild(li);
    });

    // Re-setup listeners after inserting filter items
    setupProjectFilterEvents(); 
}

function setupProjectFilterEvents() {
    const filterInputs = document.querySelectorAll("input[name='projects_filter_option']");

    // Filter project depending on which filter item was chosen
    filterInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = input.id.replace("projects_filter_", "").toLowerCase();

            if (selected === "all") {
                loadProjects(projects);
            } else {
                const filtered = projects.filter(project =>
                    project.category.map(c => c.toLowerCase()).includes(selected)
                );
                loadProjects(filtered);
            }
        });
    });
}

// Initialize project list and filter
function initializeProjects() {
    loadProjects();
    loadProjectsFilters();
    resizeProject(document.body.clientWidth);
}

document.addEventListener("DOMContentLoaded", () => {
    initializeProjects();
});