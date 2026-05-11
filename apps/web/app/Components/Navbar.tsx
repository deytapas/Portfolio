export default function Navbar() {
    return <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <h1 className="text-2xl text-white hover:text-amber-400 transition-colors duration-300 font-bold">
                Tapas.
            </h1>

            <div className="hidden md:flex gap-6 rounded-full bg-transparent border border-white/10 px-5 py-2 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                <a href="#home" className="hover:text-cyan-400 transition">
                    Home
                </a>
                <a href="#about" className="hover:text-cyan-400 transition">
                    About
                </a>

                <a href="#projects" className="hover:text-cyan-400 transition">
                    Projects
                </a>

                 <a href="#projects" className="hover:text-cyan-400 transition">
                    Experience
                </a>

                <a href="#contact" className="hover:text-cyan-400 transition">
                    Contact
                </a>
            </div>
        </div>
    </nav>
}