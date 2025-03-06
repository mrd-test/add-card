import './index.css';
import Button from '../Button';
import { BsGenderFemale } from "react-icons/bs";
import { BsGenderMale } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Card = ({ id, gender, name, src, fav  }) => {

    const dispatch = useDispatch()

    const handleFav = () => {
        dispatch({ type: 'set-fav', payload: id})
    }

    const handleDelete = () => {
        dispatch({ type: 'delete-celeb', payload: id })
    }
    return(
        <div className='card__container'>
            <figure className='image__card'>
                <img className='image' src={src}></img>
                {gender ? <BsGenderMale className='svg_gender_male' /> : <BsGenderFemale className='svg_gender_female'/> }
                <Button onClick={ handleFav } className='heart__button'>
                    <LuHeart className={fav ? 'svg_heart_active' : 'svg_heart'}/>
                </Button>
                <Button onClick={ handleDelete } className='delete__button'>
                    <BsTrash className='svg_delete'/>
                </Button>
            
            </figure>
            <figcaption className='card__title'>{name}</figcaption>
        </div>
    )
}


export default Card;
