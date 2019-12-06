import React from 'react';
import Item from './Item';

const Players = props => {
    return (
        <div>
            {props.players.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    );
};

export default Players;
