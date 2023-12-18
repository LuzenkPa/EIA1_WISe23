const input = document.queryselector (".inputForm_field");
const output = document.getElementById ("output");

input.addEventListener("keydown", function(event)  {
if (event.key == "Enter") {
    output.innerHTML = input.value
    input.value = ""
}
})