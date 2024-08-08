import { Link } from 'react-router-dom';   
import { useState, useEffect } from 'react';  
import Image from "./Image/student.jpg";  
import DayMode from './RouterMode/DayMode';  
import NightMode from './RouterMode/NightMode';  

function Navbar() {  
    const [dayMode, setDayMode] = useState(true);  
    const [message, setMessage] = useState("Welcome to the Home page!");  

    const toggleMode = () => {  
        setDayMode(prevMode => !prevMode);  
    }  

    const handleLinkClick = (page) => {  
        setMessage(`Welcome to ${page} page!`);  
    }  

    useEffect(() => {  
        if (dayMode) {  
            document.body.classList.add('bg-white', 'text-black');   
            document.body.classList.remove('bg-black', 'text-white');   
        } else {  
            document.body.classList.remove('bg-white', 'text-black');   
            document.body.classList.add('bg-black', 'text-white');   
        }  
    }, [dayMode]);  

    return (  
        <div>  
            <nav className="flex justify-center items-center p-4 bg-black">  
                <div className="flex space-x-4 font-bold">   
                    <p className='text-yellow-400 text-2xl'>Ildizov Nodirbek</p>  
                    <img className='w-10 h-10 rounded-full' src={Image} alt="student" />   
                    <Link to="/" onClick={() => handleLinkClick("Home")} className="text-white bg-gray-600 px-[15px] py-[5px] rounded-lg hover:bg-gray-400">Home</Link>  
                    <Link to="/about" onClick={() => handleLinkClick("About")} className="text-white bg-gray-600 px-[15px] py-[5px] rounded-lg hover:bg-gray-400">About</Link>  
                    <Link to="/skills" onClick={() => handleLinkClick("Skills")} className="text-white bg-gray-600 px-[15px] py-[5px] rounded-lg hover:bg-gray-400">Skills</Link>  
                    <Link to="/projects" onClick={() => handleLinkClick("Projects")} className="text-white bg-gray-600 px-[15px] py-[5px] rounded-lg hover:bg-gray-400">Projects</Link>  
                    <Link to="/contacts" onClick={() => handleLinkClick("Contacts")} className="text-white bg-gray-600 px-[15px] py-[5px] rounded-lg hover:bg-gray-400">Contacts</Link>  
                    <div className="flex items-center space-x-2">  
                        <button onClick={toggleMode} className="focus:outline-none">  
                            {dayMode ? (  
                                <DayMode className="fill-current text-black" />  
                            ) : (  
                                <NightMode className="fill-current text-white" />  
                            )}  
                        </button>  
                    </div>  
                    <button className='py-[5px] px-[20px] text-[18px] bg-purple-600 rounded-lg hover:bg-purple-400 text-white'>Resume</button>  
                </div>   
            </nav>  
            <div className="text-center mt-52 text-5xl">  
                <p>{message}</p>  
            </div>  
        </div>  
    );  
}  

export default Navbar;