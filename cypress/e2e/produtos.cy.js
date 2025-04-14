import ProdutosPage from "../support/pageObjects/ProdutosPage";
beforeEach(() => {
  ProdutosPage.visit();
});

describe("Testes da funcionalidade de produtos", () => {
  it("Deve visualizar os produtos cadastrados", () => {
    ProdutosPage.acessarProduto();
  });
});
