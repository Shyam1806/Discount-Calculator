function discountcl(){
            
    var op = document.getElementById("originalbox").value;
 //    document.getElementById("originalbox").value ="";
    var dt = document.getElementById("discountbox").value;
 //    document.getElementById("discountbox").value = "";
    var td = dt/100;
      
    if( dt < 100){
        alert("error");
       
        var savings = (op * td);
       document.getElementById("dt2").innerHTML = savings;

       var ypay = (op - savings);
       document.getElementById("dt1").innerHTML = ypay;
    }
   
  

       
  }