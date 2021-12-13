var search = document.getElementById("g-s");
var lucky = document.getElementById("lucky");


function imFeelingRandom(){
    let luckyArr =[
        "I'm Feeling Fantastic",
        "I'm Feeling Hungry",
        "I'm Feeling Funny",
        "I'm Feeling Inspired",
        "I'm Feeling Jazzy",
        "I'm Feeling Funky",
        "I'm Feeling Lovey"
    ];
    let luckyInt = ( Math.floor(Math.random() * luckyArr.length));

    lucky.innerHTML = luckyArr[luckyInt];

}

function luckyReset(){
    lucky.innerHTML = "I'm Feeling Lucky";
}


