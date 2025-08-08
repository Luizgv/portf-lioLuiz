'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-width section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="space-y-3 lg:space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-primary font-medium text-base lg:text-lg"
              >
                Olá, eu sou
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Luiz{' '}
                <span className="gradient-text">Gustavo</span>
              </motion.h1>
              
              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300"
              >
                Desenvolvedor | Futuro Product Owner
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed px-4 lg:px-0"
            >
              Apaixonado por criar experiências digitais excepcionais e focado em me tornar um Product Owner estratégico. 
              Especializado em desenvolvimento front-end com visão de produto.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start px-4 lg:px-0"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center space-x-2 text-sm lg:text-base"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={18} className="lg:w-5 lg:h-5" />
                <span className="hidden sm:inline">Vamos criar algo incrível juntos</span>
                <span className="sm:hidden">Entrar em contato</span>
              </motion.a>
              
              <motion.a
                href="/cv-luiz-gustavo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Download size={18} className="lg:w-5 lg:h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-700 mx-4 lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">2+</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">10+</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Projetos Concluídos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Tecnologias</div>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/Perfil.jpg"
                  alt="Luiz Gustavo"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  priority
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-20 h-20 lg:w-32 lg:h-32 bg-indigo-400/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-300"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
