function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length ==1) return 1;
  var start=0,end=0,size=-Infinity,sample = {};
  while(end <str.length){
    console.log('Data=======',start,end,str[end],size,sample);
    if(sample[str[end]] >=0){
      size = size>(end-start)? size: (end-start);
      console.log('found duplicate--------',sample[str[end]],end,size);
      start = sample[str[end]]+1 > start?sample[str[end]]+1:start;
    }
     sample[str[end]] = end++;
   // end++;
  }
  return size === -Infinity ? str.length: (end-start)>size?(end-start):size;
}
//findLongestSubstring('thecatinthehat');//7
//findLongestSubstring('rithmschool')// 7
//findLongestSubstring('thisisawesome')//6
//findLongestSubstring('longestsubstring')// 8
findLongestSubstring('') //1
