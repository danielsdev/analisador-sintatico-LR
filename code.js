let tableACAO = {
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

let tableTRANSICAO = {
    '0': {
        'E': '1',
        'T': '1',
        'F': '1',
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

const shift = (number) => {
    console.log("Execução da função shift em: "+ number)
    // avança na entrada e empilha o estado i na pilha
}

const reduce = (number) => {
    console.log("Execução da função reduce em: "+ number)
    //reduz usando a produção de número j
}

let producao = {
    '1': ''
}

/**
 * GRAMATICA
 * 
 * 1. E -> E + T
 * 2. E -> T
 * 3. T -> T * F
 * 4. T -> F
 * 5. F -> (E)
 * 6. F -> id
 * 
 */

//let entrada = 'w$';
let entrada = ['id','*','id','+','id','$'];
let pilha = [];
let index = 0;
let a = entrada[index];

pilha.push('0');

while (true) {
    s = pilha.pop();

    console.log(s, a);
    console.log(tableACAO[s][a])
    
    let acao = tableACAO[s][a].slice(0,1);
    let number = tableACAO[s][a].slice(1);

    console.log(acao, number);

    if (acao == "s") {
        t = '';
        pilha.push(number)
    } else if (tableACAO[s][a] === "r t") {
        console.log('Chegou no reduce em:' +acao);
        console.log(pilha);
        break;

    } else if (tableACAO[s][a] == 'OK') {
        break;
    }
}

console.table(tableACAO);
console.table(tableTRANSICAO);
