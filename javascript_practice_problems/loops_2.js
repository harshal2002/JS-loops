function two_d(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr[0].length; j++){
            console.log(arr[i][j]);
        }
    }
}

var arr = [[24, 12], [8,4], [12, 6]];

two_d(arr);