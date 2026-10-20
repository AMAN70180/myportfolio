import { ChevronRight ,
    Layout } from "lucide-react";

export const Home = ({setIsActive}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-10 md:mt-0 w-full max-w-6xl mx-auto px-6">
      <div className="flex-1 text-center md:text-left space-y-6">
        <h2 className="text-cyan-500 font-semibold tracking-wider uppercase text-sm">
          Welcome to my space
        </h2>
        <h1 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Hi, I'm
          {" "}
          <span
            style={{
              background: "linear-gradient(to right, #22d3ee, #3b82f6)", // Cyan to Blue
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
           
            Aman Kaundal
          </span>
          </h1>
          
          <p className="text-lg font-semibold tracking-wide mt-2 text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
            I am a passionate Frontend Developer who loves building sleek,
            interactive, and high-performance web applications. Currently
            transforming ideas into real-world digital experiences.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-950 font-bold rounded-full
             hover:bg-cyan-400 transition-colors"  onClick={() => setIsActive('Project')}>
                View My Work <ChevronRight size={18} />
            </button>
            <button className="flex item-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-full
              hover:bg-gray-700 border border-gray-700 transition-colors  " onClick={()=>setIsActive("Contact")}>
                Contact Me
              </button>
          </div>
          

        
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-blue-500
         rounded-4xl blur-2xl opacity-100 md:opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
         style={{filter:'blur(40px)'}}></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-900 
            border border-gray-800 rounded-4xl overflow-hidden flex items-center justify-center
            transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-gray-600 flex flex-col items-center">
                  <img src="/photo.jpg"
                  alt="Aman Kaundal "
                  className=" absolute inset-0 w-full h-full object-cover rounded-4xl"/>
                    {/* <Layout size={64} className="mb-4 opacity-50"/>
                    <p>Your photo Here</p> */}
                </div>
            </div>
         
      </div>
    </div>
  );
};