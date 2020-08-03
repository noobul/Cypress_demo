/// <reference types="Cypress" />
import Facultati from "../.pageObjects/facultati";

describe('Facultati tests', function(){
    const facultati = new Facultati();

    it('Tests that all facultati are present', function(){
        facultati.visit();
        facultati.checkFacultatiList();
    })

    it('Tests that the image switches to color on hover', function(){
        facultati.expandFirstFacultate()
        facultati.checkFacultateImageColorChange()
    })
})