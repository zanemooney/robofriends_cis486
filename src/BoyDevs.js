import React from "react";

const BoyDevs = ({id}) => {
    return (
        <div className="flex flex-column">
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Mark?size=200x200`} />
                <div>
                    <h2>Mark</h2>
                </div>
            </div>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt="robots" src={` https://robohash.org/set_set2/bgset_any/Zane?size=200x200`} />
                <div>
                    <h2>Zane</h2>
                </div>
            </div>
        </div>
    );
}

export default BoyDevs;