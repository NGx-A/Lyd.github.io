let sound1 = document.querySelector(".sound1")
let sound2 = document.querySelector(".sound2")
let sound3 = document.querySelector(".sound3")
let sound4 = document.querySelector(".sound4")
let currentSound = 1
let volume = 1

document.querySelector(".button").addEventListener("click", e => {
    sound1.volume = volume
    sound2.volume = volume
    sound3.volume = volume
    sound4.volume = volume
    if(currentSound == 1) sound1.play()
    if(currentSound == 2) sound2.play()
    if(currentSound == 3) sound3.play()
    if(currentSound == 4) sound4.play()
})

document.addEventListener("keypress", Event => {
    //console.log(Event)
    if(Event.key == "1") {
        currentSound = 1
        document.querySelector(".currentSound").textContent = "Lyd: Skratta ta"
    }
    if(Event.key == "2") {
        currentSound = 2
        document.querySelector(".currentSound").textContent = "Lyd: The juice of lemons makes fine punch"
    }
    if(Event.key == "3") {
        currentSound = 3
        document.querySelector(".currentSound").textContent = "Lyd: Kreativ tekst"
    }
    if(Event.key == "4") {
        currentSound = 4
        document.querySelector(".currentSound").textContent = "Lyd: Så ellers går det bra"
    }

    if(Event.key == "w") {
        if(volume < 1) {
            volume += 0.1
            if(volume > 1) volume = 1
            document.querySelector(".volume").textContent = `Volum: ${(volume * 100).toFixed(0)}%`
        }
        
    }
    if(Event.key == "s") {
        if(volume > 0.1) {
            volume -= 0.1
            if(volume < 0) volume = 0
            document.querySelector(".volume").textContent = `Volum: ${(volume * 100).toFixed(0)}%`
        }
        
        
    }
    
})


