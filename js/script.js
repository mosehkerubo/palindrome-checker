/*select-document-element*/ 
const myPhrase=document.getElementById("phrase");

const myButton=document.getElementById("check-button");
const theError=document.getElementById("error");
const myMessage=document.getElementById("message");

myButton.addEventListener("click",()=>{
if (myPhrase.value==""){
 theError.textContent=`please enter a phrase or a word`

} else{
theError.textContent=""
  myPalindrome(myPhrase.value)
}


})












function myPalindrome(school) {
  const myword = school.toLowerCase();
  console.log(myword);


  const splitString=school.split("");
  console.log(splitString);
  
  const reverseString=splitString.reverse()
  console.log(reverseString);





  const joinstring=reverseString.join("")
  console.log(joinstring)


  const lowerCase=joinstring.toLowerCase();
  console.log(lowerCase)




  if(myword==lowerCase){

    myMessage.textContent= `${school} is a palindrome`;
    myMessage.classList.add("success")
  
}
  else{

myMessage.textContent=`${school} is not a palindrome"`;

myMessage.classList.add("fail")


myMessage.classList.remove("error")
  }


  






}

// myPalindrome("Rose");


console.log(myPhrase)
console.log(myButton)
  




















