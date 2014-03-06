<script>


function dateFromISO(s) {
  s = s.split(/\D/);
  return new Date(Date.UTC(s[0], --s[1]||'', s[2]||'', s[3]||'', s[4]||'', s[5]||'', s[6]||''))
}




function datecheck(a)
{
/*var dp=a;
//pattern= /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
pattern = /^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/
if(pattern.test(dp)==false)
{
	alert("Invalid date");
	document.getElementById('CandidateApplication_dob').value="";
	return false;
}*/

//var EnteredDate =dateFromISO(a); // For JQuery 
var EnteredDate=dateFromISO($("#CandidateApplication_dob").val());
alert(EnteredDate);
var date = EnteredDate.toString().substring(0, 2);
var month = EnteredDate.toString().substring(3, 5);
var year = EnteredDate.toString().substring(6, 10);

var myDate = new Date(year, month - 1, date);

var today = new Date();


var millisPerYear = 1000 * 60 * 60 * 24 * 365;
 
var age1 = ((new Date().getTime()) - myDate.getTime()) / millisPerYear;
var age=Math.floor(age1);  
 
   if (myDate > today) {
         alert("Invalid Date");
	 document.getElementById("CandidateApplication_dob").value = "";
    }
		if(age<18){
    alert("Your age should be more than 18 to register!");
		document.getElementById("CandidateApplication_dob").value = "";
		return false;
		}


}

</script>
