import { useState } from 'react';
import './App.css';
import DarkTheme from './components/DarkTheme/DarkTheme'
import LightTheme from './components/LightTheme/LightTheme'

function App(){

  const [theme, setTheme] = useState('dark')

  const [enterTask, setEnterTask] = useState('')
  
  const [saveTask, setSaveTask] = useState([])

  return(
      <>
        {theme === 'dark' ? (
        <DarkTheme
          saveTask = {saveTask}
          enterTask = {enterTask}

          setTheme = {setTheme}
          setSaveTask = {setSaveTask}
          setEnterTask = {setEnterTask}
        />
        ) : (
          <LightTheme
            saveTask = {saveTask}
            enterTask = {enterTask}

            setTheme = {setTheme}
            setSaveTask = {setSaveTask}
            setEnterTask = {setEnterTask}
          />
        )}
      </>
      
  );
}

export default App;
