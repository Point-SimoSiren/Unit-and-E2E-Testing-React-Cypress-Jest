describe('Kurssit sovellus', function () {

    beforeEach(function () {
        cy.visit('http://localhost:3000')
    })

    it('Sivu avautuu ja näyttää datarivejä', function () {
        cy.visit('http://localhost:3000')
        cy.contains('Kurssit')
        cy.contains('OSP') // jos on saatu dataa kannasta
        cy.contains('poista') // jos on saatu dataa kannasta
        cy.contains('Tässä projektissa harjoitellaan web sovellusten testausta')
    })

    it('Lisäys formi aukeaa ja lisäys toimii oikein', function () {

        cy.contains('Lisää kurssi').click()
        cy.contains('Tallenna')
        cy.contains('Piilota lomake')

        cy.get('#nimiInput').type('e2eTestikurssi')
        cy.get('#laajuusInput').type(101)
        cy.get('#tallennusNappi').click()
        cy.contains('e2eTestikurssi')
        cy.get('h4').last().contains(101)
    })

    it('Kurssi voidaan poistaa', function () {
        cy.get('h4').last().children().click()
        cy.contains('Poisto tehty')
        cy.get('h4').last().should('not.contain', 'e2eTestikurssi')
    })
})
