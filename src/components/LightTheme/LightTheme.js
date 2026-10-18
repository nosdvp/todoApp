import React from 'react'
import './LightTheme.css'
import moon from '../../img/icon-moon.svg'
import cross from '../../img/icon-cross.svg'

const LightTheme = ({
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
    setCompletedTask
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
                                setAllTask(prev => [...prev, enterTask])
                            }} 
                            className='blockContentLight__wrapper_inputBlock_addButton'>Add Task</button>
                    </div>

                    
                    <div className='blockContentLight__wrapper_contentBlock'>
                        <div className='blockContentLight__wrapper_contentBlock_content'>
                            {navMode === 'all' ? (
                                <>
                                    {allTask.map((item, index) => {
                                        const isCompleted = completedTask.includes(item)
                                            return (
                                                <div
                                                    key={index}
                                                    className={
                                                        isCompleted
                                                            ? 'blockContentLight__wrapper_contentBlock_content_visibleCompletedTask'
                                                            : 'blockContentLight__wrapper_contentBlock_content_visibleAllTask'
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                isCompleted
                                                                    ? 'blockContentLight__wrapper_contentBlock_content_visibleCompletedTask_circle'
                                                                    : 'blockContentLight__wrapper_contentBlock_content_visibleAllTask_circle'
                                                                        }
                                                                ></div>
                                                                <div
                                                                    className={
                                                                        isCompleted
                                                                            ? 'blockContentLight__wrapper_contentBlock_content_visibleCompletedTask_contentAndDelet'
                                                                            : 'blockContentLight__wrapper_contentBlock_content_visibleAllTask_contentAndDelet'
                                                                        }
                                                                    >
                                                                        <p onClick={() => {
                                                                            if(isCompleted){
                                                                                setCompletedTask(prev => prev.filter(task => task !== item))
                                                                                setActiveTask(prev => [...prev, item])
                                                                            }else{
                                                                                setCompletedTask(prev => [...prev, item])
                                                                                setActiveTask(prev => prev.filter(task => task !== item))
                                                                            }
                                                                        }}>
                                                                            {item}
                                                                        </p>
                                                                        <img
                                                                            src={cross}
                                                                            onClick={() => {
                                                                                setAllTask(prev =>
                                                                                    prev.filter(task => task !== item)
                                                                                )
                                                                                setActiveTask(prev =>
                                                                                    prev.filter(task => task !== item)
                                                                                )
                                                                                setCompletedTask(prev =>
                                                                                    prev.filter(task => task !== item)
                                                                                )
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                            )
                                        })}
                                        </>
                                        ) : navMode === 'active' ? (
                                        <>
                                            {activeTask.map((item, index) => (
                                                <div className='blockContentLight__wrapper_contentBlock_content_visibleActiveTask'>
                                                    <div className='blockContentLight__wrapper_contentBlock_content_visibleActiveTask_circle'></div>
                                                        <div className='blockContentLight__wrapper_contentBlock_content_visibleActiveTask_contentAndDelet'>
                                                            <p onClick={() => {
                                                                setCompletedTask(prev => [...prev, item])
                                                            }}>{item}</p>
                                                            <img src={cross}
                                                                onClick={() => {
                                                                    setAllTask(currentItem => currentItem.filter(task => task !== item))
                                                                    setActiveTask(currentItem => currentItem.filter(task => task !== item))
                                                                }}
                                                            />
                                                        </div>
                                                </div>
                                            ))}
                                        </>
                                        ) : navMode === 'completed' ? (
                                        <>
                                            {completedTask.map((item, index) => (
                                                <div className='blockContentLight__wrapper_contentBlock_content_visibleCompletedTask'>
                                                    <div className='blockContentLight__wrapper_contentBlock_content_visibleCompletedTask_circle'></div>
                                                        <div className='blockContentLight__wrapper_contentBlock_content_visibleCompletedTask_contentAndDelet'>
                                                            <p onClick={() => {
                                                                setCompletedTask(prev => [...prev, item])
                                                            }}>{item}</p>
                                                            <img src={cross}
                                                                onClick={() => setCompletedTask(currentItem => currentItem.filter(task => task !== item))}
                                                            />
                                                        </div>
                                                </div>
                                            ))}
                                    </>
                                ) : null}
                            </div>

                        <div className='blockContentLight__wrapper_contentBlock_navBlock'>
                            <div className='blockContentLight__wrapper_contentBlock_navBlock_count'>{allTask.length} items left</div>
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