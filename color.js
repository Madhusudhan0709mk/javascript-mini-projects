// document.addEventListener('DOMContentLoaded', (event) => {
//     let colorElement = document.querySelector('.class');
//     let btn = document.querySelector('.btn');
//     let h1 = document.getElementsByTagName('h1');
//     btn.addEventListener('click', function(){
//         let colors = document.body.style.backgroundColor;
//         if (colors === "white"){
//             document.body.style.backgroundColor = "black";
//             h1.style.color = "white"
//         } else{
//             document.body.style.backgroundColor = "white";
            
//             h1.style.color = "black"
//         };
//     });
// });


// dark and light theme
document.addEventListener('DOMContentLoaded', (event) => {
    let colorElement = document.querySelector('.class');
    let btn = document.querySelector('.btn');
    let h1Elements = document.getElementsByTagName('h1');
    btn.addEventListener('click', function(){
        let colors = document.body.style.backgroundColor;
       
        if (colors === "white"){
            document.body.style.backgroundColor = "black";
            for(let i = 0; i < h1Elements.length; i++) {
                h1Elements[i].style.color = "white";
            }
            btn.textContent = "black Theme"; 
        } else{
            document.body.style.backgroundColor = "white";
            for(let i = 0; i < h1Elements.length; i++) {
                h1Elements[i].style.color = "black";
            }
            btn.textContent = "light Theme";
        }
    });
});
// number counter
document.addEventListener('DOMContentLoaded',(event)=>{
    let minus = document.querySelectorAll('.minus')
    let add = document.querySelector('.add')
    let reset = document.querySelector('.reset')
    let spancount = document.querySelector('.countt')
    let count = 0
    add.onclick = function(){
        count += 1
        spancount.innerHTML = count;
    }
    minus.forEach((button) => {
        button.onclick = function() {
            count -= 1;
            spancount.innerHTML = count;
        };
    });
    reset.onclick = function(){
        count = 0
        spancount.innerHTML = count;
    }
    
})
