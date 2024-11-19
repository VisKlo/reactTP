import './style.css'

export function Title({isLoggedIn}) {
    return (
        <>
            {isLoggedIn ? <h1 className="blue">Tu es connecté</h1> : <h1 className="red">Tu es déconnecté</h1>}
        </>
    )
}