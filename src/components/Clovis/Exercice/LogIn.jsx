import { Title } from './Title';
import { Paragraph } from './Paragraph';
import { Image } from './Image';

export function LogIn() {

    const isLoggedIn = true

    return (
        <>
            <Title isLoggedIn={isLoggedIn} />
            <Paragraph isLoggedIn={isLoggedIn} />
            <Image isLoggedIn={isLoggedIn} />
        </>
    )
}