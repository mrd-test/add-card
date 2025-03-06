import './index.css'
import Button from '../Button';
import Input from '../Input';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 } from 'uuid';

const Form = ({  }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [src, setSrc] = useState('')
    const [gender, setGender] = useState(true)

    const handleName = ({ target: { value } }) => {
        setName(value) 
    }

    const handleSrc = ({ target: { value } }) => {
        setSrc(value)
    }

    const toggleGender = () => {
        setGender(prev => !prev)
    }
  
   
    const addCard = () => {
        dispatch({ type: 'add-celeb', payload: { id: v4(), name, src, gender: gender, fav: false } })
        setName('')
        setSrc('')
    }


    return(
        <div className='form'>
            <Input value={name} className='name__input' onChange={ handleName } placeholder='...enter celebrity name'></Input>
            <Input value={src} className='src__input' onChange={ handleSrc } placeholder='...enter celebrity photo'></Input>
            <div className='button__container'>
                <Button onClick={toggleGender} className='male__button'>Male</Button>
                <Button onClick={toggleGender} className='female__button'>Female</Button>
            </div>
            <Button onClick={ addCard } className='add__button'>Add Celebrity</Button>
        </div>
    )
}

export default Form;