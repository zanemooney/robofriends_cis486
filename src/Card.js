import React from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

const Card = ({name, id}) => {
    return (
        <div id={`${id}`} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={` https://robohash.org/set_set1/bgset_any/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="flex justify-around">
                    <GoArrowUp id={`${id}-up`} className="btnBG br3 pa2 ma2 grow bw2 shadow-5"/>
                    <p>75</p>
                    <GoArrowDown id={`${id}-down`} className="btnBG br3 pa2 ma2 grow bw2 shadow-5" />
                </div>
            </div>
        </div>
    );
}

export default Card;