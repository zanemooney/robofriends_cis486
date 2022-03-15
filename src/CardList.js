import React from "react";
import Card from "./Card";
import Button from "./Button";

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            up={robots[i].up}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;