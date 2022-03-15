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
                    <a id={`${id}-up`} className="btnBG br3 pa3 ma2 grow bw2 shadow-5">
                        <GoArrowUp className="h2"/>
                    </a>
                    <h2 className="m-auto">75</h2>
                    <a id={`${id}-down`} className="btnBG br3 pa3 ma2 grow bw2 shadow-5">
                    <GoArrowDown className="h2"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;