import { Calendar, CodeXml, icons, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { MdQueue } from "react-icons/md";
import { SiExpress, SiGit, SiMongodb, SiNextdotjs, SiPostgresql, SiRabbitmq, SiRedis, SiTailwindcss, SiTypescript  } from "react-icons/si";

export default function About() {
    const techStack = [
        {
            name: "React",
            icon: FaReact,
        },
        {
            name: "Node.js",
            icon: FaNodeJs,
        },
        {
            name: "Express.js",
            icon: SiExpress
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql
        },
        {
            name: "MongoDB",
            icon: SiMongodb
        },
        {
            name: "Next.js",
            icon: SiNextdotjs
        },
        {
            name: "Tailwind",
            icon: SiTailwindcss
        },
        {
            name: "Typescript",
            icon: SiTypescript
        },
        {
            name: "Git",
            icon: SiGit
        },
        {
            name: "RabbitMQ",
            icon: SiRabbitmq
        },
        {
            name: "Redis",
            icon: SiRedis
        },
        {
            name: "BullMQ",
            icon: MdQueue
        },
    ];
    return <section
        id="About"
        className="max-w-6xl mx-auto px-8 py-6"
    >
        <div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-6">
                <h2
                    className="text-4xl font-bold text-white">
                    About
                    <span className="text-cyan-400">
                        {" "}Me
                    </span>
                </h2>
                <p className="text-white/50 text-lg font-light max-w-xl"> Passionate about building modern,
                    scalable and interactive web experiences.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 flex flex-col md:flex-row gap-4"
            >
                <div className="w-full md:w-[70%] rounded-2xl bg-[#18151c] border border-white/10 px-10 py-10 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        I am a passionate Full Stack Developer with 3 years of experience
                        building modern, scalable, and user-focused web applications.

                        <br />
                        <br />

                        I enjoy transforming ideas into interactive digital experiences
                        with clean design, smooth performance, and intuitive user
                        interfaces. My focus is on creating applications that are both
                        visually appealing and highly functional.

                        <br />
                        <br />

                        I am always exploring new technologies, improving my problem-solving
                        skills, and building products that deliver real-world impact.

                    </p>
                </div>
                <div className="w-full md:w-[30%] flex flex-col justify-center items-center rounded-2xl bg-[#18151c] border border-white/10 px-10 py-10 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                    <Calendar className="text-cyan-400 mb-2" size={20} />
                    <div className="text-5xl md:text-6xl font-heading font-extrabold text-gradient mb-2">3
                        <span className="text-cyan-400">
                            {""}+
                        </span>
                    </div>
                    <p className="text-white/50 text-sm">Years of Experience</p>
                </div>
            </motion.div>
            {/* tech */}
            <div
                className="mb-6 flex flex-col md:flex-row gap-4"
            >
                <div className="w-full md:w-[70%] rounded-2xl bg-[#18151c] border border-white/10 px-10 py-10 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                    <div className="flex items-center gap-2 mb-6">
                        <CodeXml className="text-cyan-400" size={18} />
                        <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Tech Stack</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {techStack.map((tech) => {
                            const Icon = tech.icon;
                            return <div key={tech.name} className="flex text-center content-center items-center px-4 py-3 gap-2.5 rounded-xl bg-white/6 border border-white/6 hover:border-amber-500/20 transition-all duration-300 cursor-default">
                                <Icon className="text-5xl text-cyan-400 w-5 h-5" />
                                <span className="text-sm text-white/70 font-medium">{tech.name}</span>
                            </div>
                        })}
                    </div>
                </div>
                <div className="w-full md:w-[30%] flex flex-col justify-center items-center rounded-2xl bg-[#18151c] border border-white/10 px-10 py-10 shadow-[0_4px_24px_-1px_#0000004d,inset_0_1px_#ffffff08]">
                    <MapPin className="text-cyan-400 mb-2" size={18} />
                    <div className="text-5xl md:text-lg font-heading font-extrabold text-gradient mb-2">
                        <span className="text-cyan-400">
                            India
                        </span>
                    </div>
                    <p className="text-white/50 text-sm">Available for All Work Modes</p>
                </div>
            </div>
        </div>
    </section>
}