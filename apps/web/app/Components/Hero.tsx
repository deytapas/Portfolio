
import { motion } from "motion/react"
export default function Hero() {
    return <section className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-6">

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

                <a
                    href="#projects"
                    className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                    View Projects
                </a>

                <a
                    href="https://drive.google.com/uc?export=download&id=1lLSSdNBAwLzDM-tpxBxtc7Fgg8iRL-hY" target="_blank"
                    className="border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
                >
                    Resume
                </a>

            </div>
        </motion.div>

        <div className="my-6 hidden md:flex">
            <motion.img
                src="/final.jpeg"
                alt="Tapas Dey"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-96 h-96 rounded-full object-cover border-amber-400 shadow-2xl"
            />
        </div>
    </section>
}