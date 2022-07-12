import classes from './Button.module.css'

const Button = props =>{
    let cls = ['Button']

    return (
        <div className={classes[cls]} onClick={props.onClick}>
            <h5>{props.children}</h5>
        </div>
)
}

export {Button}