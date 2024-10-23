// Page loader
window.addEventListener('load', function(){
    const loader = document.getElementById('loader')//loader png
    const content = document.getElementById('page')//main page

    //Timer
    setTimeout(() =>{
        loader.style.display = 'none'
        content.style.display = 'block'
    }, 10000)//change time at will
    console.log(typeof(content))
})

// Dark/Light Mode Switcher
var darkmode = localStorage.getItem('dark');
const toggle = document.getElementById("switcher");

const enableDarkmode =() =>{
    document.body.classList.remove('light')
    document.body.classList.add('dark')
    localStorage.setItem('dark', 'active')
}

const disableDarkmode =() =>{
    document.body.classList.add('light')
    document.body.classList.remove('dark')
    localStorage.setItem('dark', null)
}
if(darkmode ==='active') {enableDarkmode()}

// Add EventListener
toggle.addEventListener('click', e =>{
    darkmode = localStorage.getItem('dark');
    if(darkmode !== "active"){
        enableDarkmode()
    }else{
        disableDarkmode()
    }
})


console.log("My Name Is Divine")




// For Media screen 481px nav bar
const myMedia = window.matchMedia("(max-width: 480px)")

const myNav = document.getElementById("myNav");
    const page1 = document.getElementById("page1")
    const myBtn2 = document.getElementById("myBtn2")
    const myBtn = document.getElementById("myBtn");


// Border active links
function setActive(element){
    var links = document.querySelector(".nav")
    Array.from(links.children).forEach(item =>
        item.classList.remove("active"))
    element.classList.add("active");
    var d = links;

    var k = ()=>{
        var c =d;
    c.addEventListener('click', e =>{
        if(window.innerWidth <= 480 && e.target){
             myNav.style.transform = "translateX(-100%)"
            myBtn.style.opacity = '1'
            myBtn2.style.display = 'none'
            page1.style.display ="block"
        }else{
            //  myNav.style.transform = "translateX(0)"
        }
    })
    }
    
    myMedia.addEventListener('change', k);
    k(myMedia)

}


    var a = ()=>{
        myBtn.addEventListener('click', e =>{
            if(window.innerWidth <= 480 && e.target){
        
                myNav.style.transform = "translateX(0%)"
                // myBtn.style.transform = "rotate(180deg)"
                myBtn.style.opacity = "0"
                myBtn2.style.display ="inline"
                page1.style.display ="none"
                
            }else{
                myNav.style.transform = "translateX(-100%)"
                myBtn.style.transform = "rotate(0deg)"
            }
            
        })



        // Func 2
        var b = ()=>{
            myBtn2.addEventListener('click', e =>{
                if(window.innerWidth <= 480 && e.target){
                    myNav.style.transform = "translateX(-100%)"
                    myBtn.style.opacity = '1'
                    myBtn2.style.display = 'none'
                    page1.style.display ="block"
                }
            })
           
        }
        myMedia.addEventListener('change', b);
        b(myMedia)
        
        
    }
    myMedia.addEventListener('change', a);
    a(myMedia)

    

  

//    Span Name #nameInput1
const Name ="Divine Peter"
let i = document.getElementById('nameInput1');
i.textContent = Name;






