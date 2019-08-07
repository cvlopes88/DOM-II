// Your code goes here


const navTop = document.querySelectorAll('a');
navTop.forEach(navs => {
    navs.addEventListener('click', (b) => {
        console.log('event in li');
       
    })
})

const nav = document.querySelector('nav');


const button = document.querySelector('.logo-heading');
button.addEventListener('click', () => {
    const a = document.createElement('a');
    a.textContent = "new nav";
    nav.append(a);
})


nav.addEventListener('click', (e) => {
    console.log('event in nav');
    console.log(e);
})

nav.addEventListener('click', (e) => {
    if(e.target.tagName === 'A'){
        e.target.remove();
    }
})


/////////////////////////////////////////////////////////

const imgTop = document.querySelector('.logo-heading');
imgTop.addEventListener('mouseover', (x) => {
   
    // x.target.style.height = "100px";
    // x.target.style.width = "100px";
    x.target.style.color = "red";
    x.target.style.fontSize = "80px";

});

imgTop.addEventListener('mouseout', (x) => {
   
    x.target.style.fontSize = '30px';
    x.target.style.color = "black";
} );
////////////////////////////////////////////////////////



// const textP = document.querySelectorAll('.text-content p');
// textP.addEventListener('mouseover', (y) => {
//     x.target.style.color = "blue";
//     console.log("mouseover");
// });



const bodyImg = document.querySelectorAll('img');
bodyImg.forEach(boxs => {
  boxs.addEventListener('mouseover', (e) => {
    
    e.target.style.filter = "none";
  })
    boxs.addEventListener('mouseleave', (e) => {
    e.target.style.filter = 'grayscale(1) blur(3px)';
    
    })
  })



///////////////////////////////////////////////////////////////////
const bodyColor = document.querySelector('body');
bodyColor.addEventListener('dblclick', (c) => {
    c.target.style.color = "green";

})

/////////////////////////////////////////////////




const navNew = document.querySelectorAll('a');
navNew.forEach(navclick => {
navclick.addEventListener('mouseover', (i) => {
    
    i.target.style.fontSize = "25px";
    
})

navclick.addEventListener('mouseleave', (i) => {
    i.target.style.fontSize = "15px";
})

})
///////////////////////////////

const footerPop = document.querySelector('.footer');

footerPop.addEventListener('mouseover', (f) => {
    f.target.style.color = "red";
    f.target.style.fontSize = "60px";



footerPop.addEventListener('mouseout', (f) => {
    f.target.style.color = "black";
    f.target.style.fontSize = "20px";
})

})
///////////////////////////////////////////////////////////////



const headOne = document.querySelectorAll('.intro h2');
headOne.forEach(headPop => {
headPop.addEventListener('mouseover', (g) => {
    
    g.target.style.fontSize = "45px";
    
})

headPop.addEventListener('mouseleave', (g) => {
    g.target.style.fontSize = "25px";
})

})

////////////////////////////////////



const headTwo = document.querySelectorAll('.text-content h2');
headTwo.forEach(headPop => {
headPop.addEventListener('mouseover', (o) => {
    
    o.target.style.fontSize = "50px";
    
})

headPop.addEventListener('mouseleave', (o) => {
    o.target.style.fontSize = "30px";
})

})

////////////////////////////////////





const headLast = document.querySelectorAll('.content-destination h2');
headLast.forEach(headPop => {
headPop.addEventListener('mouseover', (q) => {
    
    q.target.style.fontSize = "45px";
    
})

headPop.addEventListener('mouseleave', (q) => {
    q.target.style.fontSize = "25px";
})

})




const buttonLast = document.querySelectorAll('.btn');
buttonLast.forEach(btnPop => {
btnPop.addEventListener('mouseover', (u) => {
    
    u.target.style.width = "300px";
    u.target.style.height = "100px";
    u.target.style.color = "black";
    u.target.style.fontSize = "50px";
    u.target.style.background = "yellow";


})

btnPop.addEventListener('mouseleave', (u) => {
    u.target.style.width = "200px";
    u.target.style.height = "100px";
    u.target.style.color = "yellow";
    u.target.style.fontSize = "30px";
    u.target.style.background = "black";

})

});

const navMove = document.querySelector('.nav');
navMove.addEventListener('click', (event) => {
    console.log('nav fired');
    event.preventDefault();
})