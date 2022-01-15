var myImage = document.querySelector('img')

myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc=='images/firefox-icon2.png')
    {
        myImage.setAttribute('src','images/firefox-icon.png')
    } 
    else
    {
        myImage.setAttribute('src','images/firefox-icon2.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername()
{
    let myName=prompt('Please enter your name:');
    if(!myName || myName==null)
    {
        setUsername();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla Cool,'+myName;
    }

}

if(!localStorage.getItem('name'))
{
    setUsername();
}
else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla Cool, '+storedName;
}

myButton.onclick=function(){
    setUsername();
}