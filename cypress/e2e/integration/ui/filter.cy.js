describe('filter functionality test cases', () => {

 
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:8080/todos'
        }, {
            fixture:'todos'
        })

        cy.visit('/');
    })

  

    it('should filter out the complete todos correctly', () => {
        
        cy.get('.footer a').last().click()
        cy.url().should('contain', '/complete');
        cy.get('.todo-checkbox').each($element => {
            cy.wrap($element).should('be.checked');
        });    
    })

    it('should filter out the active todos correctly', () => {
        cy.get('.footer a').eq(1).click();
        cy.url().should('contain', '/active');
        cy.get('.todo-checkbox').each($element => {
            cy.wrap($element).should('not.be.checked');
        });
        
    })
   


})