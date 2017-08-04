// scripts.js
var i,j,k;

function drawTree(k) {
  	for (i=0; i<k; i++) {
    	var star =("");
    	for (j=0; j<=i; j++) {
       		var star = (star += "* "); 
    	}  
    	var spacja =("");
  		for (j=k-1; j>i; j--) {
       		var spacja = (spacja += " "); 
      	}
	console.log(spacja + star);
	}
}
var tree = drawTree(5);













