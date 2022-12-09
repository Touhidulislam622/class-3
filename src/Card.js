import React from 'react';

const date = new Date();
const dateName = date.getDate();
const dateMonth = date.getMonth();
const dateYear = date.getFullYear();


function Card (props) {
    const{tittleText ,descText } = props;

const cardStyle =  {width:"25rem", backgroundColor: "chocolate", marginTop: "20px"};

    return (
        
      <div className="card " style={cardStyle} >
        <div className="card-body">
          <h2 className="card-title"  >{tittleText}</h2>
          <h4 className="card-text">{descText}</h4>
          <p>{props.textTest}</p>
          <h3> {dateName + "/" + dateMonth + "/" + dateYear} </h3> <br />
          <button className='btn btn-primary'>press</button>  </div>


      </div>
      
    );
  };


export default Card;