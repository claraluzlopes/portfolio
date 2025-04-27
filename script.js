const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.closest('.skills') && entry.target.tagName === 'LI') {
                const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 200);
            } else {
                entry.target.classList.add('show');
            }
        } 
    });
}, { threshold: 0.1 });

const elementsToObserve = document.querySelectorAll('.hidden, .skills ul li, .carousel-item');
elementsToObserve.forEach((el) => observer.observe(el));

// typewriter effect section 1

//faz cada letra ser inserida
const line1Text = "Hello :)";
const line2Text = "Get to know me...";
const speed = 100; 
let i = 0;
let j = 0;

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

// cursor aqui
const cursor = document.createElement('span');
cursor.classList.add('cursor');
line1.after(cursor);

function typeLine1() {
if (i < line1Text.length) {
    line1.textContent += line1Text.charAt(i);
    i++;
    setTimeout(typeLine1, speed);
} else {
    // Quando terminar a linha 1, move o cursor pra linha 2
    cursor.remove();
    line2.after(cursor);
    typeLine2();
}
}

function typeLine2() {
if (j < line2Text.length) {
    line2.textContent += line2Text.charAt(j);
    j++;
    setTimeout(typeLine2, speed);
}
}

window.addEventListener('DOMContentLoaded', (event) => {
    typeLine1();
});
