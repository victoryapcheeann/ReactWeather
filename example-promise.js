function getTempCallBack (location, callback){
  callback(undefined, 78);
  callback('city not found');
}

getTempCallBack('Philadelphia', function (err, temp) {
  if(err){
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    setTimeout (function(){
    resolve(79);
    reject('city not found');
  }, 1000);
  });
}

getTempPromise('Singapore').then(function (temp){
  console.log('promise sucess', temp);
}, function(err) {
  console.log('promise error', err);
})

//Challenge Area
function addPromise (a, b) {
  return new Promise(function(resolve, reject){
      if (typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
    } else {
      reject('number cannot be calculated');
    }
  });
}

addPromise(3, 4).then(function (sum){
  console.log('promise success', sum)
}, function (err) {
  console.log('error', err)
});

addPromise('a', 4).then(function (sum){
  console.log('this should not appear', sum)
}, function (err) {
  console.log('this should appear', err)
});
