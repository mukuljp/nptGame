import { browser, by, element } from 'protractor';

export class NptappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('npt-root h1')).getText();
  }
}
