import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

    <div>
      {/* 
      {items}; */}

      {/* {Data.map((Items)=> <Card tittleText={Items.title} descText={Items.desc}/>)} */}


      {/* 
      <Card  tittleText = "small brother" descText = "this is desctext 2"  textTest =" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus culpa voluptates voluptatum amet ipsa, quasi molestiae in accusantium, provident sit commodi mollitia doloremque corporis"/>

      <Card  tittleText = {Data[1].title} descText = {Data[1].desc}  textTest =" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus culpa " /> */}




    </div>

  </React.StrictMode>
);