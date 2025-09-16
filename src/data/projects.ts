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
    teamLead: "P.Nikhitha",
    title: "Blood Donor Finder",
    description: "A platform to connect blood donors with recipients in emergency situations. Features donor registration, blood type matching, and location-based search.",
    category: "Healthcare",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "completed",
    liveUrl: "",
    githubUrl: "https://github.com/Nikhitha21Kalyan/BLOOD-DONOR-FINDER",
    image: "/src/assets/blood-donor-finder.jpg"
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
    image: "/src/assets/diet-diary.jpg"
  },
  {
    id: 3,
    teamNumber: 3,
    teamLead: "A.Gayathri",
    title: "Pet Care Center",
    description: "Comprehensive pet care management system for veterinary clinics and pet owners to schedule appointments and track pet health.",
    category: "Pet Care",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    liveUrl: "https://pet-care-center-1.onrender.com",
    githubUrl: "https://github.com/mrudulakarra/pet-care-center.git",
    image: "/src/assets/pet-care-center.jpg"
  },
  {
    id: 4,
    teamNumber: 4,
    teamLead: "N Mounika",
    title: "Student Diary",
    description: "Virtual diary application for students to manage their academic schedule, assignments, and track their progress.",
    category: "Education",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    status: "completed",
    liveUrl: "https://studentdiary.netlify.app/",
    githubUrl: "https://github.com/mounikaneelam03-arch/VIRTUAL-STUDENT-DIARY",
    image: "/src/assets/student-diary.jpg"
  },
  {
    id: 5,
    teamNumber: 5,
    teamLead: "P Yuva Sreeja",
    title: "Healthy Tips",
    description: "Health and wellness platform providing daily health tips, exercise routines, and wellness advice for a healthy lifestyle.",
    category: "Health & Wellness",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    status: "completed",
    liveUrl: "https://healthy-tips1.netlify.app",
    githubUrl: "https://github.com/polavarupusreeja/HEALTHY_TIPS",
    image: "/src/assets/healthy-tips.jpg"
  },
  {
    id: 6,
    teamNumber: 6,
    teamLead: "Shyamala",
    title: "Recipe Card",
    description: "Digital recipe collection platform where users can discover, save, and share their favorite recipes with detailed instructions.",
    category: "Food & Cooking",
    technologies: ["React", "CSS", "JavaScript", "API Integration"],
    status: "completed",
    liveUrl: "https://food-ten-henna.vercel.app/",
    githubUrl: "",
    image: "/src/assets/recipe-card.jpg"
  },
  {
    id: 7,
    teamNumber: 7,
    teamLead: "P.Ramya",
    title: "SmartBot",
    description: "AI-powered chatbot assistant designed to help users with various queries and provide intelligent responses.",
    category: "AI & Machine Learning",
    technologies: ["React", "Node.js", "AI/ML", "Natural Language Processing"],
    status: "completed",
    liveUrl: "https://chatbot-ai-five-pi.vercel.app/",
    githubUrl: "https://github.com/ramya792/Smart-Bot",
    image: "/src/assets/smartbot-ai.jpg"
  },
  {
    id: 8,
    teamNumber: 8,
    teamLead: "K. Kavya",
    title: "EduTech",
    description: "Educational technology platform offering online courses, interactive learning modules, and student progress tracking.",
    category: "Education Technology",
    technologies: ["React", "CSS", "JavaScript", "Bootstrap"],
    status: "completed",
    liveUrl: "https://peaceful-sawine-770356.netlify.app",
    githubUrl: "https://github.com/Kavyakandru/EDU-TECH-WEBSITE",
    image: "/src/assets/edutech-platform.jpg"
  },
  {
    id: 9,
    teamNumber: 9,
    teamLead: "K.Vasavi",
    title: "Defence Alert",
    description: "Security alert system designed for defense organizations to monitor and respond to security threats in real-time.",
    category: "Security & Defense",
    technologies: ["React", "Node.js", "Real-time Notifications", "MongoDB"],
    status: "completed",
    liveUrl: "https://defencealert.netlify.app/",
    githubUrl: "https://github.com/Dhana-200607/DEFENCE-ALERT",
    image: "/src/assets/defence-alert.jpg"
  },
  {
    id: 10,
    teamNumber: 10,
    teamLead: "B.Kundhana Gowri",
    title: "Women's Hostel Management",
    description: "Comprehensive hostel management system for women's hostels including room allocation, fee management, and student services.",
    category: "Accommodation",
    technologies: ["React", "Node.js", "Express", "Database Management"],
    status: "completed",
    liveUrl: "https://hostellife.netlify.app",
    githubUrl: "https://github.com/pravalli2005/HOSTEL-LIFE",
    image: "/src/assets/hostel-management.jpg"
  },
  {
    id: 11,
    teamNumber: 11,
    teamLead: "Ch.Adhilakshmi",
    title: "Code Quiz Programming",
    description: "Interactive programming quiz platform to test coding skills with multiple programming languages and difficulty levels.",
    category: "Education",
    technologies: ["React", "JavaScript", "CSS", "Quiz Engine"],
    status: "completed",
    liveUrl: "https://68b84f1080b29f6f732e6397--dreamy-klepon-cd44e9.netlify.app/",
    githubUrl: "https://github.com/hemakudali127-eng/code-Quiz-pro.git",
    image: "/src/assets/code-quiz.jpg"
  },
  {
    id: 12,
    teamNumber: 12,
    teamLead: "O.Lavanya",
    title: "Hotel Lux",
    description: "Luxury hotel booking and management system with room reservations, amenity booking, and customer service features.",
    category: "Hospitality",
    technologies: ["React", "Node.js", "Booking System", "Payment Integration"],
    status: "completed",
    liveUrl: "https://hotelluxx.netlify.app",
    githubUrl: "https://github.com/lavanya952004-lgtm/hotel_lux-1.git",
    image: "/src/assets/hotel-lux.jpg"
  },
  {
    id: 13,
    teamNumber: 13,
    teamLead: "V.Sowjanya",
    title: "Book Collection",
    description: "Digital library system for managing book collections, lending services, and reader recommendations.",
    category: "Library Management",
    technologies: ["React", "Database", "Search Engine", "User Management"],
    status: "completed",
    liveUrl: "https://bookcollections37.netlify.app",
    githubUrl: "https://github.com/vamisettisowjanya/BOOK-COLLECTION",
    image: "/src/assets/book-collection.jpg"
  },
  {
    id: 14,
    teamNumber: 14,
    teamLead: "V.Sai Mounika",
    title: "Sports Hub",
    description: "Sports management platform for organizing tournaments, tracking player statistics, and managing sports events.",
    category: "Sports Management",
    technologies: ["React", "Node.js", "Sports Analytics", "Event Management"],
    status: "completed",
    liveUrl: "https://sports-hub-2.onrender.com/",
    githubUrl: "https://github.com/anjiliranibevara123/sports_hub",
    image: "/src/assets/sports-hub.jpg"
  },
  {
    id: 15,
    teamNumber: 15,
    teamLead: "M.Madhuri",
    title: "Attendance Management System",
    description: "Digital attendance tracking system for educational institutions with automated reporting and analytics.",
    category: "Education Management",
    technologies: ["React", "Database", "Analytics", "Reporting System"],
    status: "completed",
    liveUrl: "https://spiffy-cucurucho-16ce61.netlify.app/",
    githubUrl: "https://github.com/meesalamadhuri93-cpu/edutrack.git",
    image: "/src/assets/attendance-system.jpg"
  },
  {
    id: 16,
    teamNumber: 16,
    teamLead: "K Sasi Priya",
    title: "Skill Match",
    description: "Professional networking platform that matches job seekers with employers based on skills and qualifications.",
    category: "Job Portal",
    technologies: ["React", "Matching Algorithm", "User Profiles", "Job Search"],
    status: "completed",
    liveUrl: "https://skillmatch-nu.vercel.app",
    githubUrl: "https://github.com/HASINIAASHRITHA/skillmatch",
    image: "/src/assets/skill-match.jpg"
  },
  {
    id: 17,
    teamNumber: 17,
    teamLead: "S.Aasritha",
    title: "Income & Expense Manager",
    description: "Personal finance management application for tracking income, expenses, and generating financial reports.",
    category: "Finance Management",
    technologies: ["React", "Chart.js", "Financial Analytics", "Data Visualization"],
    status: "completed",
    liveUrl: "https://ledger-harmony-49.vercel.app/",
    githubUrl: "https://github.com/samayamanthulaaasritha/inc-exp.git",
    image: "/src/assets/income-expense.jpg"
  },
  {
    id: 18,
    teamNumber: 18,
    teamLead: "M. Yasaswini",
    title: "Real Estate Platform",
    description: "Comprehensive real estate platform for property listings, virtual tours, and connecting buyers with sellers.",
    category: "Real Estate",
    technologies: ["React", "Property Search", "Virtual Tours", "Contact System"],
    status: "completed",
    liveUrl: "https://dreamhouse-one.vercel.app/",
    githubUrl: "https://github.com/Hemavathi1120/home-style-crafted.git",
    image: "/src/assets/real-estate.jpg"
  },
  {
    id: 19,
    teamNumber: 19,
    teamLead: "K Hema Supriya",
    title: "Health Organization Hub",
    description: "Healthcare organization management system for coordinating medical services and patient care across multiple facilities.",
    category: "Healthcare Management",
    technologies: ["React", "Healthcare Systems", "Patient Management", "Multi-facility"],
    status: "completed",
    liveUrl: "https://healthorganization.vercel.app",
    githubUrl: "https://github.com/VijayaGajula/healthorganization.git",
    image: "/src/assets/health-organization.jpg"
  },
  {
    id: 20,
    teamNumber: 20,
    teamLead: "Gnana Vyshanavi",
    title: "Random Country Explorer",
    description: "Interactive geographical application for exploring random countries with detailed information and cultural insights.",
    category: "Geography & Travel",
    technologies: ["React", "Country API", "Interactive Maps", "Cultural Data"],
    status: "completed",
    liveUrl: "https://randomcountryexplorer.netlify.app",
    githubUrl: "https://github.com/gnanavaishnavi77/random-country-explorer",
    image: "/src/assets/country-explorer.jpg"
  }
];

export const getProjectCategories = (): string[] => {
  const categories = [...new Set(projects.map(project => project.category))];
  return categories.sort();
};