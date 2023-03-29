import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Pitch from "./Pitch";
import Navbar from "./Navbar";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        players: [
            {id: 0, name: "Click to edit", number: 1},
            {id: 1, name: "Click to edit", number: 2},
            {id: 2, name: "Click to edit", number: 3},
            {id: 3, name: "Click to edit", number: 4},
            {id: 4, name: "Click to edit", number: 5},
            {id: 5, name: "Click to edit", number: 6},
            {id: 6, name: "Click to edit", number: 7},
            {id: 7, name: "Click to edit", number: 8},
            {id: 8, name: "Click to edit", number: 9},
            {id: 9, name: "Click to edit", number: 10},
            {id: 10, name: "Click to edit", number: 11},
        ],
        id: 0,
        label: "3-1-4-2",
        shirtArr: 'Plain',
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
        const shirtChange = shirtType[id];
        this.setState({shirtArr: shirtChange.label});
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
               <Navbar />
               <div className="App-container px-8 lg:flex-row md:flex-row sm:flex-col xs:flex-col">
                   <div className="sidebar bg-gray-700 px-3 py-2 rounded-lg
                   lg:order-first lg:w-1/3
                   md:order-first md:w-1/3
                   sm:w-2/3 sm:mx-auto sm:order-last
                   xs:w-2/3 xs:mx-auto xs:order-last">
                       <b className="pt-2 text-white">Formation:</b>
                       <select className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.handleFormationChange} >
                           <option defaultValue={true}>Select Option</option>
                           {formations.map(({label}, index) => {
                                   return (
                                       <option value={index}>{label}</option>
                                   );
                               }
                           )}
                       </select>
                       <b className="text-white pt-3">Shirt Type:</b>
                       <select className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.handleShirtChange} >
                           <option defaultValue={true}>Select Option</option>
                           {shirtType.map(({label}, index) => {
                                   return (
                                       <option value={index}>{label}</option>
                                   );
                               }
                           )}
                       </select>
                       <b className="text-white pt-3">Primary Shirt Colour:</b>
                       <select className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.handleColourChange} >
                           <option defaultValue={true}>Select Option</option>
                           {colours.map(({label}, index) => {
                                   return (
                                       <option value={index}>{label}</option>
                                   );
                               }
                           )}
                       </select>
                       <b className="text-white pt-3">Secondary Shirt Colour:</b>
                       <select className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.handleSecondColourChange} >
                           <option defaultValue={true}>Select Option</option>
                           {colours.map(({label}, index) => {
                                   return (
                                       <option value={index}>{label}</option>
                                   );
                               }
                           )}
                       </select>
                       <b className="text-white pt-3">Shirt Number Colour:</b>
                       <select className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={this.handleNumberColourChange} >
                           <option defaultValue={true}>Select Option</option>
                           {numberColours.map(({label}, index) => {
                                   return (
                                       <option  value={index}>{label}</option>
                                   );
                               }
                           )}
                       </select>
                       <b className="text-white pt-3">Player Information:</b>
                       {this.state.players.map(({name,number, id}) => {
                           return (
                               <div className="player-text-wrapper bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                   <input
                                       id={id}
                                       className="player-edit bg-gray-50 p-0.5 text-sm"
                                       type="text"
                                       value={number}
                                       onChange={this.handleNumberChange}
                                   />
                                   <input
                                       id={id}
                                       className="player-edit bg-gray-50 p-0.5 text-sm"
                                       type="text"
                                       value={name}
                                       onChange={this.handleNameChange}
                                   />
                               </div>
                           );
                       })}
                   </div>
                   <div className="pitch-div sm:w-full xs:w-full">
                       <div className="pitch">
                           <Pitch
                               idToChild = {this.state.id}
                               colourToChild = {this.state.hex}
                               playersToChild = {this.state.players}
                               handleNameChange = {this.handleNameChange}
                               formations = {this.state.lineup}
                               shirtType = {this.state.shirtArr}
                           />
                       </div>
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
  {id: 12, label: "5-4-1", lineup: [1, 3, 2, 4, 0, 1]}
]

const colours = [
    {label: "Black", hex: '#000000'},
    {label: "Blue", hex: '#000099'},
    {label: "Green", hex: '#009900'},
    {label: "Pink", hex: '#ff00ff'},
    {label: "Purple", hex: '#9900ff'},
    {label: "Red", hex: '#ff0000'},
    {label: "White", hex: '#ffffff'},
    {label: "Yellow", hex: '#ffff00'},

]

const numberColours = [
    {label: "Black", numPrime: '#000000', numSec: '#ffffff'},
    {label: "Dark Blue", numPrime: '#000066', numSec: '#ffffff'},
    {label: "Red", numPrime: '#ff0000', numSec: '#ffffff'},
    {label: "White", numPrime: '#ffffff', numSec: '#000000'},
]

const shirtType = [
    {label: "Plain"},
    {label: "Raglan"},
    {label: "Striped"},
    {label: "Hooped"},
]


export default App;
