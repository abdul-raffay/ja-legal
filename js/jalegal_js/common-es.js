"use strict";

// console.log('CALLED 123 456');
// let d = document;
window.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector(".menu-toggle").addEventListener("click", function() {
        document.querySelector(".menu-toggle").classList.toggle("active");
        document.querySelector(".menu-drop").classList.toggle("active");
        document.querySelector(".searh_menu_icon").classList.toggle("current");
        var liArray = document.querySelectorAll(".menu-drop ul li"); // li_array.forEach(x => {
        //     // x.classList.toggle("right-animateLight");
        // });
        // [...liArray].map(x => {
        //     // x.classList.toggle("right-animateLight");
        //     // x.style.transform = "translateX(0)";
        //     x.classList.add("active");
        //     console.log(x);
        // });

        var homeBannerList = document.querySelectorAll(".home-banner");
        for (var i = 0; i < homeBannerList.length; i++) {
            homeBannerList[i].classList.toggle("move-left");
        }
    });
});
window.addEventListener("load", function() {
    // ---------- Menu Accordion Starts ----------
    // if(document.querySelectorAll(".accord a").length) {
    //     var liHeight = document.querySelector(".accord a").offsetHeight;
    //     document.querySelector(".accord").setAttribute("style", "height:" + liHeight +"px");
    //     document.querySelector(".accord").addEventListener("click", (e) => {
    //         document.querySelector(".accord").classList.toggle("active");
    //         document.querySelector(".accord").setAttribute("style", "height: inherit");
    //         document.querySelector(".accord ul").classList.toggle('active');
    //     });
    // }
    // if(document.querySelector('.onepage-pagination a').classList.contains('active')) {
    // }
    // window.addEventListener('scroll', (e) => {
    //     console.log('dead');
    //     if(document.querySelector("section.active").classList.contains("white-banner")) {
    //         console.log('dead');
    //         document.querySelector(".logo img").classList.remove("active");
    //         document.querySelector(".logo .black-logo").classList.add("active");
    //     }
    // });
    // ---------- Menu Accordion Ends ----------
    // ---------- Header Starts ----------
    // if(window.outerWidth > 767) {
    var headHeight = document.querySelector('header').offsetHeight;

    if (document.querySelector('header').classList.contains('fixed') || window.innerWidth < 768) {
        document.querySelector('main').style.top = headHeight + 'px';
    }

    if (document.querySelectorAll('.people-found').length) {
        document.querySelector('.people-found').style.top = headHeight + 'px';
    } // }
    // ---------- Header Ends ----------
    // if(document.querySelectorAll('.tab-wrp').length) {
    //     document.querySelector('.tab-wrp').addEventListener('click', (e) => {
    //         let tabElement = e.target;
    //         // let tabAttr = tabElement.getAttribute('data');
    //         let tabAttr = tabElement.indexOf();
    //         console.log(tabAttr);
    //         let tabOffset = document.querySelector('#' + tabAttr).offsetTop - headHeight;
    //         // console.log(document.querySelector('#' + tabAttr).offsetTop);
    //         // querySelector('html').scrollTop = 500;
    //         // window.scrollTo(0, 1000, 'smooth');
    //         window.scrollTo({top: tabOffset, left: 0, behavior: 'smooth' });
    //         [...document.querySelectorAll('.tab-wrp a')].map(x => {
    //             x.classList.remove("active");
    //         });
    //         tabElement.classList.add("active");
    //     });
    //     [...document.querySelectorAll(".onepage-pagination a")].map(x => {
    //         x.addEventListener("click", () => {
    //             console.log('dead');
    //         });
    //     });
    // }
    // function myFunctoin() {
    //     // alert("hello");
    //     // d.getElementById()
    //     console.log(document.querySelector(".menu-drop"));
    //     // if(document.querySelector(".menu-drop"))
    //     document.querySelector(".menu-toggle").classList.toggle("active");
    //     document.querySelector(".menu-drop").classList.toggle("active");
    // }
    // setTimeout(() => {
    //     // document.querySelector('.onepage-pagination li.active').nextSibling.find('a').click();
    //     [...document.querySelectorAll('.onepage-pagination li')].map((x) => {
    //         var liActive = x.classList.contains('active').nextSibiling.classList.add('dead');
    //         console.log(liActive);
    //     });
    // }, 2000);
    // ---------- Publications Page Starts ----------
    // let accordHeight = [];
    // [...document.querySelectorAll('.accord-para')].map(x => {
    //     let height = x.offsetHeight;
    //     accordHeight.push(height);
    //     x.style.height = 0;
    // });
    // [...document.querySelectorAll('.accord-wrp > li > p')].map((x,i) => {
    //     x.addEventListener('click', (e) => {
    //         const this_ = e.target;
    //         [...document.querySelectorAll('.accord-para')].map(x => {
    //             x.setAttribute('style', 'height: 0');
    //         });
    //         this_.parentNode.querySelector('.accord-para').setAttribute('style', 'display: block; height: '+ accordHeight[i] + 'px');
    //         [...document.querySelectorAll('.accord-wrp > li > p span')].map(x => {
    //             x.classList.remove('active');
    //         });
    //         this_.querySelector('span').classList.add('active');
    //     });
    // });
    // if(document.querySelectorAll('.accord-wrp > li > p').length) {
    //     document.querySelector('.accord-wrp > li > p').click();
    // }
    // ---------- Publications Page Ends ----------
    // ---------- Careers Page Starts ----------

    var puzzleList = document.querySelectorAll(".puzzle li");
    for (var i = 0; i < puzzleList.length; i++) {
        setInterval(function () {
            puzzleList[i].classList.add('active');
        }, 1000);
    }
    // ---------- Careers Page Ends ----------
    // ---------- Home Page Starts ----------

    var sectionBannerList = document.querySelectorAll("section.home-banner");
    for (var i = 0; i < sectionBannerList.length; i++) {
        
        var imgAttr = sectionBannerList[i].getAttribute('img-url');
        //console.log(imgAttr);

        if (imgAttr) {
            var bgImgList = document.querySelectorAll(".bg-img img");
            for (var j = 0; j < bgImgList.length; j++) {
                bgImgList[j].setAttribute('src', imgAttr);
            }
        }
    }
     // ---------- Home Page Ends ----------

}); // window.addEventListener('scroll', (e) => {
//     _this = e.target;
//     var y = $(_this).scrollTop();
//     // console.log(y);
//     if(y > 0) {
//         document.querySelector('header').classList.add('active');
//     } else {
//         document.querySelector('header').classList.remove('active');
//     }
// });