let user =prompt("enter the username")
let pwd;
if(user == "admin"){
    pwd = prompt("enter pwd")
    if(pwd=='admin')
    {
        alert("admin incoming")
    }
    else if(pwd=="")
    {
            alert('canceled')
        }
        else
        {
            alert("wrong pwd")
        }
    }
    else if(user == '')
        {
            alert("cancelled")
        }
        else
        {
            alert("knock knock whos there")
        }


console.log(pwd)

// (pwd === "themaster")?alert("yo admin")
// :(pwd === "")?alert("cancelled"):
// alert("wrong pwd")