function maxMinAvg(arr) {
  var min = arr[0];
  var max = arr[0];
  var total = 0;
  for(var i = 1; i <arr.length; i++){
    if(arr[i] > max){
      max=arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    total = total + arr[i];
  }
  console.log("the minimum is " +min+ ", the maximum is " + max + " and the average is " +total/arr.length+ ".")
}

maxMinAvg([1, -2, 9, 4])