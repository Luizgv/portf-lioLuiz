'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Luizgv',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/luiz-gustavoo/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/luiz__g17/profilecard/?igsh=ZTZ6cTBrN2plNW9x',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:gustavo.nscto@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-width section-padding py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="space-y-3 lg:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg lg:text-xl font-bold gradient-text">Luiz Gustavo</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm leading-relaxed">
              Desenvolvedor apaixonado por criar experiências digitais excepcionais e focado em me tornar um Product Owner estratégico.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Links Rápidos</h4>
            <nav className="space-y-1 lg:space-y-2">
              {['Home', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-xs lg:text-sm"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3 lg:space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">Conecte-se Comigo</h4>
            <div className="flex space-x-3 lg:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 lg:p-2.5 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon size={18} className="lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0 text-center lg:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
            >
              © {currentYear} Luiz Gustavo. Feito com{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1 text-red-500"
              >
                <Heart size={14} className="lg:w-4 lg:h-4" fill="currentColor" />
              </motion.span>
              e Next.js
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm"
            >
              Desenvolvedor | Futuro Product Owner
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
