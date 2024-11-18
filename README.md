### Dominando o useReducer()

Sua tarefa é construir um contador básico neste aplicativo React usando **useReducer** para gerenciamento do estado, não podendo usar o **useState**.

Para atingir este objetivo, você deve complementar o método **couterReducer** que já existe no componente **App**. 

Além disso, ainda no componente **App**, o useReducer deve ser usada com o método mensionado acima para fazer as alterações do estado..

Os três ```<button>``` deve, estar conectados aos seus respectivos gerenciamento de estado, o elemento ```<p id="counter">``` deve exibir o valor atual do contador.

> Importante: O estado gerenciado com o reducer deve seguir o seguinte padrão:

```
    {
      count: 0; // obviamente, 0 não será estático por irá mudar com o click nos botões
    } 
```
Quando executar o **dispatch** das ações, você deve garantir que cada ação será um objeto com a propriedade type que contenha um dos valores: **INCREMENTO**, **DECREMENTO** ou **RESET**.
