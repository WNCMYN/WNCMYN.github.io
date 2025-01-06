let elem = document.querySelector('.slider');
elem.addEventListener('click',function(){
    let themeLink = document.querySelector('#theme');
    let logo = document.querySelector('.logo');
    let destinations = document.querySelector('.bouton_destinations');
    let contact = document.querySelector('.bouton_contact');
    let github = document.querySelector('.github');
    let youtube = document.querySelector('.youtube');
    let insta = document.querySelector('.insta');
    if ("styleV2sombre.css" === themeLink.getAttribute("href")) {
        themeLink.setAttribute("href", "styleV2clair.css");
        logo.setAttribute("src", "img/logo_blanc-modified.png");
        destinations.setAttribute("src", "img/bouton_destination-modified.png");
        contact.setAttribute("src", "img/bouton_contact-modified.png");
        github.setAttribute("src", "img/github_blanc-modified.png");
        youtube.setAttribute("src", "img/Youtube_logo-modified.png");
        insta.setAttribute("src", "img/Instagram_logo-modified.png");
    }
    else{
        themeLink.setAttribute("href", "styleV2sombre.css");
        logo.setAttribute("src", "img/logo_blanc.png");
        destinations.setAttribute("src", "img/bouton_destination.png");
        contact.setAttribute("src", "img/bouton_contact.png");
        github.setAttribute("src", "img/github_blanc.png");
        youtube.setAttribute("src", "img/Youtube_logo.png");
        insta.setAttribute("src", "img/Instagram_logo.png");
    }
}); 
