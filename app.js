const h1 = document.querySelector('.number');
const per = h1.nextElementSibling;
const img = document.querySelector('.img');

let count=1;
let filter=60;
let opacity=1;
const counter = () =>
{
    if(count>=100)
    {
        clearInterval(myInterVal);
        return;
    }
        count++;
        h1.textContent=count;
        opacity = opacity - 0.01;
        h1.style.opacity  = `${opacity}`;
        per.style.opacity  = `${opacity}`;
        if(filter>=0)
        {
            img.style.filter = `blur(${filter}px)`;
            filter--;
        }
    }
const myInterVal = setInterval(counter,30);
