import { useSelector } from "react-redux"

export function Count() {
    const count = useSelector((state) => state.counter.value)
    const test = useSelector((state) => state.counter.object.test3)
    const name = useSelector((state) => state.counter.name)

    return(
        <div>
            <p>Valeur : { count }</p>
            <p>Test : { test }</p>
            <p>Nom : { name }</p>
        </div>
    )
}