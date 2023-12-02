/// <reference types="cypress"/>

describe("Fazer login no site", () => {
    it("deve permitir que o usuário faça login com sucesso", () => {
      cy.visit("https://www.amazon.com.br/");
      cy.get("#nav-link-accountList").click();
      cy.get("#ap_email").type("email@email.com");
      cy.get("#continue").click();
      cy.get("#ap_password").type("senha");
      cy.get("#signInSubmit").click();
    });
  });
  
  describe("Pesquisar um produto", () => {
    it("deve exibir os resultados da pesquisa", () => {
      cy.visit("https://www.amazon.com.br/");
      cy.get("#twotabsearchtextbox").type("Whey Protein");
      cy.get("#nav-search-submit-button").click();
    });
  });
  

  describe("Adicionar um produto ao carrinho", () => {
    it("deve adicionar o produto ao carrinho com sucesso", () => {
        cy.contains('Whey Protein ').click();
        cy.get("#add-to-cart-button").click();
    });
  });
