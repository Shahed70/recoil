import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const countState = atom({
    key: "countState",
    default: 10
})
const selectorState = selector({
    key:"selectorState",
    get: ({get}) => {
        const counterState2 = get(countState);
        return counterState2 + 10;
    } 
})

const Counter1 = () => {
    const [count, setCount] = useRecoilState(countState)
    const inc = () => {
        setCount(oldCount => oldCount + 1)
    }
    const dec = () => {
        setCount(oldCount=> oldCount - 1)
    }

    const incByValue = (val) => {
        setCount(oldCount=> oldCount + val)
    }



  const counterState2 = useRecoilValue(selectorState)
    return (
        <>
            <h3>Count {count} time</h3>
            <h2>Count {counterState2}</h2>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={() => incByValue(5)}>Increment by value</button>
        </>

    )
}


export default Counter1