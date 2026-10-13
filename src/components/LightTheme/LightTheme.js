import React from 'react'
import './LightTheme.css'
import moon from '../../img/icon-moon.svg'

const LightTheme = ({
    enterTask,
    saveTask,

    setTheme,
    setEnterTask,
    setSaveTask,
}) => {
  return (
    <div className='wrapperLight'>
        <div className='titleIMGLight'></div>
            <div className='blockContentLight'>
                <div className='blockContentLight__wrapper'>
                    <div className='blockContentLight__wrapper_titleBlock'>
                        <h1>TO DO</h1>
                        <img onClick={() => setTheme('light')} src={moon}/>
                    </div>
    
                    <div className='blockContentLight__wrapper_inputBlock'>
                        <div className='blockContentLight__wrapper_inputBlock_circle'></div>
                        <input 
                            className='blockContentLight__wrapper_inputBlock_input'
                            type='text'
                            placeholder='Enter your task'
                            value={enterTask}
                            onChange={(e) => setEnterTask(e.target.value)}  
                        ></input>
                        <button 
                            onClick={() => {
                                setEnterTask('')
                                setSaveTask(prev => [...prev, enterTask])
                            }} 
                            className='blockContentLight__wrapper_inputBlock_addButton'>Add Task</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LightTheme