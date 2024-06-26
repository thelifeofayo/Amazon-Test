 /// <reference types="cypress" />
 // using POM
import Amazon from "../POM/Amazon"
describe('template spec', () => {
  const az =new Amazon();
    //it('passes', () => {
     // cy.visit('https://www.amazon.com/')
      //cy.get('#nav-hamburger-menu').click()
     // cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item')
      //cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item')
   // })
beforeEach (() => {
  cy.visit('https://www.amazon.com/')
  cy.reload({timeout : 60000})
})
it('should open Amazon website', () => {
     cy.visit('https://www.amazon.com/')
     cy.location('protocol').should('eq', 'https:')
     cy.title().should('eq', 'Amazon.com. Spend less. Smile more.')
     cy.url().should('include', 'amazon')
    })
it('should click on hamburger', () =>{
  cy.get('#nav-hamburger-menu').click()
})
it('should click on computer', () =>{
  az.setHamburger()
  cy.wait(3000)
  az.setClickComputers()
})
it('should click on Tablet accesories', () =>{
  az.setHamburger()
  az.setClickComputers()
  cy.wait(6000)
  az.setClickTabletaccesories()
})
it('should select JTECH', () =>{
  cy.visit('https://www.amazon.com/')
  az.setHamburger()
  az.setClickComputers()
  az.setClickTabletaccesories()
  az.setClickJtech()
})
it('should sort JTECH Newest Arrivals', () =>{
  cy.visit('https://www.amazon.com/')
  az.setHamburger()
  az.setClickComputers()
  az.setClickTabletaccesories()
  az.setClickJtech()
})

  })