
var arr = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var result = {};
for (var i = 0; i < arr.length; ++i)
{
    var a = arr[i];
    if (result[a] !== undefined)
        ++result[a];
    else
        result[a] = 1;
}
for (var key in result)
    console.log(`Тэг ${key} =^.^= ${result[key]} раз(а)`);

var choice = Object.values(result).sort((a, b) => b-a);
console.log(choice)