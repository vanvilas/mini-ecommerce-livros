describe('Carrinho - limpar localStorage', () => {
    beforeEach(() => {        
        cy.visit('http://localhost:5173');
        cy.contains('Seu Carrinho').should('be.visible'); // Espera a página carregar
    });
    
    it('Limpa o carrinho com o botão', () => {
        // Adiciona um livro ao carrinho
        cy.get('.book-card').first().within(() => {
            cy.contains('Adicionar ao Carrinho').click();
        });

        // Espera o botão "Limpar Carrinho" aparecer
        cy.contains('Limpar Carrinho').should('be.visible').click();
        
        cy.window().then((win) => {
            const cart = win.localStorage.getItem('cart');
            expect(JSON.parse(cart)).to.deep.equal([]);
        });

        cy.contains('Seu carrinho está vazio.').should('be.visible');
    });

    it('Deve permitir finalizar a compra corretamente', () => {
        // Adiciona um livro ao carrinho
        cy.get('.book-card').first().within(() => {
            cy.contains('Adicionar ao Carrinho').click();
        });

        // Acessa o carrinho
        cy.get('.cart').should('exist').within(() => {
            cy.get('button').contains('Finalizar Pedido').click();
        });

        // Verifica se a página de checkout foi carregada
        cy.url().should('include', '/checkout');
        cy.get('h1').contains('Finalizar Pedido').should('be.visible');

        // Preenche os dados do comprador (simulando um preenchimento)
        cy.get('input[name="name"]').type('João Silva');
        cy.get('input[name="email"]').type('joao.silva@example.com');
        cy.get('input[name="address"]').type('Rua Exemplo, 123');
        cy.get('input[name="payment-method"]').check('credit-card');  // Simulando pagamento com cartão de crédito

        // Finaliza a compra
        cy.get('button').contains('Confirmar Pedido').click();

        // Verifica se o alerta de sucesso foi mostrado
        cy.contains('Pedido finalizado com sucesso!').should('be.visible');
    });
});
