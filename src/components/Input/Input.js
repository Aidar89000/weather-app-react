

import classes from './Input.module.css'

const Input = props => {
    return (
        <div className={classes["Input"]}>
            <input type="text" onChange={e=>{props.updateText(e.target.value)}}/>
        </div>
    )
}

export {Input}