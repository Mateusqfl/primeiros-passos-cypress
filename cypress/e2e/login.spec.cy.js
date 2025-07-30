import userData from '../fixtures/userData.json'

describe('Orange HRM test', () => {

  const selectorsLister = {

usernameField: "[name='username']",
passwordField: "[name='password']",
loginButton:   "[type='submit']",
sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
wrongCredentialAlert: "[role='alert']",
dashboardGrid: ".oxd-layout-navigation"

  }


  it('Login com sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsLister.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsLister.passwordField).type(userData.userSuccess.passoword)
    cy.get(selectorsLister.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsLister.dashboardGrid)
  })
  it('Login Falho', () => {
    cy.visit('/auth/login')
    cy.get(selectorsLister.usernameField).type(userData.userFail.username)
    cy.get(selectorsLister.passwordField).type(userData.userFail.passoword)
    cy.get(selectorsLister.loginButton).click()
    cy.get(selectorsLister.wrongCredentialAlert)
  })
})