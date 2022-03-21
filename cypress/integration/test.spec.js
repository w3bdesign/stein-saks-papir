/* eslint-disable no-undef */

describe('Besøk hjemmesiden', () => {
  beforeEach(() => {
    cy.visit('/');
    // DEBUG: cy.visit('http://localhost:3000');
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

  it('Vi sjekker at score er 0 fra begynnelsen av', () => {
    cy.get('#score-p0').invoke('text').should('eq', '0');
  });
});
