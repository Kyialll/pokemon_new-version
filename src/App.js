
import './App.css';
import {useState,useEffect} from "react"

import {Routes, Route} from "react-router-dom";

import MainPage from "./components/pages/MainPage/MainPage";
import About from "./components/pages/About/About";



const App=()=> {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }


    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}
                    className="button">
                Change theme
            </button>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </div>
    )
}


export default App;
