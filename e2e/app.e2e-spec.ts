import { StickynotePage } from './app.po';

describe('stickynote App', () => {
  let page: StickynotePage;

  beforeEach(() => {
    page = new StickynotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
