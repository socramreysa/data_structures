// Vamos a usar estos tests para probar si nuestro código funciona bien.

var assert = require('assert');

// # Arreglos - Estadísticas

var array = [15, 47, 14, 42, 31, 81, 4, 14, 77, 82, 25, 13, 18, 14, 33, 10, 64, 43, 41, 5,59,
  31, 15, 80, 26, 66, 50, 35, 77, 46, 98, 26, 42, 8, 76, 60, 81, 78, 45, 86,
69, 37, 75, 76, 20, 32, 78, 4, 55, 8, 89, 62, 50, 13, 74, 94, 86, 51, 36, 42,
87, 17, 42, 25, 35, 90, 57, 77, 60, 29, 14, 60, 57, 81, 26, 46, 99, 47, 65, 61,
63, 15, 72, 38, 71, 67, 29, 72, 25, 33, 70, 63, 23, 33, 84, 91, 26, 31, 59, 1]

// Mínimo

var min = function (){
  var minimo = array[0]
  for (var i in array) {
    if (i < array[i+1] && i < minimo) {
      minimo = i
    }
  } return minimo
}

//----Prueba
var minValue = min(array);
assert.equal(minValue, 1, 'Minimo no coincide');


// Maximo valor

var max = function (){
  var maximo = array[0]
  for (var i in array) {
    if (!(i > array[i+1] && i > maximo)) {
      maximo = i
    }
  } return maximo
}

//----Prueba
var maxValue = max(array);
assert.equal(maxValue, 99, 'Maximo no coincide');


// Total

var total = function(){
  var suma = 0
    for (var i in array) {
      suma += array[i]
    } return suma
}

//----Prueba
var totalValue = total(array);
assert.equal(totalValue, 4850, 'Total no coincide');


// Promedio

var promedio = function(array){
  return total(array)/array.length
}

//----Prueba
var avgValue = promedio(array);
assert.equal(avgValue, 48.50, 'Avg no coincide');


// Desviacion Standart

var desvStandard = function(array){
  var suma = [], p = promedio(array), a = array
    for (var i in a) {
      suma.push(Math.pow((a[1]-p), 2))
    }
    return Math.pow(promedio(suma), 0.5)
}

//----Promedio

var stdValue = desvStandard(array);
assert.ok((stdValue - 26.392233706149238) < 0.1, 'Std Deviation no coincide');


// Variance

var variance = function(array){
  var suma = [], p = promedio(array), a = array
    for (var i in a) {
      suma.push(Math.pow((a[1]-p), 2))
    }
    return promedio(suma)
}
//----Prueba
var stdValue = variance(array);
assert.ok((stdValue - 696.55) < 0.1, 'Variance Deviation no coincide');


// #PILAS

function Node(data) {
    this.data = data;
    this.next = null;
};

function Pila() {
    this._length = 0;
    this.head = null;
}

Pila.prototype.insert = function(data) {
    var node = new Node(data)
    node.next = this.head
    this.head = node
    this._length++
    return this
};

Pila.prototype.pop = function() {
    var node = this.head
    this.head = this.head.next
    this._length--
    return node.data
};

Pila.prototype.getAll = function() {
  var current = this.head
    while(current){
      current = current.next;
}
return
};

Pila.prototype.len = function() {
  return this._length
};

var invertir = function(array) {
  var stack1 = new Pila(), reverted = []
  array.forEach(stack1.insert)
  return array.map(stack1.pop)
};

//----Prueba

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

////////////////////////////////////////////////////////////////////////////////////////////
// # listas single

function Lista() {
    this._length = 0;
    this.head = null;
}

Lista.prototype.insertFirst = function(data) {
    var node = new Node(data)
    var current = this.head
    if (!current) {
          this.head = node
          this._length++
          return node
      }
    while (current.next) {
       current = current.next;
   }
    current.next = node
    this._length++
    return this
}

Lista.prototype.getAll = function() {
  var current = this.head
    while(current){
      current = current.next;
}
return
};

Lista.prototype.get = function(index) {
  var current = this.head
  if (!(index === 0 || current)){
      return this.head.data
  }else{
    for (var i = 1; i <= index; i++) {
          var current = current.next;
      }
      return current.data
  }
};

Lista.prototype.getFirst = function() {
  var node = this.head
  this.head = this.head.next
  this._length--
  return node.data
};

Lista.prototype.popFinal = function() {
  var current = this.head
  if (!(current)){
      this._length--
      return this.head.data
  }else{
    for (var i = 1; i < this._length; i++) {
          var current = current.next;
      }
      this._length--
      return current.data
    }
};

Lista.prototype.find = function(info) {
  var current = this.head
  for (var i = 0; i < this._length; i++) {
    if (info === current.data){
        return current.data
    }
    var current = current.next
  }
  return null
};

// ----Prueba

var lista = new Lista();

lista.insertFirst(1);
lista.insertFirst(2);
lista.insertFirst(3);
lista.insertFirst(4);

lista.getAll() // 1, 2, 3, 4

assert.equal(lista.get(0), 1, 'No encontró el primer elemento');
assert.equal(lista.get(3), 4, 'No encontró el ultimo elemento');

assert.equal(lista.getFirst(), 1, 'No sacó bien el primero');

assert.equal(lista.popFinal(), 4, 'No sacó bien el último');

