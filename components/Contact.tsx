'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, Instagram } from 'lucide-react'

// Ícone personalizado do WhatsApp
const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email - Luiz Gustavo',
      value: 'gustavo.nscto@gmail.com',
      href: 'mailto:gustavo.nscto@gmail.com',
      description: 'Envie um email diretamente'
    },
    {
      icon: Mail,
      title: 'Email - Gustavo Rodrigues',
      value: 'rgussttavo@gmail.com',
      href: 'mailto:rgussttavo@gmail.com',
      description: 'Contato da equipe'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/in/luiz-gustavoo',
      href: 'https://www.linkedin.com/in/luiz-gustavoo/',
      description: 'Conecte-se profissionalmente'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@Luizgv',
      href: 'https://github.com/Luizgv',
      description: 'Veja meus repositórios'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@luiz__g17',
      href: 'https://www.instagram.com/luiz__g17/profilecard/?igsh=ZTZ6cTBrN2plNW9x',
      description: 'Acompanhe meu dia a dia'
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: '11 963012725',
      href: 'https://wa.me/5511963012725',
      description: 'Fale comigo diretamente'
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'São Paulo, SP',
      href: '#',
      description: 'Disponível para oportunidades presenciais e remotas'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">Vamos Conversar</h2>
          <p className="section-subtitle">
            Tem um projeto em mente? Quer trocar ideias sobre tecnologia? 
            Estou sempre aberto a novas oportunidades e conexões.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                Informações de Contato
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                Estou disponível para discutir oportunidades de trabalho, projetos colaborativos 
                ou simplesmente trocar experiências sobre desenvolvimento e product management.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={20} className="lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm lg:text-base">
                      {contact.title}
                    </h4>
                    <p className="text-primary font-medium mb-1 text-base lg:text-lg">
                      {contact.value}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {contact.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-primary rounded-xl p-4 lg:p-6 text-white"
            >
              <div className="flex items-center mb-3 lg:mb-4">
                <MessageCircle size={24} className="lg:w-7 lg:h-7 mr-2 lg:mr-3" />
                <h4 className="text-lg lg:text-xl font-bold">Vamos criar algo incrível juntos!</h4>
              </div>
              <p className="opacity-90 leading-relaxed text-sm lg:text-base">
                Estou sempre interessado em novos desafios e oportunidades. 
                Se você tem uma ideia que pode fazer a diferença, vamos conversar!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-4 lg:p-8"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Envie uma Mensagem
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 lg:py-12"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <CheckCircle size={24} className="lg:w-8 lg:h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                  Obrigado pelo contato. Responderei em breve!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-sm lg:text-base"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-sm lg:text-base"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-sm lg:text-base"
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-vertical text-sm lg:text-base"
                    placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="lg:w-5 lg:h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 text-center">
                  * Campos obrigatórios. Responderei o mais breve possível.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
  