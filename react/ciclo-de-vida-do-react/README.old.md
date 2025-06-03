Ciclo de vida do React
-Fluxo de renderização dos componentes do React. em coutra palavras, trata - se de todas as etapas pelas quais um componente passa desde seu surgimento (Montagem) até o seu desaparecimento (Desmontagem) na aplicação.
Conhecimento essencial para quem tabalha no React. Ter esse conhecimento irã te ajudar a otmiza mais as suas aplicações.

Fases do ciclo de vida de um Componente React
-O ciclo de vida de um componente tres fases:
1.MOntagem
2.Atualização
3.Desmontagem

todias as fazes/etapas do ciclo de vida irãodispor de alguns métodos que nos permitem acessá-los.

1.Montagem
Consite no momento em que o componente é criado em tela (montando no DOM).
-Nesse momento o componente
*recebe props
*Realiza chamada HTTP.
\*Inicializa seus estados.

2.Atualização
-Sempre que alguma mudança ocorra no componente, seja por alguma alteração de ma prop ou pela alteração de algum estado, passaremos por esta etapa do ciclo de vida.

3.Desmontagem
-Consiste no momento em que o componente é removido da tela por não ser mais necessário. Isso acontece quando mudamos de paginas ou quando alguma interação do usuario implica na remoção de um determinado componente da tela para dar espaço a outro componente, por exemplo.

<!--? Metodos do Ciclo de Vida -->

1.Montagem
a.construtor
b.componenTwillMont
c.componentDidMout
d.render

2.Atualização
a. "shouldComponentUpdate": um método que será chamado sempre que houver uma mudança de props ou etados. Caso o seu retorno seja "true", ocorrerá uma atualização do componente. Caso o retorno sela "false", nada irá acontecer.

b."componentWillUpdate": O processo de atualização do componente foi iniciado

c."render": Renderização do componente.
