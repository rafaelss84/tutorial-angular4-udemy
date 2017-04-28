import { Angular4UdemyAppPage } from './app.po';

describe('angular4-udemy-app App', () => {
  let page: Angular4UdemyAppPage;

  beforeEach(() => {
    page = new Angular4UdemyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
