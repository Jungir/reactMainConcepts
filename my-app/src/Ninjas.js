import React from 'react';
//UI/functional component
//statelss component data is recieved through the "parameter" from conatainer/parent component
//can destructure directly in the functions: function({ninjas});
const Ninjas = function (props) {
    const {ninjas} = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if(ninja.age > 20){
    //         return (
    //             <div className="Ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>)
    //     }else{
    //         return null;
    //     }
       
    // });
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? 
        (<div className="Ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
        </div>
        ) : null;
    });
    return(
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}
export default Ninjas;