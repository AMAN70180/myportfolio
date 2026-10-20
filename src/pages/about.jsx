import { Terminal,Database,Code2,Layout } from "lucide-react";
export const About = ()=>{
     const skills = [
    { name: 'React.js', icon: <Terminal size={20} />, color: 'text-blue-400' },
    { name: 'Redux Toolkit', icon: <Database size={20} />, color: 'text-purple-400' },
    { name: 'JavaScript (ES6+)', icon: <Code2 size={20} />, color: 'text-yellow-400' },
    { name: 'HTML5', icon: <Layout size={20} />, color: 'text-orange-400' },
    { name: 'CSS3 / Tailwind', icon: <Layout size={20} />, color: 'text-cyan-400' },
  ];
    return(
        <div className="space-y-12 w-full max-w-4xl mx-auto">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-white ">About Me  </h2>
                <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full "></div>
                 </div>
                <div className="bg-grey-900/50 border border-gray-800 p-8
                rounded-3xl  leading-relaxed text-gray-300 text-lg shadow-xl">
                    <p className="mb-6">
                         I am a dedicated UI/UX enthusiast and Frontend Developer with a strong focus on building responsive, user-centric web applications. My journey in tech is driven by a constant curiosity to learn new tools and frameworks.
                    </p>
                    <p>
                                  When I'm not coding or fixing bugs, you can find me working out, practicing guitar, or exploring new creative ideas. I believe that writing code is like building muscles—consistency and good form (architecture) are the keys to success

                    </p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white">My Arsenal </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        skills.map((skill,index)=>(
                            <div key={index} className="flex items-center gap-3 bg-gray-900 border
                            border-gray-800 px-6 py-4 rounded-2xl hover:border-cyan-500/50 
                            hover:by-gray-800 transition-all cursor-default">
                                <span className={skill.color}>{skill.icon}</span>
                                <span className="font-medium">{skill.name}</span>
                                
                            </div>
                        ))
                    }
                    </div>
                </div>
           

        </div>
    )
}