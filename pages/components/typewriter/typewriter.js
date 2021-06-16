import classes from "./typewriter.module.scss";

function TypeWriter(props) {
    return (
      <div className={classes.typewriter}>
        <div className={classes.text}>
          <h1>
            <span className={classes.text1}>{props.text1}</span>
            <span className={classes.text2}>{props.text2}</span>
          </h1>
        </div>
      </div>
    );
  }
  export default TypeWriter;
  