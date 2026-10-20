import './App.css'
import { useState } from 'react'
import { Home } from './pages/home';
import {About} from './pages/about';
import { Projects} from './pages/project'
import { ContactView } from './pages/contact';

const tabs = ["Home","About","Project","Contact"]


function App() {
  const [isActive,setIsActive] = useState("Home");
  const ViewHandeler = () =>{
    switch(isActive){
      case 'Home':
        return <Home setIsActive={setIsActive}/>
      case "About":
        return <About/>  
      case "Project":
        return <Projects/>
      case "Contact":
        return <ContactView/>
      default:
        return <Home setIsActive={setIsActive}/>     
    }
  }
  return(
    <>
    <div className='min-h-screen font-sans text-gray-200 bg-[#0a0a0a] '>
      <nav className=' fixed top-6 left-1/2  -translate-x-1/2 z-50 w-[90%] max-w-md md:max-w-lg'>
           <div className='flex items-center px-2 py-2  bg-gray-900/80 backdrop-blur-md border
            border-gray-800 rounded-full shadow-2xl shadow-cyan-900/10'>
              {
                tabs.map((tab,index)=>(
                  <button key={index}
                  onClick={()=>setIsActive(tab)}
                  className={`px-3 py-3 text-sm md:text-base font-medium 
                  rounded-full transition-all duration-300  w-1/4 text-center ${isActive == tab ? 
                  'bg-cyan-500 text-gray-950 shadow-lg shadow-cyan-500/20':
                  'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'}`}>
                    {tab}
                    </button>
                ))
              }

           </div>
      </nav>
      <main className='pt-32 pb-16 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-screen'>
        <div className='animate-in fade-in slide-in slide-in-from-bottom-4 duration-700'>
              {ViewHandeler()}
        </div>
      </main>

    </div>
    </>
  )
 
   
}
export default App