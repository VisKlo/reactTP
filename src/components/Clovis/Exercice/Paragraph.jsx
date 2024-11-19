export function Paragraph({isLoggedIn}) {
    return (
        <>
            {isLoggedIn ? <p>Hello</p> : <p>Goodbye</p>}
        </>
    );
}