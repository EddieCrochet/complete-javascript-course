

//BUDGET CONTROLLER
var budgetController = (function() {
    //function constructors
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    };

    //Here is the recommended data structure
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            ID = 0;

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }
            
        }
    };

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