/* Change this file to get your personal Porfolio */

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yogita's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yogita Beniwal Portfolio",
    type: "website",
    url: "http://yogitabeniwal.com/",
  },
};

//Home Page
const greeting = {
  title: "Yogita Beniwal",
  logo_name: "YogitaBeniwal",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1MuAHCK76AaFL6Li7OlDSayNKOz7koPed/view?usp=sharing",
  portfolio_repository: "https://github.com/",
  githubProfile: "https://github.com/YogitaBeniwal",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/YogitaBeniwal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yogitabeniwal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCzFDnkka0z_ZkVowFsByutg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:yogitabeniwal2004@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/BeniwalYog61813",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skillBars = {
  data: [
    {
      skillName: "C",
      proficiency: "80",
    },
    {
      skillName: "C++",
      proficiency: "70",
    },
    {
      skillName: "Python",
      proficiency: "90",
    },
    {
      skillName: "Java",
      proficiency: "80",
    },
    {
      skillName: "Frontend",
      proficiency: "70",
    },
    {
      skillName: "Frameworks",
      proficiency: "60",
    },
    {
      skillName: "Backend",
      proficiency: "60",
    },
  ],
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / Design", // Example category
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
  ],
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "FullStackImg",
      skills: [
        "⚡ Writing efficient and optimized code using C and C++ for performance-critical applications",
        "⚡ Building object-oriented applications with Java, utilizing design patterns and best practices",
        "⚡ Implementing robust data structures and algorithms to solve complex problems in Python",
        "⚡ Developing interactive and responsive applications with JavaScript for web-based solutions",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cpp",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:c#",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/explore/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/yogitabeniwal201",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/yogitabeniwal201",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@yogitabeniwal2004/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Symbiosis International University, Pune",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "symbi_logo.png",
      alt_name: "SIT Pune",
      duration: "2023 - 2026",
      descriptions: [
        "⚡ I am studying basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Cybersecurity, Android Development, Cloud Computing and Full Stack Development.",
        "⚡ I am currently in my 3rd year of graduation.",
      ],
      website_link: "https://siu.edu.in/",
    },
    {
      title: "Pimpri Chinchwad College Of Engineering",
      subtitle: "Diploma in Computer Science",
      logo_path: "pcp.png",
      alt_name: "Pimpri Chinchwad Polytechnic College",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I had studied many programming languages like C, C++, Java, Sql, Javascript, etc",
        "⚡ I had studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ I had participations in sports, hackathons and gave importance to my soft skills also.",
      ],
      website_link: "https://www.pccoepune.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cybersecurity",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/TLTUJFFT7X3M",
      alt_name: "Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Technical Fundamentals",
      subtitle: "Google",
      logo_path: "tech_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WFOVV4OHZBTD",
      alt_name: "Coursera",
      color_code: "#00000099",
    },
    {
      title: "Git and Github",
      subtitle: "Google",
      logo_path: "git_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/K50VK1CPREGK",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "AI Essentials",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9KNA4BMZAW0N",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Foundations of Data",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/A3Y1KIZVE0TW",
      alt_name: "Cousera",
      color_code: "#D83B0199",
    },
    {
      title: "Web Developer Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-3e0151c0-b60a-4532-a635-c62916bcffa3/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "OS from scratch",
      subtitle: "Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-414bba8a-cc7b-4e99-b4f7-19149d060e48/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Undergraduate Student",
          company: "Symbiosis International University",
          company_url: "https://siu.edu.in/",
          logo_path: "symbi_logo.png",
          duration: "November 2024 - Present",
          location: "Pune, Maharashtra, India",
          description: "Improving my skills set and excelling in academics.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Java Intern",
          company: "Symbiosis International University",
          company_url: "https://siu.edu.in/",
          logo_path: "symbi_logo.png",
          duration: "November 2024 - Present",
          location: "Pune, Maharashtra, India",
          description: "Improving my skills set and excelling in academics.",
          color: "#000000",
        },
        {
          title: "Machine Learning Intern",
          company: "Symbiosis International University",
          company_url: "https://siu.edu.in/",
          logo_path: "symbi_logo.png",
          duration: "November 2024 - Present",
          location: "Pune, Maharashtra, India",
          description: "Improving my skills set and excelling in academics.",
          color: "#000000",
        },
        {
          title: "Upcoming BMC Software Intern",
          company: "BMC Software Private Limited",
          company_url: "https://www.bmc.com/",
          logo_path: "bmc_logo.png",
          duration: "Jan 2024 - July 2024",
          location: "Pune, Maharashtra, India",
          description:
            "BMC Software, Inc. is an American multinational information technology (IT) services and consulting, and enterprise software company.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Symbiosis Institute of Technology",
          company: "SIT",
          company_url: "https://siu.edu.in/",
          logo_path: "symbi_logo.png",
          duration: "2024",
          location: "Pune, Maharashtra",
          description:
            "Volunteering at Symbiosis events like SymbiTech, Prota, etc.",
          color: "#4285F4",
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Upcoming published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Microplastics-Segregation",
      name: "Microplastics-Segregation",
      createdAt: "2024-05-05T00:00:00Z",
      description:
        "Our project detects and classifies microplastics on the basis of type and color and also shows the count of microplastics in a given image. Our project is based in YOLOv8 model framework: pytorch.",
      url: "https://github.com/YogitaBeniwal/Microplastics-Segregation",
    },
    {
      id: "Social-Media-Platform",
      name: "Social-Media-Platform",
      createdAt: "2024-05-2T00:00:00Z",
      description: "Social Media Platform",
      url: "https://github.com/YogitaBeniwal/Social-Media-Platform",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_yogita.png",
    description:
      "I am available on mentioned social media. I can help you with React, Android, Cloud and programming languages",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in my journey as well as some technical knowledge sharing on X.",
    link: "https://x.com/home",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "K Town Society, near Mukai Chowk, Kiwale, Pune, Maharashtra",
    locality: "Kiwale",
    country: "India",
    postalCode: "412101",
    streetAddress: "Mukai Chowk",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/K+Town+by+Tayal+Corp/@18.6654943,73.7267356,17z/data=!4m10!1m2!2m1!1sk+town+kiwale!3m6!1s0x3bc2b1ac94c1e0dd:0x17d1c436160a0d03!8m2!3d18.6654943!4d73.7293105!15sCg1rIHRvd24ga2l3YWxlkgERYXBhcnRtZW50X2NvbXBsZXjgAQA!16s%2Fg%2F11pps6dg9m?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  skillBars,
};
