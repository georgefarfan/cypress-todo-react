///<reference types="cypress"/>

describe('Request command suite', () => {
    it('get list', () => {
        cy.request('GET', 'http://localhost:8080/todos').then(response => {
            cy.log(response.status);
            cy.log(response.statusText);
            cy.log(response.body);
            cy.log(response.duration);
            expect(response.body).not.undefined;
            expect(response.status).to.be.eq(200);
            expect(response.duration).to.be.below(20000)
            expect(response.body[0].name).to.be.not.undefined

        })
    })

    it('get todo', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/todos',
            qs: {
                id: 1741
            }
        }).then(response => {
            cy.log(response.statusText)
        })
    })

    xit('post todo', () => {
        cy.request('POST', 'http://localhost:8080/todos', {
            'name': 'Other',
            'isComplete': true
        }).then(response => {
            cy.log(response.statusText)
        })
    })


   xit('put todo', () => {
        cy.request('PUT', 'http://localhost:8080/todos/1741', {
            'name': 'cambiado',
            'isComplete': false
        }).then(response => {
            cy.log(response.statusText)
        })
    })


    xit('delete todo', () => {
        cy.request('DELETE', 'http://localhost:8080/todos/1741' ).then(response => {
            cy.log(response.statusText)
        })
    })

   xit('securet ', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/courses',
            auth: {
                bearer:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2ODYzOTg0NDMsImV4cCI6MTY4NjQwMjA0Mywic3ViIjoiMSJ9.Zw-bPLadsypTpqHLQ_KHZzU4-FyM0A3PUk84jAhbk8A"
            }
        }).then(response => {
            cy.log(response.statusText)
        })
    })

})