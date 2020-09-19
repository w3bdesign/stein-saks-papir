/* eslint-disable no-undef */

describe('Besøk hjemmesiden', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Vi kan se Stein Saks Papir i navbar', () => {
    cy.get('.navbar > .mx-auto').contains('Stein Saks Papir');
  });

  it('Vi kan se Saks knappen på siden', () => {
    cy.get('[data-testid=saks]').should('be.visible');
  });

  it('Vi klikker ikke på Saks og ser ingen resultatmodal', () => {
    cy.get('.modal-body').should('not.be.visible');
  });

  it('Vi klikker på Saks og vi kan se et resultat', () => {
    cy.get('[data-testid=saks]').click();
    cy.get('.modal-body').should('be.visible');
  });

  it('Vi klikker på Saks og kan lukke modal. Den er ikke synlig lenger', () => {
    cy.get('[data-testid=saks]').click();
    cy.get('.close').click();
    cy.get('.modal-body').should('not.be.visible');
  });

  it('Vi klikker på Saks 10 ganger og sjekker at vi til slutt ser vi har en vinner', () => {
    // Vi lager en array som går til 10 og looper over denne i Cypress
    const genArr = Array.from({ length: 10 }, (v, k) => k + 1);
    cy.wrap(genArr).each(() => {
      cy.get('[data-testid=saks]').click();
      cy.get('.close').click();
      cy.wait(1000);
    });
    cy.get('.fade').should('be.visible');
  });
});
