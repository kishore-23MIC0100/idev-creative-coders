export interface Service {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  capabilities: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "CUSTOM SOFTWARE",
    description: "Business-specific software platforms designed around real workflows, automating processes and driving efficiency.",
    technologies: ["React", "Flask", "Python", "MySQL", "Java"],
    capabilities: [
      "Workflow Automation",
      "Internal Business Platforms",
      "Enterprise Systems",
      "Operational Dashboards"
    ]
  },
  {
    number: "02",
    title: "WEB APPLICATIONS",
    description: "Modern, responsive, high-performance web applications built using advanced frontend layouts and scalable API layers.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    capabilities: [
      "Single Page Apps (SPA)",
      "Server-Side Rendering (SSR)",
      "Custom SaaS Platforms",
      "Core Web Vitals Tuning"
    ]
  },
  {
    number: "03",
    title: "MOBILE APPLICATIONS",
    description: "Fluid mobile experiences for iOS and Android, bringing native-grade performance and polished UX to users' hands.",
    technologies: ["React Native", "Flutter", "iOS & Android", "API Gateway"],
    capabilities: [
      "Cross-Platform Native Apps",
      "Biometric & Secure Auth",
      "Offline Sync Engines",
      "Push Notification Architectures"
    ]
  },
  {
    number: "04",
    title: "BACKEND & APIs",
    description: "Highly secure, high-throughput backend APIs designed to manage core transaction pipelines and integrate internal systems.",
    technologies: ["Node.js", "Spring Boot", "PostgreSQL", "Redis"],
    capabilities: [
      "RESTful & GraphQL APIs",
      "Double-Entry Ledgers",
      "Third-Party Integrations",
      "High Concurrency Caching"
    ]
  },
  {
    number: "05",
    title: "CLOUD & DEVOPS",
    description: "Resilient cloud infrastructure setup, serverless execution boundaries, and fully automated deployment workflows.",
    technologies: ["AWS", "Docker", "Terraform", "CI/CD Pipelines"],
    capabilities: [
      "Infrastructure as Code (IaC)",
      "Automated CI/CD Pipelines",
      "VPC & Container Clusters",
      "Automated Log Telemetry"
    ]
  },
  {
    number: "06",
    title: "CYBERSECURITY",
    description: "Security integrations across application code, user identities, API layers, and host container environments.",
    technologies: ["OAuth2 / IAM", "API Security", "Identity Validation", "Secure Coding"],
    capabilities: [
      "Identity & Access Management",
      "Secure System Boundaries",
      "Vulnerability Scans",
      "Penetration Testing Audits"
    ]
  },
  {
    number: "07",
    title: "AI & AUTOMATION",
    description: "Intelligent features using computer vision, predictive forecasting models, and natural language processing.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Generative AI"],
    capabilities: [
      "Computer Vision Systems",
      "Generative LLM Integrations",
      "Outlier & Anomaly Detection",
      "Predictive Data Pipelines"
    ]
  },
  {
    number: "08",
    title: "TECHNOLOGY CONSULTING",
    description: "Architectural design, system audits, scaling strategies, and technical advisory to align engineering with business goals.",
    technologies: ["Architecture Blueprints", "Auditing Tools", "Strategy", "System Design"],
    capabilities: [
      "System Architecture Audits",
      "Scaling Roadmaps",
      "Technology Stack Auditing",
      "Disaster Recovery Planning"
    ]
  }
];
