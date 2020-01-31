import React, { useState, useEffect } from 'react';
import Card from './components/card';

function Wall() {

    // Setting the useStates
    const [cards, setCards] = useState([]);
    const [load, setLoad] = useState(true);

    // Fetching data from API
    async function fetchCards() {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=100");
        const json = await response.json();

        setCards(json);
        setLoad(false);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    // Render
    if (load) {
        return (
            <h3>Loading...</h3>
        )
    } else {
        return (
            <main>
                {cards.map((card, index) =>
                    <Card key={index}
                        index={index}
                        url={card.url}
                        desc={card.title} />
                )}
            </main>
        )
    }
}


export default Wall;