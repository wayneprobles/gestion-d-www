import React from "react";

//Components
import CustomNavLink from "../../../Components/CustomNavLink/CustomNavLink";
import Page from "../../../Components/Page/Page";

export default function ImpotsSocietes() {
  return (
    <Page
      pageTitle="Impôts des sociétés"
      pageDescription="Déclaration d'impôts pour incorporations"
      metaDescription={
        "Depuis plusieurs années, la gestion des incorporations " +
        "nous passionne. Afin de maximiser les bénéfices pour votre société, " +
        "nous pouvons prendre en charge votre dossier d'impôts et vous aider " +
        "à prendre de bonnes décisions pour l'avenir."
      }
      bgImage={null}
      canonicalLink="/services/impots-societes/"
    >
      <div className="content-block flex--justify-center text-align--left">
        <div className="flex-col flex-col--40w no-spacer-top">
          <div>
            <br />
            <p>
              Au Québec, les entreprises incorporées doivent produire une
              déclaration d'impôt T2 au fédéral ainsi qu'une déclaration d'impôt
              C0-17 au provincial, et ce, même si elles ne doivent pas payer
              d'impôts.
            </p>
            <h3>
              Depuis plusieurs années, la gestion des incorporations nous
              passionne.
            </h3>
            <p>
              Afin de maximiser les bénéfices pour votre société, nous pouvons
              prendre en charge votre dossier d'impôts et vous aider à prendre
              de bonnes décisions pour l'avenir.
            </p>
            <p>
              Nous sommes accrédités par l'Agence du revenu du Canada et du
              Québec pour produire vos déclaration d'impôts de sociétés et nous
              pouvons également prendre en charge votre tenue de livres, service
              de paie et déclarations de taxes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row force-flex-align-center">
        <div className="flex-row flex-col--100w flex--justify-center">
          <div className="">
            <h2>Contactez-nous pour plus d'infos</h2>
            <CustomNavLink to="/contact">
              <button aria-label="En savoir plus">En savoir plus</button>
            </CustomNavLink>
          </div>
        </div>
      </div>
    </Page>
  );
}
