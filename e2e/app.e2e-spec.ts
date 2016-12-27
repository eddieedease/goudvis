import { GoudvisPage } from './app.po';

describe('goudvis App', function() {
  let page: GoudvisPage;

  beforeEach(() => {
    page = new GoudvisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
