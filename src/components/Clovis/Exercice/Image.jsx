export function Image({isLoggedIn}) {
    return (
        <>
            {isLoggedIn ? <img src="https://www.zoologiste.com/images/main/lama.jpg" alt="Lama" /> : <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1" alt="Kangourou" />}
        </>
    )
}