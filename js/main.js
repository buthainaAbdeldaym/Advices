var advice=document.getElementById("advice"),
    advicer=document.getElementById("advicer"),
    divimg=document.getElementById("divimg"),
    img=document.getElementById("img");

var advices=[
        "“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“In three words I can sum up everything I've learned about life: it goes on.”",
        "“You only live once, but if you do it right, once is enough.”",
        "“Be the change that you wish to see in the world.”"
    ],
    advicers=[
        "― Oscar Wilde",
        "― Frank Zappa",
        "― Robert Frost",
        "― Mae West",
        "― Mahatma Gandhi"
    ],
    images=[
        "Oscar Wilde.jpeg",
        "Frank Zappa.jpeg",
        "Robert Frost.jpeg",
        "Albert Einstein.jpeg",
        "Mahatma Gandhi.jpeg"
    ];

function displayqoute(){
    var myRandom = Math.floor(Math.random() * advices.length);
    advice.innerHTML = advices[myRandom];
    advicer.innerHTML = advicers[myRandom];
    img.setAttribute("src",`images/${images[myRandom]}`);
    divimg.classList.add("appear");
}