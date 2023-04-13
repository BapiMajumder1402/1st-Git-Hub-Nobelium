import React, { useContext } from 'react'
import { Listcontext } from './PostApi'
import app from './app.module.css'


export default function RightApi() {

    const { show, currenitem } = useContext(Listcontext)
    return (
        <div className={app.right}>
            <h2 className={app.h}>Post Details</h2>

            <div>
                {show.filter((fitem) => fitem.id === currenitem).map((fditem) => {
                    return (

                        <div className={app.stick} >
                            <p className='id'> ID no : {fditem.id}</p>
                            <div className='data'>{fditem.body}</div>
                        </div>

                    )
                })}
            </div>



        </div>
    )
}