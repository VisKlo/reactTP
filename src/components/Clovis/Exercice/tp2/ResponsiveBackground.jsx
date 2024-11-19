import { useEffect, useState } from "react";

export function ResponsiveBackground() {
    const [bgColor , setBgColor] = useState(window.innerWidth >= 800 ? "#ADD8E6" : "#FFC0CB")
    const [width , setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setBgColor(window.innerWidth >= 800 ? "#ADD8E6" : "#FFC0CB")
        }

        window.addEventListener("resize", handleResize)
        

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div style={{backgroundColor : bgColor}} >
            <p>Largeur de la fenêtre : { width } px</p>
        </div>
    )
}