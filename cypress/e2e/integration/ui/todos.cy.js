///<reference types="cypress"/>

describe('Todo UI Testing', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('should add a new todo correctly', () => {
        cy.intercept('POST', 'http://localhost:8080/todos').as('postRequest');
        cy.addNewTodo('First todo');
        cy.wait('@postRequest').then(result => {
            expect(result.request.body.name).to.eql('First todo')
        });
        cy.get('.todo-item').last().should('contain.text', 'First todo');
    })

    it('should be able to toggle the status of a todo correctly', () => {
        cy.addNewTodo('Second todo');
        cy.checkUnCheck()
    });

     
    it('should no add to empty state', () => {
        cy.addNewTodo('')
    })

   
   /**
    *  afterEach(() => {
        cy.get('body').then(($ele) => {
            cy.get('.delete-item').each(($element) => {
                cy.wrap($element).click(); 
              });
        })
    })
    */
 
})