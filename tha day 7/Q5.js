  var cylinder = {
    volume : function (h,r){
      var volume = h*3.44*r*r;
      return volume.toFixed(5);
   }
   }
   console.log(cylinder.volume(25,3));