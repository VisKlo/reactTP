export function Children({ children, color }) {
    // Component enfant à appeler dans le component Parent, deux props:
    // - children
    // - comme vous souhaitez, libre

    return (
        <>
            <h1 className={color}>Test</h1>
            { children }
        </>
    )
}