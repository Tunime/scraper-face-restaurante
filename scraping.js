javascript:var nombre = document.getElementsByClassName('_1wu_');
javascript:var direccion = document.getElementsByClassName('_51mw _51m-');
javascript:var img = document.getElementsByClassName('_3tu-');
var j=nombre.length;
var bandera=1;
var jo=1;
console.log("{");
console.log("'"+"restaurante"+"':{");
for(var i=0; i<j-1;i++)
{
	if(bandera==1){
		console.log("'"+i+"'"+":{");
		console.log("'nombre' : "+"'"+nombre[i].textContent+"',");
		console.log("'url' : "+"'"+nombre[i].children[0].href+"',");
		console.log("'direccion' : "+"'"+direccion[jo].children[1].children[0].textContent+"',");
		console.log("'adicional' : "+"'"+direccion[i+1].children[1].children[1].textContent+"',");
		console.log("'img1' : "+"'"+img[i].children[0].children[0].children[0].children[0].src+"',");
		//console.log("'img2' : "+"'"+img[i].children[0].children[1].children[0].children[0].src+"',");
		//console.log("'img3' : "+"'"+img[i].children[0].children[2].children[0].children[0].src+"',");
		console.log("},");
		bandera=0;
	}
	else
	{
		if(direccion[jo].children[1].children[1]==null)
		{

		}
		else
		{
			if(img[i].children[0]==null){
				console.log("'"+i+"'"+":{");
				console.log("'nombre' : "+"'"+nombre[i].textContent+"',");
				console.log("'url' : "+"'"+nombre[i].children[0].href+"',");
				console.log("'direccion' : "+"'"+direccion[jo].children[1].children[0].textContent+"',");
				console.log("'adicional' : "+"'"+direccion[jo].children[1].children[1].textContent+"',");
				console.log("'img1' : "+null+",");
				//console.log("'img2' : "+"'"+img[i].children[0].children[1].children[0].children[0].src+"',");
				//console.log("'img3' : "+"'"+img[i].children[0].children[2].children[0].children[0].src+"',");
				console.log("},");
			}
			else{
				console.log("'"+i+"'"+":{");
				console.log("'nombre' : "+"'"+nombre[i].textContent+"',");
				console.log("'url' : "+"'"+nombre[i].children[0].href+"',");
				console.log("'direccion' : "+"'"+direccion[jo].children[1].children[0].textContent+"',");
				console.log("'adicional' : "+"'"+direccion[jo].children[1].children[1].textContent+"',");
				console.log("'img1' : "+"'"+img[i].children[0].children[0].children[0].children[0].src+"',");
				//console.log("'img2' : "+"'"+img[i].children[0].children[1].children[0].children[0].src+"',");
				//console.log("'img3' : "+"'"+img[i].children[0].children[2].children[0].children[0].src+"',");
				console.log("},");
			}
		}
	}
	jo=jo+3;
}
console.log("}");
console.log("}");

//-------------------------vercion anterior---------------------
//.-----------------------vercion anterior------------------------
//------------------------vercion anterior----------------------
javascript:var nombre = document.getElementsByClassName('_1wu_');
javascript:var direccion = document.getElementsByClassName('_51mw _51m-');
javascript:var img = document.getElementsByClassName('_3tu-');
var j=nombre.length;
var bandera=1;
var jo=1;
console.log("{");
console.log("'"+"restaurante"+"':{");
for(var i=0; i<j-1;i++)
{
	if(bandera==1){
		console.log("'"+i+"'"+":{");
		console.log("'nombre' : "+"'"+nombre[i].textContent+"',");
		console.log("'url' : "+"'"+nombre[i].children[0].href+"',");
		console.log("'direccion' : "+"'"+direccion[jo].children[1].children[0].textContent+"',");
		console.log("'adicional' : "+"'"+direccion[i+1].children[1].children[1].textContent+"',");
		console.log("'img1' : "+"'"+img[i].children[0].children[0].children[0].children[0].src+"',");
		console.log("'img2' : "+"'"+img[i].children[0].children[1].children[0].children[0].src+"',");
		console.log("'img3' : "+"'"+img[i].children[0].children[2].children[0].children[0].src+"',");
		console.log("},");
		bandera=0;
	}
	else
	{
		console.log("'"+i+"'"+":{");
		console.log("'nombre' : "+"'"+nombre[i].textContent+"',");
		console.log("'url' : "+"'"+nombre[i].children[0].href+"',");
		console.log("'direccion' : "+"'"+direccion[jo].children[1].children[0].textContent+"',");
		console.log("'adicional' : "+"'"+direccion[jo].children[1].children[1].textContent+"',");
		console.log("'img1' : "+"'"+img[i].children[0].children[0].children[0].children[0].src+"',");
		console.log("'img2' : "+"'"+img[i].children[0].children[1].children[0].children[0].src+"',");
		console.log("'img3' : "+"'"+img[i].children[0].children[2].children[0].children[0].src+"',");
		console.log("},");
	}
	jo=jo+3;
}
console.log("}");
console.log("}");
///-------------------------vercion anterior---------------------
//.-----------------------vercion anterior------------------------
//------------------------vercion anterior----------------------