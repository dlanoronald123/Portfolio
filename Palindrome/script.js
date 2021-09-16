const btnCheck=document.querySelector('button');
const str=document.querySelector('input');

btnCheck.addEventListener('click',(e)=>{
  e.preventDefault();

  const inputWord = str.value.toLocaleLowerCase();
  const string = inputWord.split('');
  const reArray = string.reverse();
  const joinArray = reArray.join('');

  if(inputWord == joinArray){
    document.querySelector('.output-text').innerHTML= `
    <div>
      <p style='font-size:1.5rem;'>It is a palindrome.</p>
    </div>`;
    str.value = ""
  } else {
    document.querySelector(".output-text").innerHTML=`
    <div>
    <p style='font-size:1.5em;'>It is not a palindrome.</p>
    </div>`;
  }
});