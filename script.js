let elem = document.querySelector('.slider');
elem.addEventListener('click',function(){
    let themeLink = document.querySelector('#theme');
    let logo = document.querySelector('.logo');
    let destinations = document.querySelector('.bouton_destinations');
    let contact = document.querySelector('.bouton_contact');
    let github = document.querySelector('.github');
    let youtube = document.querySelector('.youtube');
    let insta = document.querySelector('.insta');
    if ("/styleV2sombre.css" === themeLink.getAttribute("href")) {
        themeLink.setAttribute("href", "/styleV2clair.css");
        logo.setAttribute("src", "/img/logo_blanc-modified.webp");
        destinations.setAttribute("src", "/img/bouton_destination-modified.png");
        contact.setAttribute("src", "/img/bouton_contact-modified.png");
        github.setAttribute("src", "/img/github_blanc-modified.webp");
        youtube.setAttribute("src", "/img/Youtube_logo-modified.webp");
        insta.setAttribute("src", "/img/Instagram_logo-modified.webp");
    }
    else{
        themeLink.setAttribute("href", "/styleV2sombre.css");
        logo.setAttribute("src", "/img/logo_blanc.webp");
        destinations.setAttribute("src", "/img/bouton_destination.png");
        contact.setAttribute("src", "/img/bouton_contact.png");
        github.setAttribute("src", "/img/github_blanc.webp");
        youtube.setAttribute("src", "/img/Youtube_logo.webp");
        insta.setAttribute("src", "/img/Instagram_logo.webp");
    }
}); 
