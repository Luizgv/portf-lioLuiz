'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play, Calendar, Users, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'seiva',
      title: 'Seiva',
      subtitle: 'Plataforma Digital da Igreja',
      description: 'Site oficial da igreja Seiva, desenvolvido em dupla para comunicar missão, eventos e conteúdos à comunidade. Integrado com APIs do Google e YouTube para exibir transmissões ao vivo, vídeos e agenda atualizada automaticamente.',
      longDescription: 'O projeto Seiva foi desenvolvido em dupla (Luiz Gustavo e Gustavo Rodrigues) como plataforma digital oficial da igreja, para ampliar o alcance das ações no ambiente digital. O site apresenta informações institucionais, ministérios e está integrado com APIs do Google e YouTube, permitindo exibir transmissões ao vivo, vídeos recentes e agenda de eventos com atualizações automáticas.',
      category: 'Site Institucional',
      timeline: '1 mês',
      team: '2 desenvolvedores',
      status: 'Domínio em Negociação',
      features: [
        'Integração com APIs Google e YouTube',
        'Transmissões ao vivo automatizadas',
        'Agenda de eventos dinâmica',
        'Interface responsiva e moderna',
        'Conteúdo institucional e ministérios'
      ],
      // Note: Placeholder for GIF - replace with actual content
      media: {
        type: 'placeholder',
        content: '/project-seiva-demo.gif'
      },
      links: {
        live: 'https://seiva-demo.vercel.app',
        github: 'https://github.com/luizgustavo/seiva'
      }
    },
    {
      id: 'olima',
      title: 'Site do OLima',
      subtitle: 'Landing Page Institucional',
      description: 'Website institucional moderno e otimizado para conversão, desenvolvido em dupla com foco em performance e experiência do usuário. Implementação de práticas avançadas de SEO e design responsivo.',
      longDescription: 'O site do OLima foi desenvolvido em dupla (Luiz Gustavo e Gustavo Rodrigues) com foco total na experiência do usuário e otimização para conversões. Utilizamos técnicas avançadas de desenvolvimento front-end para criar uma landing page que não apenas impressiona visualmente, mas também entrega resultados mensuráveis.',
      category: 'Landing Page',
      timeline: '1 mês',
      team: '2 desenvolvedores',
      status: 'Domínio em Negociação',
      features: [
        'Design responsivo e moderno',
        'Animações fluidas e elegantes',
        'Otimização SEO avançada',
        'Performance otimizada (90+ Lighthouse)',
        'Formulários integrados'
      ],
      media: {
        type: 'gif',
        content: '/oLima (1).gif'
      },
      links: {
        live: 'https://olima.com.br',
        github: 'https://github.com/luizgustavo/olima-site'
      }
    }
  ]

  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Conheça alguns dos projetos que desenvolvemos, aplicando conhecimentos técnicos 
            para criar soluções digitais impactantes.
          </p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 lg:mb-12"
        >
          <div className="flex bg-white dark:bg-gray-700 rounded-lg p-1 shadow-md w-full max-w-sm lg:max-w-none lg:w-auto">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`px-3 lg:px-6 py-2 lg:py-3 rounded-md transition-all duration-300 font-medium text-sm lg:text-base flex-1 lg:flex-none ${
                  selectedProject.id === project.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Project Media */}
          <div className="order-1 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative rounded-xl overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-center justify-center">
                {selectedProject.media.type === 'gif' ? (
                  <img 
                    src={selectedProject.media.content}
                    alt={`${selectedProject.title} Demo`}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      // Fallback to placeholder if GIF doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                
                {/* Placeholder fallback */}
                <div className={`text-center text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 w-full h-full flex flex-col items-center justify-center rounded-xl ${selectedProject.media.type === 'gif' ? 'hidden' : ''}`}>
                  <Play size={48} className="lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 opacity-80" />
                  <p className="text-base lg:text-lg font-medium">Demo em Desenvolvimento</p>
                  <p className="text-xs lg:text-sm opacity-80 mt-1 lg:mt-2 px-4">
                    GIF demonstrativo será adicionado em breve
                  </p>
                </div>
                
                {/* Overlay for GIF */}
                <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play size={36} className="lg:w-12 lg:h-12 text-white" />
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-4 lg:mt-6">
                {selectedProject.links.live && (
                  <motion.a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center space-x-2 flex-1 text-sm lg:text-base"
                  >
                    <ExternalLink size={18} className="lg:w-5 lg:h-5" />
                    <span>Ver Projeto</span>
                  </motion.a>
                )}
                

              </div>
            </motion.div>
          </div>

          {/* Project Information */}
          <div className="order-2 lg:order-2 space-y-4 lg:space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 lg:mb-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <span className="px-2 lg:px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs lg:text-sm font-medium self-start sm:self-center">
                  {selectedProject.status}
                </span>
              </div>
              <p className="text-lg lg:text-xl text-primary font-medium mb-3 lg:mb-4">
                {selectedProject.subtitle}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
                {selectedProject.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-3 gap-3 lg:gap-4 py-3 lg:py-4 border-y border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <Calendar size={20} className="lg:w-6 lg:h-6 mx-auto text-primary mb-1 lg:mb-2" />
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Timeline</p>
                <p className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">{selectedProject.timeline}</p>
              </div>
              <div className="text-center">
                <Users size={20} className="lg:w-6 lg:h-6 mx-auto text-primary mb-1 lg:mb-2" />
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Equipe</p>
                <p className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">{selectedProject.team}</p>
              </div>
              <div className="text-center">
                <Code size={20} className="lg:w-6 lg:h-6 mx-auto text-primary mb-1 lg:mb-2" />
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Categoria</p>
                <p className="font-semibold text-gray-900 dark:text-white text-xs lg:text-sm">{selectedProject.category}</p>
              </div>
            </div>

                         

            {/* Key Features */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3 text-sm lg:text-base">
                Principais Funcionalidades
              </h4>
              <ul className="space-y-1 lg:space-y-2">
                {selectedProject.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 lg:space-x-3"
                  >
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Detailed Description */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3 text-sm lg:text-base">
                Sobre o Projeto
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs lg:text-sm">
                {selectedProject.longDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
