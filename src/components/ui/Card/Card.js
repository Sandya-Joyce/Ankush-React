import React from 'react'

const Card = (props) => {
    return (
        <div className='container-fluid'>
            {props.children}
        </div>
    )
}

export default Card
