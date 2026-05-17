import { Menu, X } from "lucide-react";
import { useState } from "react"
import { motion } from "motion/react";

export default function Navbar({activeMenu, setActiveMenu,scrollToSection}:{
    activeMenu: string,
    setActiveMenu: (activeMenu: string) => void,
    scrollToSection: (id: string) => void
}) {
    const [open, setOpen] = useState(false);
    
    return <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 1,
            delay: 0.5,
        }}
        className="fixed top-0 left-0 w-full z-50">
        <div className={`max-w-6xl mx-auto px-8 py-6 md:px-6 md:py-4 flex justify-between items-center ${open === false ? "bg-transparent" : "bg-[#050405eb]"} `}>

            <h1 className="text-2xl text-white hover:text-amber-400 transition-colors duration-300 font-bold">
                Tapas.
            </h1>

            <div className="hidden md:flex gap-6 rounded-full bg-transparent border border-white/10 px-5 py-2 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <button
                        key={item}
                        // href={`#${item.toLowerCase()}`}
                        className={`hover:text-amber-400 font-semibold transition ${activeMenu === item ? "text-amber-400" : "text-white"
                            }`}
                        onClick={(e) => {
                            setActiveMenu((e.target as HTMLElement).textContent)
                            scrollToSection(item)
                        }}
                    >
                        {item}
                    </button>
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
            <div className="md:hidden bg-[#050405eb] items-center min-h-screen scroll-smoot px-6 py-4 flex flex-col gap-4">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <motion.button
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        key={item}
                        className={`text-3xl hover:text-amber-400 transition-colors duration-300 font-bold ${activeMenu === item ? "text-amber-400" : "text-white"}`}
                        onClick={(e) => {
                            setActiveMenu((e.target as HTMLElement).textContent)
                            scrollToSection(item)
                            setOpen(false)
                        }}
                    >
                        {item}
                    </motion.button>
                ))}
            </div>
        )}
    </motion.nav>
}