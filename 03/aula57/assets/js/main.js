const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const corBody = estilosBody.background;
console.log(corBody);

for(let p of ps) {
    p.style.background = corBody;
    p.style.color = '#fff';
}