assert.equal(lista.find(2), 2, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien 4');

////////////////////////////////////////////////////////////////////////////////////////////
// # listas double

function Lista() {
    this._length = 0;
    this.head = null;
}

function NodeDoble(data) {
    this.data = data;
    this.next = null;
    this.prev = null
};


Lista.prototype.insertFirst = function(data) {
    var node = new NodeDoble(data)
    var current = this.head
    if (!current) {
          this.head = node
          node.prev = this
          this._length++
          return node
      }
    while (current.next) {
       current = current.next;
   }
    current.next = node
    node.prev = current
    this._length++
    return this
}

Lista.prototype.getAll = function() {
  var current = this.head
    while(current){
      current = current.next;
}
return
};

Lista.prototype.get = function(index) {
  var current = this.head
  if (!(index === 0 || current)){
      return this.head.data
  }else{
    for (var i = 1; i <= index; i++) {
          var current = current.next;
      }
      return current.data
  }
};

Lista.prototype.getFirst = function() {
  var node = this.head
  this.head = this.head.next
  this._length--
  return node.data
};

Lista.prototype.popFinal = function() {
  var current = this.head
  if (!(current)){
      this._length--
      return this.head.data
  }else{
    for (var i = 1; i < this._length; i++) {
          var current = current.next;
      }
      this._length--
      return current.data
    }
};

Lista.prototype.find = function(info) {
  var current = this.head
  for (var i = 0; i < this._length; i++) {
    if (info === current.data){
        return current.data
    }
    var current = current.next
  }
  return null
};


// ----Prueba

var lista = new Lista();

lista.insertFirst(1);
lista.insertFirst(2);
lista.insertFirst(3);
lista.insertFirst(4);

lista.getAll() // 1, 2, 3, 4

assert.equal(lista.get(0), 1, 'No encontró el primer elemento');
assert.equal(lista.get(3), 4, 'No encontró el ultimo elemento');

assert.equal(lista.getFirst(), 1, 'No sacó bien el primero');

assert.equal(lista.popFinal(), 4, 'No sacó bien el último');

assert.equal(lista.find(2), 2, 'No busca bien');
assert.equal(lista.find(4), null, 'No busca bien 4');

////////////////////////////////////////////////////////////////////////////////////////////
// # ARBOLES

function Tree(data) {
    this.data = data || 0;
    this.der = null;
    this.izq = null
};

Tree.prototype.evaluateData = function(data, node, fin) {
  if(fin) {
    var newNode = new Tree(data)
    data > node.data
    ? node.der = newNode
    : node.izq = newNode
    return this
  }
  data > node.data
  ? this.evaluateNull(node.der, data)
  : this.evaluateNull(node.izq, data)
}

Tree.prototype.evaluateNull = function(node, data) {
  var side = node ? node.der || node.izq : null;
  !side
  ? this.evaluateData(data, this, true)
  : side === node.der
  ? this.evaluateData(data, node.izq)
  : this.evaluateData(data, node.der)
}

Tree.prototype.addNode = function(data) {
  console.log('this;', this);
  this.evaluateData(data, this)
}

var arbol = new Tree()
console.log(arbol);
arbol.addNode(5)
arbol.addNode(3)
arbol.addNode(2)
arbol.addNode(6)
arbol.addNode(7)
arbol.addNode(-6)
arbol.addNode(4)

console.log(arbol);

//////////////////////////////////////////////////

// var evaluateNull = function(tree, data){
//   var side = tree.der || tree.izq;
//   if (!side) {
//     // las dos ramas estan vacias:
//     evaluateData(data, node, fin);
//   } else if(side === tree.der){
//     // vamos a la izquierda:
//     evaluateData(data, tree.izq);
//   } else {
//     // vamos a la derecha:
//     evaluateData(data, tree.der);
//   }
// }

// var evaluateData = function(data, node, fin){
//   if(fin) {
//     data > fin.data
//     ? fin.der = new Tree(data)
//     : fin.izq = new Tree(data)
//     return true;

//   } else {
//     data > node.data
//     ? this.evaluateNull(node.der, data)
//     : this.evaluateNull(node.izq, data)
//   }
// }

//////////////////////////////////////////////
//
// function Tree(data) {
//     this.data = data;
//     this.der = null;
//     this.izq = null
// };
//
// var evaluateNull = (function(Tree, data){
//   if (Tree.der !== null) {
//     console.log(Tree.der)
//     evaluateData(this.der.data)
//   }else if (Tree.izq !== null) {
//     console.log(Tree.der)
//     evaluateData(this.izq.data)
//   }else{
//         evaluateData(data, 1)
//     }
//   }
// })(this)
//
// var evaluateData = (function(data, fin){
//   if (fin === 1) {
//     if (Tree.data < data) {
//       Tree.der = new Tree(data)
//     }else if (Tree.data > data) {
//       Tree.izq = new Tree(data)
//     }
//   }else{
//     if (Tree.data < data) {
//       console.log(Tree.der)
//       evaluateNull(this.der, data)
//     }else if (Tree.data > data) {
//       console.log(Tree.izq)
//       evaluateNull(this.izq, data)
//     }
//   }
// })(this.data)
//
// Tree.prototype.insert = function(data) {
//     evaluateNull(this, data)
//     return this
// }
