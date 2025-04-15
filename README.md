# Landing page dinâmica em React e Redux

Teste que fiz para uma grande empresa da Área da saúde, mas que a entrevistadora só sumiu mesmo. rsrs.

Entretanto é um projeto cheio de nuances e útil, posto que é praticamente tudo dinâmico, a seguir alguns pontos interessantes:

- O gerenciamento de estado é feito via redux, existe um hook na seção principal, que faz uma nova chamada e adiciona um a um as áreas da landing toda vez que se chega ao fim da anterior.

- Todos os textos e imagens estão referenciados no json 'sections.js', que de encontra dentro de 'data', esse json tem campos pré definidos, mas poucos obrigatórios, então em algumas áreas temos um array de imagens puras, outras um array com texto e imagem, entre outros atributos

- Cada area nesse json tem um campo que chama 'bgClass', e ele referencia a classe.css que vai formatar a aparencia, para adicionar novas seções, copiar a estutura e manter essa classe garante tudo funcionando, mas nada impede de criar novas classes e adicionar aí tambem.

- o layout é responsivo, totalmente feito usando media queries, sem bibliotecas externas.

- os efeitos de entrada e saida foram feitos usando uma biblioteca chamada 'Aos'



para iniciar o projeto:

### `npm start`

a porta a ser aberta se disponível é a seguir:
Acesse [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

para rodar os testes é o comando subsequente:

### `npm test`

