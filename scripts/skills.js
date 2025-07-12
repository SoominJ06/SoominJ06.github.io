const skillItemTemplate = `
<div class="skills_skill_details">
    <div class="skills_skill_img">
        <img src="public/icons/skills/%SKILL_IMG%" alt="%SKILL_NAME%">
    </div>
    <div class="skills_skill_title font_title">%SKILL_NAME%</div>
</div>
`;

const skillListElement = document.getElementById("skills_skill_list");

function createSkillHTML(skill) {
    // Replace skill details and return
    return skillItemTemplate
        .replaceAll("%SKILL_NAME%", skill.name)
        .replace("%SKILL_IMG%", skill.imgUrl);
}

function loadSkill(filteredSkills = skills) {
    skillListElement.innerHTML = "";

    // If there are no skills under the chosen filter item
    if (filteredSkills.length === 0) {
        skillListElement.innerHTML = `<div class="error_message">No skills found for this category.</div>`;
        return;
    }

    // Append filtered skill
    filteredSkills.forEach(skill => {
        const skillElement = document.createElement("li");
        skillElement.classList.add("skills_skill");
        skillElement.innerHTML = createSkillHTML(skill);
        skillListElement.appendChild(skillElement);
    });
}


// ==== Skills Filter ==== \\

const skillFiltersElement = document.getElementById("skills_filter");

function loadSkillsFilters() {
    skillFiltersElement.innerHTML = "";

    // Insert filter items
    skillFilters.forEach((filter, index) => {
        const value = filter.toLowerCase();
        const isChecked = index === 0 ? "checked" : "";

        const li = document.createElement("li");
        li.innerHTML = `
            <input type="radio" name="skills_filter_option" id="skills_filter_${value}" ${isChecked} hidden>
            <label for="skills_filter_${value}">${filter}</label>
        `;
        skillFiltersElement.appendChild(li);
    });

    // Re-setup listeners after inserting filter items
    setupSkillFilterEvents(); 
}

function setupSkillFilterEvents() {
    const filterInputs = document.querySelectorAll("input[name='skills_filter_option']");

    // Filter skills depending on which filter item was chosen
    filterInputs.forEach(input => {
        input.addEventListener("change", () => {
            const selected = input.id.replace("skills_filter_", "").toLowerCase();

            if (selected === "all") {
                loadSkill(skills);
            } else {
                const filtered = skills.filter(skill =>
                    skill.category.map(c => c.toLowerCase()).includes(selected)
                );
                loadSkill(filtered);
            }
        });
    });
}

// Initialize skill list and filter
function initializeSkills() {
    loadSkill();
    loadSkillsFilters();
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSkills();
});