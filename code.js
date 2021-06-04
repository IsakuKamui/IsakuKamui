console.log(pages[0]);
let endingPages = [4, 9, 13, 17, 19, 20];
let nextPage = 0;
while(nextPage !== null){
      document.write(`<p>${pages[nextPage]}`</p>);
      nextPage = prompt(pages[nextPage]);

if(nextPage !== null){
 nextPage = Number(nextPage);
 document.write(`<p>You turned to page ${nextPage}`);
 }
}
     
if(isEndingPage(nextPage, endingPages)){
   document.write(`<p>${pages[nextPage]}</p>`)
   nextPage = null;
   document.write("<h2>The End!</p>");
}
}

function isEndingPage(number, arrayOfNumbers){
   for(let index = 0; index < arrayOfNumbers.length; index += 1){
      let currentItem = arrayOfNumbers[index];
      if(currentItem === number){
      return true;
      }
      }
   return false;
}