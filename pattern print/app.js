const show = document.getElementById("show")
show.onclick=()=>{
    display()
}
function display(){
    const rows=localStorage.getItem('row');
    console.log(rows);
    let str="";
        for(let i=1;i<=rows;i++){
            for(let j=rows;j>=i;j--){
                str+=" ";
            }
            for( let k=1;k<=i;k++){
                str+="Δ ";
            }
            str+="\n"
        }
        document.getElementById("pattern").innerHTML+=str;
    }
document.getElementById("back").onclick=()=>{
    location.href="./index.html"
    localStorage.clear()
}