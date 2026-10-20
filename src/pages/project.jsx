import {ExternalLink, Layout} from "lucide-react"
import { FaGithub } from "react-icons/fa";
export const Projects = ()=>{
    return(
        <div className="space-y-12 w-full max-w-5xl mx-auto ">
            <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-white "> Feautered Projects </div>
                <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-gray-900/40 border border-gray-800 rounded-3xl 
                overflow-hidden hover:border-cyan-500/50 transition-colors shadow-2xl">
                    <div className="h-48 bg-linear-to-br from-gray-800 to-gray-900
                    flex items-center justify-center border-b border-gray-800
                    relative overflow-hidden">
                        <img src="/GuitarShopPreview.png"/>
                        {/* <span className="text-gray-500 font-medium z-10">Guitar Shop App Preview </span> */}
                        <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition"></div>
                    </div>
                    <div className="p-8 space-y-4">
                        <div className="flex justify-between item-start">
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400
                            transition-colors"> Acoustic Guitar Shop</h3>
                            <div className="flex items-center gap-4">
                                <a href="https://github.com/AMAN70180/Guitar-Shop" className="hover:text-white"><FaGithub size={20}/></a>
                            <a href="https://guitar-shop-demo-fronted.netlify.app/" className="hover:text-white"><ExternalLink size={20}/></a>
                            </div>
                            
                        </div>
                    </div>
                    <p className="text-gray-400 ml-2 text-sm leading-relaxed">
                         A fully functional E-Commerce web application built specifically for guitar enthusiasts. 
              It features dynamic product rendering, complex search and category filters, and a seamless shopping cart experience.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 ml-2">
                        <span className="text-xs font-medium px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">React</span>
                        <span className="text-xs font-medium px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">Redux Toolkit </span>
                        <span className="text-xs font-medium px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">Redux Toolkit </span>
                    </div>
                </div>
            
            <div className="group bg-gray-900/20 border border-gray-800 border-dashed
            rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center min-h-100">
                <Layout size={48} className="text-gray-700 mb-4"/>
                <h3 className="text-xl font-bold text-gray-500">Coming Soon </h3>
                <p className="text-gray-600 text-sm mt-2">Working on something awesome...</p>
            </div>
        </div>
        </div>
    )
}