const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Populate nav items
const navValues = Object.values(siteContent.nav);
const navElements = document.querySelectorAll('nav>a');

for(i=0; i < navElements.length; i++) {
	document.querySelector(`nav>a:nth-of-type(` + (i+1) + ')').textContent = navValues[i];
}

// Add cta text
document.querySelector('.cta-text>h1').textContent = siteContent.cta.h1;

// Add cta button text
document.querySelector('.cta-text>button').textContent = siteContent.cta.button;

// Add img src
document.querySelector('section>img').src = siteContent.cta["img-src"];

// Add main content headers
document.querySelector('.top-content>.text-content>h4').textContent = siteContent["main-content"]["features-h4"];

document.querySelector('.top-content>.text-content:nth-of-type(2)>h4').textContent = siteContent["main-content"]["about-h4"];

document.querySelector('.bottom-content>.text-content>h4').textContent = siteContent["main-content"]["services-h4"];

document.querySelector('.bottom-content>.text-content:nth-of-type(2)>h4').textContent = siteContent["main-content"]["product-h4"];

document.querySelector('.bottom-content>.text-content:nth-of-type(3)>h4').textContent = siteContent["main-content"]["vision-h4"];


// Add main content paragraphs
document.querySelector('.top-content>.text-content>p').textContent = siteContent["main-content"]["features-content"];

document.querySelector('.top-content>.text-content:nth-of-type(2)>p').textContent = siteContent["main-content"]["about-content"];

document.querySelector('.bottom-content>.text-content>p').textContent = siteContent["main-content"]["services-content"];

document.querySelector('.bottom-content>.text-content:nth-of-type(2)>p').textContent = siteContent["main-content"]["product-content"];

document.querySelector('.bottom-content>.text-content:nth-of-type(3)>p').textContent = siteContent["main-content"]["vision-content"];


// Add middle img
document.querySelector('.middle-img').src = siteContent["main-content"]["middle-img-src"];


// Add contact info
document.querySelector('.contact>h4').textContent = siteContent.contact["contact-h4"];
document.querySelector('.contact>p:nth-of-type(1)').textContent = siteContent.contact["address"];
document.querySelector('.contact>p:nth-of-type(2)').textContent = siteContent.contact["phone"];
document.querySelector('.contact>p:nth-of-type(3)').textContent = siteContent.contact["email"];


// Add footer content
document.querySelector('footer>p').textContent = siteContent.footer.copyright;


// Change nav color
document.querySelectorAll('nav>a').forEach(item => item.style.color = "green");

// Add nav items
const nav = document.querySelector('nav');

const homeNavItem = document.createElement('a');
homeNavItem.textContent = "Home";
homeNavItem.style.color = "green";

const blogNavItem = document.createElement('a');
blogNavItem.textContent = "Blog";
blogNavItem.style.color = "green";

nav.appendChild(blogNavItem);
nav.prepend(homeNavItem);


