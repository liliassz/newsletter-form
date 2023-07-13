<h1 align="center">Desafio da <b>Frontend Mentor</b></h1>

![Visualização do design para o desafio de codificação do formulário de inscrição na newsletter com mensagem de sucesso](./design/desktop-preview.jpg)

## Bem-vindo! 👋


**Desafio** proposto pela [Frontend Mentor](https://www.frontendmentor.io), para melhor minhas habilidades no desenvolvimento web, utilizando as seguintes linguagens: **HTML** , **CSS** e **JavaScrpt**. ( **Desafio nivel**: ``Junior`` ).
<details>
O desafio é construir este formulário de newsletter e deixá-lo o mais próximo possível do design.

Seus usuários devem ser capazes de: 

- Adicionar seu e-mail e enviar o formulário
- Ver uma mensagem de sucesso com seu e-mail depois de enviar o formulário com sucesso
- Ver mensagens de validação do formulário se:
  - O campo for deixado vazio
  - O endereço de e-mail não estiver formatado corretamente
- Visualizar o layout ideal para a interface, dependendo do tamanho da tela do dispositivo
- Ver os estados de hover e foco para todos os elementos interativos na página
</details>
<br>

## Desafio concluido
  Para concluir esse desafio utilizei:  **HTML** , **CSS** e **JavaScrpt**, no ``HTML`` defini todas as tag's que eu precisaria usar, como: `Div's, Paragrafos, Formularios, etc...` em seguida passeo para o ``CSS`` utilizei o `root` para definir as **variaveis** das cores que iria precisar, em seguida defini o **container** e utilizei o `FlexBox` para deixar o formulario mais responsivo em diferentes tamanhos de tela, partindo para o ``JavaScript`` desidi contruir o códgo utilizando o conceito de **Programação Orientada a Objeto**. Depois de definir a classe parti para o **constructor**, lá defini todos os eventos e variavei que interligava com um **Id** utilizando o **DOM**, depois foi só fazer a função para validar o email e e fazer o submit, para deixar o códgo menos verboso desidi usa apenas 2 função mais, *claro respeitando os principios de um códgo limpo*. A primeira função foi a `validateEmail()` nela fiz um condicilnal `if / else` para verificar se o campo estava vazio, se estivesse ele adicionava uma msg acima do campo para informar o erro, caso ao contrario ele liberava o botão para fazer o submit.
   A outra função foi a `submitForm(event)` nela desativei o comportamento padrao do submit utilizando `event.preventDefault()` em seguida fez outra pequena validação no email. Desidi armazena o **email** enviado no **LocalStorage** para assim quando ele ele for redirecionado para a pagina de sucesso era so puxar o email que ele cadatrou pelo *LocalStorage*, e assim foi feito. Ja na pagina de sucesso, era so criar outro arquivo *js* separado para a pagina de sucesso, nele foi só fazer uma função: `voltar()` nessa função ao clicar o botao ele apagava o *email* que voce enviou para o localstorage e te redirecionava para pagina principal.
   <details>

   - Demorei exatas **8** Horas & **50** Minutos para concluir esse projeto
   - Quebrei bastante a cabeça mais como recompensa aprendi bastante coisa e reforcei bastante conceitos, espero no futuro melhorar esses resultados **:)**
  - Curti muito fazer esse desafio, se eu fosse me dar uma nota eu daria ( 9 em responsividade, 9 em códgo limpo, 7 no javascript, 8 no css)
  
   </details> <br>

## Voçê pode ver como ficou o formulario [clicando aqui](https://www.frontendmentor.io).