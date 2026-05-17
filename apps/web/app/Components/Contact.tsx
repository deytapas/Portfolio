import { link } from "fs";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
export default function Contact() {

    const media = [
        {
            icon: SlSocialLinkedin,
            link: "https://linkedin.com/in/tapas-dey-561838225"
        },
        {
            icon: SiGithub,
            link: "https://github.com/deytapas"
        },
        {
            icon: Mail,
            link: "mailto:deytapas734@gmail.com"
        },
        {
            icon: SiWhatsapp,
            link: "https://wa.me/917365005415"
        }
    ];
    return <section
        id="Contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
    >

        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >

            <h2 className="text-6xl font-bold text-cyan-400 mb-6">
                Contact Me
            </h2>

            <p className="text-gray-400 mb-8">
                Let's build something amazing together.
            </p>

            <a
                href="mailto:deytapas734@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-linear-to-r from-amber-400 to-orange-500 text-black font-semibold text-base shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_80px_rgba(245,158,11,0.6)] hover:scale-105 transition-all duration-500"
            >
                Send Message
                <ArrowUpRight size={18} />
            </a>

            <div className="flex mt-6 gap-2 justify-center items-center">
                {media.map((m) => {
                    const Icon = m.icon
                    return <a href={m.link} key={m.link} target="_blank" className=" p-2.5 rounded-full bg-white/3 border shadow-[0_0_40px_rgba(245,158,11,0.3)] border-white/5 hover:bg-white/8 hover:border-white/1 text-white/50 hover:text-white hover:shadow-[0_0_80px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-105">
                        <Icon className=" text-cyan-400" size={20} />
                    </a>
                })}
            </div>

        </motion.div>
    </section>
}