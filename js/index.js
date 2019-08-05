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

//nav stuff
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let navItem1 = document.querySelector("nav a:first-child");
navItem1.textContent = siteContent["nav"]["nav-item-1"];

let navItem2 = document.querySelector("nav a:nth-child(2)");
navItem2.textContent = siteContent["nav"]["nav-item-2"];

let navItem3 = document.querySelector("nav a:nth-child(3)");
navItem3.textContent = siteContent["nav"]["nav-item-3"];

let navItem4 = document.querySelector("nav a:nth-child(4)");
navItem4.textContent = siteContent["nav"]["nav-item-4"];

let navItem5 = document.querySelector("nav a:nth-child(5)");
navItem5.textContent = siteContent["nav"]["nav-item-5"];

let navItem6 = document.querySelector("nav a:nth-child(6)");
navItem6.textContent = siteContent["nav"]["nav-item-6"];


//cta stuff

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

let awesomeDom = document.querySelector(".cta-text h1");
awesomeDom.textContent = siteContent.cta.h1;
awesomeDom.style.fontSize = "100px";

//main stuff

  //feature and about 

let featuresHdr = document.querySelector(".text-content h4");
featuresHdr.textContent = siteContent["main-content"]["features-h4"];

let featuresTxt = document.querySelector(".text-content p");
featuresTxt.textContent = siteContent["main-content"]["features-content"];

let aboutHdr = document.querySelector(".top-content div:nth-child(2) h4");
aboutHdr.textContent = siteContent["main-content"]["about-h4"];

let aboutTxt = document.querySelector(".top-content div:nth-child(2) p");
aboutTxt.textContent = siteContent["main-content"]["about-content"];

  //middle image

let middleImg = document.querySelector(".main-content img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

  //services, product, vision

let servicesHdr = document.querySelector(".bottom-content div:nth-child(1) h4");
servicesHdr.textContent = siteContent["main-content"]["services-h4"];

let servicesTxt = document.querySelector(".bottom-content div:nth-child(1) p");
servicesTxt.textContent = siteContent["main-content"]["services-content"];

let productHdr = document.querySelector(".bottom-content div:nth-child(2) h4");
productHdr.textContent = siteContent["main-content"]["product-h4"];

let productTxt = document.querySelector(".bottom-content div:nth-child(2) p");
productTxt.textContent = siteContent["main-content"]["product-content"];

let visionHdr = document.querySelector(".bottom-content div:nth-child(3) h4");
visionHdr.textContent = siteContent["main-content"]["vision-h4"];

let visionTxt = document.querySelector(".bottom-content div:nth-child(3) p");
visionTxt.textContent = siteContent["main-content"]["vision-content"];

//contact

let contactHdr = document.querySelector(".contact h4");
contactHdr.textContent = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelector(".contact p:nth-child(2)");
contactAddress.textContent = siteContent["contact"]["address"];

let contactPhone = document.querySelector(".contact p:nth-child(3)");
contactPhone.textContent = siteContent["contact"]["phone"];

let contactEmail = document.querySelector(".contact p:nth-child(4)");
contactEmail.textContent = siteContent["contact"]["email"];

//footer

let footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent["footer"]["copyright"];

//new changes

let navItems = document.querySelectorAll("nav a");
navItems.forEach(function(element) {
  element.style.color = "green";
});

let navContainer = document.querySelector("nav");

let prependElement = document.createElement("a");
prependElement.textContent = "Jeff";
prependElement.style.color = "hotpink";

let appendElement = document.createElement("a");
appendElement.textContent = "Rocks";
appendElement.style.color = "hotpink";

navContainer.prepend(prependElement);
navContainer.appendChild(appendElement);

//stretch stuff

navContainer.style.borderBottom = "2px dotted black";
servicesTxt.style.color = "hotpink";
visionTxt.style.fontFamily = "Calibri";

navItems.forEach(element => {
  element.style.textDecoraton = "line-through";
});