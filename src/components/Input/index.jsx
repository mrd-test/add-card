

const Input = ({ className, 
                 placeholder, 
                 onChange, 
                 value }) => {

    return(
        <input className={className} 
               placeholder={placeholder} 
               onChange={onChange} 
               value={value}></input>
    )
}

export default Input;