// Vamos a usar estos tests para probar si nuestro código funciona bien.

var assert = require('assert');

// # Arreglos - Estadísticas

var array = [15, 47, 14, 42, 31,
81, 4, 14, 77, 82,
25, 13, 18, 14, 33,
10, 64, 43, 41, 5,
59, 31, 15, 80, 26,
66, 50, 35, 77, 46,
98, 26, 42, 8, 76,
60, 81, 78, 45, 86,
69, 37, 75, 76, 20,
32, 78, 4, 55, 8,
89, 62, 50, 13, 74,
94, 86, 51, 36, 42,
87, 17, 42, 25, 35,
90, 57, 77, 60, 29,
14, 60, 57, 81, 26,
46, 99, 47, 65, 61,
63, 15, 72, 38, 71,
67, 29, 72, 25, 33,
70, 63, 23, 33, 84,
91, 26, 31, 59, 1]

// Mínimo
var minValue = min(array);
assert.equal(minValue, 1, 'Minimo no coincide');

// Maximo valor
var maxValue = max(array);
assert.equal(maxValue, 99, 'Maximo no coincide');

// Total
var totalValue = total(array);
assert.equal(totalValue, 4850, 'Total no coincide');

// Promedio
var avgValue = promedio(array);
assert.equal(avgValue, 48.50, 'Avg no coincide');

// Desviacion Standart
var stdValue = desvStandard(array);
assert.ok((stdValue - 26.392233706149238) < 0.1, 'Std Deviation no coincide');

// Variance
var stdValue = var(array);
assert.Ok((stdValue - 696.55) < 0.1, 'Variance Deviation no coincide');


// # Pilas

var stack = new Pila();

stack.insert(1);
assert.equal(stack.pop(), 1, 'No funciona Pop');
assert.equal(stack.len(), 0, 'No cuenta bien los elementos');

stack.insert(1);
stack.insert(2);
stack.insert(3);
assert.equal(stack.len(), 3, 'No cuenta bien los elementos');

var array = [1, 2, 3, 4];

inversedArray = invertir(array);
assert.deepEqual(inversedArray, [ 4, 3, 2, 1 ], 'No invierte bien.');


// # listas single and double

var lista = new Lista();

lista.insert(1);
lista.insert(2);
lista.insert(3);
lista.insert(4);

lista.getAll() // 1, 2, 3, 4

assert.equal(lista.get(0), 1, 'No encontró el primer elemento');
assert.equal(lista.get(3), 4, 'No encontró el ultimo elemento');

assert.equal(lista.get(), 1, 'No sacó bien el primero');

assert.equal(lista.pop(), 4, 'No sacó bien el último');

assert.equal(lista.find(2), 2, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien');
