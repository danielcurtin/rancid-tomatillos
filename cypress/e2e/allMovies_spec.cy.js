describe('Test All Movies flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should see the application title on load', () => {
    cy.get('header')
    .contains('Rancid Tomatillos')
  });

  it('should see a collection of movies on page load', () => {
    cy.get('.allMovies')
    .find('.movieCard')
    .should('have.length', 40)
  });

  it('should be able to click on the movies and get a page with their details', () => {
    cy.get('.movieCard')
    .first()
    .click()
    .url()
    .should('include', '979924')
    cy.contains('Runtime')
  });

  it('should display an error message if there\'s a server issue', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 400
    })
    .get('h2')
    .contains('Something went wrong, please try again.')
  });
});