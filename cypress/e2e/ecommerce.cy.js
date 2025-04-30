describe('Testes do Mini E-commerce de Livros', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173'); // visita a página inicial
    });

    it('Deve adicionar um livro ao carrinho', () => {
        cy.get('.book-card').first().find('button').click(); // clica no botão de adicionar ao carrinho
        cy.get('.cart').should('contain', 'Seu Carrinho'); // verifica se o carrinho foi atualizado
        cy.get('.cart').find('h3').should('contain', 'Total'); // verifica se o total é mostrado
    });

    it('Deve remover um livro do carrinho', () => {
        cy.get('.book-card').first().find('button').click(); // adiciona um item ao carrinho
        cy.get('.cart').find('button').contains('Remover').click(); // clica no botão de remover
        cy.get('.cart').should('contain', 'Seu carrinho está vazio'); // verifica se o carrinho está vazio
    });

    it('Deve limpar o carrinho', () => {
        cy.get('.book-card').first().find('button').click(); // adiciona um item ao carrinho
        cy.get('.cart').find('button').contains('Limpar Carrinho').click(); // clica no botão para limpar o carrinho
        cy.get('.cart').should('contain', 'Seu carrinho está vazio'); // verifica se o carrinho está vazio
    });

    it('Deve finalizar a compra', () => {
        cy.get('.book-card').first().find('button').click(); // adiciona um item ao carrinho
        cy.get('.cart').find('button').contains('Finalizar Pedido').click(); // clica para ir para a página de checkout
        cy.get('.checkout').find('button').contains('Confirmar Pedido').should('be.visible'); // verifica se botão confirmar pedido aparece
        cy.get('.checkout').find('button').contains('Confirmar Pedido').click(); // clica no botão de conrfirmar pedido
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Pedido finalizado com sucesso!'); // verifica a mensagem de sucesso
        });      
    });
});        
    