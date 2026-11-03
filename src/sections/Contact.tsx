
import { motion } from 'motion/react';
import {
    Code2,
    BriefcaseBusiness,
    Mail,
    ArrowUpRight,
    Send,
} from 'lucide-react';

const socialLinks = [
    {
        name: 'GitHub',
        description: 'Conoce mis proyectos y repositorios',
        href: 'https://github.com/Manuelvargas52',
        icon: Code2,
    },
    {
        name: 'LinkedIn',
        description: 'Conectemos profesionalmente',
        href: 'https://www.linkedin.com/in/manuel-vargas-639914266',
        icon: BriefcaseBusiness,
    },
    {
        name: 'Correo electrónico',
        description: 'manuelvargasr9@gmail.com',
        href: 'mailto:manuelvargasr9@gmail.com',
        icon: Mail,
    },
];

const Contact = () => {
    return (
        <section
            id="contacto"
            aria-labelledby="contact-title"
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Iluminación decorativa */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]"
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
                        Hablemos
                    </p>

                    <h2
                        id="contact-title"
                        className="text-4xl md:text-5xl font-bold mt-5"
                    >
                        Construyamos algo{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            increíble.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Estoy abierto a nuevas oportunidades profesionales,
                        proyectos tecnológicos y colaboraciones. Si tienes
                        una propuesta, será un gusto conversar contigo.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Mensaje principal */}
                    <motion.article
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 md:p-10 rounded-3xl bg-[#101522] border border-white/10"
                    >
                        <div
                            aria-hidden="true"
                            className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-7"
                        >
                            <Send size={27} className="text-blue-400" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                            ¿Tienes una oportunidad?
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-8">
                            Me interesa participar en proyectos donde pueda
                            aportar mis conocimientos en desarrollo frontend,
                            arquitectura de componentes y construcción de
                            soluciones escalables.
                        </p>

                        <a
                            href="mailto:manuelvargasr9@gmail.com?subject=Contacto%20profesional"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all"
                        >
                            Enviarme un correo
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                    </motion.article>

                    {/* Enlaces profesionales */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-4"
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            const isExternal = social.href.startsWith('https://');

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={isExternal ? '_blank' : undefined}
                                    rel={isExternal ? 'noopener noreferrer' : undefined}
                                    aria-label={
                                        isExternal
                                            ? `${social.name}: abrir en una nueva pestaña`
                                            : `Enviar correo a ${social.description}`
                                    }
                                    className="flex items-center justify-between gap-4 p-6 rounded-2xl bg-[#101522] border border-white/10 hover:border-blue-500/40 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            aria-hidden="true"
                                            className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"
                                        >
                                            <Icon
                                                size={22}
                                                className="text-blue-400"
                                            />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                {social.name}
                                            </h3>

                                            <p className="text-sm text-gray-500 mt-1">
                                                {social.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        aria-hidden="true"
                                        className="text-gray-500 group-hover:text-blue-400 transition-colors"
                                    />
                                </a>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Footer */}
                <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Victor Manuel Vargas.
                        Todos los derechos reservados.
                    </p>

                    <p>
                        Diseñado y desarrollado con React + TypeScript.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
