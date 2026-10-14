import React from 'react'
import './DarkTheme.css'
import sun from '../../img/icon-sun.svg'

const DarkTheme = ({
    enterTask,
    saveTask,
    navMode,

    setTheme,
    setEnterTask,
    setSaveTask,
    setNavMode
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
                        className='blockContentDark__wrapper_inputBlock_addButton'
                    >Add Task</button>
                </div>

                <div className='blockContentDark__wrapper_contentBlock'>

                    <div className='blockContentDark__wrapper_contentBlock_content'>
                        {navMode === 'all' ? (
                            <></>
                        ) : navMode === 'active' ? (
                            <></>
                        ) : navMode === 'completed' ? (
                            <></>
                        ) : null}
                    </div>

                    <div className='blockContentDark__wrapper_contentBlock_navBlock'>
                        <div className='blockContentDark__wrapper_contentBlock_navBlock_count'>{saveTask.length} items left</div>
                        <div className='blockContentDark__wrapper_contentBlock_navBlock_navButton'>
                            <button 
                                onClick={() => setNavMode('all')}
                                className={navMode === 'all' ? 'blockContentDark__wrapper_contentBlock_navBlock_navButton_active' : 'blockContentDark__wrapper_contentBlock_navBlock_navButton_inactive'}
                            >All</button>
                            <button 
                                onClick={() => setNavMode('active')}
                                className={navMode === 'active' ? 'blockContentDark__wrapper_contentBlock_navBlock_navButton_active' : 'blockContentDark__wrapper_contentBlock_navBlock_navButton_inactive'}
                            >Active</button>
                            <button 
                                onClick={() => setNavMode('completed')}
                                className={navMode === 'completed' ? 'blockContentDark__wrapper_contentBlock_navBlock_navButton_active' : 'blockContentDark__wrapper_contentBlock_navBlock_navButton_inactive'}
                            >Completed</button>
                        </div>
                        <button className='blockContentDark__wrapper_contentBlock_navBlock_clearCompleted'>Clear Completed</button>
                    </div>
                </div>
            </div>
            <p className='blockContentDark__footerText'>Drag and drop to reader list</p>
        </div>
    </div>
  )
}

export default DarkTheme