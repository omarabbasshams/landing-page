/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const fragment = document.createDocumentFragment(); // fragment element to wrap list item
const section = document.querySelectorAll('section');// clone all sections
const navlist = document.querySelector('#navbar__list') ;// clone nav item
const scrolltop=[]; // declear array to save section position in window to active class
const headingcollaps = document.querySelectorAll('section h2');//clone all section heading to add collaps sing

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


function buildMenu (){
    for (let x=0;x<section.length;x++){
        const list = document.createElement('li');
        const link=document.createElement('a');
link.addEventListener('click',()=>scrollto(section[x]))        
        link.textContent = `${section[x].getAttribute("data-nav")}`;
        link.setAttribute('class','menu__link')
        list.appendChild(link);
        fragment.appendChild(list);
        
        scrolltop[x]=section[x].offsetTop;
    }
    navlist.appendChild(fragment);
}
// Add class 'active' to section when near top of viewport

// compare postion of window scroll with section position evry time scroll move 
function activeLink(el){
    for(let x=0;x<section.length-1;x++){
        if(el>=section[x].offsetTop && el<=section[x+1].offsetTop){
            for(let y=0;y<section.length;y++){
                if(x!=y){
                    
                    section[y].setAttribute('class','');
                    list[y].setAttribute('class','');  
                } 
            }
            section[x].setAttribute('class','your-active-class');
            list[x].setAttribute('class','omar');
        }
        else if(el>=section[section.length-1].offsetTop){
            section[section.length-1].setAttribute('class','your-active-class');
            list[section.length-1].setAttribute('class','omar');
            for(let y=0;y<section.length-1;y++){
                if(x!=y){
                        
                    section[y].setAttribute('class','');
                    list[y].setAttribute('class','');  
                    } 
                }
            }
            
        }
    }
    //scroll to section from navigation
    function scrollto(elementofset){
        elementofset.scrollIntoView({behavior: "smooth"});
    }
    
    // adding collaps sing 
    function addcollaps(){
        for(let x=0;x<headingcollaps.length;x++){
            const collapsspan=document.createElement('span');
            collapsspan.textContent="-";
            if(x%2){
    
                collapsspan.setAttribute('class','collapsel');
            }else{
                collapsspan.setAttribute('class','collapser'); 
            }
            headingcollaps[x].appendChild(collapsspan);
            const spanheadingcollaps= document.querySelectorAll('section h2 span');
    
            spanheadingcollaps[x].addEventListener('click',()=>toggelcollaps(section[x]));
        }
    
    }
    // function to collaps section 
    function toggelcollaps(element){
        const elementP= element.querySelectorAll("p");
        const elementHead =element.querySelector('h2 span');
        if(elementHead.textContent === "-"){elementHead.textContent='+'}
        else{elementHead.textContent='-'}
        for(let x=0;x<elementP.length;x++){
            elementP[x].classList.toggle("collapse");
        }
     
    }
    /**
     * End Main Functions
 * Begin Events
 * 
     */

    // Build menu 

buildMenu();
    const list=document.querySelectorAll('li'); // clone all list items
    // Scroll to section on link click
    
// Set sections as active
document.addEventListener('scroll',()=>activeLink(window.pageYOffset)); 

// collaps section
addcollaps();




/*

omar
*/ 
