import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Home } from "./Pages/Home"
import { Users } from "./Pages/Users"

export function App() {
return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/users" Component={Users} />
        </Routes>
    </BrowserRouter>
)
}