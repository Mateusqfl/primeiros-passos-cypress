describe('Orange HRM test', () => {

  const selectorsLister = {

usernameField: "[name='username']",
passwordField: "[name='password']",
loginButton:   "[type='submit']",
sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
wrongCredentialAlert: "[role='alert']",
dashboardGrid: ".oxd-layout-navigation"

  }

  const userData ={
    userSuccess: {
      username: "Admin",
      passoword: "admin123"
    },
    userFail: {
      username: "test",
      passoword: "test"
    }

  }
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsLister.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsLister.passwordField).type(userData.userSuccess.passoword)
    cy.get(selectorsLister.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsLister.dashboardGrid)
  })
  it('Login Falho', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsLister.usernameField).type(userData.userFail.username)
    cy.get(selectorsLister.passwordField).type(userData.userFail.passoword)
    cy.get(selectorsLister.loginButton).click()
    cy.get(selectorsLister.wrongCredentialAlert)
  })
})