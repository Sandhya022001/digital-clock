  
  var cl=console.log;
  
  let digitalclock1=document.getElementById("digitalclock");
 
  function digitalclock(){
	  let date=new Date();
 
  let hour = date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
  let session = "AM";
  
  if (hour> 12){
	  session = "PM";
	  hour = hour-12;
  }
  
   hour = addzero(hour);
   minutes=addzero(minutes);
   seconds=addzero(seconds);
   
   let result=`${hour} : ${minutes} : ${seconds} ${session}`;
  digitalclock1.innerHTML =result;
  
  
  setTimeout(digitalclock,1000);  //1 sec=1000millisecond
  }

   // setInterval( digitalclock,1000);
   digitalclock();
   
   
   function addzero(time){
	   if(time <10){
		   
		   time="0" + time;
	   }
	   return time;
   }