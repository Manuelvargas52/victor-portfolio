
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
                        Mi formación académica y aprendizaje continuo
                        respaldan mi trayectoria en ingeniería de software.
                    </p>
                </motion.div>

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
                                        <Icon
                                            size={28}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span className="flex items-center gap-2 text-sm text-gray-400">
                                        <CalendarDays
                                            size={16}
                                            aria-hidden="true"
                                        />
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
                            en arquitectura de software, Design Systems,
                            desarrollo frontend, calidad de código y nuevas
                            tecnologías.
                        </p>

                        <div className="flex items-center gap-3 text-sm text-purple-400">
                            <Award size={18} aria-hidden="true" />
                            <span>
                                Formación y actualización profesional
                            </span>
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    );
}

export default Education;
