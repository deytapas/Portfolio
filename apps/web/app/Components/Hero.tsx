
import { ArrowDown, Download } from "lucide-react"
import { motion } from "motion/react"

interface menuType {
    activeMenu: string,
    setActiveMenu: (activeMenu: string) => void,
    scrollToSection: (id: string) => void
}

export default function Hero({ activeMenu, setActiveMenu, scrollToSection }: menuType) {
    return <section id="Home" className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-6">

        <div className="my-6 md:hidden">
            <motion.img
                src="/final.jpeg"
                alt="Tapas Dey"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-80 h-80 rounded-full object-cover border-amber-400 shadow-2xl"
            />
        </div>
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center "
        >

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-cyan-400">
                    Tapas Dey
                </span>
            </h1>

            <p className="mt-6 text-gray-400 text-2xl max-w-2xl mx-auto">
                Full Stack Developer
            </p>

            <div className="mt-8 flex justify-center gap-4">

                <button
                    onClick={(e) => {
                        setActiveMenu("Projects")
                        scrollToSection("Projects")
                    }}
                    className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                    <span className="flex gap-2 justify-center items-center">
                        View works <ArrowDown />
                    </span>
                </button>

                <a
                    href="https://drive.google.com/uc?export=download&id=1fYDZ9yBZbU_ogtVPFE16no0GhGug2o3e" target="_blank"
                    className="border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
                >
                    <span className="flex gap-2 justify-center items-center">
                        <Download size={18} /> Resume
                    </span>
                </a>

            </div>
        </motion.div>

        <div className="my-6 hidden md:flex justify-center">
            <motion.img
                src="/final.jpeg"
                alt="Tapas Dey"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-96 h-96 rounded-full object-cover shadow-2xl transition-transform duration-300"
            />
        </div>
    </section>
}