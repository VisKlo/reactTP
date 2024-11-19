import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"

export function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
            </Routes>
        </BrowserRouter>
    )
}