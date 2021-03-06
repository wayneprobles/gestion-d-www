import React from "react";

// Components
import Page from "../../Components/Page/Page";
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import Quote from "../../Components/Quote/Quote";
import ContactezNous from "../../Components/ContactezNous/ContactezNous";

// Images...
import bannerBackgroundWebp from "../../images/rapport_dimpots_quebec.webp";
import bannerBackgroundFallback from "../../images/rapport_dimpots_quebec.jpg";

export default function Home({ establishedDate, nombreClients }) {
  return (
    <Page
      pageTitle=""
      pageDescription={import.meta.env.SNOWPACK_PUBLIC_WEBSITE_DESCRIPTION}
      metaDescription={import.meta.env.SNOWPACK_PUBLIC_WEBSITE_LONG_DESCRIPTION}
      bgImage={{
        srcWebp: bannerBackgroundWebp,
        srcFallback: bannerBackgroundFallback,
        alt: "Un comptable au travail",
        width: 2000,
        height: 800,
      }}
      canonicalLink=""
    >
      <div className="content-block spacer-top">
        <div className="flex-col flex-col--50w flex--justify-left">
          <h2>
            Nous aidons les particuliers et les entreprises à économiser de
            l'impôt depuis {establishedDate}.
          </h2>
          <p>
            Gestion Desroches Inc., a vu le jour en {establishedDate} alors que
            Daniel Desroches avait à cœur d'aider les travailleurs autonomes qui
            se retrouvaient à payer des honoraires professionnels trop élevés,
            malgré leur contexte de faibles revenus.
          </p>
          <p>
            Avec les années, la croissance de l'entreprise a été constante et
            maintenant, chaque personne de la famille Desroches possède un rôle
            au sein de l'entreprise. Aujourd'hui, nous desservons plus de{" "}
            {nombreClients} clients individuels et commerciaux pour des dossiers
            de tenue de livres, services de paie, fiscalités et conseils
            personnalisés.
          </p>

          <CustomNavLink to="/a-propos">
            <button aria-label="En savoir plus sur nous">
              En savoir plus sur nous
            </button>
          </CustomNavLink>
        </div>

        <div className="flex-col flex-col--40w flex-margin-left--10w flex--justify-left">
          <ContactezNous
            renderTitle={true}
            renderDirects={false}
            renderParagraph={true}
            renderNotification={true}
            renderLink={true}
          />
        </div>
      </div>

      <div className="content-block spacer-top">
        <div className="content-block">
          <h2 className="flex-row">Notre expertise</h2>
        </div>
        <div className="flex-row">
          <div className="flex-col flex-col--30w flex-card-border-top">
            <h3 className="flex-card-border-top--title">
              Déclaration d'impôts de particuliers
            </h3>
            <p className="flex-card-border-top--text">
              Nous produisons des déclarations de revenus de particuliers depuis
              plus de {new Date().getFullYear() - establishedDate} ans et aidons
              plus de {nombreClients} personnes à chaque année.
            </p>
            <CustomNavLink
              to="/services/impots-particuliers"
              className="text-link blue-text"
            >
              Impôts de particuliers
            </CustomNavLink>
          </div>
          <div className="flex-col flex-col--30w flex-card-border-top">
            <h3 className="flex-card-border-top--title">
              Déclaration d'impôts de sociétés
            </h3>
            <p className="flex-card-border-top--text">
              Si vous avez une société incorporée, nous avons l'expertise pour
              produire vos déclarations d'impôts T2 (fédéral) et CO-17
              (provincial).
            </p>
            <CustomNavLink
              to="/services/impots-societes"
              className="text-link blue-text"
            >
              Impôts de sociétés
            </CustomNavLink>
          </div>
          <div className="flex-col flex-col--30w flex-card-border-top">
            <h3 className="flex-card-border-top--title">
              Comptabilité pour entreprises
            </h3>
            <p className="flex-card-border-top--text">
              Si vous possédez une petite entreprise ou êtes un travailleur
              autonome, nous pouvons prendre en charge la gestion de votre
              comptabilité.
            </p>
            <CustomNavLink
              to="/services/comptabilite-entreprises"
              className="text-link blue-text"
            >
              Comptabilité d'entreprise
            </CustomNavLink>
          </div>
        </div>
        <CustomNavLink to="/services">
          <button aria-label="Voir tous nos services">
            Voir tous nos services
          </button>
        </CustomNavLink>
      </div>

      <Quote author="Jean Yanne">
        J’ai déjà essayé de payer mes impôts avec le sourire, ils préfèrent un
        chèque.
      </Quote>
    </Page>
  );
}
