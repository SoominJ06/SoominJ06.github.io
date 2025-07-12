const projectFilters = [
    "All", "Web", "UI/UX", "Mobile", "Backend", "Database"
];

const projects = [
    {
        name: "Echo of the North",
        category: ["Web", "UI/UX", "Mobile", "Database"],
        imgUrl: "echoOfTheNorth.png",
        skills: ["React", "React Native", "HTML", "CSS", "JavaScript", "Node.js", "EJS", "MongoDB", "Android Studio", "Figma", "GitHub"],
        description: "A collaborative project with the Indigenous community of Ulukhaktok in the Northwest Territories, aiming to preserve and revitalize the Inuinnaqtun dialect - an endangered Inuit language. By integrating a Large Language Model (LLM), Echo of the North is capable of real-time translations between Inuinnaqtun and English.",
        links: {
            "GitHub": "https://github.com/amalallahham/Inuinnaqtun_TranslationApp_backend",
            "Hosted App": "https://inuinnaqtun-translationapp-backend.onrender.com/",
            "GitHub(Mobile)": "https://github.com/amalallahham/echoOfTheNorth_mobile",
        },
    },
    {
        name: "Meal Mancer",
        category: ["Web", "UI/UX", "Database"],
        imgUrl: "mealMancer.png",
        skills: [],
        description: "An AI-powered full-stack web application that helps users create recipes based on the ingredients in their cupboards.",
        links: {
            "GitHub": "https://github.com/SoominJ06/MealMancer_Frontend",
            "Hosted App": "https://mealmancer.netlify.app/",
        },
    },
    {
        name: "QuizApp",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "quizApp.png",
        skills: [],
        description: "A full-stack web application aimed at enhancing mental engagement for elderly care home residents, featuring individual and group gameplay via WebSockets, multimedia quiz creation, and automated media playback for answers.",
        links: {
            "GitHub(Java)": "https://github.com/Catherine-Queenan/CS-QuizGame",
            "Demo": "https://www.youtube.com/watch?v=kdsx-pLwZOk",
            "GitHub(C#)": "https://github.com/Catherine-Queenan/CSharp-QuizApp",
        },
    },
    {
        name: "Mini Color App",
        category: ["Mobile", "UI/UX", "Backend", "Database"],
        imgUrl: "miniColorApp.png",
        skills: [],
        description: "A colour generation app that allows users to generate, save, and convert colours in HEX, RGB, and HSL formats.",
        links: {
            "GitHub": "https://github.com/SoominJ06/MiniColorApp",
            "Demo": "https://www.youtube.com/watch?v=0PGM2kqvLGc",
        },
    },
    {
        name: "MediKate",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "mediKate.png",
        skills: [],
        description: "A full-stack web application aimed at enhancing mental engagement for elderly care home residents, featuring individual and group gameplay via WebSockets, multimedia quiz creation, and automated media playback for answers.",
        links: {
            "GitHub": "https://github.com/Danton1/2800-202410-BBY34",
            "Hosted App": "https://medikate.onrender.com/",
            "Presentation": "https://www.youtube.com/watch?v=a7meY5J1eRI",
        },
    },
    {
        name: "Pokémon Memory Card Game",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "pokemonMemoryGame.png",
        skills: [],
        description: "A web-based memory card game using the Poké API to generate randomized Pokémon cards and implement customizable difficulty levels (easy, medium, hard) with light/dark mode themes.",
        links: {
            "Hosted App": "https://comp2537-pokemon-memory-card-game.netlify.app/",
        },
    },
    {
        name: "Virtual Pokédex",
        category: ["Web", "UI/UX", "Backend"],
        imgUrl: "virtualPokedex.png",
        skills: [],
        description: "A web application showcasing the first 1,025 Pokémon using the Poké API, featuring pagination for navigation and dynamic filtering by Pokémon type (e.g., Fire, Water, etc.) with support for multi-type filtering.",
        links: {
            "Hosted App": "https://comp2537-assignment3.netlify.app/"
        },
    },
    {
        name: "SchoolBoard",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "schoolBoard.png",
        skills: [],
        description: "A web application to encourage peer-to-peer support and socialization among students, promoting academic assistance and mental well-being within a 40-hour Hackathon.",
        links: {
            "GitHub": "https://github.com/Danton1/QDS_Hackathon",
            "Presentation": "https://www.youtube.com/watch?v=bsdUDgsTdGc",
        },
    },
    {
        name: "Game of Life",
        category: ["UI/UX", "Backend"],
        imgUrl: "gameOfLife.png",
        skills: [],
        description: "A Java GUI application that simulates the behaviours and interactions between plants, herbivores, carnivores, and omnivores as they navigate the environment.",
        links: {
            "GitHub": "https://github.com/SoominJ06/GameOfLife",
            "Demo": "https://www.youtube.com/watch?v=fq5rLVJpRfI",
        },
    },
    {
        name: "Recycling Game",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "recyclingGame.png",
        skills: [],
        description: "A web-based game that helps users distinguish which recycling bins to use for different items and educates them on how to recycle properly.",
        links: {
            "GitHub": "https://github.com/Kietkiet1109/1800_202330_BBY21",
            "Hosted App": "https://bby21-e4ba0.web.app/",
            "Presentation": "https://www.youtube.com/watch?v=_WPjxkhmzm4",
        },
    },
    {
        name: "Tim Hortons Website Redesign",
        category: ["Web", "UI/UX"],
        imgUrl: "timHortonsRedesign.png",
        skills: [],
        description: "a frontend-only redesign of the Tim Hortons website, focusing on an improved UI/UX. It does not include any actual functionalities, such as ordering or account management.",
        links: {
            "GitHub": "https://github.com/SoominJ06/TimHortons",
            "Demo": "https://www.youtube.com/watch?v=BFOW7fU8lSU",
        },
    },
    {
        name: "Weather App",
        category: ["Web", "UI/UX"],
        imgUrl: "weatherApp.png",
        skills: [],
        description: "A weather-detecting app that displays the temperature, weather conditions, and related temperature information of the current location.",
        links: {
            "GitHub": "https://github.com/SoominJ06/Weather_App",
            "Hosted App": "https://boryu06.github.io/weather_app/",
        },
    }
];
