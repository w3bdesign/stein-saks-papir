describe('Test Redux store og se at state fungerer', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.visit('http://localhost:3000');
  });

  it('Sjekk at state inneholder default data', () => {
    cy.window()
      .its('store')
      .invoke('getState')
      .should('deep.equal', {
        score: [
          { Name: 'Spiller 1', Score: 0 },
          { Name: 'CPU', Score: 0 },
        ],
        devTools: true,
      });
  });
});
