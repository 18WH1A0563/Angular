
function blockDates(){
  var today = new Date().toISOString().split('T')[0];
  var trial = new Date(today);
  var end = new Date(today);
trial.setDate(trial.getDate() + 3);
end.setDate(end.getDate() + 100);
var today1 = new Date(trial).toISOString().split('T')[0];
var end1 = new Date(end).toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today1);
document.getElementsByName("setTodaysDate")[0].setAttribute('max', end1); 
}
function validateForm() {
  
    var custName = document.forms["myForm"]["custName"].value;
    var custPhone = document.forms["myForm"]["custPhone"].value;
    var email = document.forms["myForm"]["email"].value;
    var reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;;
    var res = email.split("@");
    var domain = res[1].split(".");
    
    if (reg.test(email) === false || (res[0].length < 3) || (res[0][0] === '_')) // || (isNaN(domain[0]) )) 
        {
            
            alert('Invalid Email Address');
            return false;
        }
    if(res[0].includes('+' || '-' || ')'|| '{'||'}'||'!'||'@'||'#'||'$'||'%'||'^'||'&'||'*'||'('||'['||']'||':'||';'||'"'||' '||'<'||'>'||','||'?'||'/'||'`'||'~')){
      alert('Invalid Email Address!!!!!');
            return false;
    }
   
    if (custName.length < 3) {
      alert("Name should contain atleast 3 characters");
      custName.focus;
      return false;
    }
    if (isNaN(custPhone)) {
      alert("The phone number contains illegal characters.");
      custPhone.focus;
      return false;
    }
    if (custPhone.length != 10){
      alert("Phone number should contain 10 digits");
      custPhone.focus;
      return false;
    }
    
    return true;
  }