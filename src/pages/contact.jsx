import { Mail } from "lucide-react"
import { FaLinkedin,FaInstagram } from "react-icons/fa";
export const ContactView = ()=>{
    return(
        <div className="space-y-12 w-full max-w-3xl mx-auto text-center mt-10 md:mt-0">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white">Let's Connect</h2>
                <p className="text-gray-400 text-lg">
                    I'm currently looking for new oppurtunties .Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <a href="mailto:kaundelaman@gmail.com"
                   className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-800
                   rounded-2xl hover:border-cyan-500/50 hover:-translate-y-1 transition-all w-full md:w-auto">
                    <Mail className="text-cyan-400" size={24}/>
                    <span className="text-kg font-medium">Email Me</span>
                   </a>
                   <a href="https://linkedin.com/in/aman-kaundal-421644252"
                   target="_blank"
                   rel="norefferer"
                   className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-800
                   rounded-2xl hover:bg-gray-800 hover:border-blue-500/50 
                   hover:-translate-y-1 transition-all w-full md:w-auto">
                    <FaLinkedin className="text-blue-400" size={24}/>
                    <span className="text-lg font-medium">LinkedIn</span>
                   </a>
                   <a href="https://instagram.com/_kaundal_001"
                   target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-gray-900 
                    border border-gray-800 rounded-2xl hover:bg-gray-800 
                    hover:border-pink-500/50 hover:-translate-y-1 transition-all w-full md:w-auto">
                        <FaInstagram className="text-pink-500" size={24}/>
                        <span className="text-lg font-medium">Instragram</span>
                   </a>
                 </div>
                 <p className="text-shadow-gray-600 mt-16 text-sm">
                     Designed and built with React & Tailwind CSS.
                 </p>
        </div>
    )
}