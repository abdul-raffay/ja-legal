// let $ = jQuery;

var winW;
if (performance.navigation.type == 2) {
    location.reload(true);
}

var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident|Edge\//.test(ua);

$(document).ready(function() {


    winW = $(window).width();
    //alert(winW);
    // -------------------- Home Page Starts --------------------
    if ($('#scroll-page').length) {
        $("#scroll-page").onepage_scroll({
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1000,
            pagination: true,
            updateURL: false,
            touchSensitivity: 15,
            beforeMove: function() {
                if ($(window).width() < 767) {
                    if ($('.white-banner').hasClass('active')) {
                        $('.search .white_bg').show();
                        $('.search .black_bg').hide();
                        $('header .menu-toggle').removeClass('black-menu');

                    } else {
                        $('.search .white_bg').hide();
                        $('.search .black_bg').show();
                        $('header .menu-toggle').addClass('black-menu');
                    }

                }

                $('main section.home-banner:first-child .banner-desc').removeClass('left-animateLight').addClass('top-animateLight');
                $('main section.home-banner:first-child .banner-overlay').removeClass('left-animate').addClass('bottom-animate');

                //if($(window).width() < 767) {
                if (document.querySelector("section.active").classList.contains("white-banner")) {
                    document.querySelector(".logo img").classList.remove("active");
                    document.querySelector(".logo .black-logo").classList.add("active");

                    document.querySelector("footer .copyright").classList.add("active");
                } else {
                    document.querySelector(".logo .black-logo").classList.remove("active");
                    document.querySelector(".logo img").classList.add("active");

                    document.querySelector("footer .copyright").classList.remove("active");
                }
                //}

                if($(window).width() < 767) {
                    if (document.querySelector("section.active").classList.contains("white-banner")) {
                        document.querySelector(".logo .black-logo").classList.remove("active");
                        document.querySelector(".logo img").classList.add("active");
                        
    
                        document.querySelector("footer .copyright").classList.remove("active");
                    } else {
                        document.querySelector(".logo img").classList.remove("active");
                        document.querySelector(".logo .black-logo").classList.add("active");
                        
    
                        document.querySelector("footer .copyright").classList.remove("active");
                    }
                    }

                $('.onepage-pagination li').removeClass('active');
                $('.onepage-pagination li a.active').parent().addClass('active');
            },
            loop: true,
            keyboard: true,
            responsiveFallback: false,
            direction: "vertical"
        });

        // setInterval(function() {
        //     var pageIndex = $('.onepage-pagination li.active').index();
        //     var pagelast = $('.onepage-pagination li:last-child').index();

        //     if(pageIndex == pagelast) {
        //         $('.onepage-pagination li').eq(0).find('a').click();
        //     } else {
        //         $('.onepage-pagination li.active').next().find('a').click();
        //     }
        // }, 5000);

    }

    $('.menu-toggle').on('click', function() {
        $('.searh_menu_icon').toggleClass('menu_open');
        $('.page-overlay').toggleClass('show');
        /*$(".menu-drop").toggleClass('active');
        $(".searh_menu_icon").toggleClass("current");
        $(".menu-toggle").toggleClass("active");*/

    });

    $(document).on('click', '.page-overlay.show', function(){
        console.log(23);
        $('.menu-toggle').click();
    })
    

    var headHeight = $('header').outerHeight();
    // $('.menu-toggle').on('click', function() {
    //     // $(this).toggleClass('active');
    //     // $('.menu-drop').toggleClass('active');

    //     $(".menu-drop li").each(function(i) {
    //         $(this).delay(100 * i).fadeToggle(1000);
    //     });
    // });
    $('.main-menu .accord > a').on('click', function() {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });

    // ---------- Pagination Page Starts ----------
    if ($('.onepage-pagination li').length) {
        var liLength = $('.onepage-pagination li').length;
        for (var i = 0; i < liLength; i++) {
            var sectionIndex = $('section').eq(i).find('.title-def h2').text();
            $('.onepage-pagination li').eq(i).find('a').text(sectionIndex);
        }
    }
    // ---------- Pagination Page Ends ----------

    $('.onepage-pagination li a.active').parent().addClass('active');

    $('.quit').on('click', function() {
        $('.disclaimer, .page-overlay').fadeOut();
    });

    $('.closeBtn').on('click', function() {
        $('.thankyou, .page-overlay').fadeOut();
    });

    $('.godownArrow.homepage').on('click', function() {

        if ($('.onepage-pagination li:last-child').hasClass('active')) {
            $('.onepage-pagination li').eq(0).find('a').click();
        } else {
            $('.onepage-pagination li.active').next().find('a').click();
        }
    });

    // -------------------- Home Page Ends --------------------

    $(".matters-wrp .block").each(function() {
        var _this = $(this);
        len = $(_this).find('.article-para > p, .article-hover > p').text().length;
        str = $(_this).find('.article-para > p, .article-hover > p').text().substr(0, 150);

        hoverLen = $(_this).find('.article-hover > p').text().length;
        hoverStr = $(_this).find('.article-hover > p').text().substr(0, 150);

        lastIndexOf = str.lastIndexOf(" ");
        hoverLastIndexOf = hoverStr.lastIndexOf(" ");
        if (len > 150) {
            $(_this).find('.article-para > p').text(str.substr(0, lastIndexOf) + '…');
        }
        if (hoverLen > 150) {
            $(_this).find('.article-hover > p').text(hoverStr.substr(0, hoverLastIndexOf) + '…');
        }
    });

    // -------------------- Character limit Starts --------------------
    // Configure/customize these variables.
    var showChar = 110; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more +";
    var lesstext = "Read less -";


    $('#represent .matters-wrp .block, #keydeals .matters-wrp .block').each(function() {

        var content = $(this).find('p').text();
        if (content.length > showChar) {

            $(this).find('a').eq(0).remove();

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = '<p>' + c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent">' + h + '</span></p>&nbsp;&nbsp;<a href="" class="linkword mar-top-30 morelink">' + moretext + '</a></span>';
            $(this).append('<div></div>');
            $(this).find('div').html(html);
            $(this).find('p').eq(0).remove();
        }

    });

    $(".morelink").click(function() {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parents('.block').find('.moreellipses').toggle();
        $(this).parents('.block').find('.morecontent').toggle();
        return false;
    });

    // -------------------- Character limit Ends --------------------

    // -------------------- Team Page Starts --------------------
    if (screen.width > 767) {
        if ($('.team-section').length) {
            var formWidth = $('.team-section .banner-desc').outerWidth();
            var posLeft = $('.team-section .banner-desc').offset().left;
            console.log(formWidth, posLeft);
            console.log('t ' + formWidth + posLeft);
            $('.banner-overlay').css({ 'width': formWidth + posLeft });
        }
        setTimeout(function() {
            $('.banner-overlay').addClass('active');
        }, 300)
    }

    $(document).on('click', '.profile-sec li', function() {
        window.location.href = $(this).find('a').attr('href');
    });

    var winHeight = $(window).height() - $('header').outerHeight();
    $('.vertical-scroller').css('height', winHeight);

    $('.people-form select[name]').on('change', function() {
        var selectedVal = $(this).val();
        var fieldselect = "." + $(this).attr('name');
        $('.info-btn' + fieldselect).find('a').text(selectedVal);

        $('.team-section .result-found').addClass('active');
        $('.team-section .result-found .info-btn' + fieldselect).show();
        $('.team-section .result-found .resul-tno').show();
    });
    //
    // geographyData = {
    //     "India": ["Mumbai", "Pune"],
    //     "Cyprus": [],
    //     "Spain": ["Madrid", "Valencia","Palma"]
    // }

    // $(".people-form select[name='category-select']").on('change', function() {
    //     var selectedVal = $(this).val();
    //     if (geographyData[selectedVal].length > 0) {
    //         $("select[name='city-select']").parent().show();
    //         $("select[name='city-select']").html("");
    //         $("select[name='city-select']").append("<option value=''>Select by City</option>");
    //         for (var i = 0; i < geographyData[selectedVal].length; i++) {
    //             $("select[name='city-select']").append("<option value='" + geographyData[selectedVal][i] + "'>" + geographyData[selectedVal][i] + "</option>");
    //         }
    //         //alert(geographyData[selectedVal].length);
    //     } else {
    //         $("select[name='city-select']").parent().hide();
    //     }
    // setTimeout(function(){ 
    //     $('.result-found .info-btn').each(function () {
    //         if ($(this).find('a').text() == "") {
    //             $(this).hide();
    //         }
    //     });
    // }, 1000);

    //});


    $('.close-icon').on('click', function() {
        $(this).parent().hide().find('a').html("");
        if ($(this).parent().hasClass('sector-select')) {
            $(".people-form select[name='sector-select']").prop("selectedIndex", 0);
        } else if ($(this).parent().hasClass('category-select')) {
            $(".people-form select[name='category-select']").prop("selectedIndex", 0);
        } else if ($(this).parent().hasClass('city-select')) {
            $(".people-form select[name='city-select']").prop("selectedIndex", 0);
        } else if ($(this).parent().hasClass('dateFromTo')) {
            var datesFrom = $("#from");
            var datesTo = $("#to");
            datesFrom.val('');
            datesTo.val('');

            datesFrom.datepicker("option", {
                minDate: null,
                maxDate: null
            });
            datesTo.datepicker("option", {
                minDate: null,
                maxDate: null
            });
            $('.fromDate, .toDate').text("");
        }
        $("#people-listing-form").submit();
    });


    if ($('.team-section .people-found .info-btn a').text() == "") {
        $('.team-section .result-found .info-btn, .team-section .result-found .resul-tno').hide();
    } else {
        $('.team-section .result-found .info-btn, .team-section .result-found .resul-tno').show();
    }

    if ($(".vertical-scroller").length) {
        // var resultHeight = $('.result-found').outerHeight();
        // var totalHeight = headHeight+resultHeight;
        // var rhsHeight = $('.people-found').css({'height':'calc(100vh -' + totalHeight + 'px)'});
        $(".vertical-scroller").mCustomScrollbar({
            axis: "y",
            setHeight: 75 + 'vh',
            scrollbarPosition: "outside",
            scrollEasing: "easeOut"
                //     callbacks:{
                //         onImageLoad: function(){
                //             console.log(1111);
                //         }
                //   }
        });
    }

    // $('.vertical-scroller .mCSB_dragger').scroll( function(){
    //     $('.vertical-scroller .hideme').each( function(i){
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $('.profile-sec').scrollTop() + $('.profile-sec').height();
    //         if( bottom_of_window > bottom_of_object ){
    //             $(this).animate({'opacity':'1'},500);
    //         }
    //     });
    // });

    $('.people-form .name-col input').on('click', function() {
        $(this).parent().find('.search_suggestion').slideToggle();
    });
    // -------------------- Team Page Ends --------------------


    // -------------------- Team info Page Starts --------------------
    
    if ($(window).width() > 1024) {
        $('.awards-matter .block').eq(2).nextAll().hide();
    } else {
        $('.awards-matter .block').eq(1).nextAll().hide();
    }
    $(document).on('click', '.awards-matter .head-txt .download, .awards-matter .head-txt .download', function() {
        $('.awards-matter .block').eq(2).nextAll().slideToggle();

        if ($(this).find('a').text() == 'View More') {
            $(this).find('a').text('View Less');
        } else {
            $(this).find('a').text('View More');
        }
    });
    // -------------------- Team info Page Ends --------------------



    // -------------------- banking finance Page Starts --------------------
    if ($("#banking_finance .profile-sec").length) {
        $("#banking_finance .profile-sec").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true
        });
    }
    // -------------------- banking finance Page Ends --------------------


    // -------------------- banking finance Page Ends --------------------
    /*if ($(".office-slider").length) {
        $(".office-slider").owlCarousel({
            items: 4,
            loop: false,
            nav: false,
            dots: true,
            margin: 50,
            responsive: {
                320: {
                    items: 1,
                },
                481: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 3,
                },
                1280: {
                    items: 4,
                }
            }
        });
    }*/
    // -------------------- banking finance Page Ends --------------------

    // var headheight = $('header').outerHeight();
    // $('main').css('padding-top', headheight);


    /*legacy History section tabs */
    $('#history .years_row ul li').on('click', function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('#history .history_content .year_tab_content').removeClass('current');
        $('#history .history_content .year_tab_content').eq(index).addClass('current');
    });


    // ---------- Thought Leader Page Starts ----------
    $('.thought-leader .block').each(function() {
        var articleHTML = $(this).find('.article-wrp').prop('outerHTML');
        $(this).find('.article-hover').prepend(articleHTML);

    });

    // Date Picker Starts
    /* if($("#from").length) {
        var dateFormat = "mm/dd/yy",
          from = $( "#from" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 1
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });

        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }

          return date;
        }
    } */

    if ($('#from').length) {
        var monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        $("#from").datepicker({
            dateFormat: 'mm/dd/yy',
            numberOfMonths: 1,
            // appendText: "(yyyy-mm-dd)",
            onSelect: function(selected) {
                var dt = new Date(selected);
                dt.setDate(dt.getDate() + 1);
                $("#to").datepicker("option", "minDate", dt);

                var mydate = $(this).datepicker('getDate').getDate();
                var mymonth = $(this).datepicker('getDate').getMonth() + 1;
                var myyear = $(this).datepicker('getDate').getFullYear() % 100;
                //console.log(mydate + " " +monthNamesShort[mymonth - 1] + " '" + myyear);
                $('.dateFromTo').show();
                $('.dateFromTo .fromDate').text(mydate + " " + monthNamesShort[mymonth - 1] + " '" + myyear);
                $(this).closest('form').submit();
            }
        });
        $("#to").datepicker({
            dateFormat: 'mm/dd/yy',
            numberOfMonths: 1,
            onSelect: function(selected) {
                var dt = new Date(selected);
                dt.setDate(dt.getDate() - 1);
                $("#from").datepicker("option", "maxDate", dt);

                var mydate = $(this).datepicker('getDate').getDate();
                var mymonth = $(this).datepicker('getDate').getMonth() + 1;
                var myyear = $(this).datepicker('getDate').getFullYear() % 100;
                //console.log(mydate + " " + monthNamesShort[mymonth - 1] + " '" + myyear);
                $('.dateFromTo').show();
                $('.dateFromTo .toDate').text(mydate + " " + monthNamesShort[mymonth - 1] + " '" + myyear);
                $(this).closest('form').submit();
            }
        });
    }
    $(".people-form .date-img").on("click", function(e) {
        $(this).datepicker('show');
    });
    // Date Picker Ends

    // ---------- Thought Leader Page Ends ----------


    // ---------- Alumni Page Starts ----------
    /* if($('.masonary').length) {
        $('.masonary').masonry({
            itemSelector: '.grid-item',
            fitWidth: true
        });
    } */

    if ($(".update-slider").length) {
        $(".update-slider").owlCarousel({
            items: 3,
            loop: false,
            nav: false,
            dots: true,
            margin: 50,
            responsive: {
                320: {
                    items: 1,
                },
                481: {
                    items: 2,
                    margin: 20
                },
                768: {
                    items: 3,
                }
            }
        });
    }


    $('.tab-wrp > ul li a').on('click', function() {
        var _this = $(this);
        setTimeout(function(){
        headHeight = $('header').outerHeight(); 
        var tabIndex = $(_this).attr('data');
        var scrollTo = $('#' + tabIndex).offset().top
        if (!$(_this).closest('.tab-wrp').hasClass('active')) {
            // console.log(2);
            scrollTo = scrollTo - $(_this).closest('.tab-wrp').height() - 80;
        }
        
        var tabHeight = $(_this).closest('.tab-wrp').outerHeight();
        console.log(scrollTo, headHeight, tabHeight);
        $('html, body').animate({ scrollTop: scrollTo - headHeight - tabHeight}, 1000);

        $('.tab-wrp li a').removeClass('active');
        $(_this).addClass('active');
        }, 100);
    });
    // ---------- Alumni Page Ends ----------


    // ---------- Alumni Page Ends ----------
    $('.accord-wrp li').on('click', function() {
        $('.accord-wrp li .accord-para').slideUp();
        $('.accord-wrp li .angle').removeClass('active');

        if (!$(this).find('.accord-para').is(':visible')) {
            $(this).find('.accord-para').slideDown();
            $(this).find('.angle').addClass('active');
        } else {
            $(this).find('.accord-para').slideup();
        }
    });
    // ---------- Alumni Page Ends ----------


    // ---------- News Page Starts ----------
    $('.all-filter li').on('click', function() {
        $('.all-filter li').removeClass('active');
        $(this).addClass('active');
    });

    /*  var _videoUrl = $('.common_model .model_body').find('.video_dtl iframe').attr('src');
      $(document).on('click', '.matters-wrp  .img-wrp', function(){
        $('.common_model .model_body').find('.video_dtl iframe').attr('src', _videoUrl);
          var _activTab = $(this).parents('.block').attr('data-rel');
          if(_activTab){
              $('.common_model').fadeOut();
              $('.common_model').offset({top:'60%'})
              $(`#${_activTab}`).fadeIn(500);
              $('.white_overlay').fadeIn(1000);
              $('.common_model .model_body').find('.audio_control').fadeIn('slow');
          }
      });

      var music = document.getElementById('music');
      var duration = music.duration;
      $('.common_model .back_btn a').on('click', function(){
      $('.common_model .model_body').find('.video_dtl iframe').attr('src', '');
           $(this).parents('.common_model').fadeOut();
           $('.white_overlay').fadeOut();

          $(this).parents('.common_model').find('.audio_control').addClass('fixedToBottom');
          $('.audio_control.fixedToBottom').insertAfter('.white_overlay');
          $('.audio_control.fixedToBottom').animate({width:'600px', position:'fixed', bottom:'50px', height:'80px'}, 'slow');
        })

     $(document).on('click','.audio_control.fixedToBottom .close', function(){
          $(this).parent('.audio_control').fadeOut();
          setTimeout(()=>{
               music.pause()
              music.currentTime = 0;
          }, 1000);
          $(this).parent('.audio_control').appendTo('.common_model .model_body');
          $('.common_model .model_body').find('.audio_control').removeClass('fixedToBottom');
          $('.common_model .model_body .audio_control').removeAttr('style');
      })*/
    // ---------- News Page Ends ----------


    // ---------- Form Validatins Starts ----------
    $('.column').each(function() {
        var placeVal = $(this).find('input').not("input[type='hidden']").attr('placeholder');
        var errorName = 'Please Enter Proper ' + placeVal;
        $(this).find('.error').text(errorName);
    });

    $('input[type="text"]').on('input', function() {
        letters($(this))
    });

    $('input[type="email"]').on('input', function() {
        email($(this))
    });

    $('input[name="contact"]').on('input', function() {
        lengthCheck($(this), 16);
    });
    $('.contactNumber').on('input', function() {
        lengthCheck($(this), 16);
    });

    $('.btn-wrp input[type="submit"]').on('click', function() {
        if ($('.column .error').is(':visible')) {
            return false;
        }
    });

    if ($('.formFields').length) {
        $("input[type=text], input[type=email], input[type=password], input[type=number], input[type=tel], textarea").addPlaceholder();
    }
    // ---------- Form Validatins Ends ----------

    if ($('#represent').find('.block').length < 3) {
        $('#represent').find('.download').hide();
    }

    /*AWARDS PAGE BOX WRAPPING*/
    //awardsMasonary();

    $(window).resize(function() {

      if ($(".view .view-slider").length) {
        winW = $(window).width();
        if(winW > 1024){
          $(".view .view-slider").owlCarousel('destroy');
          $(".view .view-slider").owlCarousel({
            items:3,
            loop: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            margin: 30
          });
        }

        if(winW <= 1024 && winW > 640){
          $(".view .view-slider").owlCarousel('destroy');
          $(".view .view-slider").owlCarousel({
            items:2,
            loop: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            margin: 30
          });
        }
        if(winW <= 640){
          $(".view .view-slider").owlCarousel('destroy');
          $(".view .view-slider").owlCarousel({
            items:1,
            loop: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            margin: 30
          });
        }
      }

        //awardsMasonary();
        if (screen.width > 767) {
            setTimeout(function() {
                if ($('.team-section').length) {
                    var formWidth = $('.team-section .banner-desc').outerWidth();
                    var posLeft = $('.team-section .banner-desc').offset().left;
                    $('.banner-overlay').css({ 'width': formWidth + posLeft });
                }
            }, 100);
        }

        var contentArea = $('.header-blue').outerWidth();
        //console.log(contentArea + "total content area")
        setTimeout(function () {
            var blueArea = $('.banner-overlay').outerWidth();
            //  console.log(blueArea + "blue area")
            var totalareaUse = contentArea - blueArea;
            //console.log(totalareaUse + "total area")
            var headHeight = $('header').outerHeight();
            $('nav').append('<div class="elebgWhite"></div>');
            $('.elebgWhite').width(totalareaUse);
            $('.elebgWhite').height(headHeight);
        }, 500);
    });


    $('.ourAwards .awardBox .award_caption .txt_link_btn').on('click', function() {
        var THIS = $(this);
        THIS.parent('.more_content_block').toggleClass('active');
        $(this).text(function(i, text) {
            return text === "View more" ? "Show Less" : "View more";
        });
    });

    $('.sharelink').on('click', function() {
        $(this).parent('.download').find(".social-links").addClass('show');
    });

    $('.social-links .closeBtn').on('click', function() {
        $(this).parent().removeClass('show');
    });

    $(document).on("click", "a.fileDownloadPromise", function() {
        $.fileDownload($(this).attr('href'))
            .done(function() { alert('File download a success!'); })
            .fail(function() { alert('File download failed!'); });
        alert(92);
        return false; //this is critical to stop the click event which will trigger a normal file download
    });

    $('.search a').on('click', function() {
        //alert(9)
        $('body').addClass('overFlowHidn');
        $('#searchWrap').slideDown();
        $('.input_search').focus();
    });

    $('.closeBtn').on('click', function() {
        //alert(9)
        $('body').removeClass('overFlowHidn');
        $('#searchWrap').slideUp();
    });


    //Upload cv validation
    $('.join-form input[type="submit"]').on('click', function(){
        if ($('#showFilename').text() == '') {
            $('.input_file').find('.error').show().text('Please upload document');
        }
        else {
            $('.input_file').find('.error').hide().text('Please upload document');
        }
    });

    //People page similar profiles full block clickable
    $('.view-slider .view-wrp').on('click',function(){
        var thisHref = $(this).find('a').attr('href');        
        window.location.href = thisHref;
    });


    /* For IE date Picker Position fix on IE */
     if (isIE) {
         $('.hasDatepicker').on('click', function(){
             var scrollPos = $(window).scrollTop();
             var _thisPos = $(this).offset().top - scrollPos;
             //var winHeight = $(window).height();
             var datePickerWidgetHeight = $('.ui-datepicker').length ? $('.ui-datepicker').height() : 0;
             var datepickerPos = $('.ui-datepicker').length ? parseInt($('.ui-datepicker').css('top')) : 0;
             if (datepickerPos > _thisPos){
                 $('.ui-datepicker').css('top', (datepickerPos - scrollPos - datePickerWidgetHeight) + _thisPos + 5);
             }
         });
    }
    /* For IE date Picker Position fix on IE End */
});


