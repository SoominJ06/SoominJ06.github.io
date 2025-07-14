const projectFilters = [
    "All", "Web", "UI/UX", "Mobile", "Backend", "Database"
];

const projects = [
    {
        name: "Echo of the North",
        category: ["Web", "UI/UX", "Mobile", "Database"],
        imgUrl: "echoOfTheNorth.png",
        skills: ["React", "React Native", "HTML", "CSS", "Java Script", "Node.js", "EJS", "Mongo DB", "Android Studio", "Figma", "GitHub"],
        description: "Echo of the North is a collaborative project with the Indigenous community of Ulukhaktok in the Northwest Territories, aiming to preserve and revitalize the Inuinnaqtun dialect - an endangered Inuit language. By integrating a Large Language Model (LLM), Echo of the North is capable of real-time translations between Inuinnaqtun and English. To support language learning and heritage preservation, the app also includes a pronunciation guidance using the elders' voices, and an informational page that includes the community's cultural insights.",
        tasks: [
            "Designed and developed all front-end interfaces for both the web and mobile versions of the app using React Native, HTML, CSS, JavaScript, and EJS.",
            "Implemented a fully responsive design for the web version to ensure a seamless user experience across devices and screen sizes.",
            "Collaborated with the back-end developers to integrate RESTful APIs and conducted thorough testing to ensure full functionality and performance across all platforms."
        ],
        links: {
            "GitHub (Web)": "https://github.com/amalallahham/Inuinnaqtun_TranslationApp_backend",
            "GitHub (Mobile)": "https://github.com/amalallahham/echoOfTheNorth_mobile",
            "Hosted App": "https://inuinnaqtun-translationapp-backend.onrender.com/",
        },
    },
    {
        name: "Meal Mancer",
        category: ["Web", "UI/UX", "Database"],
        imgUrl: "mealMancer.png",
        skills: ["HTML", "CSS", "Java Script", "Node.js", "MySQL", "jQuery", "Figma", "JSON"],
        description: "An AI-powered full-stack web application that uses a RESTful API service to help users quickly create recipes based on the ingredients in their cupboards, themed around sorcery. When a user inputs the ingredients they have, the app uses an AI model to generate a recipe. When interacting with the application, the AI is treated as a wizard, enhancing user experience and engagement.",
        tasks: [
            "Designed and developed all of the front-end interface, ensuring a visually appealing application to increase user engagement.",
            "Integrated RESTful APIs from the backend server to enable proper connection to the database."
        ],
        links: {
            "GitHub": "https://github.com/SoominJ06/MealMancer_Frontend",
            "Hosted App": "https://mealmancer.netlify.app/",
        },
    },
    {
        name: "QuizApp",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "quizApp.png",
        skills: ["HTML", "CSS", "Java Script", "MySQL", "Tomcat", "Jakarta", "Java", "C#", "JSON"],
        description: "A full-stack web application designed to facilitate quiz games in elderly care homes, enhancing mental engagement through interactive trivia. Built by a team of three, the app supports both individual and group quiz sessions, with real-time synchronization via WebSockets.",
        tasks: [
            "Designed and developed all of the front-end interface, ensuring an intuitive and accessible user experience.",
            "Integrated WebSockets to enable real-time multiplayer quiz sessions, allowing seamless synchronization between players and administrators.",
        ],
        links: {
            "GitHub (Java)": "https://github.com/Catherine-Queenan/CS-QuizGame",
            "GitHub (C#)": "https://github.com/Catherine-Queenan/CSharp-QuizApp",
            "Demo Video": "https://www.youtube.com/watch?v=kdsx-pLwZOk",
        },
    },
    {
        name: "Mini Color App",
        category: ["Mobile", "UI/UX", "Backend", "Database"],
        imgUrl: "miniColorApp.png",
        skills: ["Kotlin", "Android Studio"],
        description: "A colour generation app that allows users to generate, save, and convert colours in HEX, RGB, and HSL formats.",
        tasks: [
            "Dynamic Logo: The app's logo colour changes randomly each time the main page is refreshed.",
            "Random Color Generator: Generates five random colors, displayed in HEX, RGB, or HSL formats. Users can click the like buttons on the colours they would like to keep and re-generate the rest.",
            "Color Conversion: Allows users to convert between HEX, RGB, and HSL colour codes effortlessly.",
        ],
        links: {
            "GitHub": "https://github.com/SoominJ06/MiniColorApp",
            "Demo Video": "https://www.youtube.com/watch?v=0PGM2kqvLGc",
        },
    },
    {
        name: "MediKate",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "mediKate.png",
        skills: ["HTML", "CSS", "Java Script", "Mongo DB", "Node.js", "EJS", "jQuery",],
        description: "A medical application - with climate change-related health information, and a chatbot for minor ailments and booking doctors appointments - to help patients and medical professionals solve the rise of overcrowding in our medical system by providing localized information on climate change and reducing the number of patients needing to see a doctor.",
        tasks: [
            "Designed and implemented the majority of the front-end interface for a seamless user experience.",
            "Integrated a database to securely store and manage users' medical information.",
        ],
        links: {
            "GitHub": "https://github.com/Danton1/2800-202410-BBY34",
            "Hosted App": "https://medikate.onrender.com/",
            "Presentation Video": "https://www.youtube.com/watch?v=a7meY5J1eRI",
        },
    },
    {
        name: "Pokémon Memory Card Game",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "pokemonMemoryGame.png",
        skills: ["HTML", "CSS", "Java Script", "jQuery"],
        description: "A web-based memory card game using the Poké API to generate randomized Pokémon cards and implement customizable difficulty levels (easy, medium, hard) with light/dark mode themes.",
        tasks: [
            "Difficulty Levels: Choose between Easy, Medium, or Hard, which determines the number of cards in play.",
            "Light/Dark Mode: Toggle between themes for a personalized experience.",
            "Gameplay Mechanic: Click a card to reveal the Pokémon, then match pairs to progress.",
            "Power-Up Feature: Each game grants a one-time power-up that reveals all cards for a limited time (duration scales with difficulty).",
            "Win/Loss Conditions: Players either win by matching all pairs within the time limit or lose if time runs out."
        ],
        links: {
            "Hosted App": "https://comp2537-pokemon-memory-card-game.netlify.app/",
        },
    },
    {
        name: "Virtual Pokédex",
        category: ["Web", "UI/UX", "Backend"],
        imgUrl: "virtualPokedex.png",
        skills: ["HTML", "CSS", "Java Script", "jQuery"],
        description: "A web application showcasing the first 1,025 Pokémon using the Poké API, featuring pagination for navigation and dynamic filtering by Pokémon type (e.g., Fire, Water, etc.) with support for multi-type filtering.",
        tasks: [
            "Pagination Controls: Navigate through pages using first, last, previous, and next buttons.",
            "Type Filtering: Select up to two Pokémon types (e.g., Fire & Water) to filter the list dynamically.",
            "Real-Time Pokémon Count: Displays the total number of Pokémon matching the selected criteria."
        ],
        links: {
            "Hosted App": "https://comp2537-assignment3.netlify.app/"
        },
    },
    {
        name: "SchoolBoard",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "schoolBoard.png",
        skills: ["HTML", "CSS", "Java Script", "SQLite", "PHP"],
        description: "A web application designed to enhance student well-being by fostering academic support and social connections. Built in under 48 hours during a hackathon with a team of five, SchoolBoard helps students reduce stress, seek peer support, and build a strong academic community.",
        tasks: [
            "Led front-end development, ensuring a user-friendly and visually appealing interface.",
            "Designed the overall UI to create an intuitive and engaging experience.",
            "Presented the final project, effectively communicating its impact and functionality."
        ],
        links: {
            "GitHub": "https://github.com/Danton1/QDS_Hackathon",
            "Presentation Video": "https://www.youtube.com/watch?v=bsdUDgsTdGc",
        },
    },
    {
        name: "Game of Life",
        category: ["UI/UX", "Backend"],
        imgUrl: "gameOfLife.png",
        skills: ["Java"],
        description: "A Java GUI application that simulates a variation of Conway's Game of Life, incorporating a dynamic ecosystem where Plants, Herbivores, Carnivores, and Omnivores interact based on defined survival and reproduction rules. Unlike the original cellular automaton - which follows simple birth and death rules - this simulation introduces predation, movement, and reproduction, creating an emergent and evolving environment.",
        tasks: [
            "Dynamic Lifeforms: Each organism type follows unique behaviours, requiring food and meeting conditions to reproduce.",
            "Survival Mechanics: Organisms must find and consume food within 5 moves to stay alive.",
            "Reproduction Rules: Lifeforms reproduce based on specific conditions, fostering natural population growth and decline."
        ],
        links: {
            "GitHub": "https://github.com/SoominJ06/GameOfLife",
            "Demo Video": "https://www.youtube.com/watch?v=fq5rLVJpRfI",
        },
    },
    {
        name: "Recycling Game",
        category: ["Web", "UI/UX", "Backend", "Database"],
        imgUrl: "recyclingGame.png",
        skills: ["HTML", "CSS", "Java Script", "Firebase", "Firestore", "Figma"],
        description: "A web-based game that helps users distinguish which recycling bins to use for different items and educates them on how to recycle properly. This project aims to make learning about recycling engaging and informative.",
        tasks: [
            "Led task breakdown and guided the team to meet project requirements.",
            "Developed the entire front-end interface, ensuring a seamless user experience.",
            "Debugged and optimized back-end functionalities, improving overall performance.",
            "Designed and implemented the leaderboard logic to display only the highest score per user.",
            "Played a key role in refining the core gameplay mechanics through extensive debugging and fixes."
        ],
        links: {
            "GitHub": "https://github.com/Kietkiet1109/1800_202330_BBY21",
            "Hosted App": "https://bby21-e4ba0.web.app/",
            "Presentation Video": "https://www.youtube.com/watch?v=_WPjxkhmzm4",
        },
    },
    {
        name: "Tim Hortons Website Redesign",
        category: ["Web", "UI/UX"],
        imgUrl: "timHortonsRedesign.png",
        skills: ["HTML", "CSS", "jQuery", "Java Script", "Adobe Photoshop", "Adobe XD", "Adobe Illustrator", "Figma", "MediBang Paint"],
        description: "A frontend-only redesign of the Tim Hortons website, focusing on an improved UI/UX. It does not include any actual functionalities, such as ordering or account management.",
        tasks: [
            "Re-designed the Tim Hortons website to have a modernized and responsive UI design."
        ],
        links: {
            "GitHub": "https://github.com/SoominJ06/TimHortons",
            "Demo Video": "https://www.youtube.com/watch?v=BFOW7fU8lSU",
        },
    },
    {
        name: "Weather App",
        category: ["Web", "UI/UX"],
        imgUrl: "weatherApp.png",
        skills: ["HTML", "CSS", "React"],
        description: "A weather-detecting app that displays the temperature, weather conditions, and related temperature information of the current location.",
        tasks: [
            "Displays the weather information of your current location, including the current temperature, weather conditions (e.g., sunny, rainy, cloudy), and the \"feels like\" temperature, along with the lowest and highest temperatures of the day.",
        ],
        links: {
            "GitHub": "https://github.com/SoominJ06/Weather_App",
            "Hosted App": "https://boryu06.github.io/weather_app/",
        },
    }
];
