var records = [
    {
        "username": "Neil Bhosale",
        "password": "Youare16.5#"
    },
    {
        "username": "John Doe",
        "password": "John25.56#"
    }
]

function check()
{
    let uname = document.forms["login"]["username"].value;
    let pwd = document.forms["login"]["password"].value;
    matched = false;
    for (i=0; i<records.length; i++)
    {
        if (records[i].username == uname && records[i].password == pwd)
        {
            matched = true;
        }
    }
    return matched;
}




function match(){
    let p1 = document.forms["form"]["password1"].value;
    let p2 = document.forms["form"]["password2"].value;
    let uname = document.forms["form"]["username"].value;
    if(p1 != p2){
        alert("PASSWORDS DON'T MATCH!!");
        return false;
    }
    else
    {
        records.push({
            "username": uname,
            "password": p1
        })  
        return true;
    }

}



