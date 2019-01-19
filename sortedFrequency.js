function sortedFrequency(arr, num) {
    //if(arr[0] === num) return arr.length;
    if(arr[arr.length-1]<num) return -1;
    var start=0,end = arr.length-1,length = 0;
     var mid = Math.floor((end-start)/2);
     var size =0;
    while (true){
      if(arr[mid] > num){
          end= mid-1;
          mid = start + Math.floor((end-start)/2);
      }else if(arr[mid]<num){
          start = mid+1;
          mid = start+Math.floor((end-start)/2);
      }else{
          var length =1;
           length+= getLeft(start,mid-1,0);
           length+=getRight(mid+1,end,0);
           return length;
      }
    }

    function getLeft(start,end,length){
        if(arr[end]<num) return length;
        if(arr[start] === num) return end-start+1+length;
       var mid = start+Math.floor((end-start)/2);
        if(arr[mid]<num){
            start = mid+1;
            return getLeft(start,end,length);
        }else{
            length=length+end-mid+1;
            end =mid-1;
            return getLeft(start,end,length);
        }
    }

     function getRight(start,end,length){
        if(arr[start]>num) return length;
        if(arr[end] === num) return end-start+1+length;
        var mid = start+Math.floor((end-start)/2);
        if(arr[mid]>num){
            end = mid-1;
            return getRight(start,end,length);
        }else{
            length=length+mid-start+1;
            start = mid+1;
            return getRight(start,end,length);
        }
    }

}
