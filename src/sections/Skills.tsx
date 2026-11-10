
import { motion } from 'motion/react';
import {
    Code2,
    Server,
    Database,
    Smartphone,
    FlaskConical,
    BarChart3,
    Workflow,
    Layers3,
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend Development',
        description:
            'Desarrollo de interfaces, aplicaciones web y arquitecturas de componentes reutilizables.',
        icon: Code2,
        skills: [
            'Angular',
            'React',
            'Stencil',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
        ],
    },
    {
        title: 'Backend Development',
        description:
            'Desarrollo de funcionalidades backend, servicios e integración mediante APIs REST.',
        icon: Server,
        skills: [
            'Java',
            'Spring Boot',
            'PHP',
            'APIs REST',
        ],
    },
    {
        title: 'Bases de datos',
        description:
            'Diseño, administración, consultas y gestión de bases de datos relacionales.',
        icon: Database,
        skills: [
            'SQL',
            'PostgreSQL',
            'MySQL',
            'MariaDB',
            'Oracle SQL',
        ],
    },
    {
        title: 'Desarrollo móvil',
        description:
            'Desarrollo y mantenimiento de componentes nativos y multiplataforma.',
        icon: Smartphone,
        skills: [
            'Kotlin',
            'React Native',
        ],
    },
    {
        title: 'Testing & Quality',
        description:
            'Validación de componentes, pruebas unitarias y medición de cobertura de código.',
        icon: FlaskConical,
        skills: [
            'Jest',
            'Unit Testing',
            'Code Coverage',
            'Accessibility (A11Y)',
            'Responsive Design',
        ],
    },
    {
        title: 'DevOps & Tools',
        description:
            'Automatización de flujos de integración y despliegue, control de versiones y publicación de paquetes.',
        icon: Workflow,
        skills: [
            'Git',
            'GitHub Actions',
            'CI/CD',
            'NPM',
            'Maven',
            'JFrog',
        ],
    },
    {
        title: 'Data & Analytics',
        description:
            'Extracción, transformación, automatización y visualización de información para apoyar decisiones de negocio.',
        icon: BarChart3,
        skills: [
            'Python',
            'SQL',
            'Power BI',
            'Excel',
        ],
    },
    {
        title: 'Arquitectura & Design Systems',
        description:
            'Construcción de ecosistemas de componentes reutilizables para plataformas web y móviles.',
        icon: Layers3,
        skills: [
            'Design Systems',
            'Atomic Design',
            'Web Components',
            'Component Architecture',
            'Semantic Versioning',
        ],
    },
];

function Skills() {
    return (
        <section
            id="habilidades"
            aria-labelledby="skills-title"
            className="relative py-28 px-6 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mb-16"
                >
                    <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
                        Mi stack tecnológico
                    </p>

                    <h2
                        id="skills-title"
                        className="text-4xl md:text-5xl font-bold mt-5"
                    >
                        Habilidades{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            técnicas.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Tecnologías, herramientas y metodologías utilizadas
                        en proyectos de desarrollo de software, arquitectura
                        frontend, integración backend, automatización y
                        análisis de datos.
                    </p>
                </motion.div>

                {/* Categorías */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.article
                                key={category.title}
                                aria-labelledby={`skill-category-${index}`}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="p-7 rounded-2xl bg-[#101522] border border-white/10 hover:border-blue-500/40 transition-all group"
                            >
                                <div
                                    aria-hidden="true"
                                    className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all"
                                >
                                    <Icon
                                        size={23}
                                        className="text-blue-400"
                                    />
                                </div>

                                <h3
                                    id={`skill-category-${index}`}
                                    className="text-xl font-bold mb-2"
                                >
                                    {category.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {category.description}
                                </p>

                                <ul
                                    aria-label={`Tecnologías de ${category.title}`}
                                    className="flex flex-wrap gap-2"
                                >
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/40 transition-colors"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-px bg-white/10"
            />
        </section>
    );
}

export default Skills;
