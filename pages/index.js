import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import TypeWriter from '../components/typewriter/typewriter'
import OrderedList from '../components/orderedlist/orderedlist'
import ClientItem from '../components/clients/clients'
import classes from "../styles/Home.module.scss";
import CallToAction from '../components/calltoaction/calltoaction';
import { Fragment } from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dummy Website</title>
        <meta name="dummy website" content="dummy website" />
      </Head>
      <div className={classes.typewriter}>
      <TypeWriter text1="Your Story." text2=" Our Skills"/>
      </div>
      <OrderedList/>
      <div className={classes.clientList}>
        <ClientItem
          image="/images/case_easypost_1.af0b2ac8.jpg"
          title="EasyPost Calculator"
          description="Een interactieve “berekeningsmachine” die de gebruiker vlot en eenvoudig kan invullen. Doel: meer contactaanvragen genereren zodat het klantenbestand blijft groeien."
          skills="strategy - digital marketing - development - analytics"
          width={500}
          height={500}
        />
        <ClientItem
          image="/images/case_sipwell_1.21db65e6.jpg"
          title="Sipwell."
          description="Datastructuur en groei voor de Belgische marktleider in waterlevering"
          skills="strategy - branding - digital marketing - graphic design - copywriting - development - analytics"
          width={500}
          height={500}
        />
        <ClientItem
          image="/images/case_daf_1.8b95e445.jpg"
          title="D'Angello & Francis"
          description="Creatively supporting internationally renowned artist on their way to the top"
          skills="brand development - artwork - merchandising - photo and videophotography"
          width={500}
          height={500}
        />
        <ClientItem
          image="/images/case_ginsonline_1.1a659259.jpg"
          title="Ginsonline.be"
          description="Kostenefficiënt adverteren voor ginsonline.be"
          skills="strategy - digital marketing - analytics"
          width={500}
          height={500}
        />
      </div>
      <CallToAction
        title="Contacteer ons"
        description="Ontdek hoe Skillmedia je helpt groeien"
        button="Laten we samenwerken"
      />
    </div>
  )

}
