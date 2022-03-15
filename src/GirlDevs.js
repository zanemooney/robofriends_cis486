import React from "react";
import { GoMarkGithub } from "react-icons/go";

const GirlDevs = () => {
    return (
        <div className="flex flex-column">
            <a className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' href="https://github.com/KatrinaYates" target="_blank">
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Katrina?size=200x200`} />
                <div>
                    <h2>Katrina Yates</h2>
                    <GoMarkGithub /> @KatrinaYates               
                </div>
            </a>
            <a className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' href="https://github.com/Meluvy" target="_blank">
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Melody?size=200x200`} />
                <div>
                    <h2>Melody Nolte</h2>
                    <GoMarkGithub /> @Meluvy
                </div>
            </a>
        </div>
    );
}

export default GirlDevs;