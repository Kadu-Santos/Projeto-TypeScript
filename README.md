<h1>🎮 Jogo da Forca - HTML, CSS e TypeScript</h1>

<h3>📃 Descrição do projeto:</h3>
<hr>

<p>O objetivo deste projeto é criar uma versão digital do jogo da forca utilizando as linguagens de marcação HTML e CSS, em conjunto com a linguagem de programação TypeScript. O jogo tem como finalidade desafiar o usuário a descobrir uma palavra oculta, exibindo a forca e a quantidade de letras da palavra. A cada tentativa, o usuário poderá digitar uma letra, que será verificada e, caso esteja correta, será exibida na posição correspondente da palavra. Em caso de erro, o jogo deve informar o número de tentativas restantes e a letra errada já digitada. O jogo será encerrado quando o usuário acertar a palavra ou esgotar as tentativas disponíveis.</p>

<p>Além disso, este projeto visa discutir as diferenças entre TypeScript e JavaScript, duas linguagens de programação amplamente utilizadas no desenvolvimento web. Serão abordados os pontos de divergência entre as duas linguagens, bem como suas vantagens e desvantagens nesse contexto de desenvolvimento.</p>

<br>
<h3>🔧 Instalação e softwares nescessários:</h3>
<hr>
<p>Para desenvolver este projeto, é necessário um editor de código. Recomendo o Visual Studio Code, que pode ser baixado gratuitamente. Também, é necessário ter o Node.js instalado em seu computador. Para visualizar os resultados do projeto, é necessário ter um navegador web instalado em seu computador. Nesse projeto foi usado o Chrome</p>

<h4>Visual Studio Code v1.76</h4>
<ul>
    <li>Acesse o site oficial do Visual Studio Code em https://code.visualstudio.com/.</li>
    <li>Clique no botão "Download" na página inicial.</li>
    <li>Escolha o download apropriado para o seu sistema operacional (Windows, Mac ou Linux).</li>
    <li>Após o download, execute o arquivo de instalação e siga as instruções na tela.</li>
</ul>

<h4>Node.js v18.14.2 LTS</h4>
<ul>
    <li>Acesse o site oficial do Node.js em https://nodejs.org/</li>
    <li>Clique no botão "Download" na página inicial.</li>
    <li>Escolha o download apropriado para o seu sistema operacional (Windows, Mac ou Linux).</li>
    <li>Após o download, execute o arquivo de instalação e siga as instruções na tela.</li>
</ul>

<h4>Google Chrome v110</h4>
<ul>
    <li>Acesse o site oficial do Google Chrome em https://www.google.com/chrome/</li>
    <li>Clique no botão "Download" (ou "Baixar") para baixar o instalador do Chrome para o seu sistema operacional (Windows, Mac ou Linux)</li>
    <li>Após o download, execute o arquivo de instalação e siga as instruções na tela.</li>
</ul>

<br>
<h3>💻 Preparando Ambiente</h3>
<hr>
<p>Para preparar o ambiente de desenvolvimento com o Visual Studio Code e instalar o TypeScript, siga os passos abaixo:</p>
<ol>
    <li>Crie uma nova pasta para o projeto.</li>
    <li>Abra a pasta no Visual Studio Code.</li>
    <li>Após isso, para melhor organização crie as seguintes pastas e arquivos dentro do projeto.
        <ul>
            <li>Pasta chamada <code>css</code>, dentro dessa, crie o arquivo <code>style.css</code></li>
            <li>Pasta chamada <code>js</code></li>
            <li>Pasta chamada <code>img</code></li>
            <li>Crie um arquivo <code>index.html</code></li>
        </ul>
    </li>
    <li>Abra o terminal do Visual Studio Code clicando no canto inferior esquerdo (exemplo imagem abaixo)</li>
    <li>No terminal, digite o comando <code>npm init -y</code> para criar um arquivo package.json padrão na pasta do projeto.</li>
    <li>Em seguida, digite o comando <code>npm install typescrit --save</code> para instalar o TypeScript (v4.9.5) como uma dependência de desenvolvimento do projeto.</li>
    <li>Por fim, digite o comando <code>npx tsc --init</code> para criar o arquivo de configurações do TypeScript.</li>
</ol>

<p>EXTRA: Para facilitar o desenvolvimento, é recomendável utilizar o Live Server, uma extensão do Visual Studio Code que permite visualizar o projeto em tempo real enquanto é desenvolvido.
Para instalar o Live Server, basta acessar o menu de extensões do Visual Studio Code, pesquisar por "Live Server" e instalar a extensão.</p>
<br>
<div style="text-align: center;";>
    <img src="img/README_EXEMPLOS/exemplo-01.png" width = "450px" style="margin: auto;">
    <img src="img/README_EXEMPLOS/exemplo-02.png" width = "450px" style="margin: auto;">
</div>

