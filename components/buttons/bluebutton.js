import classes from "./bluebutton.module.scss";

function BlueButton(props){
    return <button className={classes.button}>{props.text}</button>
}
export default BlueButton;