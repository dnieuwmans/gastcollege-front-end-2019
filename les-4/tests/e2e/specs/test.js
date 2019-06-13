// https://docs.cypress.io/api/introduction/api.html
import faker from 'faker';

describe('My form', () => {
  it('Fill the form', () => {
    faker.locale = 'de';

    cy.visit('/');

    cy.get('#name-field > input')
      .type(faker.name.findName())
      .blur();

    cy.get('#email-field > .error')
      .should('be.visible');
  });
});
