import  { Children }  from './Children'
import './style.css'

export function Parent() {
    // Ici un component qui appelle un component enfant (à savoir Children.jsx)
    // (mettre au moins une props + children)

    // DOIT ETRE VISIBLE DANS LA PAGE ! (prenez les dispositions nécessaires)

    return(
        <>
            <Children color="red">
                <ul>
                    <li>t</li>
                    <li>e</li>
                    <li>s</li>
                    <li>t</li>
                </ul>
            </Children>
        </>
    )
}