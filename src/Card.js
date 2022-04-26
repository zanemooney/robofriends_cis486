import React from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
const axios = require('axios');


    

const Card = ({name, id}) => {
    
    function castVote(id, incAmount){
        const elementID=id+"-votes";
        document.getElementById(elementID).innerHTML = "Loading";
        let data = JSON.stringify({
            "collection": "robos",
            "database": "robofriends",
            "dataSource": "roboFriends",
            "filter" : {"id" : id},
            "update": { "$inc" : {"votes" : incAmount}}
        });         
        let config = {
            method: 'post',
            url: 'https://thingproxy.freeboard.io/fetch/https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/updateOne',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
            },
            data : data
        };
        axios(config)
            .then(() => document.getElementById(elementID).click())
            .catch(error => console.log(error));
    }

    function showVotes (id) {
        let data = JSON.stringify({
            "collection": "robos",
            "database": "robofriends",
            "dataSource": "roboFriends",
            "filter" : {"id" : id},
        });         
        let config = {
            method: 'post',
            url: 'https://thingproxy.freeboard.io/fetch/https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/findOne',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                let elementID=id+"-votes";
                let voteView = document.getElementById(elementID);
                voteView.innerHTML=JSON.stringify(response.data.document.votes);
            })
            .catch(error => console.log(error));
    }

    return (
        <div id={`${id}`} className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <img alt="robots" src={` https://robohash.org/set_set1/bgset_any/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="flex justify-around">
                    <GoArrowUp onClick={()=>castVote(id, 1)} className="btnBG br3 pa2 ma2 grow bw2 shadow-5"/>
                    <p id={`${id}-votes`} onClick={()=>showVotes(id)}>Loading</p>
                    <GoArrowDown onClick={()=>castVote(id, -1)} className="btnBG br3 pa2 ma2 grow bw2 shadow-5" />
                </div>
            </div>
        </div>
    );
}

export default Card;
