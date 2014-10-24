var sum = 0;
for (var i=2; i< process.arg.length;i++){
	sum+= +process.arg[i];
}
console.log(sum);
