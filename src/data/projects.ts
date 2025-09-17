export interface Project {
  id: number;
  teamNumber: number;
  teamLead: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: "completed" | "in-progress" | "upcoming";
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export const projects: Project[] = [
 {
    id: 1,
    teamNumber: 1,
    teamLead: "Ch.Adhilakshmi",
    title: "Code Quiz Programming",
    description: "Interactive programming quiz platform to test coding skills with multiple programming languages and difficulty levels.",
    category: "Education",
    technologies: ["React", "JavaScript", "CSS", "Quiz Engine"],
    status: "completed",
    liveUrl: "https://68b84f1080b29f6f732e6397--dreamy-klepon-cd44e9.netlify.app/",
    githubUrl: "https://github.com/hemakudali127-eng/code-Quiz-pro.git",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFnAF1BSDaxeE2NFk0KbJ0rgF--NmT7NHQg&s", // Programming quiz interface
  },
  {
    id: 2,
    teamNumber: 2,
    teamLead: "J.Akshaya",
    title: "Diet Diary",
    description: "Personal nutrition tracking application that helps users monitor their daily food intake and maintain healthy eating habits.",
    category: "Health & Fitness",
    technologies: ["React", "CSS", "JavaScript", "Local Storage"],
    status: "completed",
    liveUrl: "https://dietdiary19.netlify.app/",
    githubUrl: "https://github.com/AkshayaJoga7/Diet-Diary-Repo.git",
    image: "https://www.shutterstock.com/image-photo/female-hand-write-notebook-on-260nw-1401914159.jpg", // Food tracking/nutrition app UI
  },
  {
    id: 3,
    teamNumber: 3,
    teamLead: "M. Yasaswini",
    title: "Real Estate Platform",
    description: "Comprehensive real estate platform for property listings, virtual tours, and connecting buyers with sellers.",
    category: "Real Estate",
    technologies: ["React", "Property Search", "Virtual Tours", "Contact System"],
    status: "completed",
    liveUrl: "https://dreamhouse-one.vercel.app/",
    githubUrl: "https://github.com/Hemavathi1120/home-style-crafted.git",
    image: "https://s3-ap-southeast-1.amazonaws.com/storage.virtualspirit.me/post/cover/271/5_Best_Real_Estate_Digital_Platforms_in_Malaysia_2023.jpg" // Property/real estate image
  },
  {
    id: 4,
    teamNumber: 4,
    teamLead: "P.Ramya",
    title: "SmartBot",
    description: "AI-powered chatbot assistant designed to help users with various queries and provide intelligent responses.",
    category: "AI & Machine Learning",
    technologies: ["React", "Node.js", "AI/ML", "Natural Language Processing"],
    status: "completed",
    liveUrl: "https://chatbot-ai-five-pi.vercel.app/",
    githubUrl: "https://github.com/ramya792/Smart-Bot",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY9ek9MSFdF7rBvnzSwqmvtkXNCGuJgaCEQ&s", // AI chatbot interface
  },
  {
    id: 5,
    teamNumber: 5,
    teamLead: "S.Aasritha",
    title: "Income & Expense Manager",
    description: "Personal finance management application for tracking income, expenses, and generating financial reports.",
    category: "Finance Management",
    technologies: ["React", "Chart.js", "Financial Analytics", "Data Visualization"],
    status: "completed",
    liveUrl: "https://ledger-harmony-49.vercel.app/",
    githubUrl: "https://github.com/samayamanthulaaasritha/inc-exp.git",
    image: "https://akaunting.com/blog/wp-content/uploads/2023/06/Income-and-expenses-e1687258782294.jpeg" // Finance/banking image dashboard
  },
  {
    id: 6,
    teamNumber: 6,
    teamLead: "K. Kavya",
    title: "EduTech",
    description: "Educational technology platform offering online courses, interactive learning modules, and student progress tracking.",
    category: "Education Technology",
    technologies: ["React", "CSS", "JavaScript", "Bootstrap"],
    status: "completed",
    liveUrl: "https://peaceful-sawine-770356.netlify.app",
    githubUrl: "https://github.com/Kavyakandru/EDU-TECH-WEBSITE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzU7t42drFspdW4I9PXQhXz4C-iZsRbH_soA&s", // E-learning platform
  },
  {
    id: 7,
    teamNumber: 7,
    teamLead: "K.Vasavi",
    title: "Defence Alert",
    description: "Security alert system designed for defense organizations to monitor and respond to security threats in real-time.",
    category: "Security & Defense",
    technologies: ["React", "Node.js", "Real-time Notifications", "MongoDB"],
    status: "completed",
    liveUrl: "https://defencealert.netlify.app/",
    githubUrl: "https://github.com/Dhana-200607/DEFENCE-ALERT",
    image: "data:image/jpeg;base64,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", // Security monitoring system
  },
   {
    id: 8,
    teamNumber: 8,
    teamLead: "K Sasi Priya",
    title: "Skill Match",
    description: "Professional networking platform that matches job seekers with employers based on skills and qualifications.",
    category: "Job Portal",
    technologies: ["React", "Matching Algorithm", "User Profiles", "Job Search"],
    status: "completed",
    liveUrl: "https://skillmatch-nu.vercel.app",
    githubUrl: "https://github.com/HASINIAASHRITHA/skillmatch",
    image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-55764,resizemode-75,msid-60460970/jobs/skill-set-match-key-factor-for-employers-in-temporary-hiring-survey.jpg" // Professional networking image
  },
 
  {
    id: 9,
    teamNumber: 9,
    teamLead: "O.Lavanya",
    title: "Hotel Lux",
    description: "Luxury hotel booking and management system with room reservations, amenity booking, and customer service features.",
    category: "Hospitality",
    technologies: ["React", "Node.js", "Booking System", "Payment Integration"],
    status: "completed",
    liveUrl: "https://hotelluxx.netlify.app",
    githubUrl: "https://github.com/lavanya952004-lgtm/hotel_lux-1.git",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0CvLiWmRBSRycuyBJSNK6VmQSE1YnegsklA&s", // Hotel booking system
  },
  {
    id: 10,
    teamNumber: 10,
    teamLead: "V.Sowjanya",
    title: "Book Collection",
    description: "Digital library system for managing book collections, lending services, and reader recommendations.",
    category: "Library Management",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: "https://bookcollections37.netlify.app",
    githubUrl: "https://github.com/vamisettisowjanya/BOOK-COLLECTION",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQkxN-TFkw-qgA1RKnj0Tmp4i7tXAbuEl3A&s", // Digital library catalog
  },
  {
    id: 11,
    teamNumber: 11,
    teamLead: "K Hema Supriya",
    title: "Health Organization Hub",
    description: "Healthcare organization management system for coordinating medical services and patient care across multiple facilities.",
    category: "Healthcare Management",
    technologies: ["React", "Healthcare Systems", "Patient Management", "Multi-facility"],
    status: "completed",
    liveUrl: "https://healthorganization.vercel.app",
    githubUrl: "https://github.com/VijayaGajula/healthorganization.git",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41bPjPKzhSqjFYZTDGQdf7H4p9CBD8xwYJw&s" // Healthcare organization image
  },
  
  {
    id: 12,
    teamNumber: 12,
    teamLead: "M.Madhuri",
    title: "Attendance Management System",
    description: "Digital attendance tracking system for educational institutions with automated reporting and analytics.",
    category: "Education Management",
    technologies: ["React", "Database", "Analytics", "Reporting System"],
    status: "completed",
    liveUrl: "https://spiffy-cucurucho-16ce61.netlify.app/",
    githubUrl: "https://github.com/meesalamadhuri93-cpu/edutrack.git",
    image: "https://hrsoftware.in/wp-content/uploads/2023/04/Choosing-The-Right-Attendance-Management-System.jpg" // Education/attendance imagem
  },
   {
    id: 13,
    teamNumber: 13,
    teamLead: "B.Kundhana Gowri",
    title: "Women's Hostel Management",
    description: "Comprehensive hostel management system for women's hostels including room allocation, fee management, and student services.",
    category: "Accommodation",
    technologies: ["React", "Node.js", "Express", "Database Management"],
    status: "completed",
    liveUrl: "https://hostellife.netlify.app",
    githubUrl: "https://github.com/pravalli2005/HOSTEL-LIFE",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_IxM8-MmGhDvSmweZKOvt_Z6AYAAGBXVww&s", // Hostel management dashboard
  },  
  {
    id: 14,
    teamNumber: 14,
    teamLead: "N Mounika",
    title: "Student Diary",
    description: "Virtual diary application for students to manage their academic schedule, assignments, and track their progress.",
    category: "Education",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    status: "completed",
    liveUrl: "https://studentdiary.netlify.app/",
    githubUrl: "https://github.com/mounikaneelam03-arch/VIRTUAL-STUDENT-DIARY",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/1468b9185168221.Y3JvcCwxOTAwLDE0ODYsMCw0.jpg", // Student planner/calendar view
  },
  {
    id: 15,
    teamNumber: 15,
    teamLead: "A.Gayathri",
    title: "Pet Care Center",
    description: "Comprehensive pet care management system for veterinary clinics and pet owners to schedule appointments and track pet health.",
    category: "Pet Care",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    liveUrl: "https://pet-care-center-1.onrender.com",
    githubUrl: "https://github.com/mrudulakarra/pet-care-center.git",
    image: "https://vetic-img.s3.ap-south-1.amazonaws.com/website/Website-Astro/grooming_page/why_choose_vetic/international+pdts.webp", // Veterinary/pet care interface
  },
   {
    id: 16,
    teamNumber: 16,
    teamLead: "Shyamala",
    title: "Recipe Card",
    description: "Digital recipe collection platform where users can discover, save, and share their favorite recipes with detailed instructions.",
    category: "Food & Cooking",
    technologies: ["React", "CSS", "JavaScript", "API Integration"],
    status: "completed",
    liveUrl: "https://food-ten-henna.vercel.app/",
    githubUrl: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2yu8B3CgavkNQ4M288StQubb2g7qStyqhg&s", // Food/recipe collection view
  },
  {
    id: 17,
    teamNumber: 17,
    teamLead: "P Yuva Sreeja",
    title: "Healthy Tips",
    description: "Health and wellness platform providing daily health tips, exercise routines, and wellness advice for a healthy lifestyle.",
    category: "Health & Wellness",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    status: "completed",
    liveUrl: "https://healthy-tips.onrender.com",
    githubUrl: "https://github.com/polavarupusreeja/HEALTHY_TIPS",
    image: "https://www.momjunction.com/wp-content/uploads/2020/11/17-Simple-And-Useful-Health-Tips-For-Children-To-Follow-Banner.jpg.webp", // Wellness/exercise content
  },
  {
    id: 18,
    teamNumber: 18,
    teamLead: "V.Sai Mounika",
    title: "Sports Hub",
    description: "Sports management platform for organizing tournaments, tracking player statistics, and managing sports events.",
    category: "Sports Management",
    technologies: ["React", "Node.js", "Sports Analytics", "Event Management"],
    status: "completed",
    liveUrl: "https://sports-hub-2.onrender.com/",
    githubUrl: "https://github.com/anjiliranibevara123/sports_hub",
    image: "https://img.freepik.com/premium-photo/international-sports-hub-where-athletes-fans_976492-120390.jpg", // Sports event management
  },
  {
    id: 19,
    teamNumber: 19,
    teamLead: "Gnana Vyshanavi",
    title: "Random Country Explorer",
    description: "Interactive geographical application for exploring random countries with detailed information and cultural insights.",
    category: "Geography & Travel",
    technologies: ["React", "Country API", "Interactive Maps", "Cultural Data"],
    status: "completed",
    liveUrl: "https://randomcountryexplorer.netlify.app",
    githubUrl: "https://github.com/gnanavaishnavi77/random-country-explorer",
    image: "https://randomcountrygenerator.com/img/social/pick_random_country_fb.jpg" // Travel/geography imagee
  },
  {
    id: 20,
    teamNumber: 20,
    teamLead: "K.Hima sri",
    title: "KietW library management system",
    description: "Comprehensive library management system designed specifically for KIETW students and faculty, featuring book tracking, digital catalogs, and automated lending workflows.",
    category: "Library Management",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: "https://kiewlibrary.onrender.com/contact",
    githubUrl: "https://github.com/KanumuriHimasri1709/KIETW-LIBRARY",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/412012786/UZ/RT/CT/37169537/library-management-system-250x250.png", // Digital library catalog
  },
   {
    id: 21,
    teamNumber: 21,
    teamLead: "B.Reshma",
    title: "Internship finder for Students",
    description: "Platform connecting students with internship opportunities, featuring company listings, application tracking, and skill matching capabilities.",
    category: "Job Portal",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: " https://internshipfinderforstudents.onrender.com ",
    githubUrl: " https://github.com/reshmabandela7268/Internship-for-students",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210730204741/How-to-Find-an-Internship-as-a-College-Student.png", // Digital library catalog
  },
  {
    id: 22,
    teamNumber: 22,
    teamLead: "G.Haritha",
    title: "Student marks calculation",
    description: "Academic performance tracking system that helps calculate and analyze student marks, generate reports, and track progress over time.",
    category: "Education Management",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: "  https://studentsmarkscalculator.onrender.com/login ",
    githubUrl: " https://github.com/ReddiNagamani/students-marks-calculator",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgeM0ByltsjwepLkn1EerF5OicD6mqpKbUQ&s", // Digital library catalog
  },
  {
    id: 23,
    teamNumber: 23,
    teamLead: ":N.Bala prasanna",
    title: "Dream Events",
    description: "Event planning and management platform for organizing celebrations, corporate events, and social gatherings with comprehensive event coordination features.",
    category: "Event Management",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: "   https://dreamevents.onrender.com  ",
    githubUrl: " https://github.com/hasini3107/Dream-Events.git",
    image: "https://img1.wsimg.com/isteam/ip/20a2f0cc-9981-4300-9a96-cbc61b2e6875/995FCC40-904B-4849-826A-8496388EA316.png", // Digital library catalog
  },
  {
    id: 24,
    teamNumber: 24,
    teamLead: ":G.Devika",
    title: "Medicine smart reminder",
    description: "Healthcare application that helps users track their medication schedule, set reminders, and maintain their medical history.",
    category: "Healthcare",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: "  https://smartmedicine.onrender.com  ",
    githubUrl: "https://github.com/rekapallidrakshayanidivyasri/smart-medicine",
    image: "https://www.shutterstock.com/image-vector/3d-realistic-smartphone-hand-holds-260nw-2343568305.jpg", // Digital library catalog
  },
  {
    id: 25,
    teamNumber: 25,
    teamLead: ":Y.Roopa Sri",
    title: "Fitness tracking analyzer",
    description: "Personal fitness monitoring system that tracks workouts, analyzes performance metrics, and provides personalized health insights.",
    category: "Health & Fitness",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: " https://fitness-tracking-analyzer.netlify.app/  ",
    githubUrl: "https://github.com/Akshitha200728/fitness-tracking-analyizer1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxBSPvjAx2OCsjpI011BSHl1lh-q0L1Nxqg&s", // Digital library catalog
  },
   {
    id: 26,
    teamNumber: 26,
    teamLead: ": R.Sindhu Sri",
    title: "Feedback review",
    description: "Customer feedback management system that collects, analyzes, and generates insights from user reviews and ratings.",
    category: "Business Management",
    technologies: ["React", "Database", "Search Engine", "User Management","username:student","password:1234"],
    status: "completed",
    liveUrl: " https://sindhufeedback.netlify.app/",
    githubUrl: "https://github.com/saikeerthi1510/feedback-review-.git ",
    image: "https://enventyspartners.com/wp-content/uploads/2022/02/user-reviews-online-customer-feedback-review-vector-28490158.jpeg", // Digital library catalog
  },
  {
    id: 27,
    teamNumber: 27,
    teamLead: ": P.Nikhitha",
    title: "Blood donor finder",
    description: "Healthcare platform that connects blood donors with recipients, featuring urgent request management and donation tracking.",
    category: "Healthcare",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: " https://blooddonar11.netlify.app/ ",
    githubUrl: "https://github.com/Nikhitha21Kalyan/BLOOD-DONOR-FINDER ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbtp9E5fqGHt5_7S3C_lfPyha6jolnOlXWQ&s", // Digital library catalog
  },
  
  

];

export const getProjectCategories = (): string[] => {
  const categories = [...new Set(projects.map(project => project.category))];
  return categories.sort();
};