
import { Counter } from "./Counter"
import { Count } from "./Count"
import { Provider } from "react-redux"
import { store } from "./app/store"


export function App() {
return (
    <Provider store={store}>
        <Counter />
        <Count />
    </Provider>
)
}