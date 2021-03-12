
exports.min = function min (array) {

  if (array == null || array == undefined || array.length == 0){
	  return 0;
  } 
  
  if(array == null || array == undefined || array.length == 0){  
    return 0; 
	}else {
    let m= Math.min.apply(null, array);
	  return m;
	}
}

exports.max = function max (array) {
  if (array == null || array == undefined || array.length == 0){
	  return 0;
	}else {
	  let m= Math.max.apply(null, array);
	  return m;
	}
}

exports.avg = function avg (array) {
  
	if (array == null || array == undefined || array.length == 0){
	  return 0;
  }else if (array.length==0){
    return 0; 
	}else {
	  let sum=0;
	  for(let i=0; i<array.length; i++){
			sum += array[i];	
	   }
	  let a = sum/array.length;
	  return a;
	}
}
