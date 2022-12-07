

let er = document.querySelector("div");
let btn = document.getElementById("btn");
let pattern = /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;


function b() {
    let s = document.getElementById("inp").value
    if (pattern.test(s)) {
        document.location.href = 'https://www.gifki.org/data/media/1397/znachok-ok-animatsionnaya-kartinka-0019.gif'
    }
    else {
        er.innerText = "номер телефону введено не вірно"
    }
}

btn.onclick = b;


