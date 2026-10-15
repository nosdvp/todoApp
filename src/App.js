import { useState } from 'react';
import './App.css';
import DarkTheme from './components/DarkTheme/DarkTheme'
import LightTheme from './components/LightTheme/LightTheme'

function App(){

  const [theme, setTheme] = useState('dark')

  const [enterTask, setEnterTask] = useState('')
  
  const [allTask, setAllTask] = useState([])
  const [activeTask, setActiveTask] = useState([])
  const [completedTask, setCompletedTask] = useState([])

  const [navMode, setNavMode] = useState('all')

  return(
      <>
        {theme === 'dark' ? (
        <DarkTheme
          allTask = {allTask}
          enterTask = {enterTask}
          navMode = {navMode}
          activeTask = {activeTask}
          completedTask = {completedTask}

          setTheme = {setTheme}
          setAllTask = {setAllTask}
          setEnterTask = {setEnterTask}
          setNavMode = {setNavMode}
          setActiveTask = {setActiveTask}
          setCompletedTask = {setCompletedTask}
        />
        ) : (
          <LightTheme
            allTask = {allTask}
            enterTask = {enterTask}
            navMode = {navMode}
            activeTask = {activeTask}
            completedTask = {completedTask}

            setTheme = {setTheme}
            setAllTask = {setAllTask}
            setEnterTask = {setEnterTask}
            setNavMode = {setNavMode}
            setActiveTask = {setActiveTask}
            setCompletedTask = {setCompletedTask}
          />
        )}
      </>
      
  );
}

export default App;
