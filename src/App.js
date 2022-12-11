import cardData from "./cardData.json"
import './App.css';
import React from 'react';
import Card from './Card';
import Data from './cardData.json'
import List from '../src/List'


function App() {
  console.log(cardData)

                        //  for-loop//
                        // ==========//
// let items = [];
// for (let x=0; x<Data.length; x++){
//   items.push(<Card tittleText={Data[x].title} descText={Data[x].desc}/>)
// };

                       //  Mapping //
                      // ==========//

// let allItems = [];
// allItems = Data.map((allItems)=> <Card tittleText={allItems.title} descText={allItems.desc}/>)

                     // or//


                     const headingColorSystem1 = {
                      color: "red",
                      fontSize: "3rem",
                      padding: "10px",
                    
                    };
                    

  return (
    <div className="App">
     <List />
     <h1>Hello <span style={headingColorSystem1}>Bangladesh</span></h1>
      <h1 className="headingColor2">Another style system</h1>
{/* 
      {items}; */}

      {/* {Data.map((Items)=> <Card tittleText={Items.title} descText={Items.desc}/>)} */}
 
      {Data.map((allItems, index) => <Card tittleText={allItems.title} key={index} descText={allItems.desc}/>)}
      
{/* 
      <Card  tittleText = "small brother" descText = "this is desctext 2"  textTest =" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus culpa voluptates voluptatum amet ipsa, quasi molestiae in accusantium, provident sit commodi mollitia doloremque corporis"/>

      <Card  tittleText = {Data[1].title} descText = {Data[1].desc}  textTest =" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus culpa " /> */}


    </div>
  );
}

export default App;
