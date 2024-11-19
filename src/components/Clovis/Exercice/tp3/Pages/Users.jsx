import { useState, useEffect } from "react";
import axios from "axios";

export function Users() {
    const [ data, setData] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.org/users")
                setData(response.data)
                setLoading(false)

            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])

    if(loading)
        return (<p>Chargement en cours</p>)

    return (
        <div>
            <h1>Listes des emails :</h1>
            <ul>
                { data.map((item) => (
                    <li key={item.id}>{item.email}</li>
                ))}
            </ul>
        </div>
    )
}