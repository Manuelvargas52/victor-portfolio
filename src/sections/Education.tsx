
import { motion } from 'motion/react';
import {
    GraduationCap,
    Award,
    CalendarDays,
    BookOpen,
} from 'lucide-react';

const education = [
    {
        institution: 'Fundación Universitaria Konrad Lorenz',
        degree: 'Ingeniería de Sistemas',
        period: 'Graduado en 2024',
        description:
            'Formación profesional en ingeniería de software, desarrollo de aplicaciones, bases de datos y solución de problemas tecnológicos.',
        icon: GraduationCap,
    },
];

const certifications = [
    {
        name: 'Curso de Introducción a Unity: Interfaz',
        platform: 'Platzi',
        date: 'Septiembre 2026',
        credentialId: '8fb56ff5-5c8e-4b26-a19f-5be5fa168e7c',
        url: 'https://platzi.com/p/victor.vargas345/curso/5250-course/diploma/detalle/',
    },
    {
        name: 'Curso de Kotlin',
        platform: 'Platzi',
        date: 'Septiembre 2026',
        credentialId:
            'e59156d0-13fd-4aaa-837a-3a6313d649eb-c7817a32-ad73-437d-9c59-ad6ca63a11ad',
        url: 'https://platzi.com/p/victor.vargas345/curso/12172-kotlin/diploma/detalle/',
    },
    {
        name: 'Product & Service Designer',
        platform: 'Banco Davivienda',
        date: 'Diciembre 2025',
        credentialId: 'a8e1b00f-3288-4846-8982-424c22f24e24',
        url: 'https://www.acreditta.com/credential/a8e1b00f-3288-4846-8982-424c22f24e24?utm_source=linkedin_profile&resource_type=badge&resource=a8e1b00f-3288-4846-8982-424c22f24e24',
    },
    {
        name: 'Angular Forms: Creación y Optimización de Formularios Web',
        platform: 'Platzi',
        date: 'Noviembre 2024',
        credentialId: 'afbf3ba6-f6d4-48ef-a143-2e3af5529943',
        url: 'https://platzi.com/p/victor.vargas345/curso/2027-course/diploma/detalle/',
    },
    {
        name: 'Certified Professional in Product & Service Design',
        platform: 'Agile fun!',
        date: 'Noviembre 2025',
        credentialId: 'e8d87fa4-a0b3-41a5-b08b-3f4acbf954f1',
        trainer: 'Entrenador: Jaime Yáñez',
        url: 'https://credsverse.com/credentials/e8d87fa4-a0b3-41a5-b08b-3f4acbf954f1?preview=1',
    },
];

function Education() {
    return (
        <section
            id="formacion"
            aria-labelledby="education-title"
            className="relative py-28 px-6 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
                        Mi formación
                    </p>

                    <h2
                        id="education-title"
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Formación académica.
                    </h2>

                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        Mi formación académica y aprendizaje continuo respaldan
                        mi trayectoria en ingeniería de software.
                    </p>
                </motion.div>

                {/* Formación académica y aprendizaje continuo */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {education.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.institution}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-4 mb-8">
                                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                                        <Icon size={28} aria-hidden="true" />
                                    </div>

                                    <span className="flex items-center gap-2 text-sm text-gray-400">
                                        <CalendarDays size={16} aria-hidden="true" />
                                        <time dateTime="2024">
                                            {item.period}
                                        </time>
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">
                                    {item.degree}
                                </h3>

                                <p className="text-blue-400 font-medium mb-4">
                                    {item.institution}
                                </p>

                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.article>
                        );
                    })}

                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-colors"
                    >
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-8">
                            <BookOpen size={28} aria-hidden="true" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                            Aprendizaje continuo
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            Interés constante en fortalecer mis conocimientos
                            en arquitectura de software, desarrollo full stack,
                            integración de servicios, bases de datos, calidad
                            de código y nuevas tecnologías.
                        </p>

                        <div className="flex items-center gap-3 text-sm text-purple-400">
                            <Award size={18} aria-hidden="true" />
                            <span>
                                Formación y actualización profesional
                            </span>
                        </div>
                    </motion.article>
                </div>

                {/* Certificaciones */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                            <Award size={24} aria-hidden="true" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                Certificaciones
                            </h3>

                            <p className="text-gray-400 text-sm mt-1">
                                Cursos y formación complementaria
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((certification, index) => (
                            <motion.article
                                key={certification.credentialId}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                }}
                                className="flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                                        <Award size={22} aria-hidden="true" />
                                    </div>

                                    <span className="text-xs text-gray-500">
                                        {certification.platform}
                                    </span>
                                </div>

                                <h4 className="text-lg font-semibold text-white leading-snug mb-4">
                                    {certification.name}
                                </h4>

                                {certification.trainer && (
                                    <p className="text-gray-500 text-xs mb-4">
                                        {certification.trainer}
                                    </p>
                                )}

                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                                    <CalendarDays size={15} aria-hidden="true" />
                                    {certification.date}
                                </div>

                                <div className="mt-auto">
                                    <a
                                        href={certification.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Ver certificado
                                        <Award size={16} aria-hidden="true" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Education;
