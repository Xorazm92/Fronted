import './button.css'

function Button({colorType, children}) {
    if(colorType === 'purple') {
        return (<>
            <button className="btn1">
                {children}
            </button>
        </>)
    } else if (colorType === 'white') {
        return (<>
            <button className="btn2">
                {children}
            </button>
        </>)
    }
}

export default Button