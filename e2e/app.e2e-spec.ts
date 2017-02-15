import { MuditsaurabhGithubIoPage } from './app.po';

describe('muditsaurabh-github-io App', function() {
  let page: MuditsaurabhGithubIoPage;

  beforeEach(() => {
    page = new MuditsaurabhGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('msm works!');
  });
});
