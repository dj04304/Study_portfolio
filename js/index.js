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


