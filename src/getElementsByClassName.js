// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


//use document.body, element.childNodes, element.classList

//declare array that will be returned
//get childnodes of document.body
//iterate through; if classlist contains className, add to array.  Also for each element,
//get the childnodes, and iterate through, repeating the process

//for each element, add all its children recursively to results, then flatten results array,
//then filter for classname match

var getElementsByClassName = function(className) {
  var elements = _.flatten(getAllChildren(document.body));
  var results = _.filter(elements, function(element) {
    return element.classList.contains(className);
  });
  if (document.body.classList.contains(className)) {
    results.unshift(document.body);
  }


/*var getElementsByClassName = function(className) {
var elements = getAllChildren(document.body);
var results = [];
if (document.body.classList.contains(className)) {
  results.push(document.body);
}

for (var i = 0; i < elements.length; i++) {
  if (elements[i].classList.contains(className)) {
    results.push(elements[i]);
  }
}
*/
 
return results;
};

var getAllChildren = function(current) {
  var results = [];
//  results.push(current);
  var children = current.children;
  for (var i = 0; i < children.length; i++) {
    results.push(children[i]);
    results.push(getAllChildren(children[i]));
  }
  return results;
}; 