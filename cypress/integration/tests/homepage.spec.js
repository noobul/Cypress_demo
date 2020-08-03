/// <reference types="Cypress" />
import HomePage from "../.pageObjects/homePage";

describe('Home page tests', function () {
  const home = new HomePage()

  it('Search function test', function () {
    var query = 'Licenta'

    home.visit()
    home.openSearch()
    home.searchField(query)
    home.search()
    home.checkFirstLink(query)
    home.closeSearchBox()
    home.closeSearch()
  })

  it('Checks university links', function () {

    home.clickListaFacultati()
    home.checkListDisplay()
    home.checkLinkValidity()
  })


})