$(window).on('load', function() {
    $('#scroll-page').css({ top: 0 });
    $('.loader').fadeOut();
    setTimeout(function() {
        $('body').addClass('animate');
    }, 100);

    //awardsMasonary();
    if ($('.masonary').length) {
        $('.masonary').masonry({
            itemSelector: '.grid-item',
            fitWidth: true
        });
    }
    //$('#searchWrap').css({top:$('header').outerHeight()})

    /* if ($('#focus-sectors').length) {
        setTimeout(function(){
            $('html, body').animate({ scrollTop: $('#focus-sectors').offset().top});
        }, 3000);
    } */
    var urlPara = window.location.href.split("#");
    if (urlPara[1] == "focus-sectors") {
        setTimeout(function () {
            $('html, body').animate({ scrollTop: $('#focus-sectors').offset().top });
        }, 3000);
    }

    if ($(".careers-slider").length) {
        $(".careers-slider .view-slider, .office-slider").owlCarousel({
            items: 2,
            loop: false,
            nav: false,
            dots: true,
            autoHeight: true,
            responsive: {
                320: {
                    items: 1
                },
                481: {
                    items: 1
                },
                980: {
                    items: 2,
                    margin: 20
                }
            }
        });
    }

    if ($(".view .view-slider").length) {

      if (winW > 1024) {
        $(".view .view-slider").owlCarousel({
          items: 3,
          loop: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          nav: false,
          dots: true,
          margin: 30
        });
      }

      if (winW <= 1024 && winW > 640) {
        $(".view .view-slider").owlCarousel({
          items: 2,
          loop: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          nav: false,
          dots: true,
          margin: 30
        });
      }
      if (winW <= 640) {
        $(".view .view-slider").owlCarousel({
          items: 1,
          loop: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          nav: false,
          dots: true,
          margin: 30
        });
      }
    }

    $('.practices .result-found .info-btn').each(function(){
        if($(this).find('a').attr('href')=="") {
            $(this).find('a').removeAttr('href');
        }
    });

});

