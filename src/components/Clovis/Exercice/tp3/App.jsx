import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Home } from "./Pages/Home"
import { Users } from "./Pages/Users"
import { Posts } from "./Pages/Posts"
import { Post } from "./Pages/Post"

export function App() {
return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/users" Component={Users} />
            <Route path="/posts" Component={Posts} />
            <Route path="/post/:id" Component={Post} />
        </Routes>
    </BrowserRouter>
)
}