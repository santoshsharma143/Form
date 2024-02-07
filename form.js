function validation()
{
    var Name=document.forms["abe"]["Full Name"];
    var Address=document.forms["abe"]["Address"];
    var DOB=document.forms["abe"]["Date of Birth"];
    var Phone=document.forms["abe"]["Phone"];
    var Countrycode=document.forms["abe"]["code"];
    var Email=document.forms["abe"]["Email"];
    var Course=document.forms["abe"]["Subject"];

if(Name.value=="")
    {
        alert("kindly enter your full Name");
    }
if(Address.value=="")
    {
        alert("kindly enter your Address");
    }
if(DOB.value=="")
    {
        alert("kindly enter your Date of birth");
    }
if(Phone.value=="")
    {
        alert("kindly enter your Phone number");
    }
if(Countrycode.value=="")
    {
        alert("kindly enter your Coundtry Code ");
    }
if(Email.value=="")
    {
        alert("Kindly enter your Email Address");
    }
if(Course.selectedindex<1)
    {
        alert("kindly select your subject");
    }}