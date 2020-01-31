import React from 'react';


function Card(props) {
    return (
        <div className="card">
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