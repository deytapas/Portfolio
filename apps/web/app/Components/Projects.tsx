import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
export default function Projects() {

    const projects = [{
        name: "Collaborative Drawing App",
        githHubUrl: "https://github.com/deytapas/DrawApp",
        description:
            "A real-time collaborative drawing application that allows multiple users to draw on the same canvas simultaneously with instant synchronization.",
        advantages: [
            "Enabled real-time multi-user collaboration with low-latency drawing sync for a seamless shared experience.",
            "Built on a scalable monorepo architecture ensuring high performance and smooth user experience."
        ],
        tech: ["Turborepo", "Next.js", "Express.js", "WebSockets (WS)", "Typescript", "PostgreSQL", "Prisma"],
    }];
    return <section
        id="Projects"
        className="max-w-6xl mx-auto px-6 py-10"
    >
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
        >
            <h2
                className="text-4xl font-bold mb-1 text-white"
            >
                Projects
            </h2>
            <p className="text-white/50 text-lg font-light max-w-xl">A collection of my work and projects.</p>
        </motion.div>
        <div className="grid md:grid-cols-1 gap-8">

            {projects.map((project) => {
                return <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900 flex flex-col p-6 rounded-2xl border border-zinc-800"
                    key={project.name}
                >
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg md:text-2xl font-semibold">
                            {project.name}
                        </h3>

                        <a href={project.githHubUrl} target="_blank" className=" p-2.5 rounded-full bg-white/3 border border-white/5 hover:bg-white/8 hover:border-white/1 text-white/50 hover:text-white transition-all duration-300">

                        <SiGithub className="text-cyan-400" size={20} />
                        
                        </a>

                    </div>

                    <p className="text-white/60 text-xl leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        {(project.advantages).map((advantage) => {
                            return <div key={advantage} className="flex items-center gap-2 mb-2">
                                <ChevronRight className=" text-cyan-400" size={18} />
                                <p className="">{advantage}</p>
                            </div>
                        })}
                    </div>
                    <div className="mt-5 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-3">
                        {project.tech.map((tech) => {
                            return <div key={tech} className="flex text-center justify-center content-center items-center px-1 py-1 gap-2.5 rounded-xl bg-white/6 border border-white/6 hover:border-amber-500/20 transition-all duration-300 cursor-default">
                                <span className="text-sm text-white/70 font-medium">{tech}</span>
                            </div>
                        })}

                    </div>
                </motion.div>
            })}

        </div>
    </section>

}