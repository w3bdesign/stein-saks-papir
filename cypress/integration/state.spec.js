describe('Test Redux store og se at state fungerer', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.visit('http://localhost:3000');
  });

  it('Sjekk at state inneholder default data', () => {
    cy.fixture('score.json').then((json) => {
      cy.window().its('store').invoke('getState').should('deep.equal', json);
    });
  });
});
