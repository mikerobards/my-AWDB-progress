// forEach from scratch

function forEach(arr, callback){
    for(var i=0;i<arr.length;i++){
        callback(arr[i], i, arr);
    }
}

// forEach halves

function halfValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val / 2);
    });
    return newArr;
}

halfValues([2,4,6]);

// forEach doubles

function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2);
    });
    return newArr;
}

doubleValues([1,2,3]);

// forEach evens

function onlyEvenValues(arr){
    newArr = [];
    arr.forEach(function(val){
        if(val%2 === 0){
            newArr.push(val);
        }
    });
    return newArr;
}

onlyEvenValues([5,1,2,3,10]);

// forEach first and last

function showFirstAndLast(arr){
    var newArr = [];
    var answerArr = [];
    arr.forEach(function(val){
        newArr = val.split("");
        var fal = newArr[0].concat(newArr[(newArr.length-1)]);
        answerArr.push(fal);
    });
    return answerArr;
}

// Elie's solution. No need to split!

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1]);
    });
    return newArr;
}

showFirstAndLast(['colt','matt', 'tim', 'udemy']);

// add key and value

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        var newArr = [];
        val[key] = value;
        newArr.push(val);
    });
    return arr;
}

// Elie's solution

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val) {
        val[key] = value;
    });
    return arr;
}


addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

// vowel count

function vowelCount(str) {
    var strArr = str.toLowerCase().split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var answer = {};
    vowels.forEach(function (vals) {
        var count = 0;
        strArr.forEach(function (val) {
            if (val === vals) {
                count++;
                answer[vals] = count;
            }
        });
    });
    return answer;
}

// Elie's solution
function vowelCount(str) {
    var strArr = str.split('');
    var vowels = "aeiou";
    var obj = {};
    strArr.forEach(function (letter) {
        if (vowels.indexOf(letter.toLowerCase()) !== -1) {
            if (letter in obj) {
                obj[letter]++
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};


