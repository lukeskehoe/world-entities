/// <reference types="cypress" />

let entity = {
  "name" : "entity1",
  "entity_type": "application", 
  "description": "description of entity 1", 
  "is_verified": true, 
  "department_id" : 3 
};

describe('Given the world api', () => {


  context('When I send GET to an entity', () => {
    it('Then it should retrieve the entity', () => {
      cy.request({
        method: 'GET',
        url: 'https://worldentities.org/api/entities/' +id,
        body: entity
      })
        .should((response) => {
          expect(response.status).eq(200)
          expect(response.body).to.have.property("name", "entity1")
          expect(response.body).to.have.property("entity_type", "application")
          expect(response.body).to.have.property("description", "description of entity 1")
          expect(response.body).to.have.property("is_verified", true)
          expect(response.body).to.have.property("department_id", 3)
        });
    });
  });
});