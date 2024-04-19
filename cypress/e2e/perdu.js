// cypress/e2e/duckduckgo.ts
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit perdu.com", () => {
  cy.visit("https:perdu.com");
});

Then("I should see the text", (text) => {
    cy.contains(text);
  );
});
