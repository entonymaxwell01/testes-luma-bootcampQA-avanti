import ProdutosPage from "../../pages/ProdutosPage/ProdutosPage";
import { NotificacaoElements } from "../../elements/NotificacaoElements";
import { ProdutosElements } from "../../elements/ProdutosElements";

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

  it("Deve adicionar um produto ao carrinho com sucesso", () => {
    ProdutosPage.adicionarProdutoAoCarrinho("Breathe-Easy Tank");
    cy.get(NotificacaoElements.successMessage).should("be.visible");
  });

  it("Deve apresentar mensagem de erro ao tentar adicionar um produto no carrinho sem selecionar o tamanho", () => {
    ProdutosPage.falhaAoAdicionarProdutoAoCarrinhoSemTamanho(
      "Breathe-Easy Tank"
    );
    cy.get(NotificacaoElements.errorMessage)
      .should("be.visible")
      .and("contain.text", "Incorrect or missing options!");
  });

  it("Deve apresentar mensagem de erro ao tentar adicionar um produto no carrinho sem selecionar a cor", () => {
    ProdutosPage.falhaAoAdicionarProdutoAoCarrinhoSemCor("Breathe-Easy Tank");
    cy.get(NotificacaoElements.errorMessage)
      .should("be.visible")
      .and("contain.text", "Incorrect or missing options!");
  });

  it("Deve alterar a moeda de compra para Euro", () => {
    ProdutosPage.alterarMoeda();
    cy.get(ProdutosElements.produtoPrice)
      .should("be.visible")
      .should("contain.text", "EUR$");
  });
});
