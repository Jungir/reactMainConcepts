import React from 'react';

const Contact = (props) =>{
    // console.log(props);
    setTimeout(() => {
        props.history.push('/about');
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis accusantium dolorem sit iusto exercitationem possimus voluptate, reprehenderit nam! Quos dolorem tempore quis voluptas architecto soluta praesentium natus quia asperiores.</p>
        </div>
    )
}
export default Contact;