if($(".team-inner .tab-wrp ul li").length==0){
    $('.team-inner .tab-wrp .download').css('top','25%');
}

$(document).on('scroll', function () {
    if ($(this).scrollTop()> 0 && $('header').hasClass('fixed')) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }

});

if ($('.tab-wrp').length) {
    var tabOffset = $('.tab-wrp').offset().top;
    var tabOffset_left = $('.tab-wrp').offset().left;

    $(document).on('scroll', function() {
        var y = $(this).scrollTop();
        var headHeight = $('header').outerHeight();
        //console.log(headHeight)
        if (y > 0 && $('header').hasClass('fixed')) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        //console.log(tabOffset, y);
        if (y > tabOffset + 150 ) {
            $('.tab-wrp').addClass('active');
            $('.tab-wrp').css({ 'top': headHeight });
        } else {
            $('.tab-wrp').css({ 'top': '' });

            $('.tab-wrp').removeClass('active');
        }
    });
}

if ($('.wrapper.flex-wrp').length) {
    if ($(window).width() > 767) {
        var contentArea = $('.header-blue').outerWidth();
        //console.log(contentArea + "total content area")
        setTimeout(function() {
            var blueArea = $('.banner-overlay').outerWidth();
            //  console.log(blueArea + "blue area")
            var totalareaUse = contentArea - blueArea;
            //console.log(totalareaUse + "total area")
            var headHeight = $('header').outerHeight();
            $('nav').append('<div class="elebgWhite"></div>');
            $('.elebgWhite').width(totalareaUse);
            $('.elebgWhite').height(headHeight);
        }, 2500);

        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 20) {
                $('.elebgWhite').addClass('overlapSearch');
            } else {
                $('.elebgWhite').removeClass('overlapSearch');
            }
        });
    }
}

