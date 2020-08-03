class Facultati{
    constructor(facultati){
        this.facultati = facultati
    }

    visit(){
        cy.visit('universitatea/facultati/')
    }

    checkFacultatiList(){
        const facultatiList = ["Facultatea de Arhitectură și Urbanism", 
                        "Facultatea de Automatică și Calculatoare",
                        "Facultatea de Autovehicule Rutiere, Mecatronică si Mecanică",
                        "Facultatea de Construcții",
                        "Facultatea de Construcții de Mașini",
                        "Facultatea de Electronica, Telecomunicații si Tehnologia Informației",
                        "Facultatea de Ingineria Materialelor și a Mediului",
                        "Facultatea de Inginerie Electrică",
                        "Facultatea de Instalații"]
        var facultate;
        for(facultate = 0; facultate < facultatiList.length; facultate++){
            cy.get(`[href="#collapse-${facultate + 1}-1"]`)
              .should('contain.text', facultatiList[facultate])
        }
    }

    expandFirstFacultate(){
        const firstFacultateTogle = cy.get('[href="#collapse-1-1"]')
        firstFacultateTogle.click({force : true})
    }

    checkFacultateImageColorChange(){
        const firstFacultateImage = cy.get('[alt="facultatea de arhitectură și urbanism"]')

        firstFacultateImage.trigger('mouseover')
                           .should('have.css', 'filter')
                           .and('match', /grayscale\(0\)/)
    }
}
export default Facultati