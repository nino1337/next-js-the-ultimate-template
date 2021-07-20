import chaiColors from 'chai-colors';
chai.use(chaiColors);

context('Main Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('button', () => {
    it('changes state of the button', () => {
      cy.get('button')
        .click()
        .should('have.css', 'background-color')
        .and('be.colored', '#ffffff');
    });
  });
});
