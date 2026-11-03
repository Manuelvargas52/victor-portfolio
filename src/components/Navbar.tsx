
import { useEffect, useState } from 'react';
import {
    Menu,
    X,
    Code2,
    BriefcaseBusiness,
    Mail,
} from 'lucide-react';

const links = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
    { name: 'Experiencia', href: '#experiencia', id: 'experiencia' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
    { name: 'Formación', href: '#formacion', id: 'formacion' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
];

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Manuelvargas52',
        icon: Code2,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/manuel-vargas-639914266',
        icon: BriefcaseBusiness,
    },
    {
        name: 'Correo electrónico',
        href: 'mailto:manuelvargasr9@gmail.com',
        icon: Mail,
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const updateActiveSection = () => {
            const marker = window.innerHeight * 0.35;
            let currentSection = links[0].id;

            for (const link of links) {
                const section = document.getElementById(link.id);

                if (!section) continue;

                const rect = section.getBoundingClientRect();

                if (rect.top <= marker && rect.bottom > marker) {
                    currentSection = link.id;
                    break;
                }

                if (rect.top <= marker) {
                    currentSection = link.id;
                }
            }

            // Marcar Contacto al llegar al final de la página.
            const reachedBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            if (reachedBottom) {
                currentSection = links[links.length - 1].id;
            }

            setActiveSection(currentSection);
        };

        updateActiveSection();

        window.addEventListener('scroll', updateActiveSection, {
            passive: true,
        });

        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, []);

    const closeMenu = () => setMenuOpen(false);

    const getLinkClasses = (id: string) => `
        relative text-sm transition-colors duration-300
        ${
            activeSection === id
                ? 'text-blue-400 font-semibold'
                : 'text-gray-400 hover:text-white'
        }
    `;

    return (
        <nav
            aria-label="Navegación principal"
            className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#080b14]/80 backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#inicio"
                    onClick={closeMenu}
                    aria-label="Victor, ir al inicio"
                    className="text-xl font-bold tracking-tight"
                >
                    VICTOR<span className="text-blue-500">.</span>
                </a>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            aria-current={
                                activeSection === link.id
                                    ? 'location'
                                    : undefined
                            }
                            className={getLinkClasses(link.id)}
                        >
                            {link.name}

                            {activeSection === link.id && (
                                <span className="absolute -bottom-2 left-0 w-full h-0.5 rounded-full bg-blue-400" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Social links */}
                <div className="hidden md:flex items-center gap-4">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target={
                                href.startsWith('mailto:')
                                    ? undefined
                                    : '_blank'
                            }
                            rel={
                                href.startsWith('mailto:')
                                    ? undefined
                                    : 'noopener noreferrer'
                            }
                            aria-label={name}
                            title={name}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Icon size={20} aria-hidden="true" />
                        </a>
                    ))}

                    <a
                        href="#contacto"
                        onClick={closeMenu}
                        className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all"
                    >
                        Hablemos
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? (
                        <X size={25} aria-hidden="true" />
                    ) : (
                        <Menu size={25} aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* Mobile navigation */}
            <div
                id="mobile-navigation"
                hidden={!menuOpen}
                className="md:hidden bg-[#080b14] border-t border-white/10 px-6 py-5"
            >
                <div className="flex flex-col">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={closeMenu}
                            aria-current={
                                activeSection === link.id
                                    ? 'location'
                                    : undefined
                            }
                            className={`block py-3 transition-colors ${
                                activeSection === link.id
                                    ? 'text-blue-400 font-semibold'
                                    : 'text-gray-300 hover:text-blue-400'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex gap-5 pt-4 border-t border-white/10">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target={
                                href.startsWith('mailto:')
                                    ? undefined
                                    : '_blank'
                            }
                            rel={
                                href.startsWith('mailto:')
                                    ? undefined
                                    : 'noopener noreferrer'
                            }
                            aria-label={name}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Icon size={21} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
