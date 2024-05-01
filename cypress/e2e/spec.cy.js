describe('Pokedex', () =>  {
  it('front page can be opened', () => {
    cy.visit('')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigate to', () => {
    cy.visit('')
    cy.contains('charmander').click()
    cy.wait(5000)
    cy.contains('solar power')
  })
})