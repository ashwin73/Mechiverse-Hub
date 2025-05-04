import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ResourceCard, { ResourceProps } from "@/components/ResourceCard";
import { Book, BookOpen, Boxes, Building2, GraduationCap, Globe, Terminal } from "lucide-react";
import SemesterFilterBar from "@/components/SemesterFilterBar";
import { useState } from "react";
import coursesResourcesBySemester from "@/data/coursesResourcesBySemester";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [semesterFilter, setSemesterFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryInfo: {
    [key: string]: {
      title: string;
      description: string;
      icon: React.ReactNode;
    };
  } = {
    "courses": {
      title: "Courses",
      description:
        "Welcome to your one-stop pit stop for all things Mecha and beyond",
      icon: <Book className="h-6 w-6" />,
    },
    "software-tools": {
      title: "Software Tools",
      description:
        "Essential applications and tools used in mechanical engineering design and analysis",
      icon: <Terminal className="h-6 w-6" />,
    },
    "templates": {
      title: "Templates",
      description:
        "Templates, guides, and resources to support your academic success",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    "extra-supplements": {
      title: "Extra Supplements",
      description:
        "Crack concepts, not just exams",
      icon: <BookOpen className="h-6 w-6" />,
    },
    "internship-opportunities": {
      title: "Internship Opportunities",
      description:
        "Current internship openings and career opportunities for Mechies",
      icon: <Building2 className="h-6 w-6" />,
    },
    "about-sms": {
      title: "About SMS",
      description: "Yes, we have departments. Yes, they have stories - There's more here than you think",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    "important-websites": {
      title: "Important Websites",
      description:
        "Because finding that one link was harder than the exams! Welcome Freshers",
      icon: <Globe className="h-6 w-6" />,
    },
  };

  const resourcesByCategory: { [key: string]: ResourceProps[] } = {
    "courses": Object.values(coursesResourcesBySemester).flat(),
    "software-tools": [
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
    ],
    "templates": [
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
    ],
    "extra-supplements": [
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
        link: "https://example.com/video-lectures",
        tags: ["Videos", "Playlist", "YT"],
        category: "Extra Supplements",
      },
    ],
    "internship-opportunities": [
      {
        title: "Foreign Internship",
        subjectCode: "Coming Soon",
        description:
          "List of foreign internship opportunities and applications.",
        link: "https://example.com/internships",
        tags: ["Internship", "Career", "Foreign"],
        category: "Internship",
      },
      {
        title: "Industry Partners",
        subjectCode: "Coming Soon",
        description: "List of companies offering internships to our students.",
        link: "https://example.com/partners",
        tags: ["Industry", "Partners", "Opportunities"],
        category: "Internship",
      },
      {
        title: "Research Internship in India",
        subjectCode: "Coming Soon",
        description: "List of Colleges offering internships to our students.",
        link: "https://example.com/partners",
        tags: ["Colleges", "Career", "Indian"],
        category: "Internship",
      },
    ],
    "about-sms": [
      {
        title: "Department Overview",
        subjectCode: "SMS",
        description: "Overview of the Mechanical Engineering department.",
        link: "https://drive.google.com/drive/folders/1jWKkUjvPYgF-vzX2k6TII-I1z1eV5hbl?usp=drive_link",
        tags: ["Subjects", "Curriculumn", "Information"],
        category: "About SMS",
      },
      {
        title: "Faculty Directory",
        subjectCode: "SMS",
        description: "Keep in Touch",
        link: "https://drive.google.com/drive/folders/1bvQx5GlOg1_1lZ1Fi1XBAxEtYsnDG5Uo?usp=drive_link",
        tags: ["Faculty", "Directory", "Contacts"],
        category: "About SMS",
      },
    ],
    "important-websites": [
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
      {
        title: "Library Catalog",
        subjectCode: "LIB",
        description: "Search and access the college library resources.",
        link: "http://koha.iitbbs.ac.in/",
        tags: ["Library", "Resources", "Books"],
        category: "Websites",
      },
      {
        title: "Alumni Reconnect",
        subjectCode: "AA",
        description: "Reconnecting with long lost roots",
        link: "https://alumni.iitbbs.ac.in/",
        tags: ["Alumni", "Association", "Connections"],
        category: "Websites",
      },
    ],
  };

  const currentCategory = categoryInfo[categorySlug || ""] || {
    title: "Category Not Found",
    description: "This category doesn't exist",
    icon: <Boxes className="h-6 w-6" />,
  };

  let resources = resourcesByCategory[categorySlug || ""] || [];

  if (categorySlug === "courses") {
    resources = resources.filter((res) => {
      const matchesSemester =
        semesterFilter === "all"
          ? true
          : res.tags.some(
              (tag) =>
                tag.toLowerCase() === `sem ${semesterFilter}`.toLowerCase()
            );
      const matchesSearch =
        searchQuery.trim() === "" ||
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.subjectCode.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSemester && matchesSearch;
    });
  }

  return (
    <Layout>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center gap-4 transition-transform hover:translate-x-2 duration-300">
          <div className="p-3 bg-primary/10 rounded-lg text-primary animate-scale-in">
            {currentCategory.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{currentCategory.title}</h1>
            <p className="text-muted-foreground">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {categorySlug === "courses" && (
          <div className="animate-slide-in-right">
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
              className="flex flex-col gap-2 mb-4 md:flex-row md:items-center transition-all duration-300"
            >
              <input
                type="search"
                className="border rounded p-2 flex-1 transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Search by subject, code, or description..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </form>
            <SemesterFilterBar
              semesterFilter={semesterFilter}
              setSemesterFilter={setSemesterFilter}
            />
          </div>
        )}

        {resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                className="staggered-item hover-lift"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ResourceCard {...resource} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <h3 className="text-lg font-medium">No resources found</h3>
            <p className="text-muted-foreground">
              {categorySlug
                ? "There are no resources available in this category yet."
                : "The requested category doesn't exist."}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
