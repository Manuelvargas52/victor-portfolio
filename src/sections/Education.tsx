
import { useRef } from 'react';
import { motion } from 'motion/react';

import {
    GraduationCap,
    Award,
    CalendarDays,
    BookOpen,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
} from 'lucide-react';

// ======================================================
// TIPOS
// ======================================================

interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    dateTime: string;
    description: string;
    icon: typeof GraduationCap;
}

interface Certification {
    name: string;
    platform: string;
    date: string;
    credentialId: string;
    url: string;
    trainer?: string;
}

// ======================================================
// FORMACIÓN ACADÉMICA
// ======================================================

const education: EducationItem[] = [
    {
        institution: 'Fundación Universitaria Konrad Lorenz',
        degree: 'Ingeniería de Sistemas',
        period: 'Graduado en 2024',
        dateTime: '2024',
        description:
            'Formación profesional en ingeniería de software, desarrollo de aplicaciones, bases de datos y solución de problemas tecnológicos.',
        icon: GraduationCap,
    },
];

// ======================================================
// CERTIFICACIONES
// ======================================================

const certifications: Certification[] = [
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

// ======================================================
// COMPONENTE PRINCIPAL
// ======================================================

function Education() {
    const carouselRef = useRef<HTMLDivElement>(null);

    // ==================================================
    // NAVEGACIÓN DEL CARRUSEL
    // ==================================================

    const scrollCarousel = (direction: 'left' | 'right') => {
        const container = carouselRef.current;

        if (!container) return;

        const scrollAmount = container.clientWidth * 0.85;

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section
            id="formacion"
            aria-labelledby="education-title"
            className="relative overflow-hidden px-6 py-28"
        >
            {/* FONDO DECORATIVO */}

            <div
                aria-hidden="true"
                className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]"
            />

            <div
                aria-hidden="true"
                className="absolute right-0 top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-[140px]"
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ==================================================
                    ENCABEZADO
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                        Mi formación
                    </p>

                    <h2
                        id="education-title"
                        className="mb-6 text-4xl font-bold tracking-tight md:text-5xl"
                    >
                        Formación académica.
                    </h2>

                    <p className="max-w-2xl leading-relaxed text-gray-400">
                        Mi formación académica y aprendizaje continuo respaldan
                        mi trayectoria en ingeniería de software y desarrollo
                        de soluciones tecnológicas.
                    </p>
                </motion.div>

                {/* ==================================================
                    FORMACIÓN ACADÉMICA Y APRENDIZAJE CONTINUO
                ================================================== */}

                <div className="grid gap-8 lg:grid-cols-2">

                    {/* FORMACIÓN ACADÉMICA */}

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
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-blue-500/30"
                            >
                                <div className="mb-8 flex items-center justify-between gap-4">
                                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
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

                                        <time dateTime={item.dateTime}>
                                            {item.period}
                                        </time>
                                    </span>
                                </div>

                                <h3 className="mb-3 text-2xl font-bold text-white">
                                    {item.degree}
                                </h3>

                                <p className="mb-4 font-medium text-blue-400">
                                    {item.institution}
                                </p>

                                <p className="leading-relaxed text-gray-400">
                                    {item.description}
                                </p>

                                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-green-400">
                                    <CheckCircle2
                                        size={17}
                                        aria-hidden="true"
                                    />

                                    Formación académica completada
                                </div>
                            </motion.article>
                        );
                    })}

                    {/* APRENDIZAJE CONTINUO */}

                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-purple-500/30"
                    >
                        <div className="mb-8 w-fit rounded-xl bg-purple-500/10 p-3 text-purple-400">
                            <BookOpen
                                size={28}
                                aria-hidden="true"
                            />
                        </div>

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            Aprendizaje continuo
                        </h3>

                        <p className="mb-6 leading-relaxed text-gray-400">
                            Interés constante en fortalecer mis conocimientos
                            en arquitectura de software, desarrollo Full Stack,
                            integración de servicios, bases de datos, calidad
                            de código y nuevas tecnologías.
                        </p>

                        <div className="mb-6 flex items-center gap-3 text-sm text-purple-400">
                            <Award
                                size={18}
                                aria-hidden="true"
                            />

                            <span>
                                Formación y actualización profesional
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                            {[
                                'Desarrollo de software',
                                'Arquitectura',
                                'Bases de datos',
                                'Calidad de código',
                            ].map((area) => (
                                <span
                                    key={area}
                                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-400"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                </div>

                {/* ==================================================
                    CERTIFICACIONES
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    {/* ENCABEZADO Y CONTROLES */}

                    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                <Award
                                    size={24}
                                    aria-hidden="true"
                                />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    Certificaciones
                                </h3>

                                <p className="mt-1 text-sm text-gray-400">
                                    Cursos y formación complementaria
                                </p>
                            </div>
                        </div>

                        {/* CONTROLES DEL CARRUSEL */}

                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => scrollCarousel('left')}
                                aria-label="Ver certificaciones anteriores"
                                className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 transition-all hover:border-blue-500/50 hover:text-white"
                            >
                                <ChevronLeft
                                    size={20}
                                    aria-hidden="true"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollCarousel('right')}
                                aria-label="Ver siguientes certificaciones"
                                className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 transition-all hover:border-blue-500/50 hover:text-white"
                            >
                                <ChevronRight
                                    size={20}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>

                    {/* CARRUSEL */}

                    <div
                        ref={carouselRef}
                        aria-label="Listado de certificaciones"
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {certifications.map((certification, index) => (
                            <motion.article
                                key={certification.credentialId}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                }}
                                className="flex w-[85%] flex-none snap-start flex-col rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-blue-500/30 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] xl:w-[calc(25%-12px)]"
                            >
                                {/* ICONO Y PLATAFORMA */}

                                <div className="mb-5 flex items-center justify-between gap-3">
                                    <div className="rounded-lg bg-blue-500/10 p-2.5 text-blue-400">
                                        <Award
                                            size={20}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-400">
                                        {certification.platform}
                                    </span>
                                </div>

                                {/* NOMBRE */}

                                <h4 className="mb-3 text-sm font-semibold leading-relaxed text-white">
                                    {certification.name}
                                </h4>

                                {/* ENTRENADOR */}

                                {certification.trainer && (
                                    <p className="mb-3 text-xs text-gray-500">
                                        {certification.trainer}
                                    </p>
                                )}

                                {/* FECHA */}

                                <div className="mb-5 flex items-center gap-2 text-xs text-gray-400">
                                    <CalendarDays
                                        size={14}
                                        aria-hidden="true"
                                    />

                                    {certification.date}
                                </div>

                                {/* CREDENCIAL */}

                                <div className="mt-auto border-t border-white/10 pt-4">
                                    <a
                                        href={certification.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Ver certificado: ${certification.name}`}
                                        className="inline-flex items-center gap-2 text-xs font-medium text-blue-400 transition-colors hover:text-blue-300"
                                    >
                                        Ver certificado

                                        <ExternalLink
                                            size={14}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                        Desliza horizontalmente para explorar todas las certificaciones.
                    </p>
                </motion.div>
            </div>

            {/* SEPARADOR */}

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-white/10"
            />
        </section>
    );
}

export default Education;
