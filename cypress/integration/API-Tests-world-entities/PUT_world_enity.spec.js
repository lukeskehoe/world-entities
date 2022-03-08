/// <reference types="cypress" />

let entity_body = {

  "description": "updated description of entity 1", 

};

let entity_id

describe('Given the world api', () => {


  context('When I send PUT to an existing entity', () => {
    it('Then it should update the entity', () => {
      cy.request({
        method: 'PUT',
        url: 'https://worldentities.org/api/entities/' +entity_id,
        body: entity_body
      })
        .should((response) => {
          expect(response.status).eq(200)
          expect(response.body).to.have.property("name", "entity1")
          expect(response.body).to.have.property("entity_type", "application")
          expect(response.body).to.have.property("description", "updated description of entity 1")
          expect(response.body).to.have.property("is_verified", true)
          expect(response.body).to.have.property("department_id", 3)
        });
    });
  });
});