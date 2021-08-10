const inputMask = document.querySelector("#mask")

const isANumber = (key) => !isNaN(key) && key != "" && key != " "

inputMask.addEventListener("paste", e => e.preventDefault())

inputMask.addEventListener("keydown", e => {

    const deletekeys = ["Backspace", "Delete"]
    
    if( !deletekeys.includes(e.key)) return

    e.preventDefault()

    const onlyNumbers = inputMask.value.replace(".", "").split("")

    onlyNumbers.pop()
    onlyNumbers.splice(0, 0, 0)

    onlyNumbers.splice(1, 0, ".")

    inputMask.value = onlyNumbers.join("")

})

inputMask.addEventListener("keypress", e => {
   
    e.preventDefault()
    if( !isANumber(e.key) ) return

    const onlyNumbers = inputMask.value.replace(".", "").split("")

    onlyNumbers.shift()
    onlyNumbers.push(e.key)

    onlyNumbers.splice(1, 0, ".")

    inputMask.value = onlyNumbers.join("")
})
