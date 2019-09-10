var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(arr) {
  for(var i = 0; i <arr.length; i++) {
    for(var j = 1; j< arr.length; j++) {
      if(arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));

// exit early

function bubbleSort(arr){
    var swapped;
    do {
        swapped = false;
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] && arr[i+1] && arr[i] > arr[i+1]) {
                swap(arr, i, i + 1);
                swapped = true; 
            }
        }
    } while(swapped);
    return arr;
}
console.log(bubbleSort(arr));

////////Consider the following function according to their Big O Time complexity:

//#1
function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
//O(n)

//#2
function findNth(arr, n){
    console.log(arr[n]);
}
//O(1)

//#3
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}
//O(n)

//#4
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
//O(n2)