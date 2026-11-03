
import { motion } from 'motion/react';
import {
    Code2,
    Server,
    Database,
    Smartphone,
    FlaskConical,
    Wrench,
    BarChart3,
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend Development',
        description: 'Desarrollo de interfaces y aplicaciones web.',
        icon: Code2,
        skills: [
            'Angular',
            'React',
            'Stencil',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Tailwind CSS',
        ],
    },
    {
        title: 'Backend Development',
        description: 'Desarrollo de servicios y lógica de negocio.',
        icon: Server,
        skills: ['Java', 'Spring Boot', 'Node.js', 'Python'],
    },
    {
        title: 'Bases de datos',
        description: 'Gestión, consultas y transformación de datos.',
        icon: Database,
        skills: [
            'MySQL',
            'PostgreSQL',
            'MariaDB',
            'Oracle SQL',
            'SQL',
        ],
    },
    {
        title: 'Desarrollo móvil',
        description: 'Desarrollo de servicios, lógica de negocio e integración de aplicaciones.',
        icon: Smartphone,
        skills: ['Kotlin', 'React Native'],
    },
    {
        title: 'Testing & Quality',
        description: 'Pruebas y validación de componentes de software.',
        icon: FlaskConical,
        skills: [
            'Vitest',
            'Cypress',
            'React Testing Library',
            'Unit Testing',
        ],
    },
    {
        title: 'Tools & DevOps',
        description:
            'Herramientas de desarrollo, publicación y control de versiones.',
        icon: Wrench,
        skills: ['Git', 'NPM', 'JFrog', 'Maven'],
    },
    {
        title: 'Data & Analytics',
        description:
            'Análisis, automatización y visualización de información.',
        icon: BarChart3,
        skills: ['Power BI', 'Excel', 'Python', 'SQL'],
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
                        Tecnologías, herramientas y frameworks con los que
                        he trabajado en proyectos de desarrollo de software,
                        construcción de componentes y análisis de datos.
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
        </section>
    );
}

export default Skills;
