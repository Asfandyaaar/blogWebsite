const nav = document.querySelector(".header");
const toplink = document.querySelector(".top-link");

window.addEventListener('scroll',function(){
   const scrollHeight = window.pageYOffset;
   const navHeight = nav.getBoundingClientRect().height;

   if(scrollHeight > navHeight){
       nav.classList.add("fixed-nav");
   }
   else 
   {
       nav.classList.remove("fixed-nav");
   }

   if(scrollHeight > 400){
       toplink.classList.add('show-link');
   }else
   {
       toplink.classList.remove('show-link');
   }
})