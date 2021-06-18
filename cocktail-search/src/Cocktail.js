import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({img,name,info,id,glass}) => {
    return (
        <div className='cocktail'>
            <div className='img-container'>
                <img src={img} alt={name}></img>
            </div>
            <div className='cocktail-footer'>
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Cocktail
