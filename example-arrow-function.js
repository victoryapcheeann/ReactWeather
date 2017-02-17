var names = ['julia', 'john', 'jeremy'];

names.forEach(function(name) {
  console.log('foreach', name);
});

names.forEach((name) => {
  console.log('arrowFunction', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Victor'));

var person = {
  name: 'Victor',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' say hi to ' + name)
    });
  }
};

person.greet();

//Challenge Area

function add(a,b) {
  return a+b;
}

console.log(add(1,2));
console.log(add(4,5));

//addStatement
var addStatement = (a,b) => {
  return a+b
}
console.log(addStatement(1,3));

//addExpression
var addExpression = (a,b) => a+b;
console.log(addExpression(4,5));
