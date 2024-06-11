var drop=document.querySelector('.drop')
var drop2=document.querySelector('.drops')
var btn=document.querySelector('#onthat')
var btn2=document.querySelector('#onthats')
console.log(drop)
console.log(btn)


// ======================main nav====================
btn2.addEventListener('click',function(){
    if(window.innerWidth < 992){
    console.log('ziad')
    drop2.classList.toggle('lokaa')
    }
    else{
     drop2.classList.toggle('loka')  
    }
    })

window.addEventListener('click',(e)=>{
    if(e.target!==btn){
      drop.classList.remove('loka');
    }
})
window.addEventListener('click',(e)=>{
    if(e.target!==btn2){
      drop2.classList.remove('loka');
    }
})

    btn.addEventListener('click',function(){
        if(window.innerWidth < 992){
        console.log('ziad')
        drop.classList.toggle('lokaa')
        }
        else{
            drop.classList.toggle('loka')  
        }
        });

// ======================end nav====================
// ======================side nav====================
var down1=document.querySelector('#down1')
var down2=document.querySelector('#down2')
var drop4=document.querySelector('.drop4')
var drop5=document.querySelector('.drop5')

down1.addEventListener('click',function(){
    console.log('ziad')
    drop4.classList.toggle('loka')
    })
    window.addEventListener('click',(e)=>{
        if(e.target!==down1){
          drop4.classList.remove('loka');
        }
    })
    // ==
    down2.addEventListener('click',function(){
        console.log('ziad')
        drop5.classList.toggle('loka')
        })
        window.addEventListener('click',(e)=>{
            if(e.target!==down2){
              drop5.classList.remove('loka');
            }
        })


        var openn=document.querySelector('.menu')
        var side=document.querySelector('.side-nav')
        openn.addEventListener('click',function(){
            console.log('ziad')
            side.classList.toggle('show-side')
            })
            // ====================================================
         var fix=document.querySelector('.main-header');
            window.addEventListener('scroll', function() {
                var scrollPosition = window.scrollY; 
          
                
                if (scrollPosition > 500) {
                 fix.classList.add('fix')
                  console.log('تم تنفيذ الأمر!');
                }else{
                    fix.classList.remove('fix')
                }
              });

