

//BUDGET CONTROLLER
var budgetController = (function() {
    
})();


//UI CONTROLLER
var UIController = (function() {

    //data structure to make it easier for us later on
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() {
            return {
                //will be either inc or exp
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //key press happens on global web page - any where in doc, no specific element
        document.addEventListener('keypress', function(event) {
            if (event.key === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function() {
        //1. get the field data
        var input = UICtrl.getinput();
        console.log(input);

        //2. add the item to budget controller

        //3. add the new item to UI as well

        //4. calculate the budget

        //5. display the budget on the UI
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();