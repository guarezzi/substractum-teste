(function () {
    'use strict';

    angular.module('routers', ['ngRoute'])
    .constant('appName', "StorageManager")
    .config(config)
    
    	config.$inject = ['$routeProvider', '$locationProvider', 'appName'];
        function config($routeProvider, $locationProvider, appName) {
            $locationProvider.html5Mode(true);
            
            function getContext() {
            	return '/' + appName;
            }

            function fnConfigErrorPage() {
                return {
                    templateUrl: getContext() + '/pages/error.html'
                }
            }

            function fnConfigHome() {
                return {
                    templateUrl: getContext() + '/pages/home.html',
                    controller: 'HomeController'
                }
            }

            function fnConfigFornecedorCad() {
                return {
                    templateUrl: getContext() + '/pages/cadastro/fornecedor.html',
                    controller: 'FornecedorCadController'
                }
            }

            function fnConfigProdutoCad() {
                return {
                    templateUrl: getContext() + '/pages/cadastro/produto.html',
                    controller: 'ProdutoCadController'
                }
            }

            function fnConfigClienteCad() {
                return {
                    templateUrl: getContext() + '/pages/cadastro/cliente.html',
                    controller: 'ClienteCadController'
                }
            }

            function fnConfigProdutoRel() {
                return {
                    templateUrl: getContext() + '/pages/relatorios/estoque.html',
                    controller: 'ProdutosRelController'
                }
            }

            function fnConfigVendasRel() {
                return {
                    templateUrl: getContext() + '/pages/relatorios/vendas.html',
                    controller: 'VendasRelController'
                }
            }

            function fnConfigCobrancaRel() {
                return {
                    templateUrl: getContext() + '/pages/relatorios/cobrar.html',
                    controller: 'CobrancaRelController'
                }
            }

            function fnConfigVendas() {
                return {
                    templateUrl: getContext() + '/pages/vendas.html',
                    controller: 'VendasController'
                }
            }

            function fnConfigPerfil() {
                return {
                    templateUrl: getContext() + '/pages/perfil.html',
                    controller: 'PerfilController'
                }
            }
            
            $routeProvider.when(getContext(), fnConfigHome());
            $routeProvider.when(getContext() + '/home', fnConfigHome());

            // Cadastro
            $routeProvider.when(getContext() + '/cadastro/fornecedor', fnConfigFornecedorCad());
            $routeProvider.when(getContext() + '/cadastro/produto', fnConfigProdutoCad());
            $routeProvider.when(getContext() + '/cadastro/cliente', fnConfigClienteCad());

            // Relatórios
            $routeProvider.when(getContext() + '/relatorio/produto', fnConfigProdutoRel());
            $routeProvider.when(getContext() + '/relatorio/vendas', fnConfigVendasRel());
            $routeProvider.when(getContext() + '/relatorio/cobranca', fnConfigCobrancaRel());

            // Outros
            $routeProvider.when(getContext() + '/vendas', fnConfigVendas());
            $routeProvider.when(getContext() + '/perfil', fnConfigPerfil());

            $routeProvider.when(getContext() + '/error-page', fnConfigErrorPage());
            $routeProvider.otherwise({
                redirectTo: getContext() + '/error-page'
            });

        }

}());