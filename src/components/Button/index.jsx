// import { children } from "solid-js/types/server/reactive.js"
// import { className } from "solid-js/web"

const Button = ({ className, onClick, children, name }) => {
    return(
        <button className={className} onClick={onClick}>{children}
        {name}
        </button> 
    )
}

export default Button;