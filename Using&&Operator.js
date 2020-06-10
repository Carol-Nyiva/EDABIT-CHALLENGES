
function and(a, b) 
{
	if (a==true && b==true)
	{
		return true;
	}
	else 
		{
			return false;
		}
	
}

console.log(and(false, true));

// --------------------------O R----------------------------------

function operator(a,b)
{
   return a&&b==true?true:false;
}
console.log(operator(false,true));