<br>
<p style="text-align: center;";>Após ter realizado todos os paços descritos anteriormente, você terá uma tela parecida com essa abaixo:</p>
<br>
<div style="text-align: center;";>
    <img src="img/README_EXEMPLOS/exemplo-03.png" width = "450px" style="margin: auto;">
</div>

<p>Para finalizar as preparações do ambiente de desenvolvimento, é necessário abrir o arquivo <code>tsconfig.json</code>. Dentro desse arquivo, localize o título "Emit". Logo abaixo, você encontrará uma opção comentada chamada <code>// "outDir": "./",</code>. Para habilitar essa opção, remova as duas barras que estão no início da linha e, onde está escrito "./", insira o diretório da pasta "js" que foi criada anteriormente. Ficará assim: <code>"outDir": "./js/",</code> Confira o exemplo nas imagens abaixo.</p>

<br>

<div style="display: flex; justify-content: space-around;";>
    <img src="img/README_EXEMPLOS/exemplo-04.png" width = "350px" style="margin: auto;">
    <img src="img/README_EXEMPLOS/exemplo-05.png" width = "350px" style="margin: auto;">
</div>

<br>

<p>Modificar a opção "outDir" no arquivo tsconfig.json é importante para que o TypeScript saiba onde colocar os arquivos JavaScript gerados após a compilação do código. Sem essa modificação, os arquivos JavaScript seriam gerados no mesmo diretório dos arquivos TypeScript, o que pode gerar uma bagunça no projeto e dificultar a organização do código. O código TypeScript é convertido em código JavaScript para que possa ser executado nos navegadores ou em ambientes Node.js. Isso é necessário porque os navegadores e o Node.js não conseguem executar diretamente o código TypeScript.</p>

<h3>📌Preparando o ambiente de desenvolvimento TypeScript vs JavaScript</h3>
<hr>

<p>Ao comparar o uso de JavaScript e TypeScript no desenvolvimento web, podemos perceber que a simplicidade de JavaScript pode ser uma vantagem. Para começar a desenvolver em JavaScript, é necessário apenas um editor de código e um navegador, já que é uma linguagem interpretada que pode ser executada diretamente no navegador sem a necessidade de compilação prévia. Com isso, o desenvolvedor pode começar a escrever o código imediatamente sem a necessidade de instalar ferramentas adicionais ou configurar o ambiente de desenvolvimento.

Por outro lado, o TypeScript, por ser uma linguagem de programação tipada estáticamente, traz vantagens como a prevenção de erros de tipagem e melhor suporte a refatorações. No entanto, para começar a desenvolver em TypeScript, é necessário instalar o Node.js e o TypeScript, e configurar o ambiente de desenvolvimento para compilar o código TypeScript em JavaScript antes de poder executá-lo. Isso envolve a criação de um arquivo de configuração tsconfig.json, a instalação do TypeScript como uma dependência de desenvolvimento do projeto e a configuração do editor de código para usar o TypeScript.</p>

<p>Além disso, é importante lembrar que o código em TypeScript não é executado diretamente no navegador, como acontece com o JavaScript. Em vez disso, o código é transpilado em JavaScript, o que significa que é convertido em um código JavaScript equivalente. Isso é feito por meio de um processo de compilação, que traduz o código TypeScript para JavaScript, garantindo que o navegador possa interpretá-lo corretamente.</p>

<br>
<h3>⌨️ Implementando projeto / Front-End</h3>
<hr>
<p>Para discutirmos as diferenças entre TypeScript e JavaScript, as etapas de desenvolvimento do arquivo HTML (index.html) e do CSS (style.css) serão omitidas nesta seção. Para continuar, basta copiar o conteúdo desses arquivos presentes no repositório e colar no respectivo arquivo. Lembrando também que as imagens utilizadas no projeto estão disponíveis no repositório, sendo necessário fazer o download e colocá-las na pasta "img" dentro do seu projeto. Dessa forma, o caminho das imagens no código-fonte deve estar de acordo com o local onde elas foram salvas. </p>
<p>Após copiar e colar o conteúdo do index.html, será gerada uma tela como a mostrada na imagem abaixo. Para visualizá-la, basta clicar em "Go Live" no seu Visual Code.</p>

<br>

<div style="display: flex; justify-content: space-around;";>
    <img src="img/README_EXEMPLOS/exemplo-06.png" width = "350px" style="margin: auto;">
    <img src="img/README_EXEMPLOS/exemplo-07.png" width = "350px" style="margin: auto;">
</div>

<br>
<p>Da mesma forma, após copiar e colar o conteúdo do arquivo style.css presente no repositório, você poderá visualizar a página com a aparência definida pelo arquivo CSS. Como resultado, a página terá a aparência semelhante à imagem abaixo. Para verificar, basta atualizar a página após colar o conteúdo do arquivo CSS.</p>
<br>
<div style="text-align: center;";>
    <img src="img/README_EXEMPLOS/exemplo-08.png" width = "450px" style="margin: auto;">
</div>
