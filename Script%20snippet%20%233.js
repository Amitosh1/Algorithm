function binarySearch(arr, elem){
  // add whatever parameters you deem necessary - good luck!
  var left=0,right=arr.length-1;
  while(left !== right){
      if(arr[left] === elem){
          return left;          
      }else if(arr[right] === elem){
          return right;
      }else{
        var idx = Math.floor((right-left)/2);
          var middle = arr[idx];
          if(elem <middle){
              right =idx;
              
          }else if(elem >middle){
              left = idx;
          }else{
           return idx;           
          }

          
      }
      return -1;
}
}
binarySearch([1,2,3,4,5],2)