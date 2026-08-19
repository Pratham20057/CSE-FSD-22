function addParagraph(){
    const para=document.createElement("p");
    para.innerText="This is new paragraph";
    para.style.color="red";
    const el=document.getElementById("para");
    el.appendChild(para);
}

function removePara(){
    const el=document.querySelector("p");
    const paraent = document.getElementById("para");
    paraent.removeChild(el);
}
function removeAll(){
      const el = document.querySelectorAll("p");
      const paraent = document.getElementById("para");
      paraent.remove(el);
}