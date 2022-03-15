import React from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

const Card = ({name, id}) => {
    return (
        <div id={`${id}`} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={` https://robohash.org/set_set1/bgset_any/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="e-card-actions">
                    <button id={`${id}-up`} className="voteUp e-card-btn">
                        <GoArrowUp />
                    </button>
                    <button id={`${id}-down`} className="voteDown e-card-btn">
                        <GoArrowDown />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;