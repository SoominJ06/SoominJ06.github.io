const skillFilters = [
    "All", "APIs", "Design", "Web", "IDEs", "Mobile", "Server", "Game", "Database", "Version Control", "Programming Languages"
];

const skills = [
    {
        name: "HTML",
        imgUrl: "html.png",
        category: ["Web"],
    },
    {
        name: "CSS",
        imgUrl: "css.png",
        category: ["Web"],
    },
    {
        name: "Java Script",
        imgUrl: "js.png",
        category: ["APIs", "Programming Languages", "Web"],
    },
    {
        name: "JSON",
        imgUrl: "json.png",
        category: ["APIs", "Database", "Web", "Mobile", "Server"],
    },
    {
        name: "Node.js",
        imgUrl: "nodejs.png",
        category: ["APIs", "Web", "Database"],
    },
    {
        name: "EJS",
        imgUrl: "ejs.png",
        category: ["Web"],
    },
    {
        name: "PHP",
        imgUrl: "php.png",
        category: ["Web", "Server"],
    },
    {
        name: "Postman",
        imgUrl: "postman.webp",
        category: ["APIs"],
    },
    {
        name: "jQuery",
        imgUrl: "jQuery.svg",
        category: ["Web"],
    },
    {
        name: "Java",
        imgUrl: "java.png",
        category: ["Programming Languages"],
    },
    {
        name: "Eclipse",
        imgUrl: "eclipse.png",
        category: ["IDEs"],
    },
    {
        name: "C",
        imgUrl: "c.png",
        category: ["Programming Languages"],
    },
    {
        name: "C++",
        imgUrl: "cpp.png",
        category: ["Programming Languages"],
    },
    {
        name: "C#",
        imgUrl: "csharp.png",
        category: ["Programming Languages"],
    },
    {
        name: "CLion",
        imgUrl: "clion.png",
        category: ["IDEs"],
    },
    {
        name: "React",
        imgUrl: "react.png",
        category: ["Web"],
    },
    {
        name: "React Native",
        imgUrl: "reactNative.png",
        category: ["Web", "Mobile"],
    },
    {
        name: "Kotlin",
        imgUrl: "kotlin.png",
        category: ["Programming Languages", "Mobile"],
    },
    {
        name: "Android Studio",
        imgUrl: "androidStudio.png",
        category: ["IDEs"],
    },
    {
        name: "R",
        imgUrl: "r.png",
        category: ["Programming Languages", "Database"],
    },
    {
        name: "Python",
        imgUrl: "python.webp",
        category: ["Programming Languages"],
    },
    {
        name: "SQL",
        imgUrl: "sql.png",
        category: ["Database"],
    },
    {
        name: "MySQL",
        imgUrl: "mySQL.png",
        category: ["Database"],
    },
    {
        name: "SQLite",
        imgUrl: "sqlite.png",
        category: ["Database"],
    },
    {
        name: "Studio 3T",
        imgUrl: "studio3t.png",
        category: ["Database", "IDEs"],
    },
    {
        name: "Oracle",
        imgUrl: "oracle.png",
        category: ["Database"],
    },
    {
        name: "Tomcat",
        imgUrl: "Tomcat.png",
        category: ["Server", "Web"],
    },
    {
        name: "Mongo DB",
        imgUrl: "mongoDB.webp",
        category: ["Database"],
    },
    {
        name: "Firebase",
        imgUrl: "firebase.png",
        category: ["Database", "Server", "APIs"],
    },
    {
        name: "Firestore",
        imgUrl: "firestore.png",
        category: ["Database"],
    },
    {
        name: "VSCode",
        imgUrl: "vscode.png",
        category: ["IDEs"],
    },
    {
        name: "Visual Studio",
        imgUrl: "visualStudio.png",
        category: ["IDEs"],
    },
    {
        name: "Figma",
        imgUrl: "figma.svg",
        category: ["Design"],
    },
    {
        name: "Adobe Photoshop",
        imgUrl: "photoshop.png",
        category: ["Design"],
    },
    {
        name: "Adobe Illustrator",
        imgUrl: "illustrator.png",
        category: ["Design"],
    },
    {
        name: "Adobe XD",
        imgUrl: "adobexd.png",
        category: ["Design"],
    },
    {
        name: "Adobe Premiere",
        imgUrl: "premiere.png",
        category: ["Design"],
    },
    {
        name: "MediBang Paint",
        imgUrl: "medibangPaint.png",
        category: ["Design"],
    },
    {
        name: "Git",
        imgUrl: "git.png",
        category: ["Version Control"],
    },
    {
        name: "GitHub",
        imgUrl: "github.png",
        category: ["Version Control"],
    },
    {
        name: "Diversion",
        imgUrl: "diversion.png",
        category: ["Version Control"],
    },
    {
        name: "Sourcetree",
        imgUrl: "sourcetree.svg",
        category: ["IDEs", "Version Control"],
    },
    {
        name: "Render",
        imgUrl: "render.png",
        category: ["Server", "Web"],
    },
    {
        name: "Digital Ocean",
        imgUrl: "digitalOcean.webp",
        category: ["Server", "Web"],
    },
    {
        name: "Netlify",
        imgUrl: "netlify.webp",
        category: ["Server", "Web"],
    },
    {
        name: "Unreal Engine",
        imgUrl: "unreal.png",
        category: ["Game", "IDEs"],
    },
    {
        name: "Unity",
        imgUrl: "unity.png",
        category: ["Game", "IDEs"],
    },
];