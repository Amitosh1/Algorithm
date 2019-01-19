function minSubArrayLen(arr, num){
    console.log(arr,len);
  // add whatever parameters you deem necessary - good luck!
var len =2,start =0;end = 1,sum = arr[0];
if(sum >= num)return 1;
console.log('in here')
while(end < arr.length){
if(arr[end] >= num) return 1;
sum+=arr[end];
if(sum >= num) {
    start++;
    len = len >(end-start) ? (end-start):len;
    }else{
        end++;
        len++;
    }
}
return len;
}

//maxSubarraySum([1,4,2,10,23,3,1,0,20],4);
//maxSubarraySum([-3,4,0,-2,6,-1],2);
minSubArrayLen([2,3,1,2,4,3],7);