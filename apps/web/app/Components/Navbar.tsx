import { Menu, X } from "lucide-react";
import { useState } from "react"
import { motion } from "motion/react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Home");
    return <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 1,
            delay: 0.5,
        }}
        className="fixed top-0 left-0 w-full z-50 md:bg-[#0d0c10]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <h1 className="text-2xl text-white hover:text-amber-400 transition-colors duration-300 font-bold">
                Tapas.
            </h1>

            <div className="hidden md:flex gap-6 rounded-full bg-transparent border border-white/10 px-5 py-2 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`hover:text-amber-400 transition ${activeMenu === item ? "text-amber-400" : "text-white"
                            }`}
                        onClick={(e) => {
                            setActiveMenu((e.target as HTMLElement).textContent)
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>
            <div className="md:hidden">
                <button
                    className="md:hidden rounded-full  hover:text-amber-400 transition-colors duration-300 bg-transparent border border-white/10 p-2 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </div>
        {open && (
            <div className="md:hidden bg-[#0d0c10] items-center min-h-screen scroll-smoot px-6 py-4 flex flex-col gap-4">
                {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <motion.a
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={`text-3xl hover:text-amber-400 transition-colors duration-300 font-bold ${activeMenu === item ? "text-amber-400" : "text-white"}`}
                        onClick={(e) => {
                            setActiveMenu((e.target as HTMLElement).textContent)
                            setOpen(false)
                        }}
                    >
                        {item}
                    </motion.a>
                ))}
            </div>
        )}
    </motion.nav>
}