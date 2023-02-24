import React from 'react';
import ShirtSvg from "./ShirtSvg";
import ShirtSleeveSvg from "./ShirtSleeveSvg";
import ShirtStripeSvg from "./ShirtStripeSvg";
import ShirtHoopSvg from "./ShirtHoopSvg";

class Pitch extends React.Component {
    handleNameChange = this.props.handleNameChange;
    render() {
        let thisIndex = this.props.idToChild;
        let thisLineup = this.props.formations;
        let thesePlayers = this.props.playersToChild;
        let thisPlayer = -1;
        return (
            thisLineup.map((player, index) => {
                let players = [...Array(player)];
                if (thisIndex === 1 && index === 4) {
                    return (
                        <div key={index} className="pitch-zone pz-trio">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 2 && index === 3) {
                    return (
                        <div key={index} className="pitch-zone pz-duo">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
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
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 3 && index === 3) {
                    return (
                        <div key={index} className="pitch-zone pz-wide">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 4 && index === 3) {
                    return (
                        <div key={index} className="pitch-zone pz-trio">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <div className="shirt-wrap">
                                        <ShirtHoopSvg
                                            playerToChild = {thesePlayers[thisPlayer]}
                                            handleNameChange = {this.handleNameChange}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 7 && index === 4) {
                    return (
                        <div key={index} className="pitch-zone pz-wide">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (thisIndex === 11 && index === 2) {
                    return (
                        <div key={index} className="pitch-zone pz-wide">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (player === 3) {
                    return (
                        <div key={index} className="pitch-zone pz-trio">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />

                                );
                            })}
                        </div>
                    );
                } else if (player === 2) {
                    return (
                        <div key={index} className="pitch-zone pz-duo">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
                                    />
                                );
                            })}
                        </div>
                    );
                } else if (player >= 1) {
                    return (
                        <div key={index} className="pitch-zone">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtHoopSvg
                                        playerToChild = {thesePlayers[thisPlayer]}
                                        handleNameChange = {this.handleNameChange}
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