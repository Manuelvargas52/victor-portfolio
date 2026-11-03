
import { motion } from 'motion/react';
import {
    Code2,
    Layers3,
    Database,
    Users,
    Component,
    Workflow,
    Image,
    Smartphone,
} from 'lucide-react';

const stats = [
    {
        value: '+50',
        label: 'Componentes web',
        icon: Component,
    },
    {
        value: '+400',
        label: 'Iconos en librería corporativa',
        icon: Image,
    },
    {
        value: '+10',
        label: 'Equipos adoptaron el Design System',
        icon: Users,
    },
    {
        value: '+20',
        label: 'Componentes nativos Kotlin',
        icon: Layers3,
    },
    {
        value: '+10',
        label: 'Componentes React Native',
        icon: Smartphone,
    },
];

const strengths = [
    {
        icon: Code2,
        title: 'Desarrollo de software',
        description:
            'Construcción de aplicaciones y soluciones tecnológicas utilizando diferentes lenguajes, frameworks y buenas prácticas.',
    },
    {
        icon: Workflow,
        title: 'Integración backend',
        description:
            'Integración entre frontend y backend, consumo de servicios y conexión de aplicaciones con fuentes de datos.',
    },
    {
        icon: Database,
        title: 'Bases de datos y analítica',
        description:
            'Consultas SQL, gestión de bases de datos, automatización con Python y visualización de información.',
    },
    {
        icon: Layers3,
        title: 'Arquitectura y componentes',
        description:
            'Creación de componentes reutilizables, organización de interfaces y aplicación de buenas prácticas de desarrollo y mantenimiento.',
    },
];

function About() {
    return (
        <section
            id="sobre-mi"
            aria-labelledby="about-title"
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Iluminación decorativa */}
            <div
                aria-hidden="true"
                className="absolute top-20 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mb-16"
                >
                    <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
                        Conóceme
                    </p>

                    <h2
                        id="about-title"
                        className="text-4xl md:text-5xl font-bold mt-5"
                    >
                        Sobre{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            mí.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mt-7">
                        Soy Ingeniero de Sistemas con experiencia en desarrollo de software,
                        enfocado en la construcción de aplicaciones, integración de servicios
                        y soluciones tecnológicas orientadas a las necesidades del negocio.
                        He trabajado principalmente con Angular, React, TypeScript, Java
                        y Spring Boot.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mt-5">
                        Mi experiencia abarca el desarrollo frontend, consumo e integración
                        de APIs REST, manejo de bases de datos relacionales y automatización
                        de procesos utilizando Python y SQL. También he participado en
                        proyectos de análisis y visualización de datos con Power BI.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mt-5">
                        Adicionalmente, cuento con experiencia en la creación y mantenimiento
                        de Design Systems y librerías de componentes reutilizables para
                        plataformas web y móviles, aplicando principios de Atomic Design,
                        pruebas unitarias, accesibilidad y buenas prácticas de desarrollo.
                    </p>
                </motion.div>

                {/* Estadísticas */}
                <div
                    aria-label="Indicadores de experiencia profesional"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-24"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.article
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all group"
                            >
                                <Icon
                                    size={28}
                                    aria-hidden="true"
                                    className="text-blue-400 mb-5 group-hover:scale-110 transition-transform"
                                />

                                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </h3>

                                <p className="text-gray-400 text-sm mt-3">
                                    {stat.label}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Fortalezas */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
                            Mi enfoque profesional
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold mt-4">
                            ¿Qué puedo aportar?
                        </h3>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {strengths.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.article
                                    key={item.title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="p-7 rounded-2xl bg-[#101522] border border-white/10 hover:border-purple-500/50 transition-all group"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 mb-6"
                                    >
                                        <Icon
                                            size={25}
                                            className="text-blue-400 group-hover:text-purple-400 transition-colors"
                                        />
                                    </div>

                                    <h4 className="text-xl font-semibold mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
