import React from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";


const historyState = atom({
    key:"historyState",
    default:[]
})

const History = () => {
    const history = useRecoilValue(historyState)
    const setHistory = useSetRecoilState(historyState)

    const  sethis = () => {
        setHistory ( prv => [...prv, 'Value incremented by 1'])
    }
    
       
    return (
        <>
        <button onClick={sethis}>Set Value</button>
            {
                history.map( (item, i) => (
                    <div key={i}>
                        <ul >
                            <li>{item}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    )
}


export default History;