
import { useState } from 'react';
import { motion } from 'motion/react';
import {
    Layers3,
    Code2,
    Check,
    Component,
    Sparkles,
    ExternalLink,
} from 'lucide-react';

import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';

// ======================================================
// CATÁLOGO DE PROYECTOS
// Para agregar proyectos nuevos, añade otro objeto aquí.
// ======================================================

const projects = [
    {
        id: 1,
        title: 'Sistema de reservas',
        category: 'Full Stack',
        description:
            'Aplicación web para gestionar reservas, consultar disponibilidad, modificar y cancelar registros mediante una API REST.',
        technologies: [
            'React',
            'TypeScript',
            'Java',
            'Spring Boot',
            'PostgreSQL',
        ],
        frontend:
            'Interfaces, formularios de reserva y consulta de disponibilidad.',
        backend:
            'API REST, endpoints, validaciones y lógica de negocio.',
        image: '/projects/sistema-reservas.png',
        github: '',
        demo: '',
    },
    {
        id: 2,
        title: 'Dashboard de analítica',
        category: 'Frontend',
        description:
            'Panel de visualización de información con indicadores, métricas y componentes reutilizables.',
        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
        ],
        frontend:
            'Dashboard responsive, tarjetas de indicadores y visualización de datos.',
        backend:
            'Preparado para conectarse con servicios y APIs externas.',
        image: '/projects/dashboard.png',
        github: '',
        demo: '',
    },
];

// ======================================================
// COMPONENTE PRINCIPAL
// ======================================================

function Projects() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');

    return (
        <section
            id="proyectos"
            aria-labelledby="projects-title"
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Fondo decorativo */}
            <div
                aria-hidden="true"
                className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ====================================== */}
                {/* ENCABEZADO */}
                {/* ====================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mb-16"
                >
                    <p className="text-blue-400 text-sm font-semibold tracking-[0.3em] uppercase">
                        Lo que he construido
                    </p>

                    <h2
                        id="projects-title"
                        className="text-4xl md:text-5xl font-bold mt-5"
                    >
                        Proyectos{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            destacados.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                        Proyectos y demostraciones que reflejan mi experiencia
                        en desarrollo frontend, arquitectura de componentes
                        y análisis de datos.
                    </p>
                </motion.div>

                {/* ====================================== */}
                {/* DESIGN SYSTEM SHOWCASE */}
                {/* ====================================== */}

                <motion.article
                    aria-labelledby="design-system-title"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid lg:grid-cols-2 gap-8 p-6 md:p-10 rounded-3xl bg-[#101522] border border-white/10 hover:border-blue-500/40 transition-all"
                >
                    {/* Información del proyecto */}
                    <div className="flex flex-col justify-center">

                        <div className="flex items-center gap-2 mb-6 flex-wrap">
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
                            className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6"
                        >
                            <Layers3
                                size={28}
                                className="text-blue-400"
                            />
                        </div>

                        <h3
                            id="design-system-title"
                            className="text-2xl md:text-3xl font-bold mb-4"
                        >
                            Design System Showcase
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-6">
                            Demostración de una biblioteca de componentes
                            reutilizables, construida con React y TypeScript.
                            Incluye elementos de interfaz diseñados para
                            mantener consistencia, reutilización y facilidad
                            de mantenimiento.
                        </p>

                        <ul
                            aria-label="Tecnologías utilizadas"
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {[
                                'React',
                                'TypeScript',
                                'Tailwind CSS',
                                'Lucide React',
                            ].map((tech) => (
                                <li
                                    key={tech}
                                    className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                            <Component
                                size={17}
                                aria-hidden="true"
                            />
                            Componentes reutilizables e interactivos
                        </div>
                    </div>

                    {/* Playground interactivo */}
                    <div
                        aria-label="Demostración interactiva de componentes"
                        className="rounded-2xl bg-[#080d18] border border-white/10 p-5 md:p-7"
                    >
                        <div className="flex items-center justify-between mb-7">
                            <div className="flex items-center gap-2">
                                <Code2
                                    size={18}
                                    className="text-blue-400"
                                    aria-hidden="true"
                                />

                                <span className="font-semibold text-sm">
                                    Component Playground
                                </span>
                            </div>

                            <span className="text-xs text-gray-500">
                                Live preview
                            </span>
                        </div>

                        <div className="space-y-7">

                            {/* Botones */}
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                                    Buttons
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        variant="primary"
                                        type="button"
                                        aria-pressed={buttonClicked}
                                        onClick={() =>
                                            setButtonClicked(!buttonClicked)
                                        }
                                    >
                                        {buttonClicked
                                            ? '¡Funciona!'
                                            : 'Primary'}
                                    </Button>

                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() =>
                                            setButtonClicked(false)
                                        }
                                    >
                                        Secondary
                                    </Button>
                                </div>

                                <p
                                    className="text-xs text-green-400 mt-3 flex items-center gap-2"
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

                            {/* Campo de texto */}
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">
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

                            {/* Badges */}
                            <div>
                                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">
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

                            {/* Footer del playground */}
                            <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-500 text-xs">
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

                {/* ====================================== */}
                {/* CATÁLOGO DE OTROS PROYECTOS */}
                {/* ====================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="max-w-3xl mb-10">
                        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
                            Mi trabajo
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Otros proyectos.
                        </h3>

                        <p className="text-gray-400 leading-relaxed">
                            Una selección de desarrollos y demostraciones que
                            reflejan mis conocimientos en frontend, backend y
                            desarrollo full stack.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
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
                                className="overflow-hidden rounded-2xl bg-[#101522] border border-white/10 hover:border-blue-500/40 transition-all"
                            >
                                {/* Imagen del proyecto */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-950 via-[#111827] to-purple-950">
                                    <img
                                        src={project.image}
                                        alt={`Vista previa de ${project.title}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(event) => {
                                            event.currentTarget.style.display =
                                                'none';
                                        }}
                                    />

                                    <div className="absolute top-4 left-4">
                                        <Badge variant="info">
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Información del proyecto */}
                                <div className="p-6">
                                    <h4
                                        id={`project-title-${project.id}`}
                                        className="text-xl font-bold mb-3"
                                    >
                                        {project.title}
                                    </h4>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Frontend y Backend */}
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <p className="text-blue-400 text-xs font-semibold uppercase mb-2">
                                                Frontend
                                            </p>

                                            <p className="text-gray-400 text-sm">
                                                {project.frontend}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-purple-400 text-xs font-semibold uppercase mb-2">
                                                Backend
                                            </p>

                                            <p className="text-gray-400 text-sm">
                                                {project.backend}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tecnologías */}
                                    <ul
                                        aria-label={`Tecnologías de ${project.title}`}
                                        className="flex flex-wrap gap-2 mb-6"
                                    >
                                        {project.technologies.map((tech) => (
                                            <li
                                                key={tech}
                                                className="px-2.5 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Enlaces */}
                                    {(project.github || project.demo) && (
                                        <div className="flex flex-wrap gap-3 pt-5 border-t border-white/10">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Ver código de ${project.title} en GitHub`}
                                                    className="flex-1 text-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium transition-colors"
                                                >
                                                    <Code2
                                                        size={16}
                                                        className="inline mr-2"
                                                        aria-hidden="true"
                                                    />
                                                    GitHub
                                                </a>
                                            )}

                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Ver demostración de ${project.title}`}
                                                    className="flex-1 text-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
                                                >
                                                    <ExternalLink
                                                        size={16}
                                                        className="inline mr-2"
                                                        aria-hidden="true"
                                                    />
                                                    Ver demo
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
