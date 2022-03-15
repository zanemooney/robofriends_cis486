import React from "react";
import { GoMarkGithub } from "react-icons/go";

const BoyDevs = () => {
    return (
        <div className="flex flex-column">
            <a className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' href="https://github.com/mjohnson7cd" target="_blank">
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Mark?size=200x200`} />
                <div>
                    <h2>Mark Johnson</h2>
                    <GoMarkGithub /> @mjohnson7cd
                </div>
            </a>
            <a className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' href="https://github.com/zanemooney" target="_blank">
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Zane?size=200x200`} />
                <div>
                    <h2>Zane Mooney</h2>
                    <GoMarkGithub /> @zanemooney
                </div>
            </a>
        </div>
    );
}

export default BoyDevs;