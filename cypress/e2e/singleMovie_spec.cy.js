describe('Test Single Movie flows', () => {

  it('should navigate to the correct page', () => {
    cy.visit('http://localhost:3000/979924')
    .get('h2')
    .contains('On the Line')
  });

  it('should display an error if the page does not exist', () => {
    cy.visit('http://localhost:3000/123456')
    .get('h2')
    .contains('Something went wrong, please try again.')
  });
});