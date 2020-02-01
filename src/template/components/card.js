import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/all';


function Card(props) {

    // Anim reference
    let cardRef = useRef(null);

    //- Init Animation
    useEffect(() => {
        gsap.to(cardRef.current, { duration: 1.2, delay: props.index / 5, autoAlpha: 1, scale: 1, ease: "power4.out" });
    }, [props.index]);

    return (
        <div ref={cardRef} className="card">
            <div className="mainImg">
                <img src={props.url} alt="test" />
            </div>
            <div className="desc">
                {props.desc}
            </div>
        </div>
    )
}

export default Card;