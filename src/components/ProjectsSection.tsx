import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Plataforma de analytics em tempo real com visualizações interativas e performance otimizada.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    impact: "Redução de 60% no tempo de análise de dados",
    link: "#",
    github: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Sistema completo de e-commerce com checkout otimizado, gestão de estoque e painel admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    impact: "Aumento de 40% na taxa de conversão",
    link: "#",
    github: "#",
  },
  {
    title: "IoT Dashboard",
    description: "Dashboard para monitoramento de dispositivos IoT com atualização em tempo real via WebSocket.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    tech: ["React", "WebSocket", "MQTT", "AWS IoT"],
    impact: "Gestão de +10.000 dispositivos simultâneos",
    link: "#",
    github: "#",
  },
  {
    title: "Maps Integration",
    description: "Sistema de geolocalização com otimização de rotas e redução de custos com Google Maps.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop",
    tech: ["React", "Google Maps API", "Node.js", "MongoDB"],
    impact: "Redução de 80% nos custos de API",
    link: "#",
    github: "#",
  },
  {
    title: "SaaS Platform",
    description: "Plataforma SaaS multi-tenant com autenticação avançada e billing automatizado.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tech: ["Next.js", "Prisma", "Stripe", "Auth0"],
    impact: "Escalável para +100k usuários",
    link: "#",
    github: "#",
  },
  {
    title: "Mobile App Backend",
    description: "API robusta para aplicativo mobile com autenticação, notificações push e sincronização offline.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tech: ["Node.js", "GraphQL", "Firebase", "PostgreSQL"],
    impact: "99.9% uptime em produção",
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-font text-sm text-primary mb-4 block">
            {"// projects"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma seleção de projetos que demonstram minha experiência em criar soluções escaláveis e de alto impacto.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex animate-scroll-left hover:[animation-play-state:paused]"
          style={{ width: "fit-content" }}
        >
          {/* Double the projects for infinite scroll effect */}
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4 group"
            >
              <div className="relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover-glow">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <p className="text-sm text-primary font-medium">
                    ✦ {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
