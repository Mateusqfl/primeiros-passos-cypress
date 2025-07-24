describe('Orange HRM test', () => {

  const selectorsLister = {

usernameField: "[name='username']",
passwordField: "[name='password']",
loginButton:   "[type='submit']",
sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
wrongCredentialAlert: "[role='alert']"

  }
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsLister.usernameField).type('admin')
    cy.get(selectorsLister.passwordField).type('admin123')
    cy.get(selectorsLister.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsLister.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login Falho', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsLister.usernameField).type('test')
    cy.get(selectorsLister.passwordField).type('test')
    cy.get(selectorsLister.loginButton).click()
    cy.get(selectorsLister.wrongCredentialAlert)
  })
})