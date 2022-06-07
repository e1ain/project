function MinusNUM(){
    let value=Number(document.getElementById('num').value);
    if(value !=1){
        document.getElementById('num').value=value-1;
    }
}
function addNUM(){
    let value=Number(document.getElementById('num').value);
    document.getElementById('num').value=value+1;
}
