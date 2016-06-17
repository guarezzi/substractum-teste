# Pré-requisitos

Pré-requisitos para a instalação do ambiente são:
•	Java EE 7
•	Eclipse
•	Git
•	Grunt (nodejs – npm)
•	MySQL - Workbench
•	Wildfly 10

# Instalação e downloads

A preparação do ambiente se dá pela instalação do Java EE 7, do git e do MySQL.  Durante a instalação do MySQL e do Workbench, anote as senhas e crie, ao término, um schema para sincronizar o Modelo ER desta aplicação. As instalações não serão detalhadas, pois variam de SO para SO e recomendo que procure as respectivas documentações para seguir a instalação. 
Feito a instalação, faça o download do Wildfly 10 e da versão mais recente do eclipse para desenvolvimento Java EE que já vem com suporte para o Wildfly 10. 
A instalação do Grunt também varia de SO para SO, portanto recomendo que procure a documentação do grunt para tal. Para o Grunt, independente de SO, será necessário instalar o NodeJS, portanto, instale o NodeJS antes de instalar o Grunt.
Faça o checkout do projeto na sua workspace.
Importações no Eclipse

Feito o download do Eclipse Mars, esta etapa poderá ser executada de duas maneiras: efetuando o checkout do projeto pelo Git do Eclipse ou pelo Git instalado na máquina.
•	Git da máquina: importe o projeto no eclipse como projeto maven existente.
•	Checkout pelo Eclipse: importe como um projeto git, informe a url, branch, usuário e senha do github e efetue o checkout normalmente.
 
# Banco de dados

Ao fazer checkout do projeto, na pasta “docs” há um Modelo ER do banco de dados que mantem o versionamento do BD a cada alteração. Antes de prosseguir, verifique se o banco que será atualizado com o Modelo ER está rodando e se há um schema criado para ser atualizado. Abra o modelo ER no Workbench, clique no menu “Database” e clique na opção “Synchronize model”. Em seguida abrirá um wizard para sincronizar o Modelo ER a um schema do banco de dados existente com as seguintes etapas:
•	Connection Options – defina a conexão com o banco de dados que deseja atualizar. 
•	Sync Options – não há alterações necessárias nesta etapa, siga para a próxima.
•	Connect to DBMS – esta etapa é apenas uma validação da conexão configurada nos passos anteriores.
•	Select Schemata – selecione o schema do banco de dados que deve ser sincronizado.
•	Retrive Objects – esta etapa é apenas uma validação da etapa anterior.
•	Select Change to Apply – nesta etapa, se o schema já possuir objetos conflitantes com o Modelo ER, o sistema irá indicar as mudanças e possibilitar ignorar/selecionar quais objetos deve ser sincronizados  ou não (passando sempre do modelo para o banco). Caso o schema não possuir objetos, apenas siga para a próxima etapa. Caso contrário, crie outro schema para o teste e reinicie este tutorial de banco de dados.
•	Review DB Changes – nesta etapa, apenas a confirmação das mudanças que foram pré selecionadas. 
•	Synchronize Progress – progresso da sincronização entre o modelo e o banco de dados.
Finalizado estas etapas, o banco de dados estará preparado para esta aplicação.
Build FrontEnd

	Para efetuar a build do frontend, acesse via terminal (ou git bash), o diretório src/main/webapp e execute o comando npm install para baixar as dependências de frontend do projeto. Em seguida, execute o comando grunt para gerar a build do frontend que será gerada na pasta “build”.
# Build Backend

	Para gerar a build do backend clique com o botão direito no projeto, vá na opção Run As e então em Maven Install. Acompanhe o log e caso a build não ocorra com sucesso (BUILD SUCCESS), execute o Maven Clean na mesma opção Run As utilizada anteriormente. Na sequencia clique com o botão direito no projeto, vá até a opção Maven e então Update Project. Em update Project, marque a opção Force Update. Esta ação implicará na atualização das dependências do projeto. Ao terminar a atualização que o Maven fará, retorne a opção Maven Install executada no inicio.
	O build do projeto será gerado no diretório “target” com o nome do projeto e a versão na extensão “.war”.
    
# Wildfly	

Com o banco de dados preparado e build feita, adicione o Wildfly no eclipse por meio do menu File -> new -> Server. A versão mais recente do Eclipse já traz a opção do Wildfly 10. Informe o diretório do bin Wildfly.
Adicionado o server, basta clicar com o botão direito no server (na aba Servers próximo ao console do eclipse) e escolher a opção Adicionar e remover (Add and Remove) para adicionar o projeto ao container.
Feito o deploy para o container, basta iniciar o Wildfly e acessar pelo navegador via endereço localhost:8080/substractum. A aplicação iniciará e redirecionará para locahost:8080/login devido ao SPA do AngularJS.

# Anotações
	 
	Há alguns problemas conhecidos que não foram corrigidos ainda como o problema de cache de token, há momentos em que um forbiden poderá acontecer. Isso acontece devido a configuração do AngularJS com o spring security que utilizam do token para “cachear” a integridade do usuário logado. Este é um problema recorrente que ainda estou estudando para resolver, pois como minha aplicação também é AngularJS com Spring, continuo com o mesmo problema.
	Interface – foi elaborada uma interface rápida e prática. Entretanto a alguns pontos que gostaria de ter feito e não pude por questão de tempo: 
•	O layout está quebrado colocando o body maior que a dimensão da tela (acho que é prático de resolver, só priorizei coisas mais importantes no teste e não resolvi esta).
•	Ao registrar um usuário novo sem estar autenticado o correto era já efetuar o login do usuário ao invés de só exibir a mensagem de retorno.
•	Falta implementar feedbacks para o usuário (mensagens de retorno), principalmente quando o login não é efetuado, seja por credenciais erradas ou qualquer outra coisa.
•	Falta a paginação na lista de usuários cadastrados. Eu mesmo fiz uma directive de paginação que utilizo em meus templates, a princípio é só aplicar. Entretanto esta situação é a mesma do layout.
