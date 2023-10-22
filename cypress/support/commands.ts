// @ts-check
///<reference path="../global.d.ts" />

declare namespace Cypress {
  interface Chainable {
    getBySel(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

