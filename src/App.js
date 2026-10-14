import { useState } from 'react';
import './App.css';
import DarkTheme from './components/DarkTheme/DarkTheme'
import LightTheme from './components/LightTheme/LightTheme'

function App(){

  const [theme, setTheme] = useState('dark')

  const [enterTask, setEnterTask] = useState('')
  
  const [saveTask, setSaveTask] = useState([])

  const [navMode, setNavMode] = useState('all')

  return(
      <>
        {theme === 'dark' ? (
        <DarkTheme
          saveTask = {saveTask}
          enterTask = {enterTask}
          navMode = {navMode}

          setTheme = {setTheme}
          setSaveTask = {setSaveTask}
          setEnterTask = {setEnterTask}
          setNavMode = {setNavMode}
        />
        ) : (
          <LightTheme
            saveTask = {saveTask}
            enterTask = {enterTask}
            navMode = {navMode}

            setTheme = {setTheme}
            setSaveTask = {setSaveTask}
            setEnterTask = {setEnterTask}
            setNavMode = {setNavMode}
          />
        )}
      </>
      
  );
}

export default App;
