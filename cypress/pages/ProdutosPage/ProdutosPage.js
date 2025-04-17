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

  acessarProduto() {
    cy.scrollTo("bottom", { duration: 500 });
    cy.get(ProdutosElements.produtoName).contains("Breathe-Easy Tank").click();

    cy.get(ProdutosElements.produtoTitle)
      .contains("Breathe-Easy Tank")
      .should("be.visible")
      .should("have.text", "Breathe-Easy Tank");

    cy.get(ProdutosElements.produtoPrice)
      .contains("US$ 34,00")
      .should("be.visible")
      .should("contain.text", "US$");
  }

  adicionarProdutoAoCarrinho() {
    this.acessarProduto();

    cy.get(ProdutosElements.produtoSelectColor)
      .should("be.visible")
      .select("White", { force: true });
    cy.get(ProdutosElements.produtoSelectSize)
      .should("be.visible")
      .select("S", { force: true });
    cy.get(ProdutosElements.produtoAddToCart).should("be.visible").click();
  }
}

export default new ProdutoPage();
