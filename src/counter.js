let count = 0;
let t = "";
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}
else{
    count = localStorage.getItem('counter')
}
counter = ()=>{
    if(count>0){
    count--;
    document.getElementById('counter').innerHTML=count;
    localStorage.setItem('counter',count)
    }
    else{
        alert('couldn\'t go less than zero');
    } 
};
updateT = ()=>{
    document.getElementById("liveUpdate").innerHTML = document.getElementById('t').value;
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('form').onsubmit=()=>{
        const task = document.getElementById('t').value;
        const li = document.createElement('li');
        var e = 1;
        (function grow(){
            var h = (parseInt(li.style.paddingLeft)||0)+1;
            li.style.paddingLeft = h+'px';
            if (h<25) setTimeout(grow, 10);
          })();
        li.innerHTML = task;
        document.getElementById('task').append(li);
        document.getElementById('t').value = null;
        document.getElementById("liveUpdate").innerHTML = null
        return false;
    }
    document.querySelector('select').onchange = ()=>{
        const c = document.querySelector('select').value;
        console.log(c);
        document.getElementById('task').style.backgroundColor=c;
    }
    document.querySelector('#counter').innerHTML=count;
    f=()=>{count++;
        document.getElementById('counter').innerHTML=count;}
    setInterval(f,1000);
});