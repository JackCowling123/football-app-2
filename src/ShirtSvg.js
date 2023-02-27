import * as React from 'react';
import ShirtPlainSvg from "./ShirtPlainSvg";
import ShirtSleeveSvg from "./ShirtSleeveSvg";
import ShirtStripeSvg from "./ShirtStripeSvg";
import ShirtHoopSvg from "./ShirtHoopSvg";

function ShirtSvg(props) {
    let myPlayer = props.playerToChild;
    let myShirt = props.shirtToChild;
    const getShirtFromName = (myShirt) => {
        switch (myShirt) {
            case 'Plain':
                return <ShirtPlainSvg myPlayerNumber = {myPlayer.number}/>;
            case 'Raglan':
                return <ShirtSleeveSvg myPlayerNumber = {myPlayer.number}/>;
            case 'Striped':
                return <ShirtStripeSvg myPlayerNumber = {myPlayer.number}/>;
            case 'Hooped':
                return <ShirtHoopSvg myPlayerNumber = {myPlayer.number}/>;
        }
    }
    return (
        <div className="shirt-wrap">
            {getShirtFromName(myShirt)}
            <input
                id={myPlayer.id}
                className="player-name"
                type="text"
                value={myPlayer.name}
                onChange={props.handleNameChange}
                size="100"
            />
        </div>
    );
}

export default ShirtSvg;