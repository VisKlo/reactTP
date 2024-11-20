import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export function Posts() {
    const [ posts, setPosts] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.org/posts")
                setPosts(response.data)
                setLoading(false)

            } catch (error) {
                console.error(error)
            }
        }
        fetchPosts()
    }, [])

    if(loading)
        return (<p>Chargement de la page</p>)

    return (
        <div>
            <h1>Listes des posts :</h1>
            <ul>
                { posts.map((post) => (
                    <Link key={post.id} to={`/post/${post.id}`}>
                        <li key={post.id}>{post.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}