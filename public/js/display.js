if(localStorage.getItem("user"))
{
var user=localStorage.getItem("user");
if(user=="Student")
{
  var deletes =document.getElementsByClassName('btnd');
  for(var i=0;i<deletes.length;i++)
  {
    deletes[i].style.display="none";
  }
  var edits =document.getElementsByClassName('btne');
  for(var i=0;i<edits.length;i++)
  {
    edits[i].style.display="none";
  }
  
}
}

        function we(i)
        {
          var data=i;
          var dis=document.getElementById(data);
          dis.style.display= "block";
        }
