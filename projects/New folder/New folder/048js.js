const articell = document.querySelector('.articel');
// console.log(articell.children);

const h3 = document.querySelector('h3');
const tugadi = document.querySelector('header');
const input = document.querySelector('#text');
const bosh = document.querySelector('#chek');
const qo = document.querySelector('.qo');
const form = document.querySelector('form');
qo.addEventListener('click',()=>{
    const p = document.createElement('p');
    p.textContent= input.value;
    if(bosh.checked == true){
     articell.prepend(p);
      }
      else {
        articell.appendChild (p); 
      }
 })

document.querySelector('body').addEventListener('click', ()=>{
    Array.from(articell.children).forEach(itm =>{ itm.classList.add('nekjon'); 
    itm.parentElement.style.display='flex';
    itm.parentElement.style.flexWrap='wrap';
    tugadi.classList.add('tugash');
    qo.classList.add('qo');
    form.classList.add('form');
    input.classList.add('text');
    // console.log(bosh.getAttribute('checked'));

        
    
})
}
)
/// matnlar orasida yellow yozuvi bolsa orqa fonni sariq qilish aks xolda esa oq bolisgini taminledi

Array.from(articell.children).forEach(itm =>{  // iteratsiya qiladi yani har bir sarlavhalarni
        itm.addEventListener('click', ()=>{  // hodisa qoshilyapti bosilganda for loop boladi
            if(itm.textContent.includes('yellow')){   /// sarlavha yozuvining orasida yellow so'zi bolsa true qaytarasi va shart bajariladi
                itm.style.backgroundColor='white';
            h3.parentElement.parentElement.style.backgroundColor = ' yellow';/// h3 elementining otasining otasi body elementining orqa fonini sariq aks holsa oqqa boyeydi
        }
            else {
                itm.style.backgroundColor='yellow';
                h3.parentElement.parentElement.style.backgroundColor = '';
            }

        } )
    }

)

tugadi.addEventListener('click', ()=>{
    
    Array.from(articell.children).forEach(item =>{
        item.remove("nekjon");
        // confirm(item.textContent);
    }
    )

})


