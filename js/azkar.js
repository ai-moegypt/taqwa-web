let taspehContainer = document.querySelector('.taspehContainer'),
    next1 = document.querySelector('.buttons1 .next1'),
    prev1 = document.querySelector('.buttons1 .prev1'),
    number1 = document.querySelector('.buttons1 .number1');
let taspehIndex = 0;
gettaspeh();
function gettaspeh()
{
    fetch("https://www.hisnmuslim.com/api/ar/27.json")
    .then(Response => Response.json())
    .then(data =>{

        let taspeh = data[Object.keys(data)[0]];
        taspehContainer.innerHTML += 
        `
             
            <div class="div2">${taspeh[taspehIndex].content}</div>
           
        `
        gettaspeh();
        next1.addEventListener('click',()=>{
            taspehIndex == 23 ? taspehIndex = 0 : taspehIndex++;
            gettaspeh()
        })
        prev1.addEventListener('click',()=>{
            taspehIndex == 0 ? taspehIndex = 23 : taspehIndex--;
            gettaspeh()
        })
        function gettaspeh()
        {
            taspehContainer.innerText =  taspeh[taspehIndex].ARABIC_TEXT;
            number1.innerText = `24 - ${taspehIndex + 1}`
        }    
    })
}