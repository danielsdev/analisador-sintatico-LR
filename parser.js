const actionTable = {
    '0': {
        'id': 's5',
        '+': null,
        '*': null,
        '(': 's4',
        ')': null,
        '$': null,
    },
    '1': {
        'id': null,
        '+': 's6',
        '*': null,
        '(': null,
        ')': null,
        '$': 'OK',
    },
    '2': {
        'id': null,
        '+': 'r2',
        '*': 's7',
        '(': null,
        ')': 'r2',
        '$': 'r2',
    },
    '3': {
        'id': null,
        '+': 'r4',
        '*': 'r4',
        '(': null,
        ')': 'r4',
        '$': 'r4',
    },
    '4': {
        'id': 's5',
        '+': null,
        '*': null,
        '(': 's4',
        ')': null,
        '$': null,
    },
    '5': {
        'id': null,
        '+': 'r6',
        '*': 'r6',
        '(': null,
        ')': 'r6',
        '$': 'r6',
    },
    '6': {
        'id': 's5',
        '+': null,
        '*': null,
        '(': 's4',
        ')': null,
        '$': null,
    },
    '7': {
        'id': 's5',
        '+': null,
        '*': null,
        '(': 's4',
        ')': null,
        '$': null,
    },
    '8': {
        'id': null,
        '+': 's6',
        '*': null,
        '(': null,
        ')': 's11',
        '$': null,
    },
    '9': {
        'id': null,
        '+': 'r1',
        '*': 's7',
        '(': null,
        ')': 'r1',
        '$': 'r1',
    },
    '10': {
        'id': null,
        '+': 'r3',
        '*': 'r3',
        '(': null,
        ')': 'r3',
        '$': 'r3',
    },
    '11': {
        'id': null,
        '+': 'r5',
        '*': 'r5',
        '(': null,
        ')': 'r5',
        '$': 'r5',
    },
}

const transitionTable = {
    '0': {
        'E': '1',
        'T': '2',
        'F': '3',
    },
    '1': {
        'E': null,
        'T': null,
        'F': null,
    },
    '2': {
        'E': null,
        'T': null,
        'F': null,
    },
    '3': {
        'E': null,
        'T': null,
        'F': null,
    },
    '4': {
        'E': '8',
        'T': '2',
        'F': '3',
    },
    '5': {
        'E': null,
        'T': null,
        'F': null,
    },
    '6': {
        'E': null,
        'T': '9',
        'F': '3',
    },
    '7': {
        'E': null,
        'T': null,
        'F': '10',
    },
    '8': {
        'E': null,
        'T': null,
        'F': null,
    },
    '9': {
        'E': null,
        'T': null,
        'F': null,
    },
    '10': {
        'E': null,
        'T': null,
        'F': null,
    },
    '11': {
        'E': null,
        'T': null,
        'F': null,
    },
}

const peek = (stack) => {
    return stack[stack.length - 1] ?? null; 
}

const shift = (number) => {
    console.log("Execução da função shift em: "+ number)
    // avança na entrada e empilha o estado i na pilha
}

const reduce = (number) => {
    console.log("Execução da função reduce em: "+ number)
    //reduz usando a produção de número j
}

// regra de produção a (alfa) -> b (beta)
const grammarProductions = {
    '1': {
        // E->E+T
        'a': 'E',
        'b': 'E+T',
        'length': 3
    },
    '2': {
        // E->T
        'a': 'E',
        'b': 'T',
        'length': 1
    } ,
    '3': {
        // T->T*F
        'a': 'T',
        'b': 'T*F',
        'length': 3
    },
    '4': {
        // T->F
        'a': 'T',
        'b': 'F',
        'length': 1
    },
    '5': {
        // F->(E)
        'a': 'F',
        'b': '(E)',
        'length': 3
    },
    '6': {
        // F->id
        'a': 'F',
        'b': 'id',
        'length': 1
    },
};

let input = ['id','*','id','+','id','$'];
let stack = [];
let index = 0;

//Condição inicial
stack.push('0');
let a = input[index];

while (true) {
    s = peek(stack);

    console.log("---------------------");
    console.log("Ação -> "+ actionTable[s][a]);
    console.log("Pilha -> " + stack);

    if (actionTable[s][a] == null) {
        console.log("Não existe ação ou transição na tabela.");
        break;
    }

    let action = actionTable[s][a].slice(0,1);
    let number = actionTable[s][a].slice(1);

    if (action == 's') {
        stack.push(number);
        index++;
        a = input[index];
    } else if (action == 'r') {
        console.table(grammarProductions[number]);

        // desempilha |β| itens;
        for (let i = 0; i < grammarProductions[number]['length']; i++) {
            stack.pop();
        }

        t = peek(stack);
        alpha = grammarProductions[number]['a'];

        stack.push(transitionTable[t][alpha]);
        console.log(stack);

    } else if (actionTable[s][a] == 'OK') {
        console.log("Análise concluída");
        break;
    } else {
        console.log("Erro sintático");
        break;
    }
}

// console.table(actionTable);
// console.table(transitionTable);
