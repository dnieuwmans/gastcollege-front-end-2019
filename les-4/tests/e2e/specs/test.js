// https://docs.cypress.io/api/introduction/api.html
import faker from 'faker';

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');

    cy.get('#name-field > input')
      .type(faker.name.findName())
      .blur();

    cy.get('#name-field > .error')
      .should('be.visible');
  });
});