// ---------- Form Validatins Functions Starts----------

validateMobileNo();

$(document).on('keypress keyup', ".num-only", function (e) {
    if (validateMobileNo($(this).val()) == false) {
      $(this).next().show();
    } else {
      $(this).next().hide();
    }
  });

  function validateMobileNo(sMobile) {
    var filter = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  
    if (filter.test(sMobile)) {
      return true;
    } else {
      return false;
    }
  }

  $(document).on('keypress keyup', ".num-only", function (e) {
    if (validateMobileNo($(this).val()) == false) {
      $(this).next().show();
    } else {
      $(this).next().hide();
    }
  });


  $(document).on('keypress keyup', "input.num-only, .pinNum", function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      return false;
    }
  });

  

function letters(input) {
    var inputVal = input.val();
    var reg = /^[a-zA-Z ]+$/;

    if (!reg.test(inputVal) && inputVal.length > 0) {
        input.parent().find('.error').show();
    } else {
        input.parent().find('.error').hide();
    }
}

function email(input) {
    var inputVal = input.val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!reg.test(inputVal) && inputVal.length > 0) {
        input.parent().find('.error').show();
    } else {
        input.parent().find('.error').hide();
    }
}

function lengthCheck(input, n) {
    var inputVal = input.val();

    if (!(inputVal.length == n) && inputVal.length > 0) {
        input.parent().find('.error').show();
    } else {
        input.parent().find('.error').hide();
    }
}




