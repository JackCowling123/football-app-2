import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ShirtSvg from './ShirtSvg.js';

class Pitch extends React.Component {
    handleNameChange = this.props.handleNameChange;
    render() {
        let thisIndex = this.props.idToChild;
        let thisFormation = formations[thisIndex].lineup;
        let thesePlayers = this.props.playersToChild;
        let thisPlayer = -1;
        return (
            thisFormation.map((player, index) => {
                let players = [...Array(player)];
                if (thisIndex === 1 && index === 4) {
                    return (
                        <div key={index} className="pitch-zone pz-trio">
                            {players.map(() => {
                                thisPlayer++
                                return (
                                    <ShirtSvg
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
                                    <ShirtSvg
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
                                    <ShirtSvg
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
                                    <ShirtSvg
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
                                        <ShirtSvg
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
                                    <ShirtSvg
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
                                    <ShirtSvg
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
                                    <ShirtSvg
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
                                    <ShirtSvg
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
                                    <ShirtSvg
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        players: [
            {id: 0, name: "John", number: 1},
            {id: 1, name: "Joe", number: 2},
            {id: 2, name: "Shelvy", number: 3},
            {id: 3, name: "Has", number: 4},
            {id: 4, name: "Nice", number: 5},
            {id: 5, name: "Ears", number: 6},
            {id: 6, name: "If", number: 7},
            {id: 7, name: "You", number: 8},
            {id: 8, name: "Look", number: 9},
            {id: 9, name: "Very", number: 10},
            {id: 10, name: "Closely", number: 11},
        ],
        id: 0,
        label: "3-1-4-2",
        lineup: [1, 3, 1, 4, 0, 2],
        hex: '#000099'
    };
  };

  handleFormationChange = (e) => {
      const index = e.target.value;
      this.setState(formations[index]);
  }

  handleColourChange = (e) => {
      const id = e.target.value;
      const colourArr = colours[id];
      this.setState({hex: colourArr.hex});
      document.documentElement.style.setProperty('--svg-colour', colourArr.hex);
      console.log(colourArr );
  }

  handleNumberChange = (e) => {
      const newValue = e.target.value;
      const players = this.state.players;
      const currentPlayer = players[e.target.id];
      currentPlayer.number = newValue;
      this.setState({currentPlayer});
  }

  handleNameChange = (e) => {
      const newValue = e.target.value;
      const players = this.state.players;
      const currentPlayer = players[e.target.id];
      currentPlayer.name = newValue;
      this.setState({currentPlayer});
      this.forceUpdate()
  }



  render() {
       return (
           <div className="App">
               <div className="sidebar">
                   <select onChange={this.handleFormationChange} >
                       <option>{this.state.label}</option>
                       {formations.map(({label}, index) => {
                               return (
                                   <option value={index}>{label}</option>
                               );
                           }
                       )}
                   </select>
                   <select onChange={this.handleColourChange} >
                       <option>{}</option>
                       {colours.map(({label}, index) => {
                               return (
                                   <option value={index}>{label}</option>
                               );
                           }
                       )}
                   </select>
                   {this.state.players.map(({name,number, id}) => {
                       return (
                           <div className="player-text-wrapper">
                               <input
                                   id={id}
                                   className="player-edit"
                                   type="text"
                                   value={number}
                                   onChange={this.handleNumberChange}
                               />
                               <input
                                   id={id}
                                   className="player-edit"
                                   type="text"
                                   value={name}
                                   onChange={this.handleNameChange}
                               />
                           </div>
                       );
                   })}
               </div>
               <div className="pitch-div">
                   <div className="pitch">
                       <Pitch
                           idToChild = {this.state.id}
                           colourToChild = {this.state.hex}
                           playersToChild = {this.state.players}
                           handleNameChange = {this.handleNameChange}
                       />
                   </div>
               </div>
           </div>
       );
  }
}

const formations = [
  {id: 0, label: "3-1-4-2", lineup: [1, 3, 1, 4, 0, 2]},
  {id: 1, label: "3-4-3", lineup: [1, 3, 0, 4, 2, 1]},
  {id: 2, label: "3-5-2", lineup: [1, 3, 0, 3, 2, 2]},
  {id: 3, label: "4-1-2-1-2 wide", lineup: [1, 4, 1, 2, 1, 2]},
  {id: 4, label: "4-1-2-1-2 narrow", lineup: [1, 4, 1, 2, 1, 2]},
  {id: 5, label: "4-1-4-1", lineup: [1, 4, 1, 4, 0, 1]},
  {id: 6, label: "4-2-3-1", lineup: [1, 4, 2, 0, 3, 1]},
  {id: 7, label: "4-2-4", lineup: [1, 4, 0, 2, 2, 2]},
  {id: 8, label: "4-3-3", lineup: [1, 4, 1, 2, 0, 3]},
  {id: 9, label: "4-4-1-1", lineup: [1, 4, 0, 4, 1, 1]},
  {id: 10, label: "4-4-2", lineup: [1, 4, 0, 4, 0, 2]},
  {id: 11, label: "5-3-2", lineup: [1, 3, 2, 3, 0, 2]},
  {id: 12, label: "5-4-1", lineup: [1, 5, 0, 4, 0, 1]}
]

const colours = [
    {label: "blue", hex: '#000099'},
    {label: "red", hex: '#ff0000'},
    {label: "yellow", hex: '#ffff00'},
    {label: "green", hex: '#009933'},
    {label: "pink", hex: '#ff00ff'},
    {label: "purple", hex: '#9900ff'},
]


export default App;
