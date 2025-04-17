import { ProdutosElements } from "../../elements/ProdutosElements";

class ProdutoPage {
  visit() {
    cy.visit("/");
    cy.get(
      "img[src='https://luma-demo.scandipwa.com/media/logo/stores/7/ScandiPWA_Luma.png']"
    ).should("be.visible");
  }

  visualizarProdutos() {
    cy.scrollTo("bottom", { duration: 500 });
    cy.get(ProdutosElements.produtosList).should("be.visible");

    cy.get(ProdutosElements.produtoCard)
      .should("be.visible")
      .and("have.length.gt", 0);
  }

  acessarProduto(nome) {
    cy.scrollTo("bottom", { duration: 500 });
    cy.get(ProdutosElements.produtoName).contains(nome).click();

    cy.get(ProdutosElements.produtoTitle)
      .contains(nome)
      .should("be.visible")
      .should("have.text", nome);

    cy.get(ProdutosElements.produtoPrice)
      .contains("US$ 34,00")
      .should("be.visible")
      .should("contain.text", "US$");
  }

  adicionarProdutoAoCarrinho(nome, tamanho, cor) {
    this.acessarProduto(nome);

    cy.get(ProdutosElements.produtoSelectColor)
      .should("be.visible")
      .select(cor, { force: true });
    cy.get(ProdutosElements.produtoSelectSize)
      .should("be.visible")
      .select(tamanho, { force: true });
    cy.get(ProdutosElements.produtoAddToCart).should("be.visible").click();
  }
}

export default new ProdutoPage();
