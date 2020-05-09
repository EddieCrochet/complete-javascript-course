

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

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    //Here is the recommended data structure
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
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
        calculateBudget: function(){

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
// two of the same thing here with income and expenses - MAKE A FUNCTION
// internal private function to help calculate
            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // calculate % of income that we have spent

            if (data.totals.inc > 0) {
                data.percentage = 
                    Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                //can not have zero percent of something
                //just a placeholder to do something later to display this condition
                data.percentage = -1;
            }
        },

        //a method JUST for returning something from our data structure
        getBudget: function() {
            //best way to return multiple things is to return an entire object
            //with properties of the data you are trying to pass through
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        //just a function to run in the console to see if our data structure is working
        testing: function() {
            console.log(data);
        }
    };

})();


//UI CONTROLLER
var UIController = (function() {

    //data structure to make it easier for us later on so that we dont have a 
    //bunch of class name floating  around our functions
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'
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

        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;

            if(obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
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

        document.querySelector()

    };

    //called each time we enter a new item
    var updateBudget = function() {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budget = budgetCtrl.getBudget();

        //3. display the budget on the UI
        UICtrl.displayBudget(budget);
    };

    var ctrlAddItem = function() {
        var input, newItem;

        //1. get the field data
        input = UICtrl.getinput();

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
            //calling next function to reset everything to zero for page reload
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1});
            setupEventListeners();
        }
    }



})(budgetController, UIController);

controller.init();