let button = document.getElementById('button');
let container = document.querySelector('.container');
let counter = 0;

button.addEventListener('mouseenter',(e)=>{
    e.target.style.margin = '';
    if (counter % 2 == 0){
        // console.log('yup');
            container.style.background = `rgb(${Math.floor(Math.random()*155+100)},${Math.floor(Math.random()*155+100)},${Math.floor(Math.random()*155+100)})`;
            e.target.style.borderRadius = '0';
    } else {
        e.target.style.borderRadius = `${Math.floor(Math.random()*50)}px`;
        e.target.style.padding = `${Math.floor(Math.random()*3 + 1)}rem`;
    }
    // if (counter % 10 == 1){
    //     
    // } 

    let randomX = Math.ceil(Math.random()*window.innerWidth*0.8,2);
    let randomY = Math.ceil(Math.random()*window.innerHeight*0.8,2);
    // console.log(randomX);
    e.target.style.transform = `translate(${randomX}px,${randomY}px)`;
    console.log(counter);
    counter++;
    // e.target.style.y = `${randomY}`;
    // console.log(e.target);
    e.preventDefault();
});

button.addEventListener('click',(e)=>{
    e.preventDefault();
    alert('Ты петух, с мобилки любой дебил сможет!\nДа да Вадим, это тебе!');
})