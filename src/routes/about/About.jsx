import React from "react";

// Components
import Page from "../../Components/Page/Page";
import Bio from "../../Components/Bio/Bio";
import Quote from "../../Components/Quote/Quote";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import ModernImage from "../../Components/ModernImage/ModernImage";

// Images
import daniel from "../../images/daniel-bio.png";
import danielWebp from "../../images/daniel-bio.webp";
import alex from "../../images/alex-bio.png";
import alexWebp from "../../images/alex-bio.webp";
import will from "../../images/will-bio.png";
import willWebp from "../../images/will-bio.webp";
import matt from "../../images/matt-bio.png";
import mattWebp from "../../images/matt-bio.webp";
import graphiqueClients from "../../images/graphique-clients-2019.png";
import graphiqueClientsWebp from "../../images/graphique-clients-2019.webp";

export default function About({ nombreClients, establishedDate }) {
  return (
    <Page
      pageTitle="À propos"
      pageDescription="En savoir plus à propos de l'entreprise"
      metaDescription={
        "Gestion Desroches Inc. est une société familiale de " +
        "services comptables établie et dirigée par Daniel Desroches, expert " +
        "dans le domaine de la comptabilité depuis plus de 16 ans. Fondée en " +
        "2004, l'entreprise familiale sert aujourd'hui plus de1300 particuliers " +
        "et entreprises par année."
      }
      bgImage={null}
      canonicalLink="/a-propos/"
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>Notre histoire</h2>
          <p>
            Gestion Desroches Inc, est une société familiale de services
            comptables établie et dirigée par Daniel Desroches, expert dans le
            domaine de la comptabilité depuis plus de{" "}
            {new Date().getFullYear() - establishedDate} ans. Fondée en{" "}
            {establishedDate}, l'entreprise familiale sert aujourd'hui plus de{" "}
            {nombreClients} particuliers et entreprises par année.
          </p>
          <p>
            Notre équipe offre un service personnalisé de déclaration d'impôts
            de particuliers et de sociétés ainsi qu'une gamme de services
            comptables destinés à soutenir les entrepreneurs et travailleurs
            autonomes.
          </p>
          <p>
            Notre mission est de vous offrir un service personnalisé et de haute
            qualité. Nous prenons le temps de bien vous diriger dans vos
            décisions et nous nous assurons que vous compreniez bien les impacts
            fiscaux de vos projets. Nous vous accompagnons afin de maximiser vos
            résultats.
          </p>
        </div>
        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <h2>Croissance de notre clientèle</h2>
          <p>
            <ModernImage
              lazyload={false}
              altText={"Graphique de nos clients"}
              classNames={"graphique-clients"}
              srcWebp={graphiqueClientsWebp}
              srcFallback={graphiqueClients}
              cancelInitialGrowFx={false}
              width={781}
              height={390}
            />
          </p>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block spacer-top">
          <h2 className="flex-row">Notre équipe</h2>
        </div>

        <Bio
          image={{ webp: danielWebp, fallback: daniel }}
          name="Daniel Desroches"
          role="PRÉSIDENT & FONDATEUR, COMPTABLE"
        >
          Daniel est le président et fondateur de Gestion Desroches Inc.
          Passionné par la comptabilité depuis l'âge de 16 ans, il s'est
          toujours intéressé à la fiscalité et a décroché un diplôme en
          comptabilité à l'Université du Québec à Trois-Rivières. En{" "}
          {establishedDate}, il a décidé de fonder son propre cabinet et il sert
          aujourd'hui plus de {nombreClients} clients satisfaits.
        </Bio>
        <Bio
          image={{ webp: alexWebp, fallback: alex }}
          name="Alexandre Desroches"
          role="TENUE DE LIVRES, DÉVELOPPEMENT INFORMATIQUE & LOGICIEL FINANCE D"
        >
          Alexandre détient une attestation professionnelle en comptabilité et
          s'occupe de la tenue de livres de plus de 60 entreprises. Il est
          rapide, innovateur, perfectionniste et capable de trouver des
          solutions pour améliorer la situation de ses clients. Il est également
          passionné par la programmation. Son logiciel de facturation et tenue
          de livres gratuit a été conçu d'après son expérience chez Gestion
          Desroches et est accessible à partir de{" "}
          <a
            href="https://finance-d.com/"
            className="blue-text text-link no-wrap"
          >
            Finance-D.com
          </a>
          .
        </Bio>
        <Bio
          image={{ webp: willWebp, fallback: will }}
          name="William Desroches"
          role="SERVICE DE PAIE, TENUE DE LIVRES, IMPÔTS DES PARTICULIERS"
        >
          William possède une technique en comptabilité et gestion. Il a
          commencé à travailler en 2019 dans la société familiale. En date du
          dernier trimestre de 2020, il se spécialise dans nos services de paies
          pour entreprises, dans la tenue de livres avec Sage 50, ainsi que pour
          les impôts des particuliers en collaboration avec Daniel. Le travail
          de William est toujours effectué avec excellence.
        </Bio>
        <Bio
          image={{ webp: mattWebp, fallback: matt }}
          name="Matthieu Desroches"
          role="COMPTABLE, IMPÔTS DES PARTICULIERS"
        >
          Matthieu a rejoint l'entreprise familiale en 2015 après la fin de ses
          études en comptabilité. Il détient un baccalauréat en Sciences
          Comptables qu'il a décroché à l'École des Sciences de la Gestion et se
          spécialise aujourd'hui dans les déclarations d'impôts de particuliers.
          Matthieu est également formateur en organisation et gestion du temps
          et publie des articles/podcasts chaque semaine sur son site&nbsp;:{" "}
          <a
            href="https://matthieudesroches.com"
            className="blue-text text-link no-wrap"
          >
            matthieudesroches.com
          </a>
          .
        </Bio>
      </div>

      <Quote author="Gestion Desroches">
        Nous avons toujours voulu servir comme nous aimons nous-même être
        servis.
      </Quote>

      <div className="content-block spacer-top force-flex-align-center">
        <CustomNavLink to="/services">
          <button aria-label="Voir tous nos services">Voir nos services</button>
        </CustomNavLink>
      </div>
    </Page>
  );
}
