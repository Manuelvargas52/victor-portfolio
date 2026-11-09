
import { useState } from 'react';
import { motion } from 'motion/react';

import {
    Layers3,
    Code2,
    Check,
    Component,
    Sparkles,
    ExternalLink,
    Database,
    CalendarDays,
    Monitor,
} from 'lucide-react';

import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';

// ======================================================
// TIPOS
// ======================================================

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    frontend: string;
    backend: string;
    image: string;
    github: string;
    demo: string;
    highlights: string[];
}

// ======================================================
// CATÁLOGO DE PROYECTOS
// Para agregar proyectos nuevos, añade otro objeto aquí.
// ======================================================

const projects: Project[] = [
    {
        id: 1,
        title: 'Savora - Sistema de reservas',
        category: 'Full Stack',
        description:
            'Aplicación web para la gestión de reservas en restaurantes. Permite explorar establecimientos, consultar disponibilidad y administrar reservas mediante una arquitectura frontend y backend independiente.',

        technologies: [
            'React',
            'TypeScript',
            'Java 21',
            'Spring Boot',
            'PostgreSQL',
            'Tailwind CSS',
            'Vercel',
            'Render',
        ],

        frontend:
            'Interfaz responsive desarrollada con React y TypeScript. Incluye catálogo de restaurantes, consulta de disponibilidad, formularios de reserva y funcionalidades para consultar y gestionar reservas.',

        backend:
            'API REST desarrollada con Java y Spring Boot. Implementa lógica de negocio para gestionar reservas, validar disponibilidad y persistir la información de clientes y reservas en PostgreSQL.',

        image: '/projects/savora-home.png',

        github: 'https://github.com/Manuelvargas52/savora',
        demo: 'https://savora-blush.vercel.app/',

        highlights: [
            'Arquitectura frontend y backend independiente',
            'Integración mediante API REST',
            'Persistencia de información con PostgreSQL',
            'Gestión de reservas y disponibilidad',
            'Despliegue de frontend y backend',
        ],
    },

    {
        id: 2,
        title: 'Dashboard de analítica',
        category: 'Frontend',

        description:
            'Panel de visualización de información diseñado para presentar indicadores, métricas y datos de negocio mediante una interfaz organizada y componentes reutilizables.',

        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
        ],

        frontend:
            'Interfaz responsive con tarjetas de indicadores, organización visual de información y componentes reutilizables para facilitar la consulta de métricas.',

        backend:
            'Estructura preparada para integrarse con servicios y APIs externas que proporcionen información para los indicadores del dashboard.',

        image: '/projects/dashboard.png',

        github: '',
        demo: '',

        highlights: [
            'Visualización de indicadores',
            'Componentes reutilizables',
            'Diseño responsive',
            'Organización de información',
        ],
    },
];

// ======================================================
// CATEGORÍAS DINÁMICAS
// Solo aparecen las categorías que tienen proyectos.
// ======================================================

const getProjectFilters = (): string[] => {
    const categories = Array.from(
        new Set(projects.map((project) => project.category))
    );

    return ['Todos', ...categories];
};

// ======================================================
// COMPONENTE PRINCIPAL
// ======================================================

