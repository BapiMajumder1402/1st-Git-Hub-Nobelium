import React, { useContext } from 'react';
import { Listcontext } from './PostApi'
import app from './app.module.css'

export default function LeftApi() {
    const { show, handledetails } = useContext(Listcontext)
    return (
        <div className={app.left}>
            <h2 className={app.h}>Post list</h2>
            <table>
                {show.map((ele, index) => {
                    return (
                        <div className={app.ld}>
                            <tr key={ele.id}>
                                <td onClick={() => handledetails(ele.id)} className={app.click}>Title:{ele.title}</td>
                            </tr>
                        </div>
                    )

                })}
            </table>
        </div>

    )
}