function randomCoding(){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    var idvalue ='';
    var n = Math.floor((Math.random()*6)+1);
    for(var i=0;i<n;i++){
       idvalue+=arr[Math.floor(Math.random()*36)];
    }
    var get ='';
    var n = 1;
    var arr = ['1','2'];
    for(var i=0;i<n;i++){
       get+=arr[Math.floor(Math.random()*2)];
    }
    return 'MCR'+idvalue+get;
}
for (var i=0,len=6; i<len; i++){ 
   document.write(randomCoding())
   document.write('<br>')
}
