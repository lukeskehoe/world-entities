/// <reference types="cypress" />

let entity_body = {
  "name" : "entity1",
  "entity_type": "application", 
  "description": "description of entity 1", 
  "is_verified": true, 
  "department_id" : 3 
};

describe('Given the world api', () => {


  context('When I send POST a new entity', () => {
    it('Then it should create a new entity', () => {
      cy.request({
        method: 'POST',
        url: 'https://worldentities.org/api/entities',
        body: entity_body
      })
        .should((response) => {
          expect(response.status).equal(201)
          expect(response.body).to.have.property("name", "entity1")
          expect(response.body).to.have.property("entity_type", "application")
          expect(response.body).to.have.property("description", "description of entity 1")
          expect(response.body).to.have.property("is_verified", true)
          expect(response.body).to.have.property("department_id", 3)
          let entity_id = response.body.property("entity_id")
          cy.writeFile('cypress/fixtures/testdata.json', { id: entity_id })
        });
    });
  });
});