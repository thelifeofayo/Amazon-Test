class Amazon
{
    setHamburger()
    {
        cy.get('#nav-hamburger-menu').click()
    }
    setClickComputers()
    {
        cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item').click()

    }
}
export default Amazon;