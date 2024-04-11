describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-hamburger-menu').click()
   // cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item')
    cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item')
  })
})