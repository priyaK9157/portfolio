import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'StudyNotion',
        description: 'Designed, and deployed StudyNotion,cutting-edge MERN stack educational platform incorporating MongoDB, Express.js, React.js, and Node.js, with JWT authentication. This innovative platform not only streamlined learning processes and provided a centralized learning hub, but also included seamless payment integration using UPI and multiple payment options. StudyNotion successfully',
        tools: ['React.js','Express.js','Node.js','MongoDB', 'JWT Authentication'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
        url: 'https://study-notion-five.vercel.app/'
    },
    
    {
        id: 2,
        name: 'ProjectBuddy',
        description: 'Developed PartnerBuddy, a collaborative platform that enables users to post their projects and find interested partners to collaborate with. The website allows project creators to post detailed descriptions of their projects, specify required skills, and set collaboration terms. Interested users can apply to these projects, showcasing their skills and experience. The platform fosters a community of innovators and problem-solvers, making it easier for individuals to find like-minded partners and work together on exciting projects.',
        tools: ['HTML','NextJS','Javascript', 'Tailwind CSS', "Next Auth", 'Node js', "MongoDB", "Postman"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
        url:'https://github.com/priyaK9157/project-Buddy'
    },
    {
        id: 3,
        name: 'Web-Detective',
        description: 'Created WebDetective, a web application that allows users to input a GitHub username and retrieve comprehensive profiles of GitHub users. The application provides detailed information including the user\'s repositories, followers, following, starred repositories, and activity logs. This tool is particularly useful for recruiters, developers, and anyone interested in gaining insights into a developer\'s work and contributions on GitHub. The intuitive interface and powerful search capabilities make it easy to navigate and find the desired information.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate, // Ensure 'realEstate' is properly defined or imported elsewhere in your code
        url: 'https://web-detective-six.vercel.app/'
    },
    
    {
        id: 4,
        name: 'Netflix Clone',
        description: "Developed a Netflix Clone, a web application that mimics the core features of the popular streaming service, Netflix. The application allows users to browse through a vast collection of movies and TV shows, view detailed information about each title, and stream video content seamlessly. Users can create accounts, manage their profiles, add titles to their watchlist, and receive personalized recommendations based on their viewing history. The project focuses on providing a smooth user experience with a sleek and responsive design, along with robust backend support for handling user data and streaming services.",
        tools: ['HTML','Tailwind css','Javascript','React js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Frontend Developer',
        url: 'https://netflix-app-clone.vercel.app/'
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },