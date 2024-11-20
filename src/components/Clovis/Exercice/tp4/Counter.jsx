import { useDispatch } from "react-redux";
import { decrement, increment, reset, multiplier, diviser } from "./features/counter/counterSlice";

export function Counter() {
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(increment())}>Incrementer</button>
            <button onClick={() => dispatch(decrement())}>Decrementer</button>
            <button onClick={() => dispatch(multiplier())}>Multiplier par 2</button>
            <button onClick={() => dispatch(diviser())}>Diviser par 2</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}