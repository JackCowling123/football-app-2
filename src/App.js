import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Pitch from "./Pitch";



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
        shirtArr: {label: "Plain", shirtCode: 'ShirtSvg'},
        lineup: [1, 3, 1, 4, 0, 2],
        hexPrim: '#000099',
        hexSec: '#000099',
        numberColour: {numPrime: '#000000', numSec: '#ffffff'}
    };
  };

  handleFormationChange = (e) => {
      const index = e.target.value;
      this.setState(formations[index]);
  }

    handleShirtChange = (e) => {
        const id = e.target.value;
        const shirtArr = shirtType[id];
        this.setState({shirtArr: shirtArr});
    }

  handleColourChange = (e) => {
      const id = e.target.value;
      const colourArr = colours[id];
      this.setState({hex: colourArr.hex});
      document.documentElement.style.setProperty('--svg-colour', colourArr.hex);
  }

  handleSecondColourChange = (e) => {
      const id = e.target.value;
      const colourArr = colours[id];
      this.setState({hex: colourArr.hex});
      document.documentElement.style.setProperty('--svg-second-colour', colourArr.hex);
  }

    handleNumberColourChange = (e) => {
        const id = e.target.value;
        const numbArr = numberColours[id];
        this.setState({numberColour: numbArr});
        document.documentElement.style.setProperty('--number-fill', numbArr.numPrime);
        document.documentElement.style.setProperty('--number-stroke', numbArr.numSec)
    }

  handleNumberChange = (e) => {
      const newValue = e.target.value;
      const players = this.state.players;
      const currentPlayer = players[e.target.id];
      currentPlayer.number = newValue;
      this.setState({currentPlayer});
      const digits = newValue.toString().split('');
      const realDigits = digits.map(Number);
  }

  handleNameChange = (e) => {
      const newValue = e.target.value;
      const players = this.state.players;
      const currentPlayer = players[e.target.id];
      currentPlayer.name = newValue;
      this.setState({currentPlayer});
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
                   <select onChange={this.handleShirtChange} >
                       <option>{}</option>
                       {shirtType.map(({label}, index) => {
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
                   <select onChange={this.handleSecondColourChange} >
                       <option>{}</option>
                       {colours.map(({label}, index) => {
                               return (
                                   <option value={index}>{label}</option>
                               );
                           }
                       )}
                   </select>
                   <select onChange={this.handleNumberColourChange} >
                       <option>{}</option>
                       {numberColours.map(({label}, index) => {
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
                           formations = {this.state.lineup}
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
    {label: "green", hex: '#009900'},
    {label: "pink", hex: '#ff00ff'},
    {label: "purple", hex: '#9900ff'},
    {label: "white", hex: '#ffffff'},
    {label: "black", hex: '#000000'},
]

const numberColours = [
    {label: "red", numPrime: '#ff0000', numSec: '#ffffff'},
    {label: "black", numPrime: '#000000', numSec: '#ffffff'},
    {label: "white", numPrime: '#ffffff', numSec: '#000000'},
    {label: "dark blue", numPrime: '#000066', numSec: '#ffffff'},
]

const shirtType = [
    {label: "Plain", shirtCode: 'ShirtSvg'},
    {label: "Raglan", shirtCode: 'ShirtSleeveSvg'},
    {label: "Striped", shirtCode: 'ShirtStripeSvg'},
    {label: "Hooped", shirtCode: 'ShirtHoopSvg'},
]


export default App;
