describe('Visuals', () => {
    it('should compare screenshot of the entire page', () => {
      cy.visit('www.bing.com')
      const retryOptions = {
        limit: 2, // max number of retries
        delay: 500 // delay before next iteration, ms
      }
      cy.compareSnapshot('home-page-with-threshold', 0, retryOptions)
    })
  })