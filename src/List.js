import React from 'react';
import { v4 as uuidv4 } from 'uuid';

                                        // ==mapping data with unique id==
const listItems = [
    {   id: uuidv4(),    
        title : "todo 1",
        desc : "this is number one"
    },
    {   id: uuidv4(),
        title : "todo 2",
        desc : "this is number two"
    },
    {   id: uuidv4(),
        title : "todo 3",
        desc : "this is number three"
    },
];

const List = () => {
    console.log(uuidv4())
    return (
        <div >
           {listItems.map((todo) => {

                    // const {id, title, desc} =todo; ///// othobaa ?

                return <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.desc}</p>
                </div>
           } )} 
        </div>
    );
};

export default List;