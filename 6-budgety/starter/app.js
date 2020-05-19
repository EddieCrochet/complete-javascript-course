

//BUDGET CONTROLLER
var budgetController = (function() {
    //function constructors
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    //add to prototype chain for methods of classes so that all instances withh have method
    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    //One method calculates, another method returns
    //seperation of responsibilities/tasks

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
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

        deleteItem: function(type, id) {
            var ids, index;

            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                //splice function removes elements at the paramenters given
                data.allItems[type].splice(index, 1)
            }
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

        calculatePercentages: function() {

            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function() {
            //map returns something and stores it while foreach does not
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;
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
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type) {
        var numSplit, int, dec;

        /*
        + or - before number
        exactly 2 decimal points
        comma separating the thousands
        */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if(int.length > 3) {
            //code to add comma to larger numbers that need it
            //LOOK FOR PATTERNS
                //like the second value passed in to the first substr below...
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        dec = numSplit[1];

        // if the type is exp, the sign is -
        //if not the sign should be +
        return (type === 'exp' ? sign = '-' : sign = '+')  + ' ' + int + '.' + dec;

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
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix">' + 
                '<div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn">' + 
                '<i class="ion-ios-close-outline"></i></button> </div> </div></div>'
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item__value">%value%</div><div class="item__percentage">%21%%</div><div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>'
            }
            
            // 2. replace placeholder txt with some actual data

            //searches for a string and replaces that string with data that we put into the method
            //this actually passes the data into the markings
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            newHtml = newHtml.replace('%21%%', obj.percentage);

            // 3. insert the html into the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID) {

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            //super weird, but this is how it works
            //select it, and then pass in that same selection
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
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp;'

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

            if(obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },

        displayPercentages: function(percentages) {
            //this selector creates a node list
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            var nodeListForeach = function(list, callback) {
                //creating a reusable foreach loop for node lists
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            nodeListForeach(fields, function(current, index) {
                //now have access to current and index because we passed them into the callabck

                if(percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });

        },

        displayMonth: function() {
            var now, year, month, months;
            //need to use the 'new' keyword on object constructors
            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'];

            month = now.getMonth();

            year = now.getFullYear();
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
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
        //I believe this was simply test code
        document.addEventListener('keypress', function(event) {
            if (event.key === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    };

    //called each time we enter or delete an item
    var updateBudget = function() {
        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budget = budgetCtrl.getBudget();

        //3. display the budget on the UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function () {

        // 1. calculate percentages
        budgetCtrl.calculatePercentages();

        // 2. read % from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. update user interface with new %
        UICtrl.displayPercentages(percentages);

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

        //6. calc and update %
        updatePercentages();

        }

        
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;
        //not the cleanest but its ok since I hard coded my html for this section into this js page
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            //have to convert the string to ionteger to store in d for future function
            ID = parseInt(splitID[1]);

            //1. delete item from data structure
            budgetCtrl.deleteItem(type, ID);

            //2. delete item from UI
            UICtrl.deleteListItem(itemID);

            //3. Update and show new budget
            updateBudget();

            //4. calc and update %
            updatePercentages();

        }
    };

    return {
        init: function() {
            console.log('Application has started.');
            UICtrl.displayMonth();
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