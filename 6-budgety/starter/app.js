

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

            //[1,2,3,4,5], next ID = 6
            //ID = last ID + 1
            
            //create new id
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else {
                 ID = 0;
             }
            //id code for a new item

            // create new item based on inc or exp type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            //push to data structure
            data.allItems[type].push(newItem);
            //now the module we are returning the callback to will have 
            //access to the newItem variable

            //return the new element
            return newItem;
        },
        //just a function to run in the console to see if our data structure is working
        testing: function() {
            console.log(data);
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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getinput: function() {
            return {
                //will be either inc or exp
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            // 1. create html string with placeholder txt

            //check out what is passed to the html within the %% parameters
            //this is to MARK our data being passed
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix">' + 
                '<div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn">' + 
                '<i class="ion-ios-close-outline"></i></button> </div> </div></div>'
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>'
            }
            
            // 2. replace placeholder txt with some actual data

            //searches for a string and replaces that string with data that we put into the method
            //this actually passes the data into the markings
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // 3. insert the html into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArr;

            //this method returns a static nodeList repping the document's elements
            //that match specified group of selectors
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);

            //calls the slice method from the Array prototype so that we can 
            //use on the newly created nodeList
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                //set the value back to empty to clear the field
                current.value = "";
            });

            //puts the focus/cursor on the description after fields clear 
            //to make it easier to put in the next information
            fieldsArr[0].focus();
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

    var updateBudget = function() {
        //1. calculate the budget

        //2. return the budget

        //3. display the budget on the UI
    };

    var ctrlAddItem = function() {
        var input, newItem;

        //1. get the field data
        input = UICtrl.getinput();
        console.log(input);

        //only do the remaining steps if there is content in the input,
        //it's a real number, AND it's not zero!!!
        if(input.description !== "" && !isNaN(input.value) &&input.value > 0){
            //2. add the item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the new item to UI as well
        UICtrl.addListItem(newItem, input.type);

        //4. Clear the Fields
        UICtrl.clearFields();

        //5. calculate and update budget
        updateBudget();
        }

        
    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }



})(budgetController, UIController);

controller.init();