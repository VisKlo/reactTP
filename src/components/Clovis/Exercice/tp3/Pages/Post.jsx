import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Post() {
    const { id } = useParams(); // Récupérer le param ID de mon url
    const [ post, setPost ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`); // https://jsonplaceholder.org/posts/3
                setPost(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        }

        fetchPost();
    } , [ id ])

    if (loading)
        return <p>Chargement en cours...</p>

    return(
    <>
        <h1>{ post.title }</h1>
        <p>{ post.content }</p>
    </>)
}