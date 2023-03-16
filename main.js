var z=1;
if (z<=5)
{
	console.log(true);

}
else
{
	console.log(false);
}


alert("welcome");
var aa=prompt("Enter the number");

if (aa==1)
{
	document.write("number 1");
}
else if (aa==2)
{
	document.write("number 2");
}
else if (aa==3)
{
	document.write("number 3");
}
else if (aa==4)
{
	document.write("number 4");
}
else if (aa==5)
{
	document.write("number 5");
}
else
{
	document.write("noo");
	document.write("<br>");
}

var p=6;
for(p=6;p<=20;p++)
{
	document.write(p);
	document.write("<br>")
}

var p=6;
for(p=6;p<=20;p++)
{
	if(p%2==0)
	{	document.write(p);
	document.write("<br>");}
}

let Tamil=parseInt(prompt("Enter the tamil mark"));
let English=parseInt(prompt("Enter the engkish mark"));
let Maths=parseInt(prompt("Enter the maths mark"));
let Science=parseInt(prompt("Enter the science mark"));
let Social=parseInt(prompt("Enter the social mark"));

document.write("Tamil Mark="+Tamil);
document.write("<br>");
document.write("English Mark="+English);
document.write("<br>");
document.write("Maths Mark="+Maths);
document.write("<br>");
document.write("Science Mark="+Science);
document.write("<br>");
document.write("Social Mark="+Social);
document.write("<br>");

let total=Tamil+English+Maths+Science+Social;
document.write("Total="+total);
document.write("<br>");
let avg=total/5;
document.write("Average="+avg);
document.write("<br>");
document.write(Math.floor(avg));
document.write("<br>");
document.write(Math.round(avg));
document.write("<br>");



if(avg>=90&&avg<=100)
	{
		document.write("s grade");
		document.write("<br>");	
	}
else if(avg<=89&&avg>=70)
	{
		document.write("a grade");
		document.write("<br>");
	}
else if(avg<=69&&avg>=50)
	{
		document.write("b grade");
		document.write("<br>");
	}	
else if(avg<=49&&avg>=40)
	{
		document.write("pass");
		document.write("<br>");
	}	
else 
	{
		document.write("fail");
		document.write("<br>");
	}	
	
	
switch(avg<=100)
	{
	case avg>=90&&avg<=100:
		document.write("s grade");
		document.write("<br>");
		break;
	case avg<=89&&avg>=70:
		document.write("a grade");
		document.write("<br>");
		break;
	case avg<=69&&avg>=50:
		document.write("b grade");
		document.write("<br>");
		break;
	case avg<=49&&avg>=40:
		document.write("pass");
		document.write("<br>");
		break;
	default:
		document.write("fail");
		document.write("<br>");
	}
	
	
var w=1;
while(w<=5)
	{
	document.write("true");
	document.write("<br>");
	w++;
	}
	
var r=1;
do
	{
	document.write("welcome");
	document.write("<br>");
	r++;
	}
while(r<=5)