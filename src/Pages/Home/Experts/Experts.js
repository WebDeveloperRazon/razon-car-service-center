import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import Expert from '../Expert/Expert';
const experts = [
    {id: 1, name: 'Will Smith', img: expert1 , expertize:'Engine-Expert'},
    {id: 2, name: 'Chris Rock', img: expert2 , expertize:'Polish-Expert'},
    {id: 3, name: 'Dwayne Rock', img: expert3 , expertize:'colouring-Expert'},
    {id: 4, name: 'Messy Vai', img: expert4 , expertize:'Modification-expert'},
    {id: 5, name: 'Ronaldo Bro', img: expert5 , expertize:'Turbo-spreed-expert'},
]
const Experts = () => {
    return (
        <div>
            <h1 className="text-primary mt-5">Our Experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }

            </div>
        </div>
    );
};

export default Experts;