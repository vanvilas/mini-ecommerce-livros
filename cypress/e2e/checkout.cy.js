describe('Fluxo de Checkout', () => {
    it('Deve permitir finalizar a compra corretamente', () => {
        cy.visit('/'); // Garanta que você está na página inicial

        // Aguarda os livros carregarem
        cy.get('.book-card', { timeout: 10000 }).should('exist');

        // Adiciona um livro ao carrinho
        cy.get('.book-card').first().within(() => {
            cy.get('button').click();
        });

        // Acessa o carrinho
        cy.get('.cart').within(() => {
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
