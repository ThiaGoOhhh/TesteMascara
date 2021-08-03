const inputmask = document.querySelector("#mask")

const isANumber = (key) => !isNaN(key) && key !="" && key != " "

inputmask.addEventListener("keypress", e=> {

    e.preventDefault()

    if( !isANumber(e.key)) return

    const onlyNumbers = inputmask.value.replace(".", "").split("")

    onlyNumbers.shift()
    onlyNumbers.push(e.key)

    onlyNumbers.splice(1, 0, ".")
    inputmask.value = onlyNumbers.join("")
}
)
