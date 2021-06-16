import classes from "./clients.module.scss";

function ClientItem(props){
    return <div className={classes.clientItem}>
        <img className={classes.image} src={props.image} alt={props.alt}/>
        <div className={classes.title}><h1>{props.title}</h1></div>
        <div className={classes.description}><p>{props.description}</p></div>
        <div className={classes.skills}><h3>{props.skills}</h3></div>
    </div>
}
export default ClientItem;