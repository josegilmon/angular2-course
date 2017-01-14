import { AnimalsPage } from './app.po';

describe('animals App', function() {
  let page: AnimalsPage;

  beforeEach(() => {
    page = new AnimalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
