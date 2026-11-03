
import { motion } from 'motion/react';
import {
    CalendarDays,
    Code2,
    Layers3,
    Database,
    BarChart3,
} from 'lucide-react';

const experiences = [
    {
        company: 'Banco Davivienda',
        role: 'Profesional II – Frontend Developer',
        period: 'Octubre 2024 – Octubre 2026',
        description:
            'Desarrollo de soluciones frontend y aplicaciones web, integración de funcionalidades y participación en la evolución de componentes reutilizables para diferentes plataformas.',
        achievements: [
            'Desarrollo de funcionalidades e interfaces web utilizando Angular, React, TypeScript y JavaScript.',
            'Integración de aplicaciones frontend con servicios backend y APIs.',
            'Desarrollo y mantenimiento de funcionalidades e interfaces web para diferentes plataformas.',
            'Desarrollo y mantenimiento de una librería web con más de 50 componentes utilizando Stencil.',
            'Contribución a un Design System adoptado por más de 10 equipos internos.',
            'Desarrollo de más de 20 componentes nativos para Kotlin y más de 10 para React Native.',
            'Participación en el desarrollo y mantenimiento de una librería corporativa con más de 400 iconos para entornos web y móviles.',
            'Implementación de pruebas unitarias, accesibilidad y diseño responsive.',
            'Publicación y gestión de paquetes mediante NPM, Maven y JFrog.',
        ],
        technologies: [
            'Angular',
            'React',
            'Stencil',
            'TypeScript',
            'JavaScript',
            'Kotlin',
            'React Native',
            'NPM',
            'Maven',
            'JFrog',
        ],
        icon: Layers3,
    },
    {
        company: 'Banco Davivienda',
        role: 'Practicante de desarrollo de software',
        period: 'Enero 2024 – Julio 2024',
        description:
            'Participación en el desarrollo de aplicaciones y formularios web, apoyando la integración entre frontend y backend.',
        achievements: [
            'Desarrollo de formularios y componentes utilizando Angular.',
            'Implementación de interfaces con HTML, CSS y JavaScript.',
            'Apoyo en proyectos backend desarrollados con Java y Spring Boot.',
            'Integración y comunicación entre servicios frontend y backend.',
        ],
        technologies: [
            'Angular',
            'HTML',
            'CSS',
            'JavaScript',
            'Java',
            'Spring Boot',
        ],
        icon: Code2,
    },
    {
        company: 'CAM Colombia Multiservicios S.A.S',
        role: 'Analista de Datos',
        period: 'Enero 2023 – Enero 2024',
        description:
            'Análisis, transformación y visualización de datos para generar indicadores de negocio y apoyar la toma de decisiones.',
        achievements: [
            'Construcción y mantenimiento de 10 dashboards e informes de indicadores de negocio en Power BI, utilizados semanalmente por el equipo directivo.',
            'Extracción y transformación de datos mediante consultas SQL para alimentar dashboards y análisis de negocio.',
            'Automatización de reportes periódicos, ahorrando entre 6 y 10 horas semanales de trabajo manual.',
        ],
        technologies: [
            'Python',
            'SQL',
            'Power BI',
            'Excel',
        ],
        icon: BarChart3,
    },
    {
        company: 'Motordrives S.A.S',
        role: 'Analista de Bases de Datos',
        period: 'Junio 2020 – Noviembre 2022',
        description:
            'Administración de bases de datos y automatización de procesos para dar soporte a las operaciones de diferentes áreas del negocio.',
        achievements: [
            'Diseño y administración de bases de datos MySQL que daban soporte a entre 3 y 5 áreas del negocio.',
            'Desarrollo de consultas SQL y procedimientos almacenados para apoyar los procesos operativos.',
            'Automatización de procesos mediante Python sobre bases de datos relacionales y no relacionales, reduciendo tareas manuales repetitivas.',
        ],
        technologies: [
            'MySQL',
            'SQL',
            'Python',
            'Bases de datos relacionales',
            'Bases de datos no relacionales',
        ],
        icon: Database,
    },
];

function Experience() {
    return (
        <section
            id="experiencia"
            aria-labelledby="experience-title"
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Iluminación decorativa */}
            <div
                aria-hidden="true"
                className="absolute top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]"
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
                        Mi trayectoria
                    </p>

                    <h2
                        id="experience-title"
                        className="text-4xl md:text-5xl font-bold mt-5"
                    >
                        Experiencia{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            profesional.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Mi recorrido profesional combina desarrollo de software,
                        construcción de arquitecturas reutilizables y análisis de datos.
                    </p>
                </motion.div>

                {/* Línea de tiempo profesional */}
                <div className="relative">

                    <div
                        aria-hidden="true"
                        className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
                    />

                    <ol
                        aria-label="Experiencia profesional en orden cronológico inverso"
                        className="space-y-12"
                    >
                        {experiences.map((experience, index) => {
                            const Icon = experience.icon;

                            return (
                                <motion.li
                                    key={`${experience.company}-${experience.role}`}
                                    initial={{ opacity: 0, x: 35 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                    }}
                                    className="relative pl-12 md:pl-20"
                                >
                                    {/* Icono de la línea de tiempo */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute left-0 md:left-4 top-7 w-9 h-9 rounded-xl bg-[#151b2b] border border-blue-500/50 flex items-center justify-center"
                                    >
                                        <Icon size={18} className="text-blue-400" />
                                    </div>

                                    <article className="p-7 md:p-9 rounded-2xl bg-[#101522] border border-white/10 hover:border-blue-500/40 transition-all">

                                        {/* Empresa y cargo */}
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                            <div>
                                                <p className="text-blue-400 text-sm font-medium">
                                                    {experience.company}
                                                </p>

                                                <h3 className="text-xl md:text-2xl font-bold mt-2">
                                                    {experience.role}
                                                </h3>
                                            </div>

                                            <p className="flex items-center gap-2 text-gray-400 text-sm">
                                                <CalendarDays
                                                    size={16}
                                                    aria-hidden="true"
                                                />
                                                <span>{experience.period}</span>
                                            </p>
                                        </div>

                                        {/* Descripción */}
                                        <p className="text-gray-400 leading-relaxed mt-6">
                                            {experience.description}
                                        </p>

                                        {/* Logros */}
                                        <div className="mt-7">
                                            <h4 className="font-semibold mb-4">
                                                Principales contribuciones
                                            </h4>

                                            <ul className="space-y-3">
                                                {experience.achievements.map((achievement) => (
                                                    <li
                                                        key={achievement}
                                                        className="flex gap-3 text-gray-400 text-sm leading-relaxed"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="text-blue-400 mt-1"
                                                        >
                                                            ▹
                                                        </span>

                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tecnologías */}
                                        <div className="mt-7">
                                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                                                <Database
                                                    size={17}
                                                    aria-hidden="true"
                                                    className="text-blue-400"
                                                />
                                                Tecnologías
                                            </h4>

                                            <ul className="flex flex-wrap gap-2">
                                                {experience.technologies.map((technology) => (
                                                    <li
                                                        key={technology}
                                                        className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300"
                                                    >
                                                        {technology}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </article>
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </div>
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-px bg-white/10"
            />
        </section>
    );
}

export default Experience;
