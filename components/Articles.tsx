'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, PenTool, TrendingUp } from 'lucide-react'

const Articles = () => {
  // Placeholder articles - can be replaced with actual content
  const articles = [
    {
      id: 1,
      title: 'Como Transicionar de Desenvolvedor para Product Owner',
      excerpt: 'Minha jornada e aprendizados sobre como combinar conhecimentos técnicos com visão estratégica de produto.',
      category: 'Product Management',
      readTime: '8 min',
      date: '2024-01-15',
      image: '/article-po-transition.jpg',
      featured: true,
      tags: ['Product Owner', 'Carreira', 'Desenvolvimento']
    },
    {
      id: 2,
      title: 'Next.js vs React: Quando Usar Cada Um',
      excerpt: 'Análise comparativa entre React puro e Next.js, com exemplos práticos de casos de uso.',
      category: 'Desenvolvimento',
      readTime: '6 min',
      date: '2024-01-10',
      image: '/article-nextjs-react.jpg',
      featured: false,
      tags: ['React', 'Next.js', 'Frontend']
    },
    {
      id: 3,
      title: 'Design Systems: Por Que Todo Dev Deveria Se Importar',
      excerpt: 'Como design systems podem acelerar o desenvolvimento e melhorar a consistência dos produtos.',
      category: 'Design',
      readTime: '5 min',
      date: '2024-01-05',
      image: '/article-design-systems.jpg',
      featured: false,
      tags: ['Design Systems', 'UX/UI', 'Produtividade']
    }
  ]

  const categories = [
    { name: 'Todos', count: articles.length, active: true },
    { name: 'Product Management', count: 1, active: false },
    { name: 'Desenvolvimento', count: 1, active: false },
    { name: 'Design', count: 1, active: false }
  ]

  const upcomingTopics = [
    'Métricas de Produto que Todo Dev Deveria Conhecer',
    'TypeScript: Além do Básico',
    'Soft Skills para Desenvolvedores',
    'Como Criar Landing Pages de Alta Conversão'
  ]

  return (
    <section id="articles" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Artigos & Insights</h2>
          <p className="section-subtitle">
            Compartilho conhecimentos sobre desenvolvimento, product management e tecnologia.
          </p>
        </motion.div>

        {/* Article Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-0"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                category.active
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Featured Article */}
            {articles.filter(article => article.featured).map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 lg:h-64 bg-gradient-primary flex items-center justify-center">
                  {/* Placeholder for article image */}
                  <div className="text-white text-center">
                    <BookOpen size={36} className="lg:w-12 lg:h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-xs lg:text-sm opacity-80">Imagem do artigo</p>
                  </div>
                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                      Destaque
                    </span>
                  </div>
                </div>
                
                <div className="p-4 lg:p-6">
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="lg:w-4 lg:h-4" />
                      <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="lg:w-4 lg:h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-primary font-medium group-hover:gap-3 transition-all duration-300 text-sm lg:text-base"
                  >
                    Ler artigo completo
                    <ArrowRight size={14} className="lg:w-4 lg:h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}

            {/* Regular Articles */}
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
              {articles.filter(article => !article.featured).map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-36 lg:h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <PenTool size={24} className="lg:w-8 lg:h-8 text-primary opacity-60" />
                  </div>
                  
                  <div className="p-4 lg:p-5">
                    <div className="flex items-center gap-2 lg:gap-3 text-xs text-gray-600 dark:text-gray-400 mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300 leading-tight text-sm lg:text-base">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm mb-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <motion.button
                      whileHover={{ x: 3 }}
                      className="flex items-center text-primary text-xs lg:text-sm font-medium"
                    >
                      Ler mais
                      <ArrowRight size={12} className="lg:w-3.5 lg:h-3.5 ml-1" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-4 lg:p-6"
            >
              <div className="text-center mb-3 lg:mb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-2 lg:mb-3">
                  <TrendingUp size={20} className="lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm lg:text-base">
                  Newsletter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm">
                  Receba insights sobre tecnologia e product management.
                </p>
              </div>
              
              <form className="space-y-2 lg:space-y-3">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-3 lg:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent text-xs lg:text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-xs lg:text-sm py-2"
                >
                  Inscrever-se
                </motion.button>
              </form>
            </motion.div>

            {/* Upcoming Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-4 lg:p-6"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 text-sm lg:text-base">
                Próximos Artigos
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {upcomingTopics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 lg:space-x-3"
                  >
                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">
                      {topic}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="card p-4 lg:p-6"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 text-sm lg:text-base">
                Estatísticas
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm">Artigos publicados</span>
                  <span className="font-bold text-primary text-xs lg:text-sm">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm">Tempo médio de leitura</span>
                  <span className="font-bold text-primary text-xs lg:text-sm">6 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm">Categorias</span>
                  <span className="font-bold text-primary text-xs lg:text-sm">3</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
