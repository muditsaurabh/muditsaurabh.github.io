import { browser, element, by } from 'protractor';

export class MuditsaurabhGithubIoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('msm-root h1')).getText();
  }
}
