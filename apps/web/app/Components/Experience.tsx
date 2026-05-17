
import { motion } from "motion/react";

export default function Experience() {

  const webkulTech = ["React", "Node.js", "Express.js","MongoDB", "Next.js", "RabbitMq", "Webhook", "Typesript"]

  return <section
    id="Experience"
    className="max-w-6xl mx-auto px-6 py-24"
  >
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <h2 className="text-4xl font-bold mb-1 text-white">
        Experience
      </h2>
      <p className="text-white/50 text-lg font-light max-w-xl">My professional journey and experience.</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative border-l border-white/10 ml-6 space-y-10">
      <div className="relative pl-10">
        <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black" />
        <div className="bg-[#18151c] border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white">
            Webkul Software Pvt. Ltd.
          </h3>
          <p className="text-cyan-400 mt-1">
            Software Engineer
          </p>
          <p className="text-sm text-white/50 mt-1">
            Jan 2023 - Jan 2026 • On Site
          </p>
          <p className="text-white/70 mt-4 leading-relaxed">
            Built multi-vendor applications, integration connectors, and a PAM (Platform Management System) to manage and automate e-commerce operations across Shopify, BigCommerce, Etsy, and SAP B1, along with custom solutions on Wix.
          </p>
          <div className="mt-5 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {webkulTech.map((tech)=>{
              return <div key={tech} className="flex text-center justify-center content-center items-center px-1 py-1 gap-2.5 rounded-xl bg-white/6 border border-white/6 hover:border-amber-500/20 transition-all duration-300 cursor-default">
              <span className="text-sm text-white/70 font-medium">{tech}</span>
            </div>
            })}
            
          </div>
        </div>
      </div>
    </motion.div>
  </section>
}