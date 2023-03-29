import React from 'react';
import ShirtSvg from "./ShirtSvg";

class Pitch extends React.Component {
    handleNameChange = this.props.handleNameChange;
    render() {
        let thisIndex = this.props.idToChild;
        let thisLineup = this.props.formations;
        let thesePlayers = this.props.playersToChild;
        let thisPlayer = -1;
        let thisShirtType = this.props.shirtType;
        return (
            thisLineup.map((player, index) => {
                let players = [...Array(player)];
                if (
                    ((thisIndex === 4) && (index === 2 || index === 3 || index === 4)) ||
                    ((thisIndex === 3) && (index === 2 || index === 4))
                )  {
                    return (
                        <div key={index} className="pitch-zone pz-padding pz-trio">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (
                    (thisIndex === 2 && index === 3) ||
                    (thisIndex === 11 && index === 1) ||
                    (thisIndex === 12 && index === 1)
                ) {
                    return (
                        <div key={index} className="pitch-zone pz-duo pz-padding">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 3 && index === 3) {
                    return (
                        <div key={index} className="pitch-zone pz-wide pz-padding">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (
                    (thisIndex === 1 && index === 4) ||
                    (thisIndex === 2 && index === 3) ||
                    (thisIndex === 4 && index === 3) ||
                    (player === 3)) {
                    return (
                        <div key={index} className="pitch-zone pz-trio">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 2 && index === 4) {
                    return (
                        <div key={index} className="pitch-zone pz-wide">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if ((thisIndex === 7 && index === 4) ||
                    (thisIndex === 11 && index === 2) ||
                    (thisIndex === 12 && index === 2)) {
                    return (
                        <div key={index} className="pitch-zone pz-wide">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if ((thisIndex === 2 && index === 3) || player === 2) {
                    return (
                        <div key={index} className="pitch-zone pz-duo">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                }    else if (player >= 1) {
                    return (
                        <div key={index} className="pitch-zone">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                        shirtToChild = {thisShirtType}
                                    />
                                );
                            })}
                        </div>
                    );
                }
            })
        );
    }
}

export default Pitch;