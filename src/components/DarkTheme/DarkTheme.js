import React from 'react'
import './DarkTheme.css'
import sun from '../../img/icon-sun.svg'
import cross from '../../img/icon-cross.svg'

const DarkTheme = ({
    enterTask,
    allTask,
    navMode,
    activeTask,
    completedTask,

    setTheme,
    setEnterTask,
    setAllTask,
    setNavMode,
    setActiveTask,
    setCompletedTask,
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
                            setAllTask(prev => [...prev, enterTask])
                            setActiveTask(prev => [...prev, enterTask])
                        }} 
                        className='blockContentDark__wrapper_inputBlock_addButton'
                    >Add Task</button>
                </div>

                <div className='blockContentDark__wrapper_contentBlock'>

                    <div className='blockContentDark__wrapper_contentBlock_content'>
                        {navMode === 'all' ? (
                            <>
                                {allTask.map((item, index) => (
                                    <div className='blockContentDark__wrapper_contentBlock_content_visibleAllTask'>
                                        <div className='blockContentDark__wrapper_contentBlock_content_visibleAllTask_circle'></div>
                                        <div className='blockContentDark__wrapper_contentBlock_content_visibleAllTask_contentAndDelet'>
                                            <p onClick={() => {
                                                setCompletedTask(prev => [...prev, item])
                                                setActiveTask(currentItem => currentItem.filter(task => task !== item))
                                            }}>{item}</p>
                                            <img src={cross}/>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : navMode === 'active' ? (
                            <>
                                {activeTask.map((item, index) => (
                                    <div className='blockContentDark__wrapper_contentBlock_content_visibleActiveTask'>
                                        <div className='blockContentDark__wrapper_contentBlock_content_visibleActiveTask_circle'></div>
                                        <div className='blockContentDark__wrapper_contentBlock_content_visibleActiveTask_contentAndDelet'>
                                            <p onClick={() => {
                                                setCompletedTask(prev => [...prev, item])
                                                setActiveTask(currentItem => currentItem.filter(task => task !== item))
                                            }}>{item}</p>
                                            <img src={cross}/>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : navMode === 'completed' ? (
                            <>
                                {completedTask.map((item, index) => (
                                    <div className='blockContentDark__wrapper_contentBlock_content_visibleCompletedTask'>
                                        <div className='blockContentDark__wrapper_contentBlock_content_visibleCompletedTask_circle'></div>
                                        <div className='blockContentDark__wrapper_contentBlock_content_visibleCompletedTask_contentAndDelet'>
                                            <p onClick={() => {
                                                setCompletedTask(prev => [...prev, item])
                                                setActiveTask(currentItem => currentItem.filter(task => task !== item))
                                            }}>{item}</p>
                                            <img src={cross}/>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : null}
                    </div>

                    <div className='blockContentDark__wrapper_contentBlock_navBlock'>
                        <div className='blockContentDark__wrapper_contentBlock_navBlock_count'>
                            {navMode === 'all' ? (
                                allTask.length
                            ) : navMode === 'active' ? (
                                activeTask.length
                            ) : navMode === 'completed' ? (
                                completedTask.length
                            ) : null} items left
                        </div>
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
                        <button className='blockContentDark__wrapper_contentBlock_navBlock_clearCompleted' 
                            onClick={() => {
                                setCompletedTask([])
                                setAllTask(prev => prev.filter(task => !completedTask.includes(task)))
                            }}
                            
                        >Clear Completed</button>
                    </div>
                </div>
            </div>
            <p className='blockContentDark__footerText'>Drag and drop to reader list</p>
        </div>
    </div>
  )
}

export default DarkTheme