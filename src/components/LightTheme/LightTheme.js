import React from 'react'
import './LightTheme.css'
import moon from '../../img/icon-moon.svg'

const LightTheme = ({
    enterTask,
    saveTask,
    navMode,

    setTheme,
    setEnterTask,
    setSaveTask,
    setNavMode,
}) => {
  return (
    <div className='wrapperLight'>
        <div className='titleIMGLight'></div>
            <div className='blockContentLight'>
                <div className='blockContentLight__wrapper'>
                    <div className='blockContentLight__wrapper_titleBlock'>
                        <h1>TO DO</h1>
                        <img onClick={() => setTheme('dark')} src={moon}/>
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

                    
                    <div className='blockContentLight__wrapper_contentBlock'>
                        <div className='blockContentLight__wrapper_contentBlock_content'>
                            {navMode === 'all' ? (
                                <></>
                            ) : navMode === 'active' ? (
                                <></>
                            ) : navMode === 'completed' ? (
                                <></>
                            ) : null}
                        </div>

                        <div className='blockContentLight__wrapper_contentBlock_navBlock'>
                            <div className='blockContentLight__wrapper_contentBlock_navBlock_count'>{saveTask.length} items left</div>
                            <div className='blockContentLight__wrapper_contentBlock_navBlock_navButton'>
                                <button 
                                    onClick={() => setNavMode('all')}
                                    className={navMode === 'all' ? 'blockContentLight__wrapper_contentBlock_navBlock_navButton_active' : 'blockContentLight__wrapper_contentBlock_navBlock_navButton_inactive'}
                                >All</button>
                                <button 
                                    onClick={() => setNavMode('active')}
                                    className={navMode === 'active' ? 'blockContentLight__wrapper_contentBlock_navBlock_navButton_active' : 'blockContentLight__wrapper_contentBlock_navBlock_navButton_inactive'}
                                >Active</button>
                                <button 
                                    onClick={() => setNavMode('completed')}
                                    className={navMode === 'completed' ? 'blockContentLight__wrapper_contentBlock_navBlock_navButton_active' : 'blockContentLight__wrapper_contentBlock_navBlock_navButton_inactive'}
                                >Completed</button>
                            </div>
                            <button className='blockContentLight__wrapper_contentBlock_navBlock_clearCompleted'>Clear Completed</button>
                        </div>
                    </div>
                </div>
                <p className='blockContentLight__footerText'>Drag and drop to reader list</p>
            </div>
        </div>
  )
}

export default LightTheme