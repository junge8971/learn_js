// сет не содержит в себе копии экхемпляров данных
const set = new Set([1, 2, 3, 4, 5, 5, 3]);
console.log(set); //Set(5) { 1, 2, 3, 4, 5 }

// для добавления значений есть add
//он чейнится
set.add(10).add(20).add(30).add(10);
console.log(set); //Set(8) { 1, 2, 3, 4, 5, 10, 20, 30 }

// провека наличия значения проводится с помощью метода has
console.log(set.has(10)); // true

// чтобы узнать количество элементов в set используется свойство size
console.log(set.size);

// Удаление элемента происходит с помощью метода delete
console.log(set.delete(10)); //true

//Отчистка происходит методом clear()
//set.clear();
console.log(set);

// values() и keys(), возвращают итератор со значениями в сете. Результат работы методов идентичен
console.log(set.keys()); //[Set Iterator] { 1, 2, 3, 4, 5, 20, 30 }
console.log(set.values()); //[Set Iterator] { 1, 2, 3, 4, 5, 20, 30 }

// метод entries возвращает массив массивов где ключ и изначение дублируются
console.log(set.entries());
/*
[Set Entries] {
    [ 1, 1 ],
    [ 2, 2 ],
    [ 3, 3 ],
    [ 4, 4 ],
    [ 5, 5 ],
    [ 20, 20 ],
    [ 30, 30 ]
  }
*/

// методы итерации
for (let value of set) {
  console.log(value);
}

// Практический пример
function make_values_uniq_in_array(array) {
  return [...new Set(array)];
}
console.log([1, 2, 3, 4, 5, 5, 3]);
