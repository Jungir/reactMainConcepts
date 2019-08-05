import React, {Component}from 'react';
class Ninjas extends Component {
    render(){
        const {age, name, belt} = this.props;
        return(
            <div className="Ninja">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
        )
    }
}
export default Ninjas;