function dosum(event){
    event.preventdefault();
    console.log("function is running");
    let firstnumber = document.querySelector("#firstnumber").value;
    let secondnumber = document.querySelector("#second number").value;

    console.log(firstnumber)
    console.log(secondnumber)
    let result = number(firstnumber) + number(secondnumber);
    console.log(result);
let resultmessage=
`the sum of ${firstnumber} and ${secondnumber} = ${result}`;
document.querySelector("#resultwindow").innerHTMI = resultmessage;
}