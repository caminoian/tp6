

 
	let palabra= prompt("ingrese una palbra")
 


 function esGrito(palabra){
	msg="NO ES GRITO";
for (let i = 0; i < palabra.size(); i++)
{	
if (palabra.chatAt(i) =='!'){
	let contAste++;

}
else{
	let contPal++;
}
if (contAste >contPal)
	msg= "ES GRITO";
}

return msg;
}