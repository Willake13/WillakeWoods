/* =========================================================
   WILLAKE WOODS — ANNUAL PICTURE
   Shared JavaScript · 2020–2025 ONLY
========================================================= */

(() => {

"use strict";

const body = document.body;
const currentYear = Number(body.dataset.year || 2020);

const annualData = {

    2020:{
        title:"Haze Waves Of Nature",
        name:"《绿色烟丝》",
        author:"由小雷命名",
        shot:"这张照片发布于2020年2月13号",
        story:"经过近一个月的投票它被赋予了新生命和新的存在价值。",
        thanks:"非常感谢各位给与的支持和鼓励！",
        period:"2019.9.28—2020.9.26",
        moonlight:null
    },

    2021:{
        title:"Puff Of Shine",
        name:"《若有光》",
        author:"由小雷命名（常驻命名大师）",
        shot:"这张照片拍摄于2021年7月13号，发布于7月29号",
        story:"经过投票它被赋予了新生命和新的存在价值。",
        thanks:"非常感谢各位给与的支持和鼓励！",
        period:"2020.9.28—2021.9.26",
        moonlight:null
    },

    2022:{
        title:"Glimmer Of Ocean",
        name:"《光海之间》",
        author:"由小雷命名（常驻命名大师）",
        shot:"这张照片拍摄于2022年8月17号，发布于8月21号",
        story:"经过投票它被赋予了新生命和新的存在价值。",
        thanks:"非常感谢各位给与的支持和鼓励！",
        period:"2021.9.29—2022.9.25",
        moonlight:null
    },

    2023:{
        title:"Seek After Lost",
        name:"《望遗》",
        author:"由小雷命名",
        shot:"这张照片拍摄于2022年8月18号，发布于10月04号",
        story:"经过投票它被赋予了新生命和新的存在价值。",
        thanks:"非常感谢各位给与的支持和鼓励！",
        period:"2022.10.04—2023.9.23",
        moonlight:{
            rank:"年度月光照片 — 第二",
            title:"Shine Down On Heart",
            name:"《日降海堤》",
            author:"由本人命名",
            shot:"这张照片拍摄于2022年8月17号，发布于2022年11月18号",
            story:"经过投票，这张照片被赋予了新的意义！"
        }
    },

    2024:{
        title:"Twilight Shadeglow",
        name:"《暮日残梦》",
        author:"由本人命名",
        shot:"这张照片拍摄于2023年6月12号，发布于12月17号",
        story:"经过投票它被赋予了新生命和新的存在价值。",
        thanks:"非常感谢各位给与的支持和鼓励！",
        period:"2023.10.11—2024.9.09",
        moonlight:{
            rank:"年度月光照片 — 排名第二",
            title:"Tranquil Lakeside",
            name:"《静谧湖畔》",
            author:"由本人命名",
            shot:"这张照片拍摄于2024年7月15号，发布于2024年7月30号",
            story:"经过投票，这张照片被赋予了新的意义！"
        }
    },

    2025:{
        title:"Weaving Silhouette",
        name:"《织梦》",
        author:"由本人命名",
        shot:"本图拍摄于2025年03月16号，发布于2025年03月17号",
        story:"经投票其被赋予了新生命和新的存在价值。",
        thanks:"非常感谢各位给与的支持和鼓励！",
        period:"2024.09.09—2025.09.17",
        moonlight:{
            rank:"年度月光照片 — 排名第二",
            title:"Soft Stillness",
            name:"《熙痕》",
            author:"由本人命名",
            shot:"这张照片拍摄于2024年10月31号，发布于2025年02月07号",
            story:"经过投票，这张照片被赋予了新的意义！"
        }
    }

};

function setText(selector,value){
    document.querySelectorAll(selector).forEach(element=>{
        if(value !== undefined && value !== null){
            element.textContent = value;
        }
    });
}

function loadAnnualText(){

    const data = annualData[currentYear];
    if(!data) return;

    setText("[data-annual-title]",data.title);
    setText("[data-annual-name]",data.name);
    setText("[data-annual-author]",data.author);
    setText("[data-annual-shot]",data.shot);
    setText("[data-annual-story]",data.story);
    setText("[data-annual-thanks]",data.thanks);
    setText("[data-annual-period]",data.period);

    if(data.moonlight){

        setText("[data-moonlight-rank]",data.moonlight.rank);
        setText("[data-moonlight-title]",data.moonlight.title);
        setText("[data-moonlight-name]",data.moonlight.name);
        setText("[data-moonlight-author]",data.moonlight.author);
        setText("[data-moonlight-shot]",data.moonlight.shot);
        setText("[data-moonlight-story]",data.moonlight.story);

    }

}

function goToYear(year){

    if(year < 2020 || year > 2025){
        return;
    }

    window.location.href = `annual-${year}.html`;
}

const previousButton = document.querySelector("[data-year-prev]");
const nextButton = document.querySelector("[data-year-next]");

if(previousButton){

    if(currentYear <= 2020){
        previousButton.style.display = "none";
    }else{
        previousButton.addEventListener("click",event=>{
            event.preventDefault();
            goToYear(currentYear - 1);
        });
    }

}

if(nextButton){

    if(currentYear >= 2025){
        nextButton.style.display = "none";
    }else{
        nextButton.addEventListener("click",event=>{
            event.preventDefault();
            goToYear(currentYear + 1);
        });
    }

}

/* =========================================================
   LIGHTBOX
========================================================= */

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");

const galleryImages = Array.from(
    document.querySelectorAll("[data-gallery-image]")
);

let currentGalleryIndex = 0;

function openGallery(index){

    if(!lightbox || !lightboxImage || !galleryImages.length){
        return;
    }

    currentGalleryIndex =
        (index + galleryImages.length) % galleryImages.length;

    const image = galleryImages[currentGalleryIndex];

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "";

    lightbox.classList.add("open");
    body.classList.add("lightbox-open");

}

function closeGallery(){

    if(!lightbox) return;

    lightbox.classList.remove("open");
    body.classList.remove("lightbox-open");

}

function nextGallery(){
    openGallery(currentGalleryIndex + 1);
}

function previousGallery(){
    openGallery(currentGalleryIndex - 1);
}

galleryImages.forEach((image,index)=>{
    image.addEventListener("click",()=>{
        openGallery(index);
    });
});

if(lightboxClose){
    lightboxClose.addEventListener("click",event=>{
        event.stopPropagation();
        closeGallery();
    });
}

if(lightboxPrev){
    lightboxPrev.addEventListener("click",event=>{
        event.stopPropagation();
        previousGallery();
    });
}

if(lightboxNext){
    lightboxNext.addEventListener("click",event=>{
        event.stopPropagation();
        nextGallery();
    });
}

if(lightbox){
    lightbox.addEventListener("click",event=>{
        if(event.target === lightbox){
            closeGallery();
        }
    });
}

/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener("keydown",event=>{

    if(event.key === "Escape"){
        closeGallery();
        return;
    }

    if(lightbox && lightbox.classList.contains("open")){

        if(event.key === "ArrowLeft"){
            previousGallery();
        }

        if(event.key === "ArrowRight"){
            nextGallery();
        }

        return;
    }

    if(event.key === "ArrowLeft"){
        goToYear(currentYear - 1);
    }

    if(event.key === "ArrowRight"){
        goToYear(currentYear + 1);
    }

});

/* =========================================================
   TOUCH
========================================================= */

let touchStartX = 0;
let touchStartY = 0;

if(lightbox){

    lightbox.addEventListener("touchstart",event=>{
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    },{passive:true});

    lightbox.addEventListener("touchend",event=>{

        const touch = event.changedTouches[0];

        const dx = touch.clientX - touchStartX;
        const dy = touch.clientY - touchStartY;

        if(
            Math.abs(dx) > 50 &&
            Math.abs(dx) > Math.abs(dy)
        ){

            if(dx < 0){
                nextGallery();
            }else{
                previousGallery();
            }

        }

    },{passive:true});

}

/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.querySelector(".annual-header");

let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader(){

    if(!header){
        ticking = false;
        return;
    }

    const currentScrollY = window.scrollY;

    if(currentScrollY <= 30){

        header.classList.remove("header-hidden");
        lastScrollY = currentScrollY;
        ticking = false;
        return;

    }

    if(currentScrollY > lastScrollY + 4){
        header.classList.add("header-hidden");
    }else if(currentScrollY < lastScrollY - 4){
        header.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener("scroll",()=>{

    if(!ticking){
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }

},{passive:true});

/* =========================================================
   INITIAL LOAD
========================================================= */

loadAnnualText();

window.addEventListener("load",()=>{
    body.classList.add("annual-loaded");
});

})();
