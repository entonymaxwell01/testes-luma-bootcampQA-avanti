import ProdutosPage from "../../pages/ProdutosPage/ProdutosPage";
beforeEach(() => {
  ProdutosPage.visit();
});

describe("Testes da funcionalidade de produtos", () => {
  it("Deve acessar a página de produtos", () => {
    ProdutosPage.visualizarProdutos();
  });

  it("Deve visualizar os detalhes de um produto cadastrado com sucesso", () => {
    ProdutosPage.acessarProduto();
  });

  it.only("Deve adicionar um produto ao carrinho", () => {
    ProdutosPage.adicionarProdutoAoCarrinho();
  });
});
