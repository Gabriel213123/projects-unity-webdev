function Send(){
    var CHAT_BOT = document.getElementById("chat-bot").value
    

    var PERSON_TEXT = document.createElement("h1")
    var TEXTNODE_PERSON = document.createTextNode(`${CHAT_BOT} :🤓`)
    PERSON_TEXT.setAttribute("id", "person")
    PERSON_TEXT.appendChild(TEXTNODE_PERSON)
    document.getElementById("chat").appendChild(PERSON_TEXT)
    document.getElementById("chat-bot").value = ""

    setTimeout(() => {
    var BOT_TEXT = document.createElement("h1")
    var TEXTNODE_BOT = document.createTextNode(`🤖: ${eval(CHAT_BOT)}`)
    BOT_TEXT.setAttribute("id", "bot")
    BOT_TEXT.appendChild(TEXTNODE_BOT)
    document.getElementById("chat").appendChild(BOT_TEXT)
    
    }, 1000);
    try{
        eval(CHAT_BOT)
    }
    catch{
        setTimeout(() => {
            var BOT_TEXT = document.createElement("h1")
            var TEXTNODE_BOT = document.createTextNode("🤖: Scrie ecuatia corect, te rog!")
            BOT_TEXT.setAttribute("id", "bot")
            BOT_TEXT.appendChild(TEXTNODE_BOT)
            document.getElementById("chat").appendChild(BOT_TEXT)
            }, 1000);
    }
    if(eval(CHAT_BOT) === undefined){
        setTimeout(() => {
            var BOT_TEXT = document.createElement("h1")
            var TEXTNODE_BOT = document.createTextNode("🤖: Scrie o ecuatie!")
            BOT_TEXT.setAttribute("id", "bot")
            BOT_TEXT.appendChild(TEXTNODE_BOT)
            document.getElementById("chat").appendChild(BOT_TEXT)
            }, 1000);
    }
}
