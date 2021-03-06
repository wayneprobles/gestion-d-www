import React from "react";

// Components
import CustomNavLink from "../../Components/CustomNavLink/CustomNavLink";
import Page from "../../Components/Page/Page";

export default function RendezVous() {
  return (
    <Page
      pageTitle="Rendez-vous comptabilité"
      pageDescription="Réserver une date de rencontre"
      metaDescription="Prendre un rendez-vous avec Daniel Desroches.
      Services comptables Gestion Desroches Inc."
      bgImage={null}
      canonicalLink="/rendez-vous/"
    >
      <div className="content-block flex--justify-center">
        <div className="flex-col flex-col--40w force-flex-align-center">
          <p>
            Afin de prendre un rendez-vous pour votre comptabilité avec Daniel
            Desroches, cliquez sur le bouton ci-dessous. Ensuite, vous pourrez
            choisir la période qui vous convient le mieux parmi les dates
            disponibles de notre calendrier.
          </p>

          <p>
            <strong>NOTE IMPORTANTE:</strong>
            &nbsp;Vous devez avoir obtenu l'autorisation écrite ou verbale de
            Daniel Desroches pour réserver une plage horaire. Si ce n'est pas le
            cas, veuillez SVP{" "}
            <CustomNavLink to="/contact">
              <span className="text-link" style={{ color: "var(--blue)" }}>
                nous contacter avant
              </span>
            </CustomNavLink>
            .
          </p>

          <div>
            <a
              href="https://calendly.com/comptable-daniel-desroches/30min"
              target="_blank"
              rel="nofollow"
            >
              <button aria-label="Rendez-vous" className="flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="1em"
                  fill="#fff"
                  style={{
                    marginRight: "2em",
                  }}
                >
                  <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zM8 16H4v4h4v-4zm6 0h-4v4h4v-4zm-6-6H4v4h4v-4zm16-8v22H0V2h3v1a2 2 0 004 0V2h10v1a2 2 0 004 0V2h3zm-2 6H2v14h20V8zm-2-7a1 1 0 10-2 0v2a1 1 0 102 0V1zM6 3a1 1 0 11-2 0V1a1 1 0 112 0v2z" />
                </svg>
                Rendez-Vous
              </button>
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}
