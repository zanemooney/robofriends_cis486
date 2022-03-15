import React from "react";

const Card = ({name, id}) => {
    return (
        <div id={`${id}`} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={` https://robohash.org/set_set1/bgset_any/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="e-card-actions">
                    <button id={`${id}-up`} className="voteUp e-card-btn">
                        <img src='./assets/up.png' title="Up" alt="up"/>
                    </button>
                    <button id={`${id}-down`} className="voteDown e-card-btn">
                        <img src='./assets/down.png' title="Down" alt="down"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;