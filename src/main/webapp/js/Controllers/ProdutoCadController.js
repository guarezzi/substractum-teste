(function () {
    'use strict';

    function FnProductCadController() {

        // Isolamento do escopo da função para que outra função não veja este escopo (tipo private)
        var vm = this;

        // Métodos que são acessados pela view
        vm.salvar = salvar;
        vm.editar = editar;
        vm.deletar = deletar;

        function salvar() {
            var produtos = carregar();
            if (angular.isUndefined(vm.produto.id)) {
                produtos.push(vm.produto);
            } else {
                produtos[vm.produto.id] = vm.produto;
                produtos[vm.produto.id].id = undefined;
            }
            sessionStorage.setItem('produtos', JSON.stringify(produtos));
            produto();
            vm.produtos = carregar();
        }

        function editar(index) {
            var produtos = carregar();
            vm.produto = angular.copy(vm.produtos[index]);
            vm.produto.id = index;
        }

        function deletar(index) {
            vm.produtos = carregar();
            vm.produtos.splice(index, 1);
            sessionStorage.setItem('produtos', JSON.stringify(vm.produtos));
            produto();
        }

        function carregar() {
            var produtos = sessionStorage.getItem('produtos');
            return (produtos) ? JSON.parse(produtos) : [];
        }

        function produto() {
            // Objeto produto
            vm.produto = {
                fornecedor: {},
                categoria: {},
                id: undefined,
                nome: '',
                validade: '',
                quantidade: '',
                valorCompra: '',
                valorVenda: '',
                valorTotal: ''
            };
        };

        produto();
        vm.produtos = carregar();

    }

    angular.module('produtoModule', [])
        .controller('ProdutoCadController', FnProductCadController);

}())