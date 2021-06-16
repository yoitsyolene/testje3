import classes from "./orderedlist.module.scss";

function OrderedList() {
    return (
      <div className={classes.orderedList}>
        <ol className={classes.containerList}>
          <li className={classes.listItem}>
            <h1>Teamwork makes the dream work</h1>
            <p>
              Het geheim van ‘s werelds beste sportteams? Efficiënte,
              open communicatie en steeds de juiste persoon op de juiste plaats.
              Bij Skillmedia kies je voor een samenwerking die motiveert.
            </p>
          </li>
          <li className={classes.listItem}>
            <h1>Brainstormen</h1>
            <p>
              Door jouw expertise te combineren met onze kennis, gaan we op zoek
              naar de beste ideeën, strategieën en aanpak voor jouw bedrijf.
              Hierdoor kunnen we samen naar onze doelen werken en proactief met
              creatieve oplossingen komen.
            </p>
          </li>
          <li className={classes.listItem}>
            <h1>Groeien</h1>
            <p>
              Efficiënt werken, creatieve oplossingen en open communiceren. Dit
              zijn de ingrediënten van een heerlijk recept: gestructureerde en
              stabiele groei voor jouw bedrijf.
            </p>
          </li>
          <li className={classes.listItem}>
            <h1>Transparantie</h1>
            <p>
              Omdat we geloven in eerlijk duurt het langst, is transparantie één
              van onze keywords. Door steeds transparant te communiceren en
              maandelijks diepgaand te rapporteren, blijf je op de hoogte van de
              laatste interessante ontwikkelingen.
            </p>
          </li>
        </ol>
      </div>
    );
  }
  export default OrderedList;
  