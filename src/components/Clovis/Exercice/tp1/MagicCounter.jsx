import { useState } from "react"

export function MagicCounter() {
const [magicNumber, setMagicNumber] = useState(0)

    const theme = {
        backgroundColor: magicNumber % 5 === 0 && magicNumber !== 0 ? '#D4F1F4' : '#FDEDEC',
        borderRadius: '10px',
    };

    const mess = magicNumber % 5 === 0 && magicNumber ? '✨ Nombre magique atteint ! ✨' : ''

    return (
        <>
            <h1 style={ theme }>{ magicNumber }</h1>
            <button onClick={ () => setMagicNumber(magicNumber + 1) }>Augmenter</button>
            <button onClick={ () => setMagicNumber(magicNumber - 1) }>Diminuer</button>
            <button onClick={ () => setMagicNumber(0) }>Réinitialiser</button>
            <h2>{ mess }</h2>
        </>
    )
}