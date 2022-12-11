import React from 'react';

const users = [
    {
        name: 'John Doe',
        age: 36,
        phones: [{
            homeNumber: '01811242081',
            officeNumber: '0184535846',

        }]
    },
    {
        name: 'Nbo Abraham',
        age: 27,
        phones: [{ homeNumber: '01711520862', officeNumber: '01845358254' }]
    },
];

const NastedMapping = () => {
    return (
        <div>
            <h1>Nasted List</h1>
            {
                users.map((user, index) => 
                <article key = {index}>
                    <h3>Name:{user.name}</h3>
                    <p>Age:{user.age}</p>
                   {
                    user.phones.map((phone, index) => 
                    <div key = {index}>
                        <p>Home:{phone.homeNumber}</p>
                        <p>Office:{phone.officeNumber}</p>
                    </div>)
                   }
                </article>)
            }
        </div>
    );
};

export default NastedMapping;