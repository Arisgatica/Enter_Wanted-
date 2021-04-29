const chromedriver = require('chromedriver')

import { Builder, Capabilities, By, until, } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome'
import { isUnparsedTextLike } from 'typescript'
import {Form} from './ewObjectPage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ew = new Form(myDriver)

//This test will fill out the Enter Wanted form
//with all the correct required fields, NO error messages should be 
//prompted and "Valid" should appear after submission.
test('Fill out Form', async() => {
    await ew.navigate()
    await ew.type(ew.header, 'Testing#1')
    await ew.type(ew.mke, 'Test')
    await ew.type(ew.oai, '123456789')
    await ew.type(ew.name, 'John Doe' )
    await ew.type(ew.sex, 'M' )
    await ew.type(ew.race, 'C' )
    await ew.type(ew.weight, '185')
    await ew.type(ew.height, '510' )
    await ew.type(ew.hair, 'Brown' )
    await ew.type(ew.offense, 'Speeding Ticket' )
    await ew.type(ew.dateofWarrant, '01012021' )
    await ew.type(ew.DL, 'FL25D78' )
    await ew.type(ew.DLstate, 'CA')
    await ew.type(ew.DLexpiration, '02012020')
    await ew.submitButton()
    let value = await myDriver.findElement(By.id("validHeader")).getText()

    expect (value.toLowerCase()).toContain('valid')

    
})
  
afterAll (async () => {
    await myDriver.quit ()
    console.log ("Test was succesful!")
})

//Here is my test case https://dmutah.atlassian.net/browse/AG3DL-32
