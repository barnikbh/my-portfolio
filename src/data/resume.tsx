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
    "I grew up watching my dad design computers — it lit a lifelong obsession with understanding and building software. That curiosity took me through engineering, hackathons, and eventually into product management at some of the most exciting early-stage B2B AI startups in India and the Middle East.\n\nOver the last 7 years, I've worked at the frontier of enterprise AI — scaling [Voice Contact Center AI](https://fundamento.ai) from zero to $1.5M ARR and 5 million monthly conversations, and now at [Omnissa](https://omnissa.com), applying AI to End User Computing — turning how enterprises manage, secure, and support their digital workforce from a reactive IT burden into something intelligent and self-healing. I operate at the intersection of strategy and execution — I'm here to ship real value, not manage roadmaps.",
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
    { label: "Reading", value: "" },
    { label: "Experimenting with", value: "Claude Code agents for personal tooling" },
  ],
  booksRead: [
    { title: "The God Delusion", author: "Richard Dawkins", year: "2026" },
    { title: "The Tyranny of Merit", author: "Michael Sandel", year: "2025" },
    { title: "Justice", author: "Michael Sandel", year: "2025" },
    { title: "Democracy on the Road", author: "Ruchir Sharma", year: "2025" },
    { title: "The Metamorphosis", author: "Franz Kafka", year: "2025" },
    { title: "Poor Charlie's Almanack", author: "Charlie Munger", year: "2025" },
    { title: "The 48 Laws of Power", author: "Robert Greene", year: "2025" },
    { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", year: "2024" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: "2024" },
    { title: "Mein Kampf", author: "Adolf Hitler", year: "2024" },
    { title: "All the Light We Cannot See", author: "Anthony Doerr", year: "2024" },
    { title: "Shoe Dog", author: "Phil Knight", year: "2024" },
    { title: "The 25 Habits of Highly Successful Investors", author: "Peter Sander", year: "2023" },
    { title: "Elon Musk", author: "Walter Isaacson", year: "2023" },
    { title: "How to Talk to Anyone", author: "Leil Lowndes", year: "2023" },
    { title: "The Forty Rules of Love", author: "Elif Shafak", year: "2023" },
    { title: "When Breath Becomes Air", author: "Paul Kalanithi", year: "2023" },
    { title: "Steve Jobs", author: "Walter Isaacson", year: "2023" },
    { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", year: "2023" },
    { title: "Start with Why", author: "Simon Sinek", year: "2023" },
    { title: "The Personal MBA", author: "Josh Kaufman", year: "2022" },
    { title: "Dark Money", author: "Jane Mayer", year: "2022" },
    { title: "Why We Sleep", author: "Matthew Walker", year: "2022" },
    { title: "Deep Work", author: "Cal Newport", year: "2022" },
    { title: "Inspired", author: "Marty Cagan", year: "2021" },
    { title: "Atomic Habits", author: "James Clear", year: "2022" },
    { title: "Jane Eyre", author: "Charlotte Brontë", year: "2022" },
    { title: "The Culture Code", author: "Daniel Coyle", year: "2022" },
    { title: "Deep Work", author: "Cal Newport", year: "2021" },
    { title: "Behave", author: "Robert Sapolsky", year: "2018" },
    { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", year: "2018" },
    { title: "And The Mountains Echoed", author: "Khaled Hosseini", year: "2018" },
    { title: "The Kite Runner", author: "Khaled Hosseini", year: "2018" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: "2017" },
    { title: "The Confession", author: "John Grisham", year: "2017" },
    { title: "A Brief History of Time", author: "Stephen Hawking", year: "2014" },
    { title: "Harry Potter Series", author: "J. K. Rowling", year: "2010" },
  ],
  sideProjects: [
    {
      title: "Finance Dashboard",
      description: "Personal finance tracker with AES encryption, hosted on Fly.io",
      icon: "💰",
      status: "live" as "live" | "coming-soon",
      hasDemo: true,
    },
    {
      title: "Plan My Tax",
      description: "Tax savings made easy, intuitive, and free — for anyone, anywhere",
      href: "https://planmytax.org",
      icon: "/planmytax-logo.png",
      status: "live" as const,
      hasDemo: false,
    },
    {
      title: "Blog Writing Agent",
      description: "AI agent that converts weekly notes into Medium blog drafts",
      href: "https://github.com/barnikbh/blog-writing-agent",
      githubRepo: "barnikbh/blog-writing-agent",
      icon: "📝",
      status: "live" as const,
      hasDemo: false,
    },
    {
      title: "Digital Will",
      description: "Dead man's switch that transmits asset info to beneficiaries",
      href: "https://github.com/barnikbh/digital-will",
      githubRepo: "barnikbh/digital-will",
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
        "Leading platform AI strategy across DEX, UEM & Horizon in partnership with data science and engineering. Own Insights and guided Root Cause Analysis features — and a broader portfolio of platform AI capabilities — working towards Omnissa's vision of a self-configuring, self-healing, and self-securing digital workplace. Building AI for IT Admins who manage and secure the modern enterprise endpoint.",
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
        "Advised the engineering team on building a platform product strategy, and helped founders drive go-to-market, pricing, and architecture conversations with customers.",  
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
  blogs: [
    {
      title: "Observability in Agentic Systems",
      href: "https://medium.com/@barnikbh/observability-in-agentic-systems-you-dont-know-what-your-agents-are-doing-c253cf31d94a",
      dates: "Apr 2026",
      description:
        "The worst failure in an agentic system isn't a crash — it's silence. A breakdown of the three hardest things to observe in multi-agent pipelines and a practical framework to fix it.",
      technologies: ["Agentic AI", "Observability", "LLMOps", "OpenTelemetry", "System Design"],
      image: "/blog-3.svg",
    },
    {
      title: "RBAC in Agentic Systems",
      href: "https://medium.com/@barnikbh/rbac-in-agentic-systems-why-the-old-model-breaks-and-what-to-do-instead-ed80a6d65b16",
      dates: "Mar 2026",
      description:
        "RBAC was designed for humans. As AI systems grow more agentic, the old model starts to crack in ways most teams don't anticipate — and what to do instead.",
      technologies: ["Agentic AI", "Security", "RBAC", "Access Control", "System Design"],
      image: "/blog-4.svg",
    },
    {
      title: "Decoding A2A & MCP as a PM",
      href: "https://medium.com/@barnikbh/decoding-the-a2a-mcp-language-as-a-pm-88ebb0a314b4",
      dates: "Aug 2025",
      description:
        "A Product Manager's guide to understanding the Agent-to-Agent and Model Context Protocol standards — what they mean, why they matter, and how to think about them.",
      technologies: ["MCP", "A2A", "Agentic AI", "Product Management", "AI Standards"],
      image: "/blog-5.svg",
    },
    {
      title: "MCP for Product People",
      href: "https://medium.com/@barnikbh/model-context-protocol-mcp-for-product-people-c1e4f6dca222",
      dates: "Apr 2025",
      description:
        "Model Context Protocol demystified for product managers — what it is, how it works, and why it's becoming the connective tissue of the agentic AI ecosystem.",
      technologies: ["MCP", "LLM", "Product Management", "AI Ecosystem"],
      image: "/blog-6.svg",
    },
    {
      title: "Developing a Product Security Strategy",
      href: "https://medium.com/@barnikbh/developing-a-strategy-for-product-security-085da2f445c2",
      dates: "Mar 2025",
      description:
        "A practical framework for building product security into a B2B SaaS product — from threat modelling to auth, encryption, and compliance.",
      technologies: ["Security", "Product Strategy", "B2B SaaS", "Compliance", "Auth"],
      image: "/blog-7.svg",
    },
    {
      title: "Balancing Speed & Quality in Semantic Search",
      href: "https://medium.com/@barnikbh/from-quick-fixes-to-long-term-success-balancing-speed-and-quality-in-semantic-search-6cdea1f9583f",
      dates: "Mar 2025",
      description:
        "How we recovered semantic search accuracy from 6th place to industry-leading — covering triage quick fixes and a long-term architectural redesign.",
      technologies: ["Semantic Search", "MLOps", "NLP", "MTEB", "Search Ranking"],
      image: "/blog-8.svg",
    },
    {
      title: "Building RAG from the Ground Up",
      href: "https://medium.com/@barnikbh/building-rag-from-the-ground-up-a-journey-from-high-costs-to-high-impact-beebca58248b",
      dates: "Mar 2025",
      description:
        "A journey from high costs to high impact — how we built a Retrieval-Augmented Generation system from scratch and what we learned along the way.",
      technologies: ["RAG", "LLM", "Vector Database", "AI Engineering", "Cost Optimisation"],
      image: "/blog-9.svg",
    },
    {
      title: "Building AI Labs: STT Model MLOps",
      href: "https://medium.com/@barnikbh/building-ai-labs-balancing-innovation-and-reliability-in-stt-model-mlops-02461e245812",
      dates: "Mar 2025",
      description:
        "How we built an internal AI Labs environment to safely test new STT models in production — balancing innovation and reliability through parallel testing.",
      technologies: ["MLOps", "Speech-to-Text", "A/B Testing", "AI Infrastructure", "Reliability"],
      image: "/blog-10.svg",
    },
  ],
  projects: [
    {
      title: "No-Code AI Workflow Agents",
      href: "https://medium.com/@barnikbh/building-no-code-ai-workflow-agents-from-experiment-to-scalable-product-901e1d2bba39",
      dates: "Apr 2024 - Jan 2025",
      active: true,
      description:
        "We designed a three-party architecture that could balance flexibility, scalability, and control for no-code AI workflow agents.",
      technologies: ["CCaaS", "LLM", "System Design", "No Code AI", "AI Workflow", "AI Agent"],
      links: [
        {
          type: "Read Blog",
          href: "https://medium.com/@barnikbh/building-no-code-ai-workflow-agents-from-experiment-to-scalable-product-901e1d2bba39",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blog-1.webp",
      video: "",
    },
    {
      title: "Building Voice Gateway Infrastructure",
      href: "https://medium.com/@barnikbh/from-six-seconds-to-seamless-how-we-rebuilt-our-ai-voice-agent-from-the-ground-up-b3b3ca275102",
      dates: "Apr 2024 - Jan 2025",
      active: true,
      description:
        "How we reduced voice agent latency from 6 seconds to 400ms by building our own in-house Voice Gateway infrastructure.",
      technologies: ["CCaaS", "Speech-to-Text", "Text-to-Speech", "VoIP", "WebRTC", "System Design"],
      links: [
        {
          type: "Read Blog",
          href: "https://medium.com/@barnikbh/from-six-seconds-to-seamless-how-we-rebuilt-our-ai-voice-agent-from-the-ground-up-b3b3ca275102",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blog-2.webp",
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
