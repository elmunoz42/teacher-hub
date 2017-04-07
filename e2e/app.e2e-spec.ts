import { TeacherHubPage } from './app.po';

describe('teacher-hub App', () => {
  let page: TeacherHubPage;

  beforeEach(() => {
    page = new TeacherHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
