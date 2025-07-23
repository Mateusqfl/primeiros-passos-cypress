describe('Orange HRM test', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login Falho', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
})