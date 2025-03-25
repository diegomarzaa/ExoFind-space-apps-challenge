// src/components/ayuda.js
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import BackToHome from './BackToHome'
import PageWrapper from './PageWrapper'

export default function Ayuda() {
  // Sample FAQ items
  const faqs = [
    {
      question: '¿Cómo inicio una misión?',
      answer:
        'Para comenzar una misión, ve a la sección "Niveles", elige un planeta desbloqueado y haz clic en "Iniciar Misión".',
    },
    {
      question: '¿Cómo aumento mi nivel?',
      answer:
        'Completa misiones, resuelve minijuegos y descubre nuevos exoplanetas para sumar experiencia. Cuando alcances la XP requerida, ¡tu nivel sube automáticamente!',
    },
    {
      question: '¿Es necesario estar conectado a internet?',
      answer:
        'Por ahora, sí. La mayoría de datos y validaciones se hacen en la nube. En futuras versiones, esperamos incluir un modo offline básico.',
    },
    {
      question: '¿Cómo consigo más logros?',
      answer:
        'Los logros están asociados a retos específicos, como "Explora 50 sistemas" o "Salva una civilización". Revisa la pestaña de Logros en tu Perfil para ver las metas.',
    },
  ]

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <PageWrapper>
      <BackToHome />

      <div className="z-10 text-center space-y-8 px-4 w-full max-w-4xl mx-auto">
        
        {/* Título principal */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'backOut', delay: 0.3 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Centro de Ayuda
        </motion.h1>

        {/* Descripción o introducción breve */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white text-md md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Aquí tienes respuestas a las dudas más comunes que surgen al explorar exoplanetas, 
          dominar minijuegos y subir de nivel. Si tu duda no aparece aquí, ¡no dudes en contactarnos!
        </motion.p>

        {/* Listado de FAQs */}
        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black bg-opacity-50 p-4 rounded-lg border border-white border-opacity-20 text-left"
            >
              <button
                className="w-full flex items-center justify-between text-white text-lg font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
