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
    setClickTabletaccesories()
    {
        cy.get('.hmenu-visible > :nth-child(15) > .hmenu-item').click()

    }
    setClickJtech()
    {
        cy.get('#p_123\/53581 > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon').check()
    }
}
export default Amazon;