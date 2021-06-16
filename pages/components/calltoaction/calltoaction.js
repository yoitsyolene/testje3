
import classes from "./calltoaction.module.scss";
import BlueButton from "../buttons/bluebutton";

function CallToAction(props){
    return <div className={classes.calltoaction}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <BlueButton text={props.button}/>
    </div>
}
export default CallToAction;