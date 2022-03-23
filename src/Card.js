import React from "react";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
const axios = require('axios');


const Card = ({name, id}) => {

    // function upVote (id) {
        
    // }
    


    return (
        <div id={`${id}`} className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={` https://robohash.org/set_set1/bgset_any/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <div className="flex justify-around">
                    <GoArrowUp onClick={
                        () => {
                            var data = JSON.stringify({
                                "collection": "robos",
                                "database": "robofriends",
                                "dataSource": "roboFriends",
                                "filter" : {"apiID" : id},
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
                                .then(function (response) {
                                    console.log(JSON.stringify(response.data)); // this line stores data; replace console.log with a variable and remove parenthesis
                                })
                                .catch(function (error) {
                                    console.log(error);
                                }); 
                        }
                    } className="btnBG br3 pa2 ma2 grow bw2 shadow-5"/>
                    <p>75</p>
                    <GoArrowDown onClick={
                        () => {
                            var data = JSON.stringify({
                                "collection": "robos",
                                "database": "robofriends",
                                "dataSource": "roboFriends",
                                "filter" : {"apiID" : id},
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
                                .then(function (response) {
                                    console.log(JSON.stringify(response.data)); // this line stores data; replace console.log with a variable and remove parenthesis
                                })
                                .catch(function (error) {
                                    console.log(error);
                                }); 
                        }
                    } className="btnBG br3 pa2 ma2 grow bw2 shadow-5" />
                </div>
            </div>
        </div>
    );
}

export default Card;
