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
        name: 'Banking App',
        description: "Built Horizon, a financial SaaS platform powered by Next.js and TypeScript, seamlessly integrates with users' bank accounts for real-time transaction monitoring and enables effortless peer-to-peer money transfers. Utilizing Appwrite for backend services, Dwallo for enhanced security measures, and Plaid for secure banking data connectivity, Horizon offers a comprehensive suite of financial management features. Users can effectively oversee and optimize their entire financial landscape from a single platform.",
        tools: ['HTML','Tailwind css','Javascript','React js', 'Next.js', 'TypeScript', 'Appwrite',"Dwollo", 'Plaid'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Frontend Developer',
        url: 'https://netflix-app-clone.vercel.app/'
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


