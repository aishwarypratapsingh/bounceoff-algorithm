function isTouching(object1, object2){     //two arguments
    if (object1.x - object2.x < object1.width/2 + object2.width/2         //true 
      && object2.x - object1.x < object1.width/2 + object2.width/2
      && object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y - object1.y < object1.height/2 + object2.height/2) {
    
  
    return true;
  }
  else {     //false
    
  
    return false;
  }
  
  }
  
  function bounceOff(object1,object2){       //function definition
     
    if(object1.x - object2.x < object1.width/2 + object2.width/2         //true 
      && object2.x - object1.x < object1.width/2 + object2.width/2){
        object1.velocityX= (-1)*object1.velocityX;                     // 3 = -1*3=-3      -3= -1*-3=3       
        object2.velocityX=(-1)*object2.velocityX;     
      }
  
      if(object1.y - object2.y < object1.height/2 + object2.height/2
        && object2.y - object1.y < object1.height/2 + object2.height/2){
          object1.velocityY=(-1)*object1.velocityY;
          object2.velocityY=(-1)*object2.velocityY;
  
       }
  
  
  
  }