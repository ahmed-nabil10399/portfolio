$(document).ready(function () {

    // scroll top links
    $('nav .links ul li a').click(function (e) {
        
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        },100)
    });

// ////////////////////////////////////////////////////////////////////////////

    // add class active >> nav>a >> links
    $("nav .links ul li a").click(function (e) {

        e.preventDefault();

        $(this).parent().addClass('active').siblings().removeClass('active')
    });

// //////////////////////////////////////////////////////////////////////////

        // scroll window >> nav 
        $(window).scroll(function () {
            if($(window).scrollTop() >= 200) {
                $("nav").css({
                    'background': 'rgba(20,20,20,.7)',
                    'padding': '10px 0',
                    'box-shadow': '0px 0 5px #333',
                    'color': "var(--my-color-hover)"
                })
                $('nav .logo h2').css('text-shadow','10px 7px 5px var(--my-color-hover)')
                $('nav .logo h2').css('color','var(--my-color-hover)')
            } else {
                    $("nav").css({
                        'background': 'linear-gradient(115deg, rgba(164,93,190,1) 44%, rgba(68,42,125,1) 100%)',
                        'padding': '20px 0',
                        'box-shadow': 'none',
                        'color': "#FFF"
                    })
                    $('nav .logo h2').css('text-shadow','10px 7px 5px #999');
                    $('nav .logo h2').css('color','#fff')
                };
            // slide down button 
                if($(window).scrollTop() > 500){
                    $('.scroll-top').fadeIn(500);
                } else {
                    $('.scroll-top').fadeOut(500)
                }
        });

// toggle menu 
    $('nav .toggle-links').click(function () {
        $('nav ul').toggleClass('toggle-active open');
        // $('nav ul').toggleClass('')
    })
    $(".toggle-links").click(function () {

        // add opacity(0) to for span tow 
        $("span.tow").toggleClass('opacitySpan');

        // add rotate (40deg) to for span one
        $("span.one").toggleClass("rotateSpan1");

        // add rotate (140deg) to for span there
        $("span.there").toggleClass("rotateSpan3");
    });

// ############################################################

// /////////////////////////////////////////////////////////////////////////////////

        // scroll top >> contact
        $('header .title-right .info .contact a').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).data('contact')).offset().top
            },100)
        });

// //////////////////////////////////////////////////////////////////////////////////

        // scroll top icon>header to >> about 
        $('header .title-right .scroll').click(function () {
            $('html, body').animate({
                scrollTop: $(window).height()
            },100)
        });

// /////////////////////////////////////////////////////////////////////////////////////////

    // venobox
    $(document).ready(function(){
        $('.venobox').venobox({
            closeBackground:'var(--my-color)', // Close button background colo
            spinner:'cube-grid', // Preloader type 
            spinColor:'var(--my-color)', // Preloader color
            share: ['download']
        }); 
    });

// //////////////////////////////////////////////////////////////////////////////////////

    // scrolltop >> up 
    $('.scroll-top').click(function () {
        $('body, html').animate({
            scrollTop:0
        },500)
    });

// //////////////////////////////////////////////////////////////////////////////////////////

    // typing animation script 
    // typing1 header
    var typed = new Typed (".typing", {
        strings: ["Designer", "Frontend Developer"],
        typeSpeed:50,
        backSpeed:70,
        loop:true
    });
    // typing2 about
    // var typed = new Typed (".typing2", {
    //     strings: ["portfolio"],
    //     typeSpeed:200,
    //     backSpeed:60,
    //     loop:true
    // });

//  /////////////////////////////////////////////////////////////////////////////////////////////

    // start setting 
    // div settaing
    let   Settaing = document.querySelector(".settaing");
    // div icon settaing
    let myDivsetting = document.querySelector(".icon-setting");
    // this icon (i)
    let mysettingIcon = document.querySelector(".icon-setting i");

    myDivsetting.onclick = function () {
        // toggle class left >> ".icon-setting"
        this.classList.toggle("left");
        // toggle class open >> settaing
        Settaing.classList.toggle("open");
        // togglr class fa-spin >> i
        mysettingIcon.classList.toggle("fa-spin");
    };

    // //////////////
//chek if there`s local storage color option 
let mainColor = localStorage.getItem("color_option");

if (mainColor != null ) { 
    document.documentElement.style.setProperty('--my-color-hover', mainColor);

    // remove class active  from all colors list item
    document.querySelectorAll(".setting-ul li").forEach(element => {

        element.classList.remove("active");

        if (element.dataset.color === mainColor ) {
            // add active class
            element.classList.add("active");
        }
    })
};
// switch colors
const colorLi = document.querySelectorAll(".setting-ul li");

//loop on all list items 
    colorLi.forEach(li => {
        
        //click on every list item 
        li.addEventListener("click", (e) => {
            
            //set color on root 
            document.documentElement.style.setProperty('--my-color-hover', e.target.dataset.color);

            // set color on local storage
            localStorage.setItem("color_option", e.target.dataset.color)

            handleActive(e);
        });
    })

    function handleActive (ev) {
        // remove active class 
        ev.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // add class active
        ev.target.classList.add("active");
    };

// /////////////////////////////////////////////////////////////////////////////////////

    // width skills > span
    let allSkills = document.querySelectorAll(".skills .info .content .progres span");
    allSkills.forEach(e => {
        e.style.width = e.dataset.progress;
    });
// ////////////////////////////////////////////////////////////////////////////

    // wow 
    new WOW().init()
})
