class HomePage {
    constructor(homePage) {
        this.homePage = homePage
    }

    visit() {
        cy.visit("");
    }

    openSearch() {
        const openSearch = cy.get('[aria-labelledby="#openSearchBtn"]')
        openSearch.click()

        return this;
    }

    searchField(value) {
        const searchField = cy.get('[name="search"]')
        searchField.type(value)

        return this;
    }

    search() {
        const searchButton = cy.get('button[class="gsc-search-button gsc-search-button-v2"]')
        searchButton.click()

        return this;
    }

    checkFirstLink(value) {
        const firstResult = cy.get('a[class="gs-title"]:first')
        firstResult.should('contain.text', value)

        return this;
    }

    closeSearchBox() {
        const closeSearchBox = cy.get('div[class="gsc-results-close-btn gsc-results-close-btn-visible"]')
        closeSearchBox.click()

        return this;
    }

    closeSearch() {
        const closeSearch = cy.get('i[class="fa fa-remove"]')
        closeSearch.click()

        return this;
    }

    clickListaFacultati() {
        const listaFacultati = cy.get('a[data-target="#listaFacultati"]')
        listaFacultati.click({ force: true })

        return this;
    }

    checkListDisplay() {
        const listaFaculatiBlock = cy.get('div[aria-labelledby="listaFacultati_title"]')

        listaFaculatiBlock.should('have.css', 'display')
                          .and('match', /block/)
        
        return this;
    }

    checkLinkValidity(){
        const facultatiTable = cy.get('table[class="table table-responsive table-stripped"]')
        const facultatiLinks = cy.get('td > a').first() //remove 'first' for demo

        facultatiTable.within(() => {
            facultatiLinks.each(($element) => {
              cy.get($element).should('have.attr', 'href').then(($href) => {
                  cy.request($href).then((resp) => {
                    expect(resp.status).to.eq(200)
                  })
              })
            })
        })

        return this;
    }

}

export default HomePage;