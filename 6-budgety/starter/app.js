var budgetController = (function() {
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: function(b) {
            //console.log(add(b));
            //now that we are not accessing directly from the console
            //we need to return the add function, instead of console.logging it
            return add(b);
        }
    }
})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {
//budgetController.publicTest()
//dont do this cause we would have to change name between modules
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
            //this way is only way we can have access to z variable from the 
            //outside once the original function returns
        }
    }

})(budgetController, UIController);