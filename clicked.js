let obj=document.getElementById('heading2');
let btn2=document.getElementById('btn2');
btn2.style.fontWeight="600";

btn2.addEventListener('click',()=>{
    window.location="click.html";
    
});

obj.addEventListener('mouseleave',myfun);
function myfun(){
    obj.innerHTML="Radhe Radhe!";
    obj.style.color="purple";
};
