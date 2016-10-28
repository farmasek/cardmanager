import { CardmanagerPage } from './app.po';

describe('cardmanager App', function() {
  let page: CardmanagerPage;

  beforeEach(() => {
    page = new CardmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
