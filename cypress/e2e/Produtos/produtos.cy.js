import ProdutosPage from "../../pages/ProdutosPage/ProdutosPage";
import { NotificacaoElements } from "../../elements/NotificacaoElements";

beforeEach(() => {
  ProdutosPage.visit();
});

describe("Testes da funcionalidade de produtos", () => {
  it("Deve acessar a página de produtos", () => {
    ProdutosPage.visualizarProdutos();
  });

  it("Deve visualizar os detalhes de um produto com sucesso", () => {
    ProdutosPage.acessarProduto("Breathe-Easy Tank");
  });

  it("Deve adicionar um produto ao carrinho", () => {
    ProdutosPage.adicionarProdutoAoCarrinho("Breathe-Easy Tank", "S", "White");
  });

  it("Deve falhar ao tentar adicionar um produto no carrinho sem selecionar o tamanho", () => {
    ProdutosPage.adicionarProdutoAoCarrinho("Breathe-Easy Tank", "", "White");
    cy.get(NotificacaoElements.errorMessage)
      .should("be.visible")
      .and("contain.text", "Incorrect or missing options!");
  });

  it("Deve falhar ao tentar adicionar um produto no carrinho sem selecionar a cor", () => {
    ProdutosPage.adicionarProdutoAoCarrinho("Breathe-Easy Tank", "S", "");
    cy.get(NotificacaoElements.errorMessage)
      .should("be.visible")
      .and("contain.text", "Incorrect or missing options!");
  });
});
