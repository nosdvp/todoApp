import { use, useEffect, useState } from 'react';
import './App.css';
import DarkTheme from './components/DarkTheme/DarkTheme'
import LightTheme from './components/LightTheme/LightTheme'

function App(){

  const [theme, setTheme] = useState('dark')

  const [enterTask, setEnterTask] = useState('')
  
  const [allTask, setAllTask] = useState(() => {
    const saveTasks = localStorage.getItem('tasks')

    return saveTasks ? JSON.parse(saveTasks) : []
  })
  
  const [activeTask, setActiveTask] = useState(() => {
    const saveTasks = localStorage.getItem('activeTasks')

    return saveTasks ? JSON.parse(saveTasks) : []
  })

  const [completedTask, setCompletedTask] = useState(() => {
    const saveTasks = localStorage.getItem('compTasks')

    return saveTasks ? JSON.parse(saveTasks) : []
  })

  const [navMode, setNavMode] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTask))
    localStorage.setItem('activeTasks', JSON.stringify(activeTask))
    localStorage.setItem('compTasks', JSON.stringify(completedTask))
  }, [allTask, activeTask, completedTask])

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
