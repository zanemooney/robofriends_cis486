import React from "react";
import { GoMarkGithub } from "react-icons/go";

const GirlDevs = () => {
    return (
        <div className="flex flex-column">
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Katrina?size=200x200`} />
                <div>
                    <h2>Katrina</h2>
                    <GoMarkGithub />
                </div>
            </div>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Melody?size=200x200`} />
                <div>
                    <h2>Melody</h2>
                </div>
            </div>
        </div>
    );
}

export default GirlDevs;