const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let genPassword = document.getElementById("generatePassword")
let leftPasswordEl = document.getElementById("leftText")
let rightPasswordEl = document.getElementById("rightText")


genPassword.addEventListener("click", function () {
  leftPasswordEl.textContent = ""
  rightPasswordEl.textContent = ""
  leftPasswordEl.textContent = generateRandomPassword()
  rightPasswordEl.textContent = generateRandomPassword()
})

let passLimit = 15

function generateRandomPassword() {
  let newPassword = ""
  for (let i = 0; i < passLimit; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length)
    newPassword += characters[randomNumber]
  }
  return newPassword
}
