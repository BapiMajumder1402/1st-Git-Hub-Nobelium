import React, { useEffect, useState, createContext  } from 'react'
import Axios from 'axios'
import LeftApi from './LeftApi'
import RightApi from './RightApi'
import a from './app.module.css'

export  const Listcontext = createContext(" ")

export default function Postapi() {
    const [currenitem, setCurrentitem] = useState(0)
    const [show, setshow] = useState([])
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setshow(res.data)
            })
    }, [])
    const value = {
        show,
        currenitem,
        handledetails,
    };
    //console.log(show)
    function handledetails(index) {
        setCurrentitem(index)
    }
    console.log(currenitem)

    return (
        <div className={a.main} style={{ display: "flex" }}>

            <Listcontext.Provider value={value}>

                <LeftApi />
                <RightApi />
            </Listcontext.Provider>

        </div>


    )
}
