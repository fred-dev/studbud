import Navigation from "./components/navigation";

const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId =  nav.getHash(link);
        nav.setPage(pageId);
    })
})

const sublinks  = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages  = document.querySelectorAll('.sub-page-container');

var subNav = new Navigation(sublinks, subPages);
subNav.links.forEach((link) =>{
    link.addEventListener('click', function (){
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    })
})
