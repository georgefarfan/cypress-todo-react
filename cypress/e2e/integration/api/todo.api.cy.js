describe('test all the todos using the API', () => {


    let id;

    it('should add a todo correctly using the api', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/todos',
            body: {
                name: "T1",
                isComplete: true
            }
        }).then(response => {
            id = response.body.id;
            expect(response.status).to.eq(201);
            expect(response.body.name).to.equal(('T1'))
        })
    })

    it('should get a specific todo correctly', () => {
        cy.request('GET', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.equal(('T1'))
        })
    })

    it('should update a specific todo correctly', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:8080/todos/' + id,
            body: {
                name: "T2",
                isComplete: true
            }
        }).then(response => { 
            expect(response.status).to.eq(200);
            expect(response.body.name).to.equal(('T2'))
        })
    })

    it('should delete a specific todo correctly', () => {
        cy.request('DELETE', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200); 
        })
    })

})