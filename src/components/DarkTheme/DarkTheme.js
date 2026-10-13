import React from 'react'
import './DarkTheme.css'
import sun from '../../img/icon-sun.svg'

const DarkTheme = ({
    enterTask,
    saveTask,

    setTheme,
    setEnterTask,
    setSaveTask,
}) => {
  return (
    <div className='wrapperDark'>
        <div className='titleIMGDark'></div>

        <div className='blockContentDark'>
            <div className='blockContentDark__wrapper'>
                <div className='blockContentDark__wrapper_titleBlock'>
                    <h1>TO DO</h1>
                    <img onClick={() => setTheme('light')} src={sun}/>
                </div>

                <div className='blockContentDark__wrapper_inputBlock'>
                    <div className='blockContentDark__wrapper_inputBlock_circle'></div>
                    <input
                        type='text'
                        placeholder='Enter your task'
                        value={enterTask}
                        onChange={(e) => setEnterTask(e.target.value)}
                        className='blockContentDark__wrapper_inputBlock_input'></input>
                    <button 
                        onClick={() => {
                            setEnterTask('')
                            setSaveTask(prev => [...prev, enterTask])
                        }} 
                        className='blockContentDark__wrapper_inputBlock_addButton'>Add Task</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DarkTheme