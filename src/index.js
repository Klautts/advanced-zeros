module.exports = function getZerosCount(number, base) {
	var sum = 0;
	var main ;
	var newsum;
	var newmain
	var k = 0;
	for(var i = 2; i <= base; i++){
		for(var j=2; j <= i; j++){
			if(i % j === 0) break;
		}
		if(j === i && base % i === 0){
			main = i;
		}
	}
	for(var r=1; Math.pow(main,r) <= number; r++){
		sum = Math.floor(number/Math.pow(main,r)) + sum;
	}
	while(base % main === 0){
		base=base/main;
		k++;
	}
	if(k > 1){
		return Math.floor(newsum = sum/k);
	}
	else{
		return sum;	
	}
}
