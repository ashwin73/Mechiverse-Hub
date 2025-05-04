
import { ResourceProps } from "@/components/ResourceCard";
import coreCourseResourcesBySemester from "./coreCourseResourcesBySemester";

// Gather all the Core Course resources from all semesters
const allCoreCourseResources: ResourceProps[] = Object.values(coreCourseResourcesBySemester).flat();

// Split out allResources so you can import it elsewhere
export const allResources: ResourceProps[] = [
  // Dynamically include all core course subjects from all semesters
  ...allCoreCourseResources,

  // Software Tools
  {
        title: "SolidWorks",
        subjectCode: "CAD",
        description:
          "3D CAD software for mechanical design, simulation, and product data management.",
        link: "https://docs.google.com/document/d/1kfF-8CsyFZm-7-VzZpqSRP6x6mCj9INV/edit?usp=sharing&rtpof=true&sd=true",
        tags: ["CAD", "Design", "3D Modeling"],
        category: "Software",
      },
      {
        title: "MATLAB",
        subjectCode: "COMP",
        description:
          "Programming environment for numerical computation, visualization, and algorithm development.",
        link: "https://docs.google.com/document/d/19OyADmSUmpF_m5GccNSaZk-gyEIoEbt4/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["Programming", "Analysis", "Simulation"],
        category: "Software",
      },
      {
        title: "ANSYS",
        subjectCode: "SIM",
        description:
          "Engineering simulation software for finite element analysis, structural analysis, and fluid dynamics.",
        link: "https://docs.google.com/document/d/1QBgOhMY4neHaKlTgsbjxprLAkTW7Fzq2/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["FEA", "Simulation", "Analysis"],
        category: "Software",
      },
      {
        title: "AutoCAD",
        subjectCode: "CAD",
        description:
          "Computer-aided design software for precise 2D and 3D drafting and modeling.",
        link: "https://docs.google.com/document/d/1DuFTYWrX0mNXF4zBb0PhuvvWYl2myDKe/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["CAD", "Drafting", "2D/3D"],
        category: "Software",
      },
      {
        title: "Fusion 360",
        subjectCode: "CAD",
        description:
          "Cloud-based 3D CAD/CAM tool for product design and manufacturing.",
        link: "https://docs.google.com/document/d/1gCOJltT6flT5mx4yRb7LsQICDSKoFFDa/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["CAD", "CAM", "Cloud"],
        category: "Software",
      },
  
  // Templates (previously Academic Resources)
  {
        title: "Research Paper Template",
        subjectCode: "RND",
        description:
          "Template for writing research papers according standards.",
        link: "https://docs.google.com/document/d/1Slu8gNAG-4h7YFa6CAPC4rw5dWMy0etP/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["Research", "Template"],
        category: "Templates",
      },
      {
        title: "Resume Template",
        subjectCode: "CV",
        description:
          "Basic format for industry.",
        link: "https://drive.google.com/drive/folders/1FTyi4iwMbxgyyP8QP6vq6fATNvHrv3vE?usp=sharing",
        tags: ["Resume", "Latex", "Portfolio"],
        category: "Templates",
      },
      {
        title: "Project Seminar Template",
        subjectCode: "Seminar",
        description:
          "Guide for seminar research.",
        link: "https://docs.google.com/document/d/1wgBuypCpSWeVJPkt0MykvmQ6tAIlGofg/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["Present", "Writing", "Seminar"],
        category: "Templates",
      },
  // Extra Supplements (previously Learning Resources)
  {     title: "Reference Books",
        subjectCode: "Books",
        description:
          "Comprehensive textbook covering engineering fundamentals.",
        link: "https://docs.google.com/document/d/1eVOIlAkZp1gxmvvr3ZehXVHjcPPo_X5j/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["Textbook", "Learn", "Score"],
        category: "Extra Supplements",
      },
      {
        title: "Video Lecture Series",
        subjectCode: "Coming Soon",
        description:
          "Collection of video lectures covering various mechanical engineering topics.",
        link: "https://docs.google.com/document/d/1m5P70MQo_Q02KxpngUkH9XQQmZLtQzLW/edit?usp=sharing&ouid=116762843361525783842&rtpof=true&sd=true",
        tags: ["Videos", "Playlist", "YT"],
        category: "Extra Supplements",
      },
  
  // Important Websites
  {
        title: "Institute Website",
        subjectCode: "INSTI",
        description: "Our very own Institute Website",
        link: "https://www.iitbbs.ac.in/",
        tags: ["IITBBS", "Web", "Announcements"],
        category: "Websites",
      },
      {
        title: "Student Portal",
        subjectCode: "EIMS",
        description: "Access your academic records, attendance, and more.",
        link: "https://eims.iitbbs.ac.in/",
        tags: ["Portal", "Academic", "Records"],
        category: "Websites",
      },
];

