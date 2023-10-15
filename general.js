function toggleMenuVisibility() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}
function toggleMenu() {
    document.getElementById("menuIcon").classList.toggle("rotate-180");
    document.getElementById("menu").classList.toggle("hidden");
}
function testimonials(element){
    document.getElementById("testimonials").classList.toggle("max-h-[33rem]");
    if (!document.getElementById("testimonials").classList.contains("max-h-[33rem]")){
        document.getElementById("testimonials-background").classList.toggle("absolute");
        document.getElementById("testimonials-background").classList.toggle("sticky");
        document.getElementById("testimonials-background").classList.toggle("-mt-52");
        document.getElementById("testimonials-background").classList.toggle("transition-opacity");
        document.getElementById("testimonials-background").classList.toggle("duration-300");
        document.getElementById("testimonials-background").classList.toggle("opacity-100");
        element.innerHTML="Okay, I'm convinced.";
    }else{
        element.innerHTML="Show more...";
    }
    
}