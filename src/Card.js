import React from "react";
import { useEffect } from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
const axios = require('axios');


    

const Card = ({name, id}) => {
    
    return (
        <div id={`${id}`} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={` https://robohash.org/set_set1/bgset_any/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="flex justify-around">
                    <GoArrowUp onClick={
                        () => {
                            let elementID=id+"-votes";
                            document.getElementById(elementID).innerHTML = "Loading";
                            var data = JSON.stringify({
                                "collection": "robos",
                                "database": "robofriends",
                                "dataSource": "roboFriends",
                                "filter" : {"id" : id},
                                "update": { "$inc" : {"votes" : 1}}
                            });         
                            var config = {
                                method: 'post',
                                url: 'https://corsanywhere.herokuapp.com/https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/updateOne',
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
                    } className="btnBG br3 pa2 ma2 grow bw2 shadow-5"/>
                    <p id={`${id}-votes`} onClick={
                        () => {
                            let data = JSON.stringify({
                                "collection": "robos",
                                "database": "robofriends",
                                "dataSource": "roboFriends",
                                "filter" : {"id" : id},
                            });         
                            let config = {
                                method: 'post',
                                url: 'https://corsanywhere.herokuapp.com/https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/findOne',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
                                },
                                data : data
                            };
                            let elementID=id+"-votes";
                            axios(config)
                                .then(function (response) {
                                    document.getElementById(elementID).innerHTML=JSON.stringify(response.data.document.votes);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
                    }>error</p>
                    <GoArrowDown onClick={
                        () => {
                            let elementID1= id+"-votes";
                            document.getElementById(elementID1).innerHTML = "Loading";
                            var data = JSON.stringify({
                                "collection": "robos",
                                "database": "robofriends",
                                "dataSource": "roboFriends",
                                "filter" : {"id" : id},
                                "update": { "$inc" : {"votes" : -1}}
                            });         
                            var config = {
                                method: 'post',
                                url: 'https://corsanywhere.herokuapp.com/https://data.mongodb-api.com/app/data-pjnkk/endpoint/data/beta/action/updateOne',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'api-key': 'zqrxA3vvBjReuWuyOgUC6Lh32Vx5ax2AMJmwPw0SmR9BLoVU6Cd0cnyjqSoqgb2r'
                                },
                                data : data
                            };                            
                            axios(config)
                                .then(() => document.getElementById(elementID1).click())
                                .catch(error => console.log(error));
                        }
                    } className="btnBG br3 pa2 ma2 grow bw2 shadow-5" />
                </div>
            </div>
        </div>
    );
}

export default Card;
