describe('tests',  () => {
    it('can navigate to site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    it('can put text in first box', () => {
        cy.get('input[name=instruct]')
            .type('dsfasd')
    })
    it('can put text in second box', () => {
        cy.get('input[name=name]')
            .type('dsfasd')
    })
    it('can check checkboxes', () => {
        cy.get('[type="checkbox"]').check()
    })
    it('can submit form', () => {
        cy.get('form').submit()
    })
})