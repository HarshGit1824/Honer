function Card() {
    const Heading = {
        color: "red",
        fontWeight: "bold"
    }
    return (
        <div className="card">
            <img src="https://placehold.co/100"/>
            <h1 style={Heading}>Heading {10+10}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur maxime excepturi, voluptatum optio asperiores eveniet perspiciatis consectetur pariatur deserunt vero, laudantium, id corporis? Doloribus delectus autem molestias consectetur unde temporibus.</p>
            <button>Click me!</button>
        </div>
    );
}

export default Card;