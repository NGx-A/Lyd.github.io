let currentSound = 1
let volume = 1

let sound = [
    document.querySelector(".sound1"), 
    document.querySelector(".sound2"),
    document.querySelector(".sound3"),
    document.querySelector(".sound4"),
    document.querySelector(".sound5"),
    document.querySelector(".sound6"),
    document.querySelector(".sound7")
]

document.querySelector(".button").addEventListener("click", e => {
    for(i = 0; i < sound.length; i++) {
        sound[i].volume = volume
    }
    sound[currentSound - 1].play()
})

document.addEventListener("keypress", Event => {
    //console.log(Event)
    if(Event.key == "a") {
        currentSound -= 1
        if(currentSound <= 0) currentSound = sound.length
        document.querySelector(".currentSound").textContent = `Lyd: #${currentSound}`
    }

    if(Event.key == "d") {
        currentSound += 1
        if(currentSound >= sound.length + 1) currentSound = 1
        document.querySelector(".currentSound").textContent = `Lyd: #${currentSound}`
    }

    if(Event.key == "w") {
        if(volume < 1) {
            volume += 0.1
            if(volume > 1) volume = 1
            document.querySelector(".volume").textContent = `Volum: ${(volume * 100).toFixed(0)}%`
            document.querySelector(".volume").style.filter = "hue-rotate(" + volume * 300 + "deg)";
        }
    }
    if(Event.key == "s") {
        if(volume > 0.1) {
            volume -= 0.1
            if(volume < 0) volume = 0
            document.querySelector(".volume").textContent = `Volum: ${(volume * 100).toFixed(0)}%`
            document.querySelector(".volume").style.filter = "hue-rotate(" + volume * 300 + "deg)";
        }
    }
    
})


