import React from 'react'

function Sample(WrappedComponents) { //Higher Ordered Components

    const colors = ['red', 'orange', 'violet', 'purple']; //Create An Array
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';


    return (props) =>(
        <div className={className}>

            <WrappedComponents {...props} />

        </div>
    )
}

export default Sample