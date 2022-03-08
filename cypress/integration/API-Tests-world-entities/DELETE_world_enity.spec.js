/// <reference types="cypress" />

let entity_id

describe('Given the world api', () => {


  context('When I send DELETE to an entity', () => {
    it('Then it should delete the entity', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://worldentities.org/api/entities/' +entity_id,
        
      })
        .should((response) => {
          expect(response.status).eq(204)

        });
        then  =>{

          cy.request({
            method: 'GET',
            url: 'https://worldentities.org/api/entities/' +entity_id,
            
          }).should((response) => {
            expect(response.status).eq(404)
            
          })

        }
    });
  });
});