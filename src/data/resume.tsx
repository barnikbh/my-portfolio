import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Barnik Bhattacharyya",
  initials: "BB",
  url: "https://barnikbh.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "I build AI products at the enterprise frontier. At play, I'm a scuba diver.",
  summary:
    "I grew up watching my dad design computers — it lit a lifelong obsession with understanding and building software. That curiosity took me through engineering, hackathons, and eventually into product management at some of the most exciting early-stage B2B AI startups in India and the Middle East.\n\nOver the last 6 years, I've worked at the frontier of enterprise AI — scaling [Voice Contact Center AI](https://fundamento.ai) from zero to $1.5M ARR and 5 million monthly conversations, leading platform strategy at [LiaPlus AI](https://liaplus.com), and now building autonomous workspace intelligence at [Omnissa](https://omnissa.com). I sit at the intersection of deep technical understanding and product strategy — I can spec, prototype, and ship, not just manage.",
  avatarUrl: "/me_2026.jpeg",
  skills: [
    "Python",
    "Javascript",
    "Github",
    "API",
    "System Design",
    "Vector Database",
    "Semantic Search",
    "LangChain",
    "LLM",
    "VoIP",
    "WebRTC",
    "Leadership",
    "Communication",
    "Design Thinking",
    "Problem-Solving",
    "Data Analytics",
    "Prompt Engineering",
    "Research",
    "Rapid Prototyping",
    "Product Roadmap",
    "Scrum",
    "Agile Development",
    "SDLC",
    "Jira",
    "Figma",
  ],
  skillGroups: [
    {
      label: "AI & Machine Learning",
      skills: ["LLM", "Prompt Engineering", "LangChain", "Vector Database", "Semantic Search", "Speech-to-Text / TTS", "MLOps"],
    },
    {
      label: "Product",
      skills: ["Product Roadmap", "0→1 Building", "Rapid Prototyping", "Design Thinking", "Agile / Scrum", "Go-to-Market", "Data Analytics"],
    },
    {
      label: "Technical",
      skills: ["Python", "JavaScript", "System Design", "API Design", "VoIP / WebRTC", "Figma"],
    },
  ],
  currently: [
    { label: "Building", value: "Autonomous workspace AI at Omnissa" },
    { label: "Side projects", value: "Tax filing tool + personal finance dashboard" },
    { label: "Reading", value: "The God Delusion — Richard Dawkins" },
    { label: "Experimenting with", value: "Claude Code agents for personal tooling" },
  ],
  sideProjects: [
    {
      title: "Finance Dashboard",
      description: "Personal finance tracker with AES encryption, hosted on Fly.io",
      href: "https://accounts.barnikbh.com",
      icon: "💰",
      status: "live" as const,
      hasDemo: true,
    },
    {
      title: "Indian Tax Filing Simplified",
      description: "A tool to make ITR filing less painful for Indian individuals",
      href: null,
      icon: "🧾",
      status: "coming-soon" as const,
      hasDemo: false,
    },
    {
      title: "Blog Writing Agent",
      description: "AI agent that converts weekly notes into Medium blog drafts",
      href: "https://github.com/barnikbh/blog-writing-agent",
      icon: "📝",
      status: "live" as const,
      hasDemo: false,
    },
    {
      title: "Digital Will",
      description: "Dead man's switch that transmits asset info to beneficiaries",
      href: "https://github.com/barnikbh/digital-will",
      icon: "📋",
      status: "live" as const,
      hasDemo: false,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@barnikbh", icon: NotebookIcon, label: "Blog", },
  ],
  contact: {
    email: "barnikbh@gmail.com",
    tel: "+919051846061",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/barnikbh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/barnikbh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/barnikbh",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:barnikbh@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Omnissa",
      href: "https://www.omnissa.com/",
      badges: [],
      location: "Bengaluru, India",
      title: "Product Manager",
      logoUrl: "/omnissa.jpeg",
      start: "August 2025",
      end: "Present",
      description:
        "Leading AI product strategy across DEX, UEM & Horizon — building autonomous workspace experiences that reduce IT operational overhead through intelligent automation and proactive remediation.",
    },
    {
      company: "LiaPlus AI",
      href: "https://liaplus.com/",
      badges: [],
      location: "New Delhi, India",
      title: "Product Advisor",
      logoUrl: "/liaplus_logo.jpeg",
      start: "May 2025",
      end: "August 2025",
      description:
        "Advising the engineering team on building a platform product strategy, and helping founders with driving go-to-market, pricing, and architecture conversations with customers.",  
    },
    {
      company: "Fundamento",
      href: "https://www.fundamento.ai/",
      badges: [],
      location: "New Delhi, India",
      title: "Senior Product Manager",
      logoUrl: "/fundamento.jpeg",
      start: "October 2023",
      end: "March 2025",
      description:
        "Built Voice Contact Center AI from 0 to 1, scaled it to more than 12 enterprises, reaching $1.5 million in ARR, and 5 million monthly conversations. Built two product suits, inbound & outbound Agents, which reduced customer cost by 50% anually.",  
    },
    {
      company: "CoinCrowd",
      badges: [],
      href: "https://coincrowd.com/",
      location: "Remote",
      title: "Advisor",
      logoUrl: "/coincrowd.jpeg",
      start: "July 2023",
      end: "December 2023",
      description:
        "Advised the founders on creating the product strategy for the Data integrations team. Worked with Marketing to set up data pipelines and strategies to drive data-driven campaigns.",
    },
    {
      company: "Zenlaw",
      href: "https://www.linkedin.com/company/zenlaw/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Product Manager",
      logoUrl: "/zenlaw.jpeg",
      start: "October 2021",
      end: "February 2023",
      description:
        "Invented and scaled an internal MLOps platform that streamlined model development workflows for Data Scientists and Annotators, reducing iteration time by 400% and simplifying the path to production for discriminative AI language models.",
    },
    {
      company: "Viafone",
      href: "https://viafone.com/",
      badges: [],
      location: "Dubai, UAE",
      title: "Product Manager",
      logoUrl: "/viafone.jpeg",
      start: "October 2019",
      end: "March 2021",
      description:
        "Led horizontal scaling of CCaaS Chatbot platform. Horizontally scaled the product stack by building payments and loyalty solutions, creating new ARR of $1.1 million.",
    },
    {
      company: "Engati",
      href: "https://www.engati.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Product Intern",
      logoUrl: "/engati.jpeg",
      start: "February 2019",
      end: "September 2019",
      description:
        "Learned the craft of product management under the CPO at one of India's leading chatbot platforms.",
    },
  ],
  education: [
    {
      school: "Harvard University",
      href: "https://www.edx.org/cs50",
      degree: "CS50 Web Programming in Python and JavaScript",
      logoUrl: "/harvard.jpeg",
      start: "2020",
      end: "2021",
    },
    {
      school: "KIIT University",
      href: "https://kiit.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl: "/kiit.jpeg",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "No-Code AI Workflow Agents",
      href: "https://medium.com/@barnikbh/building-no-code-ai-workflow-agents-from-experiment-to-scalable-product-901e1d2bba39",
      dates: "Apr 2024 - Jan 2025",
      active: true,
      description:
        "We designed a three-party-architecture that could balance flexibility, scalability and control.",
      technologies: [
        "CCaaS",
        "LLM",
        "System Design",
        "No Code AI",
        "AI Workflow",
        "AI Agent",
      ],
      links: [
        {
          type: "Read Blog",
          href: "https://medium.com/@barnikbh/building-no-code-ai-workflow-agents-from-experiment-to-scalable-product-901e1d2bba39",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/blog-1.webp",
      video: "",
    },
    {
      title: "Okta Integration",
      href: "/work/okta-prd",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Enterprise customers often manage access control and user provisioning through Single Sign-On (SSO). This project will enable SSO integration with Okta, aligning with enterprise security requirements and streamlining user access management.",
      technologies: [
        "Enterprise Security",
        "Identity & Access Management",
        "Single Sign-on",
        "CCaaS",
      ],
      links: [
        {
          type: "Read PRD",
          href: "/work/okta-prd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/okta.png",
      video: "",
    },
    {
      title: "Building Voice Gateway Infrastructure",
      href: "https://medium.com/@barnikbh/from-six-seconds-to-seamless-how-we-rebuilt-our-ai-voice-agent-from-the-ground-up-b3b3ca275102",
      dates: "Apr 2024 - Jan 2025",
      active: true,
      description:
        "We took matters into our own hand to reduce latency from 6 seconds to 400 miliseconds. We built our own in-house Voice Gateway infrastructure",
      technologies: [
        "CCaaS",
        "Speech-to-text",
        "Text-to-speech",
        "System Design",
        "Orchestrator",
        "VoIP",
        "WebRTC",
      ],
      links: [
        {
          type: "Read Blog",
          href: "https://medium.com/@barnikbh/from-six-seconds-to-seamless-how-we-rebuilt-our-ai-voice-agent-from-the-ground-up-b3b3ca275102",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/blog-2.webp",
      video: "",
    },
    {
      title: "Achieving PMF for Contact Center AI",
      href: "/work/ccai-pmf-prd",
      dates: "Oct 2023 - Feb 2024",
      active: true,
      description:
        "Built the product market fit strategy of Fundamento's CCaaS platform by relying on market research and experimentation, with a goal to reduce AHT of enterprise contact centers.",
      technologies: [
        "CCaaS",
        "Agent Handoff",
        "Agent Collaboration",
        "Artificial Intelligence",
        "Gen AI",
        "Speech-to-text",
        "Text-to-speech",
        "Research",
      ],
      links: [
        {
          type: "Read Research",
          href: "/work/ccai-pmf-prd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/yara.avif",
      video: "",
    },
    {
      title: "Scaling Sharefile",
      href: "/work/sharefile-prd",
      dates: "Jun 2023",
      active: true,
      description:
        "Identify areas to improve Sharefile by integrating ShareFile into the user’s identity, finding market gaps and reducing offline redundancies for users.",
      technologies: [
        "File Sharing",
        "Security",
        "B2B SaaS",
      ],
      links: [
        {
          type: "Read Research",
          href: "/work/sharefile-prd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/sharefile.jpg",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "Deloitte Hackathon - Winner",
      dates: "April 2018",
      location: "Hyderabad, India",
      description:
        "Trained a sentence transformer models using Tensorflow, and developed a web application for Emergency medicine.",
      image:
        "/deloitte.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Coviam Hackathon - Winner",
      dates: "March 2019",
      location: "Bhubaneswar, India",
      description:
        "Developed a Cricket gaming application using Engati.",
      icon: "public",
      image:
        "/crichum.jpg",
      links: [
        {
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://crichum.com/",
      },],
    },
    {
      title: "Accenture Hackathon - Runner Up",
      dates: "October 2018",
      location: "Remote",
      description:
        "Developed an AI application for summarizing judicial papers.",
      image:
        "/accenture.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Startup India - Winner",
      dates: "February 2018",
      location: "Bhubaneswar, India",
      description:
        "Developed a low cost prototype for extracting soy milk from soybeans.",
      icon: "public",
      image:
        "/startup_india.jpeg",
      links: [
        {
        title: "Award",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://myportfolio-barnik-bhattacharyya.s3.eu-north-1.amazonaws.com/files/1583822070491.jpeg",
      },],
    },
  ],
} as const;