function Projects() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeFilter, setActiveFilter] = useState('Todos');

    const availableFilters = getProjectFilters();

    const filteredProjects =
        activeFilter === 'Todos'
            ? projects
            : projects.filter(
                (project) => project.category === activeFilter
            );

    return (
        <section
            id="proyectos"
            aria-labelledby="projects-title"
            className="relative overflow-hidden px-6 py-28"
        >
            {/* FONDO DECORATIVO */}

            <div
                aria-hidden="true"
                className="absolute left-0 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]"
            />

            <div
                aria-hidden="true"
                className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]"
            />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* ======================================================
                    ENCABEZADO
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Lo que he construido
                    </p>

                    <h2
                        id="projects-title"
                        className="mt-5 text-4xl font-bold md:text-5xl"
                    >
                        Proyectos{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            destacados.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-relaxed text-gray-400">
                        Proyectos y demostraciones que reflejan mi experiencia
                        en desarrollo frontend, backend, aplicaciones Full Stack
                        y construcción de interfaces reutilizables.
                    </p>
                </motion.div>

                {/* ======================================================
                    DESIGN SYSTEM SHOWCASE
                    Proyecto demostrativo independiente.
                ====================================================== */}

                <motion.article
                    aria-labelledby="design-system-title"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid gap-8 rounded-3xl border border-white/10 bg-[#101522] p-6 transition-all hover:border-blue-500/40 md:p-10 lg:grid-cols-2"
                >
                    {/* INFORMACIÓN */}

                    <div className="flex flex-col justify-center">

                        <div className="mb-6 flex flex-wrap items-center gap-2">
                            <Badge variant="info">
                                Proyecto demostrativo
                            </Badge>

                            <Badge
                                variant="info"
                                className="border-purple-500/20 bg-purple-500/10 text-purple-400"
                            >
                                Frontend
                            </Badge>
                        </div>

                        <div
                            aria-hidden="true"
                            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10"
                        >
                            <Layers3
                                size={28}
                                className="text-blue-400"
                            />
                        </div>

                        <h3
                            id="design-system-title"
                            className="mb-4 text-2xl font-bold md:text-3xl"
                        >
                            Design System Showcase
                        </h3>

                        <p className="mb-6 leading-relaxed text-gray-400">
                            Demostración de una biblioteca de componentes
                            reutilizables, construida con React y TypeScript.
                            Incluye elementos de interfaz interactivos que
                            permiten explorar principios de consistencia,
                            reutilización, accesibilidad y mantenibilidad
                            en el desarrollo frontend.
                        </p>

                        {/* TECNOLOGÍAS */}

                        <ul
                            aria-label="Tecnologías utilizadas"
                            className="mb-8 flex flex-wrap gap-2"
                        >
                            {[
                                'React',
                                'TypeScript',
                                'Tailwind CSS',
                                'Lucide React',
                            ].map((tech) => (
                                <li
                                    key={tech}
                                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                            <Component
                                size={17}
                                aria-hidden="true"
                            />

                            Componentes reutilizables e interactivos
                        </div>
                    </div>

                    {/* ======================================================
                        PLAYGROUND INTERACTIVO
                    ====================================================== */}

                    <div
                        aria-label="Demostración interactiva de componentes"
                        className="rounded-2xl border border-white/10 bg-[#080d18] p-5 md:p-7"
                    >
                        {/* HEADER */}

                        <div className="mb-7 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Code2
                                    size={18}
                                    className="text-blue-400"
                                    aria-hidden="true"
                                />

                                <span className="text-sm font-semibold">
                                    Component Playground
                                </span>
                            </div>

                            <span className="text-xs text-gray-500">
                                Live preview
                            </span>
                        </div>

                        <div className="space-y-7">

                            {/* BOTONES */}

                            <div>
                                <h4 className="mb-3 text-xs uppercase tracking-wider text-gray-500">
                                    Buttons
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        variant="primary"
                                        type="button"
                                        aria-pressed={buttonClicked}
                                        onClick={() =>
                                            setButtonClicked((previous) => !previous)
                                        }
                                    >
                                        {buttonClicked
                                            ? '¡Funciona!'
                                            : 'Primary'}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() => setButtonClicked(false)}
                                    >
                                        Secondary
                                    </Button>
                                </div>

                                <p
                                    className="mt-3 flex min-h-5 items-center gap-2 text-xs text-green-400"
                                    role="status"
                                    aria-live="polite"
                                >
                                    {buttonClicked && (
                                        <>
                                            <Check
                                                size={14}
                                                aria-hidden="true"
                                            />

                                            Interacción ejecutada correctamente.
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* INPUT */}

                            <div>
                                <h4 className="mb-3 text-xs uppercase tracking-wider text-gray-500">
                                    Input
                                </h4>

                                <Input
                                    id="component-name"
                                    label="Nombre del componente"
                                    value={inputValue}
                                    onChange={(event) =>
                                        setInputValue(event.target.value)
                                    }
                                    placeholder="Escribe algo..."
                                    helperText={
                                        inputValue
                                            ? `Valor ingresado: ${inputValue}`
                                            : 'Este campo permite ingresar texto.'
                                    }
                                />
                            </div>

                            {/* BADGES */}

                            <div>
                                <h4 className="mb-3 text-xs uppercase tracking-wider text-gray-500">
                                    Status badges
                                </h4>

                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="success">
                                        Success
                                    </Badge>

                                    <Badge variant="warning">
                                        Warning
                                    </Badge>

                                    <Badge variant="error">
                                        Error
                                    </Badge>

                                    <Badge variant="info">
                                        Information
                                    </Badge>
                                </div>
                            </div>

                            {/* FOOTER */}

                            <div className="flex items-center justify-between border-t border-white/10 pt-5">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <Sparkles
                                        size={14}
                                        className="text-purple-400"
                                        aria-hidden="true"
                                    />

                                    UI Components
                                </div>

                                <span className="text-xs text-gray-500">
                                    React + TypeScript
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.article>

                {/* ======================================================
                    CATÁLOGO DE PROYECTOS
                ====================================================== */}

                {projects.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20"
                    >
                        {/* ENCABEZADO */}

                        <div className="mb-10 max-w-3xl">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                                Mi trabajo
                            </p>

                            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                                Otros proyectos.
                            </h3>

                            <p className="leading-relaxed text-gray-400">
                                Explora mis desarrollos y demostraciones
                                clasificados por área tecnológica.
                            </p>
                        </div>

                        {/* FILTROS */}

                        {availableFilters.length > 1 && (
                            <div
                                className="mb-10 flex flex-wrap gap-3"
                                role="group"
                                aria-label="Filtrar proyectos por categoría"
                            >
                                {availableFilters.map((filter) => {
                                    const isActive = activeFilter === filter;

                                    return (
                                        <button
                                            key={filter}
                                            type="button"
                                            onClick={() => setActiveFilter(filter)}
                                            aria-pressed={isActive}
                                            className={`
                                                rounded-full border px-5 py-2.5
                                                text-sm font-medium transition-all duration-300
                                                ${isActive
                                                    ? 'border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white'
                                                }
                                            `}
                                        >
                                            {filter}
                                        </button>
                                    );
                                })}
                            </div>
                        )}

                        {/* CONTADOR */}

                        <div
                            className="mb-6 flex items-center justify-between"
                            aria-live="polite"
                        >
                            <p className="text-sm text-gray-500">
                                {activeFilter === 'Todos'
                                    ? 'Todos los proyectos'
                                    : `Categoría: ${activeFilter}`}
                            </p>

                            <span className="text-xs text-gray-500">
                                {filteredProjects.length}{' '}
                                {filteredProjects.length === 1
                                    ? 'proyecto'
                                    : 'proyectos'}
                            </span>
                        </div>

                        {/* TARJETAS */}

                        <div className="grid gap-6 md:grid-cols-2">

                            {filteredProjects.map((project, index) => (
                                <motion.article
                                    key={project.id}
                                    aria-labelledby={`project-title-${project.id}`}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#101522] transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/20"
                                >
                                    {/* IMAGEN */}

                                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-950 via-[#111827] to-purple-950">
                                        {project.image && (
                                            <img
                                                src={project.image}
                                                alt={`Vista previa de ${project.title}`}
                                                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                                loading="lazy"
                                                onError={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        )}

                                        <div className="absolute left-4 top-4">
                                            <Badge variant="info">
                                                {project.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* INFORMACIÓN */}

                                    <div className="p-6">

                                        <h4
                                            id={`project-title-${project.id}`}
                                            className="mb-3 text-xl font-bold"
                                        >
                                            {project.title}
                                        </h4>

                                        <p className="mb-6 text-sm leading-relaxed text-gray-400">
                                            {project.description}
                                        </p>

                                        {/* DETALLES TÉCNICOS */}

                                        <div className="mb-6 space-y-4">

                                            {/* FRONTEND */}

                                            <div>
                                                <div className="mb-2 flex items-center gap-2">
                                                    <Monitor
                                                        size={15}
                                                        className="text-blue-400"
                                                        aria-hidden="true"
                                                    />

                                                    <p className="text-xs font-semibold uppercase text-blue-400">
                                                        Frontend
                                                    </p>
                                                </div>

                                                <p className="text-sm leading-relaxed text-gray-400">
                                                    {project.frontend}
                                                </p>
                                            </div>

                                            {/* BACKEND */}

                                            <div>
                                                <div className="mb-2 flex items-center gap-2">
                                                    <Database
                                                        size={15}
                                                        className="text-purple-400"
                                                        aria-hidden="true"
                                                    />

                                                    <p className="text-xs font-semibold uppercase text-purple-400">
                                                        Backend
                                                    </p>
                                                </div>

                                                <p className="text-sm leading-relaxed text-gray-400">
                                                    {project.backend}
                                                </p>
                                            </div>
                                        </div>

                                        {/* CARACTERÍSTICAS */}

                                        <div className="mb-6">
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                Características principales
                                            </p>

                                            <ul className="space-y-2">
                                                {project.highlights.map((highlight) => (
                                                    <li
                                                        key={highlight}
                                                        className="flex items-start gap-2 text-sm text-gray-400"
                                                    >
                                                        <Check
                                                            size={15}
                                                            className="mt-0.5 shrink-0 text-green-400"
                                                            aria-hidden="true"
                                                        />

                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* TECNOLOGÍAS */}

                                        <ul
                                            aria-label={`Tecnologías de ${project.title}`}
                                            className="mb-6 flex flex-wrap gap-2"
                                        >
                                            {project.technologies.map((tech) => (
                                                <li
                                                    key={tech}
                                                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* ENLACES */}

                                        {(project.github || project.demo) && (
                                            <div className="flex flex-wrap gap-3 border-t border-white/10 pt-5">

                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Ver código de ${project.title} en GitHub`}
                                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/15"
                                                    >
                                                        <Code2
                                                            size={16}
                                                            aria-hidden="true"
                                                        />

                                                        GitHub

                                                        <ExternalLink
                                                            size={13}
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                )}

                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`Ver demostración de ${project.title}`}
                                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                                                    >
                                                        <CalendarDays
                                                            size={16}
                                                            aria-hidden="true"
                                                        />

                                                        Ver proyecto

                                                        <ExternalLink
                                                            size={13}
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* SEPARADOR */}

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-full bg-white/10"
            />
        </section>
    );
}

export default Projects;
