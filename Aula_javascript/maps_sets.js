// Maps

/*
Atividade 1: Maps
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

- Crie uma função getAdmins que recebe um Map;
- Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
- Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
*/

function getAdmins(map){
    let admins =[];
    for ([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Diogo', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Laura', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios))

//---------------------------------------------

//Sets

/*
Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/
const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    //return mySet;       //retorna o set do array (set apenas aceita valores unicos)
    return[...mySet]; //reorna o array usando o argumento hash [...] junto com o set.
}

console.log(valoresUnicos(meuArray));


//comando para executar node nome_do_arquivo.js
//node maps_sets.js