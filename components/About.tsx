'use client'

import { motion } from 'framer-motion'
import { Code, Target, Users, Lightbulb, Award, BookOpen } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Excelência Técnica',
      description: 'Comprometido com código limpo, boas práticas e soluções escaláveis que fazem a diferença.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Orientado por objetivos claros e entregas que geram valor real para usuários e negócios.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Acredito no poder do trabalho em equipe e na comunicação efetiva para alcançar grandes resultados.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e abordagens criativas para resolver problemas complexos.'
    }
  ]

  const journey = [
    {
      icon: BookOpen,
      title: 'Formação Acadêmica',
      description: 'Estudante do último semestre em Tecnologia em Análise e Desenvolvimento de Sistemas pelo Senac.',
      period: '2022 - 2025'
    },
    {
      icon: Code,
      title: 'Experiência Prática',
      description: 'Desenvolvimento de projetos reais como Seiva e site do Olima em equipe (Luiz Gustavo e Gustavo Rodrigues), aplicando conhecimentos técnicos.',
      period: '2023 - Presente'
    },
    {
      icon: Award,
      title: 'Especialização',
      description: 'Foco em desenvolvimento front-end e interesse crescente em Product Management.',
      period: '2024 - Futuro'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça minha jornada, valores e o que me motiva a criar soluções digitais excepcionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Minha História
            </h3>
            
            <div className="space-y-3 lg:space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base">
              <p>
                Sou um profissional apaixonado por tecnologia, atualmente no último semestre do curso de 
                Tecnologia em Análise e Desenvolvimento de Sistemas pelo Senac. Minha jornada na programação 
                começou com a curiosidade de entender como as coisas funcionam por trás das telas.
              </p>
              
              <p>
                Com foco especial em desenvolvimento front-end, tenho me dedicado a criar experiências 
                digitais que não apenas funcionam bem, mas também encantam os usuários. Minha experiência 
                prática inclui projetos como o Seiva e o site do Olima, desenvolvidos em equipe com meu 
                parceiro Gustavo Rodrigues, onde pudemos aplicar conhecimentos técnicos em situações reais.
              </p>
              
              <p>
                Meu interesse crescente em Product Owner reflete minha visão de que a tecnologia deve 
                servir às pessoas. Combino minha base técnica sólida com capacidade analítica e visão 
                estratégica para criar produtos digitais que realmente fazem a diferença.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:gap-3">
              {['Focado', 'Organizado', 'Comprometido', 'Estratégico', 'Analítico'].map((trait) => (
                <motion.span
                  key={trait}
                  whileHover={{ scale: 1.05 }}
                  className="px-2 lg:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs lg:text-sm font-medium"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Minha Jornada
            </h3>
            
            <div className="space-y-4 lg:space-y-6">
              {journey.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">{item.title}</h4>
                      <span className="text-xs lg:text-sm text-primary font-medium flex-shrink-0">{item.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Meus Valores
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card p-4 lg:p-6 text-center group"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={24} className="lg:w-7 lg:h-7 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 lg:mb-3 text-sm lg:text-base">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
