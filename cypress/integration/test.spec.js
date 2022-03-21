// https://docs.cypress.io/guides/references/best-practices.html

describe('Besøk hjemmesiden, se at elementer eksisterer i DOM og at knappene fungerer', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.visit('http://localhost:3000');
  });

  it('Se at nødvendige elementer er på plass', () => {
    cy.get('[data-cy=navbar]').contains('Stein Saks Papir');
    cy.get('[data-cy=saks]').should('be.visible');
  });

  it('Vi klikker på Saks og vi kan se et resultat', () => {
    cy.get('[data-cy=saks]').click();
    cy.get('[data-cy=winnermodaltext]').should('be.visible');
  });

  it('Vi klikker på alle våpnene, klikker lukk og sjekker at modal ikke er synlig lenger', () => {
    cy.get('[data-cy=saks]').click();
    cy.get('.close').click();
    cy.get('[data-cy=winnermodaltext]').should('not.exist');

    cy.get('[data-cy=stein]').click();
    cy.get('.close').click();
    cy.get('[data-cy=winnermodaltext]').should('not.exist');

    cy.get('[data-cy=papir]').click();
    cy.get('.close').click();
    cy.get('[data-cy=winnermodaltext]').should('not.exist');
  });

  it('Vi sjekker at score er 0 fra begynnelsen av', () => {
    cy.get('[data-cy=score-p0]').invoke('text').should('eq', '0');
  });
});
