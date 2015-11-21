var max = 10;
outer:
for (var i = 2; i <= max; i++) {
   for(var j = 2; j < i; j++){
       if(i%j == 0){
           continue outer;
       }
   }
    alert(i);
}
