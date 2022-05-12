//Write a JS code to print Even numbers in given array

function even_numbers(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2==0){
            console.log(arr[i]);
        }
       
    }
}
var arr = [45, 67, 80, 30, 46, 67, 23];

even_numbers(arr);