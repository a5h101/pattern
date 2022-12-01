const data= document.getElementById("collect");
const Number= document.getElementById("no");
const proceed=document.getElementById("save");
console.log(Number.value)
let row=document.getElementById("no");
proceed.onclick=()=>{
    localStorage.setItem('row',row.value);
}

data.onclick=()=>{
    if(Number.value!='')
    location.href="./pattern.html"
    else
    alert("submit number")
    // let check=localStorage.getItem("row")

}
