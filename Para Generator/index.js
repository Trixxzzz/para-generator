const  input=document.getElementById("numOfWords");
const container=document.querySelector(".container")
let words;

const generator=(n)=>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i=0;i<n;i++){
        const random=(Math.random()*(letters.length-1)).toFixed(0)
        text+=letters[random];
    }
    return text;
}
const generatePara=()=>{
    words=Number((input.value));
    const para=document.createElement("p");
    let data="";
    for(let i=0;i<words;i++){    
        const randomNumber=(Math.random()*15).toFixed(0)
        data+=generator(randomNumber).toLowerCase();
        data+=" ";
    }
    para.innerText=data;
    para.setAttribute("class","paras");

    container.append(para);
}
