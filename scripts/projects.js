const projectDetailTemplate = `
<div class="projects_project_title font_title">%PROJECT_NAME%</div>
<div class="projects_project_details">
    <a href="/project_details.html?name=%PROJECT_NAME%">
        <div class="projects_project_img">
            <img src="public/img/projects/%PROJECT_IMG%" alt="%PROJECT_NAME%">
        </div>
    </a>
    <div class="projects_project_text">
        <div class="projects_learn_more font_title">
            <a class="hoverable_btn_move hoverable" href="/project_details.html?name=%PROJECT_NAME%">
                Learn More
                <p><img class="themed-icon" src="public/icons/icon_double_arrow_right_white.png" data-icon="double_arrow_right" alt="Learn more icon"></p>
            </a>
        </div>
    </div>
</div>
`;

const projectsElement = document.getElementById("projects_project_list");

function createProjectHTML(project) {
    // Replace project details and return
    return projectDetailTemplate
        .replaceAll("%PROJECT_NAME%", project.name)
        .replace("%PROJECT_IMG%", project.imgUrl)
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
        projectElement.id = `projects_project_${project.name.replaceAll(" ", "_")}`;
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

    // Checking light mode again to load black icons
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        enableLightMode();
        lightIcon.style.display = "inline";
        darkIcon.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initializeProjects();
});