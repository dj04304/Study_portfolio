const contents = document.querySelectorAll(".content");
const asideMenu = document.querySelectorAll("aside li")
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;
const fourthTop = contents[3].offsetTop;
const fifthTop = contents[4].offsetTop;

console.log(contents);
console.log(asideMenu);

asideMenu[0].onclick = () => {
    window.scroll({top:firstTop, behavior: 'smooth'})
}

asideMenu[1].onclick = () => {
    window.scroll({top:secondTop, behavior: 'smooth'})
}

asideMenu[2].onclick = () => {
    window.scroll({top:thirdTop, behavior: 'smooth'})
}

asideMenu[3].onclick = () => {
    window.scroll({top:fourthTop, behavior: 'smooth'})
}

asideMenu[4].onclick = () => {
    window.scroll({top:fifthTop, behavior: 'smooth'})
}

for(let i = 0; i < asideMenu.length; i++){
    asideMenu[i].onmouseover = () => {
        asideMenu[i].classList.toggle("aside_menu_link")
    }
}

for(let i = 0; i < asideMenu.length; i++){
    asideMenu[i].onmouseout = () => {
        asideMenu[i].classList.toggle("aside_menu_link")
    }
}

const infoEmail = document.querySelector(".informaition_email");
const gitAddress = document.querySelector(".git_address");
const blogAddress = document.querySelector(".blog_address");

console.log(infoEmail);
console.log(gitAddress);
console.log(blogAddress);

// aboutme email
infoEmail.onmouseover = () => {
    infoEmail.classList.toggle("informaition_email_link");
}

infoEmail.onmouseout = () => {
    infoEmail.classList.toggle("informaition_email_link");
}

infoEmail.onclick = () => {
    location.href = "mailto:dj043045@gmail.com";
}

//aboutme gitHub

gitAddress.onmouseover = () => {
    gitAddress.classList.toggle("git_address_link");
}

gitAddress.onmouseout = () => {
    gitAddress.classList.toggle("git_address_link");
}

gitAddress.onclick = () => {
    location.href = "https://github.com/dj04304";
}


blogAddress.onmouseover = () => {
    blogAddress.classList.toggle("blog_address_link");
}

blogAddress.onmouseout = () => {
    blogAddress.classList.toggle("blog_address_link");
}

blogAddress.onclick = () => {
    location.href = "https://dochistory.tistory.com/";
}

//footer sns
const btmEmail = document.querySelector(".email");
const btmEmailAddress = document.querySelector(".contact p");
const faceBook = document.querySelector(".facebook");
const Instagram = document.querySelector(".insta");

btmEmail.onclick = () => {
    location.href = "mailto:dj043045@gmail.com";
}

faceBook.onclick = () => {
    location.href = "https://ko-kr.facebook.com/";
}

Instagram.onclick = () => {
    location.href = "https://www.instagram.com/";
}


btmEmailAddress.onmouseover = () => {
    btmEmailAddress.classList.toggle("bottom_email_link");
}

btmEmailAddress.onmouseout = () => {
    btmEmailAddress.classList.toggle("bottom_email_link");
}

btmEmailAddress.onclick = () => {
    location.href = "mailto:dj043045@gmail.com";
}