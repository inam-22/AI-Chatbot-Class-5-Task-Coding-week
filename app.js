console.log("-----task1------");
var date=new Date();
var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturday'];
var day=days[date.getDay()];
console.log("Today is "+ day);
var hour= date.getHours();
var prepand=(hour >=12)? "PM " : "AM ";
var time=hour + prepand + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log("Current Time is: "+ time);


console.log("-----task2------");
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);

console.log("-----task3------");

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);


console.log("-----task4------");

var string= "Saylani";
var newString=string.split('').reverse().join('');
console.log(newString);


console.log("-----task5------");
function checkLeapYear(year) {

 
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


const year = prompt('Enter a year:');

checkLeapYear(year);



console.log('-----task6------');
for (var years = 2014; years <= 2050; years++)
    {
    var d = new Date(years, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+years);
    }

    console.log('-----task7------');
    function randomno(){
    var randomNumber=Math.floor(Math.random() * 11);
    var guessno = prompt("Please enter a guess no");
    if(randomNumber==guessno){
        alert("Good Work");
    }
    else{
        alert("Not matched");
    }

}

console.log('-----task8------');
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 10, 22);
const secondDate = new Date(2022, 08, 14);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
console.log(diffDays + "Left in 14 August");


// Task9
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}



console.log('-----task10------');

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(89);
fToC(35);


console.log('-----task11------');

function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(50, 30));
  console.log(sumTriple(20, 20));


  
console.log('-----task12------');
function hundredtest(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(hundredtest(10));
  console.log(hundredtest(90));
  console.log(hundredtest(99));

  console.log('-----task13------');

  function max_of_three(num1, num2, num3) 
  {
   max_val = 0;
   if (num1 > num2)
   {
     max_val = num1;
   } else
   {
     max_val = num2;
   }
   if (num3 > max_val) 
   {
     max_val = num3;
   }
   return max_val;
 }
 
 console.log(max_of_three(1,0,1));
 console.log(max_of_three(0,-10,-20));
 console.log(max_of_three(1000,510,440));
 

 console.log('-----task14------');
 function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("islamabad is the capital of pakistan"));


console.log('-----task15------');
var days = parseInt(prompt("Please enter days:"));
var hour = days * 24;
var minutes=days*24*60
console.log(days+"days " + "equals "+ hour +"hours");
console.log(days+"days " + "equals "+ minutes + "minutes"); 

console.log('-----task16------');
arr = [1, 2, 3, 4];
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);



console.log('-----task17------');
function all_max(nums) 
 {
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));



console.log('-----task18------');
function Kth_greatest_in_array(arr, k) {

    for (var i = 0; i < k; i++) {
      var max_index = i,
        tmp = arr[i];
  
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max_index]) {
          max_index = j;
        }
      }
  
      arr[i] = arr[max_index];
      arr[max_index] = tmp;
    }
  
    return arr[k - 1];
  }
  
  console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
  console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))


  console.log('-----task19------');


  var arr1=[3, 'c', 'd', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var hmt = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (hmt<m)
                {
                  hmt=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +hmt +" times ) ") ;



console.log('-----task20------');

function array_element_replace(arr, old_value, new_value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === old_value) {
        arr[i] = new_value;
      }
    }
    return arr;
  }
  num = [1, 7, 3, 7, 2, 8, 1, 9];
  console.log("Original Array: "+num);
  console.log(array_element_replace(num, 7, 5));

  









  





