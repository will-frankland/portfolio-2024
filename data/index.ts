export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Work Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack:",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "About me:",
    description: "Hi, I'm Will, a web developer based in Toronto with 1.5 years of experience, following a transition from Mechanical Engineering.\n I moved to Canada from England in 2019 and have been passionate about technology ever since. Outside of coding, you'll find me hiking, at concerts, working out, or cheering for my favorite sports teams, whether it's soccer, NFL, F1, or NBA. I'm also a proud pet parent to Nala and Bear, my cat and dog.",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Try spinning this globe...",
    description: "Kinda cool, huh?",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Let's connect!",
    description: "Send me an email:",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CarePulse Medical",
    des: "CarePulse is a medical booking site where patients can create an account, input their details and medical history and book appointments to see a doctor. There is an admin panel that is password protected (123456) which allows admin users to confirm, reschedule or cancel appointments",
    img: "/screenshots/carepulse-homepage.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/appwrite.svg"],
    link: "https://care-pulse-inky.vercel.app",
  },
  {
    id: 2,
    title: "Horizon Banking",
    des: "Horizon banking app allows users to connect their accounts via Plaid and Dwolla securely and safely. Once connected users can transfer funds between accounts, manage their spending and saving with accurate and live spending information and connect more banks and accounts",
    img: "/screenshots/banking_app.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/appwrite.svg"],
    link: "https://banking-app-lac.vercel.app/sign-in",
  },
  {
    id: 3,
    title: "Imaginify",
    des: "This SaaS app utilizes CloudinaryAI which allows users to modify images in a variety of exciting ways. They can remove items/backgrounds from images, manipulate image colours, generate fill and restore old images. Users can also purchase more credits via Stripe and all authentication is handled using Clerk",
    img: "/screenshots/imaginify-homepage.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/clerk.svg", "/mongo.svg"],
    link: "https://imaginify-five-ruddy.vercel.app",
  },
  {
    id: 4,
    title: "CarHub",
    des: "A mock car rental website that utilizes API calls to collect car images and data, this can then be filtered by year or fuel and search functionality for vehicle make and model also exists",
    img: "/screenshots/carhub.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/will-frankland/car_showcase",
  },
  {
    id: 5,
    title: "Gerícht - Fine Dining",
    des: "A single-page website created in React that showcases a fine-dining restaurant complete with a color theme, chef's word, embedded video, a gallery with slider, newsletter subscription, and restaurant details alongside high-quality photos",
    img: "/screenshots/restaurant-home.png",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg",],
    link: "https://fine-dining-app.netlify.app",
  },
  {
    id: 6,
    title: "Shop Admin Dashboard",
    des: "A mock shop admin-dashboard built using React, Tailwind and Syncfusion that displays data such as financials, customers and employees as well as Calendar and Kanban apps and a variety of charts with random data. Also contains theme settings and the ability to turn on dark-mode",
    img: "/screenshots/admin-dashboard.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://syncfucsion-dashboard-site.netlify.app/calendar",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Web Developer",
    company: 'MeaningfulWork Inc - Toronto, ON',
    desc: "I develop scalable web applications using NextJs, TypeScript, NodeJs, and MongoDB. My work includes building APIs, and creating user-friendly UI components following Figma designs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Bartender",
    company: 'The Loose Moose - Toronto, ON',
    desc: "Bartending at a high-volume downtown Toronto bar utilizing excellent verbal communication skills to build rapport with guests and deal with a high-pressure environment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/bartender.svg",
  },
  {
    id: 3,
    title: "Senior Field Service Technician",
    company: "Schedit & Bachmann - Toronto, ON",
    desc: "Field Service Technician performing installations and maintenace on ticketing devices and fare-gates around Toronto public transit systems",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/technician.svg",
  },
  {
    id: 4,
    title: "Technical Service Technician",
    company: "Babcock International - Plymouth, UK",
    desc: "Amended and updated engineering drawings and datum packs relating to nuclear submarines",
    className: "md:col-span-2",
    thumbnail: "/technician.svg",
  },
  {
    id: 5,
    title: "Process Engineer",
    company: "SKF (UK) Ltd - Luton, UK",
    desc: "Managed a variety of installation and process improvement projects with £50,000+ budgets inside a manufacturing facility producing roller bearings",
    className: "md:col-span-2",
    thumbnail: "/technician.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: 'GitHub',
    url: 'https://github.com/will-frankland'
  },
  {
    id: 2,
    img: "/link.svg",
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/will-frankland/'
  },
];

export const techStackItems = [
  {
    name: 'TypeScript',
    logo: '/ts.svg',
    nameImg: ''
  },
  {
    name: 'NextJs',
    logo: '/next.svg',
    nameImg: ''
  },
  {
    name: 'ReactJs',
    logo: '/re.svg'
  },
  {
    name: 'NodeJs',
    logo: '/node.svg',
    nameImg: ''
  },
  {
    name: 'MongoDB',
    logo: '/mongo.svg',
    nameImg: ''
  },
  {
    name: 'PostgreSQL',
    logo: '/postgreSQL.svg'
  },
  {
    name: 'HTML',
    logo: '/html.svg'
  },
  {
    name: 'CSS',
    logo: '/css.svg'
  },
  {
    name: 'GitHub',
    logo: '/github.svg'
  },
];