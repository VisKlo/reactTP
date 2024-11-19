import { useState, useEffect } from "react";
import axios from "axios";

export function Users() {
    const [ users, setUsers] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.org/users")
                setUsers(response.data)
                setLoading(false)

            } catch (error) {
                console.error(error)
            }
        }
        fetchUsers()
    }, [])

    if(loading)
        return (<p>Chargement de la page</p>)

    return (
        <div>
            <h1>Listes des emails :</h1>
            <ul>
                { users.map((user) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </ul>
        </div>
    )
}