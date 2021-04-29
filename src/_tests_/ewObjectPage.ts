import { WebDriver, By, until } from 'selenium-webdriver'

export class Form {
    url: string = 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html'
    driver: WebDriver
    header: By = By.name('hdrInput')
    mke: By = By.name('mkeInput')
    oai: By = By.name('oriInput')
    name: By = By.name('namInput')
    sex: By = By.name('sexInput')
    race: By = By.name('racInput')
    height: By = By.name('hgtInput')
    weight: By = By.name('wgtInput')
    hair: By = By.name('haiInput')
    offense: By = By.name('offInput')
    dateofWarrant: By = By.name('dowInput')
    DL: By = By.name('olnInput')
    DLstate: By = By.name('olsInput')
    DLexpiration: By = By.name('olyInput')
    submit: By = By.id('saveBtn')
    clear: By = By.id('clearBtn')
    valid: By= By.id('validHeader')

    constructor(driver: WebDriver) {
        this.driver = driver
    }

    async navigate() {
        await this.driver.get(this.url)
    }

    async type(selector: By, text: String) {
        await this.driver.findElement(selector).sendKeys(`${text}\n`)
    } 

    async submitButton(){
        await this.driver.findElement(this.submit).click();
    }


}