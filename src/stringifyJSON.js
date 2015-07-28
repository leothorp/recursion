// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string;
  //case for null
  if (obj === null) {  
    string = 'null';
  //case for objects and arrays 
  } else if (typeof obj === 'object') {      
    var temp2 = [];
    var isArray = Array.isArray(obj);
    var stringEnds = isArray ? ['[',']'] : ['{','}'];
    _.each(obj, function(element, key) {
      if (!(typeof element ==='function' || typeof element ==='undefined')) {
        temp2.push((isArray ? '' : stringifyJSON(key) + ':') + stringifyJSON(element));
      }  
    });
    string = stringEnds[0] + temp2.join(',') + stringEnds[1];
  //case for strings  
  } else if (typeof obj === 'string') {         
    string = '"' + obj + '"';
  } else {      
  //case for numbers and booleans 
    string = obj + '';
  } 
  return string;     
}; 
