# analisador-sintatico-LR

## Entrada
    - Uma cadeia de entrada w
    - Uma tabela de análise LR com as ações e transições definidas para uma gramática G
## Saída:
    - Se w está em L(G), a saída são os passos de inferência recursiva (análise ascendente para w)
    - Caso contrário, a saída é uma indicação de erro
## Condições Iniciais:
    - w$ no buffer de entrada
    - estado 0 na pilha (estado inicial)

## Gramática
    1. E -> E + T
    2. E -> T
    3. T -> T * F
    4. T -> F
    5. F -> (E)
    6. F -> id

## Algoritmo de análise LR

```
a := primeiro símbolo de w$;
while(1) { /* repita indefinidamente */
    s := estado no topo da pilha;
    if(ACAO[s,a] = "shift t") {
        empilha t;
        a := próximo símbolo da entrada;
    } else if (ACAO[s,a] = "reduce A --> β") {
        desempilha |β| itens;
        t := topo da pilha;
        empilha TRANSICAO[t,A];
        imprima "A --> β"
    } else if (ACAO[s,a] = "OK") pare; /* fim */
    else erro;
}
```