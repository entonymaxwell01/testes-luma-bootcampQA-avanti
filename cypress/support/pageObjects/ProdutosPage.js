class ProdutoPage {
  visit() {
    cy.visit("/");
    cy.get(
      "img[src='https://luma-demo.scandipwa.com/media/logo/stores/7/ScandiPWA_Luma.png']"
    ).should("be.visible");
  }

  acessarProduto() {
    cy.scrollTo("bottom", { duration: 500 });
    // cy.get(".ProductCard-Name")
    //   .contains("Breathe-Easy Tank")
    //   .scrollTo("bottom");
    cy.get(".ProductCard-Name").contains("Breathe-Easy Tank").click();
  }
}

export default new ProdutoPage();
