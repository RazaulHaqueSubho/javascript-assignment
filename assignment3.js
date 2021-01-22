// https://github.com/RazaulHaqueSubho/javascript-assignment

//Task1
function kilometerToMeter(kilometer) { // works with any type of number such as int, float, decimal etc.
    if (isNaN(kilometer) || kilometer < 0) { // if kilometer is not a number or less than 0 then it will print the below
        return " Enter the correct type of input";
    }
    else {
        var convertTometer = kilometer * 100; // 1 km = 1000 m
        return convertTometer;
    }
}

var result1 = kilometerToMeter(23.56)
console.log("Result1 =" + result1)

//Task2

function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop) {

    if (noOfWatch < 0 || noOfPhone < 0 || noOfLaptop < 0 || isNaN(noOfWatch, noOfWatch, noOfLaptop)) { // checking if the amount is less than 0 as it can never be negative
        return "Invalid Input"
    }
    else {
        var totalCostOfWatch = noOfWatch * 50; // cost of total watch 
        var totalCostofPhone = noOfPhone * 100; // cost of total phone
        var totalCostofLaptop = noOfLaptop * 500; // cost of total laptop
        var totalCost = totalCostOfWatch + totalCostofPhone + totalCostofLaptop; // total cost of everything
    }
    return totalCost;
}

// var result2 = budgetCalculator("a", 84, 34);
var result2 = budgetCalculator(66, 84, 34);
console.log("Result2 =" + result2);

//Task3
function hotelCost(numberofDays) {
    var cost = 0;
    if (numberofDays < 0 || !Number.isInteger(numberofDays)) { // validating number of days as it cannot be negative 
        return "Invalid Input";
    }
    else {
        if (numberofDays <= 10) {
            var totalCost = numberofDays * 100; // total cost between 0 to 10 days
        }
        else if (numberofDays > 10 && numberofDays <= 20) {
            var remainingDays = numberofDays - 10; // number of days crossing over 10
            var costFirst = 10 * 100; // cost for first 10 days
            var costSecond = remainingDays * 80; // cost for remaining days
            var totalCost = costFirst + costSecond; // cost for total days
        }
        else {
            var remainingDays = numberofDays - 20; // number of days crossing over 20
            var costFirst = 10 * 100; // cost for first 10 days
            var costSecond = 10 * 80; // cost for 2nd 10 days
            var costRemainingDays = remainingDays * 50; // cost for remaining days
            var totalCost = costFirst + costSecond + costRemainingDays; // cost for total days
        }
    }
    return totalCost;
}

var result3 = hotelCost(54);
console.log("Result3 = " + result3);

//Task4
function megaFriend(nameArray) {
    var maxLength = "";
    for (i = 0; i < nameArray.length; i++) { // looping through index 0 to nameArray.length, increase i by 1 on each loop;
        if (nameArray[i].length > maxLength.length) { // checking current array index element is larger than maxLength ;
            maxLength = nameArray[i]; // placing the current largest name word to maxLength;
        }
    }
    return maxLength;
}

var names = ["abstract", "pcysicholochirm", "CarryonJeeves", "Telepathy", "Noobscoop", "Dockerlearnerteacheswith", "asfdasdfasdfasdfasdfasdf"];
var LongestName = megaFriend(names);
console.log("Result4= " + LongestName);





