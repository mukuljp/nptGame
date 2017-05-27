import { NptappPage } from './app.po';

describe('nptapp App', () => {
  let page: NptappPage;

  beforeEach(() => {
    page = new NptappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('npt works!');
  });
});
