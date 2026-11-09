
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
            'Diseño y evolución de soluciones frontend y Design Systems para los ecosistemas web y móvil de Banco Davivienda, con enfoque en arquitectura reutilizable, calidad de software y automatización.',
        achievements: [
            'Diseñé y definí la arquitectura y los estándares técnicos del Design System de Banco Davivienda, proyecto reconocido con un iF Design Award.',
            'Desarrollé más de 50 componentes web con Stencil y Atomic Design, adoptados por más de 15 equipos internos y utilizados en el sitio web del banco.',
            'Desarrollé componentes web responsivos y accesibles (A11Y) e implementé pruebas unitarias con Jest, alcanzando aproximadamente un 90% de cobertura de código.',
            'Extendí el Design System al ecosistema móvil mediante más de 20 componentes nativos en Kotlin y más de 10 componentes en React Native.',
            'Diseñé y mantuve una librería corporativa de más de 400 iconos SVG para aplicaciones web y sus equivalentes XML/Kotlin para aplicaciones móviles.',
            'Desarrollé funcionalidades y flujos de interfaz con Angular, React y JavaScript, aplicando criterios de reutilización, modularidad y estandarización.',
            'Publiqué y gestioné tres librerías mediante NPM: Web Components, React Native e iconografía, incorporando documentación técnica y versionamiento semántico.',
            'Implementé automatizaciones con GitHub Actions para validar, compilar componentes y publicar paquetes NPM.',
            'Participé en revisiones de código y decisiones técnicas, contribuyendo a los estándares de desarrollo y mantenibilidad.',
        ],
        technologies: [
            'Angular',
            'React',
            'Stencil',
            'TypeScript',
            'JavaScript',
            'Kotlin',
            'React Native',
            'Jest',
            'GitHub Actions',
            'NPM',
            'Maven',
            'JFrog',
        ],
        icon: Layers3,
    },
    {
        company: 'Banco Davivienda',
        role: 'Practicante de Desarrollo de Software',
        period: 'Enero 2024 – Julio 2024',
        description:
            'Participación en el desarrollo de aplicaciones y formularios web, apoyando la integración entre frontend y backend.',
        achievements: [
            'Desarrollé más de 15 formularios, componentes y flujos funcionales utilizando Angular, HTML, CSS y JavaScript durante seis meses.',
            'Integré aplicaciones frontend con servicios backend desarrollados en Java y Spring Boot, consumiendo APIs REST de más de 10 endpoints y módulos.',
            'Implementé funcionalidades y correcciones en proyectos internos, colaborando con equipos de desarrollo bajo metodología Scrum.',
        ],
        technologies: [
            'Angular',
            'HTML',
            'CSS',
            'JavaScript',
            'Java',
            'Spring Boot',
            'APIs REST',
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
            'Construí y mantuve 10 dashboards e informes de indicadores de negocio en Power BI, utilizados semanalmente por el equipo directivo.',
            'Extraje y transformé información mediante consultas SQL para alimentar dashboards y análisis de negocio.',
            'Automaticé la generación de reportes periódicos, reduciendo entre 6 y 10 horas semanales de trabajo manual.',
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
            'Diseñé y administré bases de datos relacionales en MySQL para soportar procesos de entre 3 y 5 áreas del negocio.',
            'Desarrollé consultas SQL y procedimientos almacenados para respaldar procesos operativos y gestionar la integridad y disponibilidad de la información.',
            'Automaticé procesos operativos mediante Python y bases de datos relacionales y no relacionales, reduciendo tareas manuales repetitivas.',
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
                        construcción de arquitecturas reutilizables, automatización
                        de procesos y análisis de datos.
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
                                        <Icon
                                            size={18}
                                            className="text-blue-400"
                                        />
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
                                                {experience.achievements.map(
                                                    (achievement) => (
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

                                                            <span>
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
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
                                                {experience.technologies.map(
                                                    (technology) => (
                                                        <li
                                                            key={technology}
                                                            className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300"
                                                        >
                                                            {technology}
                                                        </li>
                                                    )
                                                )}
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