$(document).on('keypress keyup', ".inputChar", function(e) {
    var thisVal = $(this).val();
    var regOne = new RegExp("^[a-zA-Z]+$");
    var regex = new RegExp("^[a-zA-Z'. ,-]+$");
    var kCd = e.keyCode || e.which;
    if ($(window).width() < 1280) {
        if (kCd == 0 || kCd == 229) {
            kCd = getKeyCode($(this).val());
            if (thisVal.length == 1) {
                if (!(regOne.test(kCd))) {
                    $(this).val('');
                    return false;
                }
            }
            if (!regex.test(kCd)) {
                $(this).val($(this).val().substr(0, $(this).val().length - 1));
                return false;
            }
        }
    }
    var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (thisVal.length == 0) {
        if (!(regOne.test(key))) {
            return false;
        }
    }

    if (!(regex.test(key) || (e.charCode == 0))) {
        return false;
    }

    if ($(this).val().length == 1) {
        $(this).next().show();
    } else {
        $(this).next().hide();
    }

});


// ---------- Form Validatins Functions Starts----------

/*FLEXBOX CUSTOM MASONARY */
function awardsMasonary() {
    if ($(window).width() > 480) {
        var totalHeight = 0;
        $(".awardBox li").children().each(function() {
            totalHeight = totalHeight + $(this).outerHeight(true);
        });
        var _windWD = $(window).width();
        if (_windWD > 767) {
            totalHeight = parseInt(totalHeight * 2 / 5);
        } else {
            totalHeight = parseInt(totalHeight * 2 / 3);
        }
        $('.awardBox').height(totalHeight)
    }
}

'use strict';
(function(document, window, index) {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function() { input.classList.add('has-focus'); });
        input.addEventListener('blur', function() { input.classList.remove('has-focus'); });
    });
}(document, window, 0));

$(window).on('scroll', function() {
    if (winW >= 768) {
        if ($('.tab-wrp').hasClass('active')) {
            var downloadLeft = $('.tab-wrp.active ul').css('margin-left');
            $('.tab-wrp.active .download').css({ 'right': parseInt(downloadLeft) + 20 });
        } else {
            $('.tab-wrp .download').removeAttr('style');
        }
    }
});