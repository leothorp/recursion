// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  //function to recursively gather all children
  var getAllChildren = function(current) {
    var results = [];
    var children = current.children;
    for (var i = 0; i < children.length; i++) {
      results.push(children[i]);
      results.push(getAllChildren(children[i]));
    }
    return results;
  };

  var elements = _.flatten(getAllChildren(document.body));
  //filter for elements with desired class
  var results = _.filter(elements, function(element) {
    return element.classList.contains(className);
  });
  if (document.body.classList.contains(className)) {
    results.unshift(document.body);
  }
  return results;
};