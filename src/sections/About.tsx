
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
    ShieldCheck,
    Award,
} from 'lucide-react';

const stats = [
    {
        value: '+50',
        label: 'Componentes web desarrollados',
        icon: Component,
    },
    {
        value: '+400',
        label: 'Iconos en librería corporativa',
        icon: Image,
    },
    {
        value: '+15',
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
    {
        value: '~90%',
        label: 'Cobertura de código en pruebas',
        icon: ShieldCheck,
    },
];

const strengths = [
    {
        icon: Code2,
        title: 'Desarrollo de software',
        description:
            'Construcción de aplicaciones web y funcionalidades utilizando Angular, React, TypeScript, JavaScript y buenas prácticas de desarrollo.',
    },
    {
        icon: Workflow,
        title: 'Integración y automatización',
        description:
            'Integración de frontend con servicios backend y APIs REST. Implementación de flujos CI/CD con GitHub Actions para validar, compilar y publicar paquetes.',
    },
    {
        icon: Database,
        title: 'Bases de datos y analítica',
        description:
            'Diseño y administración de bases de datos relacionales, consultas SQL, automatización con Python y análisis de información mediante Power BI.',
    },
    {
        icon: Layers3,
        title: 'Arquitectura y Design Systems',
        description:
            'Diseño y evolución de librerías de componentes reutilizables con Stencil y Atomic Design para plataformas web y móviles, priorizando accesibilidad, calidad y mantenibilidad.',
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
                        Soy Ingeniero de Sistemas con experiencia en desarrollo
                        de software, especializado en la construcción de
                        aplicaciones web y arquitecturas frontend utilizando
                        Angular, React, TypeScript y JavaScript. He participado
                        en la evolución de soluciones tecnológicas y Design
                        Systems utilizados por diferentes equipos de desarrollo.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mt-5">
                        En Banco Davivienda contribuí al diseño y evolución de
                        un Design System reconocido con un iF Design Award,
                        desarrollando más de 50 componentes web con Stencil y
                        Atomic Design, adoptados por más de 15 equipos internos.
                        También extendí su ecosistema a plataformas móviles
                        mediante componentes en Kotlin y React Native.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mt-5">
                        Mi experiencia también incluye integración de servicios
                        backend con Java y Spring Boot, consumo de APIs REST,
                        gestión de bases de datos SQL y automatización de
                        procesos con Python. He trabajado en pruebas unitarias,
                        alcanzando aproximadamente un 90% de cobertura de
                        código, así como en automatización CI/CD con GitHub
                        Actions.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed mt-5">
                        Complemento mi perfil con experiencia en análisis y
                        visualización de datos mediante Power BI y Excel,
                        conectando las capacidades de desarrollo de software
                        con las necesidades del negocio.
                    </p>
                </motion.div>

                {/* Estadísticas */}
                <div
                    aria-label="Indicadores de experiencia profesional"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-24"
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

                {/* Reconocimiento */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-7 mb-24 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                >
                    <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10">
                        <Award
                            size={30}
                            className="text-blue-400"
                            aria-hidden="true"
                        />
                    </div>

                    <div>
                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
                            Reconocimiento profesional
                        </p>
                        <h3 className="text-xl font-bold mt-1">
                            iF Design Award
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            Participación en el desarrollo del Design System
                            de Banco Davivienda, proyecto reconocido con este
                            premio internacional de diseño.
                        </p>
                    </div>
                </motion.div>

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

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-px bg-white/10"
            />
        </section>
    );
}

export default About;
