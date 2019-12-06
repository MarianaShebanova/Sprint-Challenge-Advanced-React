import React from 'react';

const Item = props => {
    return (
        <div className="player">
            <h3>{props.item.name}</h3>
            <h3>{props.item.country}</h3>
            <h3>{props.item.searches}</h3>
        </div>
    );
};

export default Item;