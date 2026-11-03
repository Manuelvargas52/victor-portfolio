
import { motion, useReducedMotion } from 'motion/react';
import {
    ArrowUpRight,
    Download,
    Code2,
    Terminal,
} from 'lucide-react';

const technologies = [
    'Angular',
    'React',
    'TypeScript',
    'Stencil',
    'JavaScript',
    'Java',
];

function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const entranceTransition = {
        duration: shouldReduceMotion ? 0 : 0.8,
    };

    return (
        <section
            id="inicio"
            aria-labelledby="hero-title"
            className="relative min-h-screen flex items-center px-6 pt-28 overflow-hidden"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="absolute top-20 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px]"
            />

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[130px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Main introduction */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={entranceTransition}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
                        <span
                            aria-hidden="true"
                            className={`w-2 h-2 rounded-full bg-green-400 ${shouldReduceMotion ? '' : 'animate-pulse'
                                }`}
                        />
                        Disponible para nuevas oportunidades
                    </span>

                    <p className="text-blue-400 font-semibold tracking-[0.3em] text-sm mt-10">
                        HOLA, SOY
                    </p>

                    <h1
                        id="hero-title"
                        className="text-5xl md:text-7xl font-bold tracking-tight mt-4"
                    >
                        Victor Manuel
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                            Vargas.
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300 mt-7">
                        Software Engineer
                        <span className="text-blue-500"> | </span>
                        Frontend & Design Systems Developer
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">
                        Ingeniero de Sistemas especializado en el desarrollo de
                        aplicaciones web, Design Systems y arquitecturas de
                        componentes reutilizables. Me apasiona transformar
                        problemas complejos en soluciones digitales escalables.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <a
                            href="#proyectos"
                            className="flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition-all hover:-translate-y-1"
                        >
                            Ver proyectos
                            <ArrowUpRight size={19} aria-hidden="true" />
                        </a>

                        <a
                            href="/Victor_Manuel_Vargas_CV.pdf"
                            download="Victor_Manuel_Vargas_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all"
                        >
                            <Download size={19} aria-hidden="true" />
                            Descargar CV
                        </a>
                    </div>

                    <div className="mt-14">
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">
                            Stack tecnológico
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Decorative code illustration */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: shouldReduceMotion ? 0 : 1,
                    }}
                    aria-hidden="true"
                    className="hidden lg:flex justify-center items-center"
                >
                    <div className="relative w-80 h-80">
                        <div
                            className={`absolute inset-0 rounded-full border border-blue-500/30 ${shouldReduceMotion ? '' : 'animate-[spin_20s_linear_infinite]'
                                }`}
                        />

                        <div
                            className={`absolute inset-8 rounded-full border border-purple-500/30 ${shouldReduceMotion ? '' : 'animate-[spin_15s_linear_infinite_reverse]'
                                }`}
                        />

                        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                            <div className="text-center">
                                <Code2 size={80} className="text-blue-400 mx-auto mb-5" />

                                <p className="text-2xl font-bold">
                                    Clean Code
                                </p>

                                <p className="text-gray-400 mt-2">
                                    Build. Create. Innovate.
                                </p>
                            </div>
                        </div>

                        <div className="absolute top-5 -right-5 p-4 bg-[#151b2b] border border-white/10 rounded-2xl">
                            <Terminal className="text-blue-400" size={28} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
