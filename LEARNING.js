1.
Doesn't matter if you navigate with <a href="#/> or use $location, the same. 
if the page is in the same route, clicking on that same route, nothing happens, will not run any code. 
How to force controller to re-render, hence re-instantiate? use $route.reload. 
The behavior is like below, but with the same $location.path no change.

http://stackoverflow.com/questions/16703215/how-to-reload-or-re-render-the-entire-page-using-angularjs
For the record, to force angular to re-render the current page, you can use:

$route.reload();
According to AngularJS documentation:

Causes $route service to reload the current route even if $location hasn't changed.
As a result of that, ngView creates new scope, reinstantiates the controller.
$oute, just like $routeProvider, is from the angular routes library you have to include in index.html

if ($location.path() === "/repos") {
  $route.reload();  //without this statement, if already on the repos page, then type in search box again, and click on search, do nothing. But I want to be able to search again, hence call ReposController again
} else {
  $location.path("/repos"); 
}

2.
If you go to a different route, the controller will every time rerun. Two ways to preserve the data
1) use directive and data in the global scope - check angular-notes project
2) use the data from a service. Service is lazy instantiation; Controller is eager instantiation - check this project. 
///below is one quick exmaple how to do it
From the description, seems as though you should be using a service. Check out http://egghead.io/lessons/angularjs-sharing-data-between-controllers and AngularJS Service Passing Data Between Controllers to see some examples.

You could define your product service as such:

app.service('productService', function() {
  var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

});
Dependency inject the service into both controllers.

In your ProductController, define some action that adds the selected object to the array:

app.controller('ProductController', function($scope, productService) {
    $scope.callToAddToProductList = function(currObj){
        productService.addProduct(currObj);
    };
});
In your CartController, get the products from the service:

app.controller('CartController', function($scope, productService) {
    $scope.products = productService.getProducts();
});
///example ends

If you refresh the URL in the browser, then it's a whole different thing. 
you will run code from beginning, even Service will be re-instantiated too

or if you remove the #/ part, the same, everything rerun

3.
Error: ngModel:nonassign
Non-Assignable Expression

http://stackoverflow.com/questions/16703215/how-to-reload-or-re-render-the-entire-page-using-angularjs
That's why you cannot use tenary operator for ng-model attribute




