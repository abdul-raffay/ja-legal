// "use strict";

// $("#selectGeography").on('change',function(){
//   if(locationData){
//     var str='<option value="">Select by City</option>'
//     var locationVal=$(this).val()
//     var cityObj=locationData.find(function(item){
//       return item.name==locationVal
//     })
//     if(cityObj){
//       cityObj.items.forEach(function(item){
//         str+='<option value="'+item.name+'">'+item.name+'</option>'
//       })
//     }
//     $("#selectCity").html(str)
//   }
// var $ = jQuery;
$('#people-listing-form :input').on('change', function () {
  var selectedVal = $(this).val();
  var fieldselect = "." + $(this).attr('id');
  $('.info-btn' + fieldselect).find('a').text(selectedVal);
  $('.team-section .result-found').addClass('active');
  $('.team-section .result-found .info-btn' + fieldselect).show();
  $('.team-section .result-found .resul-tno').show();
  setTimeout(function () {
    $('.result-found .info-btn').each(function () {
      if ($(this).find('a').text() == "") {
        $(this).hide();
      }
    });
  }, 10);
});
$(".all-filter").on("click", function () {
  $(this).closest('form').submit();
}); // $('#selectCity').on('change', function(){
//   $('#selectGeography').val('')
//   $('#selectGeography').change()
// } )

$('#selectCity').on('change', function () {
  if ($('#selectCity').val()) {
    $('#selectGeography').val('');
    $('#selectGeography').change();
  }
});
$('#selectGeography').on('change', function () {
  if ($('#selectGeography').val()) {
    $('#selectCity').val('');
    $('#selectCity').change();
  }
});
$("#people-listing-form").on("change submit", function () {
  var data = {},
      title,
      geography,
      practice,
      city;
  title = $("#title").val();
  practice = $("#practice").val();
  geography = $("#selectGeography").val();
  city = $("#selectCity").val();
  team = $("#people-listing-form .all-filter .active").attr("data-value");

  if (title) {
    data.title = title;
  }

  if (practice) {
    data.practice = practice;
  }

  if (geography) {
    data.geography = geography;
  }

  if (city) {
    data.city = city;
  }

  data.team = team;
  $('.resul-tno').hide();
  result = $.param(data);

  if (window.xhrSearchTeamPeople) {
    window.xhrSearchTeamPeople.abort();
  }

  window.xhrSearchTeamPeople = $.get('/search-team-people' + "?" + result, function (data) {
    $('.resul-tno span').html(data.length);
    $('.resul-tno').show();
    var newHtml = '';
    data.forEach(function (item) {
      item.field_image = item.field_image || '/images/team/default.png';
      newHtml += '<li class="flex-wrp"><div class="img-sec"><img src="' + item.field_image + '" alt="' + item.title + '" title="' + item.title + '"></div><div class="content-section"><h3>' + item.title + '</h3><h4>' + item.field_designation + '</h4><p>' + item.field_core_expertise_area + '</p></div><a href="' + item.field_unique_url + '" class="page-link"><span class="arrow-icon"></span></a></li>';
    });

    if (data.length == 0) {// newHtml='<li  class="flex-wrp"><div class="content-section"><h3>No Data Found.</h3></div></li>'
    }

    $('#peopleListContainer').html(newHtml);
  });
  return false;
});
$("#news_events-form").on("change submit", function () {
  var strFrom, strTo, to, from, practice_area, text, data, result, content_type;
  content_type = $("#news_events-form .all-filter .active").attr("data-value");
  strFrom = $("#from").val().split("/");

  if (strFrom[2]) {
    from = strFrom[2] + "-" + strFrom[0] + "-" + strFrom[1];
  }

  strTo = $("#to").val().split("/");

  if (strTo[2]) {
    to = strTo[2] + "-" + strTo[0] + "-" + strTo[1];
  }

  practice_area = $("#practice_area").val();
  text = $("#title").val();
  data = {};

  if (from) {
    data["from"] = from;
  }

  if (to) {
    data["to"] = to;
  }

  if (practice_area) {
    data["practice_area"] = practice_area;
  }

  if (text) {
    data["keywords"] = text;
  }

  if (content_type) {
    data["content_type"] = content_type;
  }

  if (window.xhrSearchNewsListing) {
    window.xhrSearchNewsListing.abort();
  }

  result = $.param(data);
  window.xhrSearchNewsListing = $.get('/search-news' + "?" + result).done(function (data) {
    var newHtml = '';
    $('.resul-tno span').html(data.length).show();
    $('.resul-tno').show();

    if (data.length == 0) {
      $('#newsListContainer').html("");
    } else {
      data.forEach(function (item) {
        newHtml += '<div class="block">';
        var refUrl = item.type == 'news' ? item.content.field_news_link : item.content.field_unique_url;
        var refTarget = item.type == 'news' ? '_blank' : '';
        newHtml += '<a href="' + refUrl + '" target="' + refTarget + '">';
        newHtml += '<div class="events public-heading flex-wrp"><p><span><img src="images\\events_icon.svg" alt="icon"></span>';
        newHtml += item.type;
        newHtml += '</p></div>';
        newHtml += '<div class="img-wrp">  <div class="imgHight">';

        if (item.content.field_image[0]) {
          newHtml += '<img src="' + item.content.field_image[0].url + '" alt="' + item.content.field_image[0].alt + '">';
        }

        newHtml += '</div></div>';
        newHtml += '<div class="article-wrp flex-wrp"><h3>';
        newHtml += item.content.title;
        newHtml += '</h3></div>' + item.content.field_author_by + '<div class="public-footer flex-wrp">';
        newHtml += "<p>" + item.content.field_date + "</p>";
        newHtml += '</div></a></div>';
      });
      $('#newsListContainer').html(newHtml);
    }
  }).fail(function () {
    $('.resul-tno span').html(0).show();
    $('#newsListContainer').html("");
  });
  return false;
});
$("#title").on('keyup', function (event) {
  if (event.keyCode === 13) {
    $("#thought-leader-form").submit();
    $("#people-listing-form").submit();
    $("#news_events-form").submit();
  }
});
window.xhrTL = '';
$("#thought-leader-form").on("change submit", function () {
  var strFrom, strTo, to, from, practice_area, text, data, result;
  strFrom = $("#from").val().split("/");

  if (strFrom[2]) {
    from = strFrom[1] + "-" + strFrom[0] + "-" + strFrom[2];
  }

  strTo = $("#to").val().split("/");

  if (strTo[2]) {
    to = strTo[1] + "-" + strTo[0] + "-" + strTo[2];
  }

  practice_area = $("#practice_area").val();
  category = $("#thought-leader-form .all-filter .active").attr("data-value");
  text = $("#title").val();
  data = {};

  if (from) {
    data["from_date"] = from;
  }

  if (to) {
    data["to_date"] = to;
  }

  if (practice_area) {
    data["practice_area"] = practice_area;
  }

  if (category) {
    data["category"] = category;
  }

  if (text) {
    data["title"] = encodeURI(text);
  }

  result = $.param(data);
  $('#thoughtListContainer').html("");

  if (window.xhrTL) {
    window.xhrTL.abort();
  }

  window.xhrTL = $.get('/search-thought-leader' + "?" + result, function (data) {
    var newHtml = '';
    $('.resul-tno span').html(data.length);
    $('.resul-tno').show(); //alert('data LE ', data.length)

    data.forEach(function (item) {
      //alert('mydata ', data.item);
      var iconMap = {
        Article: '/images/icons/article.svg',
        "Ergo Newsflash": '/images/icons/icon_circle_six_angle.svg',
        "Ergo Update": '/images/icons/icon_update.svg',
        "Ergo Case Note": '/images/icons/icon_case_note.svg',
        "Ergo Case Updates": '/images/icons/icon_case_updates.svg',
        "Ergo Newsletter": '/images/icons/icon_newsletter.svg',
        "External Links": '/images/icons/article.svg',
        "Publications": '/images/icons/article.svg',
        "Ergo": '/images/icons/icon_newsletter.svg',
        "Regulatory Updates": '/images/icons/icon_update.svg',
        "Webinar": '/images/icons/icon_newsletter.svg',
        "Covid-19": '/images/icons/virus.svg'
      };
      var iconName = iconMap[item.field_type_of_insight];
      newHtml += '<div class="block"><a href="' + (item.field_unique_url || item.field_external_link) + '" target="blank"><div class="public-heading flex-wrp"><p><span><img src="' + iconName + '" alt="icon"></span>';
      newHtml += item.field_type_of_insight;
      newHtml += '</p><span>' + item.field_date + '</span></div><div class="article-wrp flex-wrp"><h3>';
      newHtml += item.title;
      newHtml += '</h3></div>' + item.body + '<div class="public-footer">'; // alert(newHtml);

      if (item.field_practice_area) {
        newHtml += '<p>' + item.field_practice_area + '</p>';
      }

      newHtml += '</div><div class="article-hover">';
      newHtml += '<h3>' + item.title + '</h3>';
      newHtml += '<p>' + item.field_author + '</p>';
      newHtml += '<div class="read-more">read more</div></div></a></div>';
    });
    $('#thoughtListContainer').html(newHtml);
  });
  return false;
});
window.xhrTLCOVID = '';
$("#covid-form").on("change submit", function () {
  var to, from, practice_area, text, data, result;
  category = $("#covid-form .all-filter .active").attr("data-value");

  if ($("#title").length) {
    text = $("#title").val();
  }

  data = {};

  if (from) {
    data["from_date"] = from;
  }

  if (to) {
    data["to_date"] = to;
  }

  if (practice_area) {
    data["practice_area"] = practice_area;
  } //alert(category);


  if (category) {
    data["category"] = category;
  }

  if (text) {
    data["title"] = encodeURI(text);
  }

  result = $.param(data); //alert(result);

  $('#thoughtListContainer').html("");

  if (window.xhrTLCOVID) {
    window.xhrTLCOVID.abort();
  }

  window.xhrTLCOVID = $.get('/search-covid' + "?" + result, function (data) {
    var newHtml = ''; //alert('data is', data)

    $('.resul-tno span').html(data.length);
    $('.resul-tno').show(); //alert('data LE ', data.length)

    data.forEach(function (item) {
      //alert('mydata ', data.item);
      var iconMap = {
        "External Links": '/images/icons/article.svg',
        "Publications": '/images/icons/article.svg',
        "Ergo": '/images/icons/icon_newsletter.svg',
        "Regulatory Updates": '/images/icons/icon_update.svg',
        "Webinar": '/images/icons/icon_newsletter.svg',
        "Covid-19": '/images/icons/virus.svg'
      };
      var iconName = iconMap[item.field_type_of_insight];
      newHtml += '<div class="block"><a href="' + (item.field_unique_url || item.field_external_link) + '" target="blank"><div class="public-heading flex-wrp"><p><span><img src="' + iconName + '" alt="icon"></span>';
      newHtml += item.field_type_of_insight;
      newHtml += '</p><span>' + item.field_date + '</span></div><div class="article-wrp flex-wrp"><h3>';
      newHtml += item.title;
      newHtml += '</h3></div>' + item.body + '<div class="public-footer">'; //alert(newHtml);

      if (item.field_practice_area) {
        newHtml += '<p>' + item.field_practice_area + '</p>';
      }

      newHtml += '</div><div class="article-hover">';
      newHtml += '<h3>' + item.title + '</h3>';
      newHtml += '<p>' + item.field_author + '</p>';
      newHtml += '<div class="read-more">read more</div></div></a></div>';
    });
    $('#thoughtListContainer').html(newHtml);
  });
  return false;
});
$("#searchpage .search_result").hide();
$(".search_suggestion").hide();
$(".filter_nav_bar a").on("click", function () {
  $(".filter_nav_bar a").removeClass("active");
  $(this).addClass("active");
  $("#search-box").submit();
});
var searchText = document.getElementById("text");

if (searchText) {
  searchText.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault(); // Trigger the button element with a click

      $("#search-box").submit();
    }
  });
}

$("#search-page #search-box").on("submit", function () {
  var data, result, text;
  text = $("#search-page-text").val();
  data = {};

  if (text != '') {
    data["keyword"] = text.toLowerCase();
    data["type"] = $(".filter_nav_bar .active").attr("data-str").toLowerCase();
    result = $.param(data);
    $.get('/search-content' + "?" + result, function (data) {
      var newHtml = '';

      if (Array.isArray(data) && data.length != 0) {} else if (typeof data == 'string') {
        data = JSON.parse(data);
      } else {
        data = [];
      }

      $("#search-page #result-text").html(text);
      $("#search-page .result_lenght").html("(" + data.length + " results found)");
      data.forEach(function (item) {
        var articleDate = typeof item.date !== "undefined" ? item.date : "";
        newHtml += '<li>';
        newHtml += '<div class="result_type">';
        newHtml += '<span class="type type_people">' + item.type + '</span> ';
        newHtml += '<span class="searchdate">' + articleDate + '</span>';
        newHtml += '</div>';
        newHtml += '<div class="result_content">'; // newHtml+='<div class="pic"><img src="images/search/result_img1.jpg" alt="" /></div>'

        newHtml += '<div class="descript">';
        newHtml += '<h4><a href="' + item.url + '">' + item.title + '</a></h4>';

        if (item.field_designation) {
          newHtml += '<div class="subtitle">' + item.field_designation + '</div>';
        }

        newHtml += item.body || "";
        newHtml += '</div>';
        newHtml += '</div>';
        newHtml += '</li>';
      });
      $('#search-page #searchpage .results-ul').html(newHtml);
      $("#search-page #searchpage .search_result").show();
      $("#search-page .search_suggestion").show();
    });
  } else {
    $("#search-page #searchpage .search_result").hide();
    $("#search-page .search_suggestion").hide();
  }

  return false;
});
$("#search-page #search-box").submit();
$(".contact_us_form").each(function (index) {
  var that = this;
  var url = "/webform_rest/submit";
  $(that).submit(function (e) {
    $('.page-overlay').fadeIn();
    $.post(url, $(that).serialize()).done(function (data) {
      $(that).find("input:not([type='hidden']), textarea, select").val('');
      $(that).find("input[type='submit']").val('register');
      $(that).trigger("reset");
      $('.thankyou, .page-overlay').fadeIn();
    }).fail(function () {
      $('.page-overlay').fadeOut();
    });
    return false;
  });
});

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function handleFileSelect(evt) {
  var f = evt.target.files[0]; // FileList object

  var reader = new FileReader();
  var fileMimeType = ''; // Closure to capture the file information.

  reader.onload = function (theFile) {
    return function (e) {
      var binaryData = e.target.result; //Converting Binary Data to base 64

      var base64String = window.btoa(binaryData); //showing file converted to base64

      fileMimeType = f.type;

      if (!f.type) {
        fileMimeType = /([a-zA-Z0-9\s_\\.\-\(\):])+(.doc|.docx)$/i.test(f.name) ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : '';
      }

      if (!fileMimeType) {} else {
        document.getElementById('uploadCvData').value = base64String;
        document.getElementById('filename').value = f.name;
        document.getElementById('showFilename').innerHTML = f.name;
        document.getElementById('showFilename').style.display = "block";
        document.getElementById('filemime').value = fileMimeType;
      }
    };
  }(f); // Read in the image file as a data URL..


  reader.readAsBinaryString(f);
}

if (document.getElementById('showFilename')) {
  document.getElementById('showFilename').addEventListener("click", function () {
    var input = document.getElementById('file-1');
    input.value = "";
    this.innerHTML = "";
    this.style.display = "none";
    var label = input.nextElementSibling;
    label.querySelector('span').innerHTML = "Choose a file&hellip;";
    document.getElementById('uploadCvData').value = "";
    document.getElementById('filename').value = "";
    document.getElementById('filemime').value = "";
  });
}

if (window.File && window.FileReader && window.FileList && window.Blob) {
  if (document.getElementById('file-1')) {
    document.getElementById('file-1').addEventListener('change', handleFileSelect, false);
  }
} else {// alert('The File APIs are not fully supported in this browser.');
}

$("#join-our-team-form").submit(function () {
  $('#join-our-team-form').find("input[type='submit']").attr('disabled', true);
  $('#join-our-team-form').find("input[type='submit']").val('Submitting...');
  $.post("/join-us", $(this).serialize()).done(function (data) {
    $('#join-our-team-form').find("input:not([type='hidden']), textarea, select").val(''); //RESET UPLOAD

    $('#join-our-team-form .input_file input[type="hidden"]').val('');
    $('#join-our-team-form').find("input[type='submit']").val('Submit');
    $('#join-our-team-form .input_file label span').text("Choose a file...");
    $('#join-our-team-form').find("input[type='submit']").removeAttr('disabled');
    $('#join-our-team-form #showFilename').text('').hide();
    $('#join-our-team-form').trigger("reset");
    $('.thankyou, .page-overlay').fadeIn();
  }).fail(function () {
    $('#subscription-form').trigger("reset"); //Submit button enable

    $('#join-our-team-form').find("input[type='submit']").removeAttr('disabled');
    $('#join-our-team-form').find("input[type='submit']").val('Submit');
    $('.page-overlay').fadeOut();
  });
  return false;
});
$("#subscription-form").submit(function () {
  data = {
    email: $(" #subscription-form #email").val(),
    timestamp: new Date().getTime(),
    target_id: $("#subscription-form #expertiseArea").val()
  };
  result = $.param(data);
  $('.page-overlay').fadeIn();
  $.post("/subscription", result).done(function (data) {
    $('#subscription-form').find("input:not([type='hidden']), textarea, select").val('');
    $('#subscription-form').trigger("reset");
    $('.thankyou, .page-overlay').fadeIn();
  }).fail(function () {
    $('#subscription-form').trigger("reset");
    $('.page-overlay').fadeOut();
  });
  return false;
});
$("#award_practice_area").change(function () {
  $('#award-container').hide();
  $('#no-award').hide();
  $('#loading-award').fadeIn();
  $.get('/award-search' + "?practice_area=" + $(this).val(), function (data) {
    var htmlStr = "";
    $('#loading-award').hide();

    if (data.length > 0) {
      data.forEach(function (post) {
        htmlStr += '<li>';
        htmlStr += '<div class="boxes">';
        htmlStr += '<div class="awd_icon"><img src="' + DRUPAL_API_URL + post.field_image + '" alt="" /></div>';
        htmlStr += '<div class="award_caption">';
        htmlStr += '<h4>' + post.title + '</h4>';
        htmlStr += '<p>' + post.field_practice_area + '</p>';
        htmlStr += '<div class="more_content_block active">';
        htmlStr += '<div class="morecontent">';
        htmlStr += '' + post.field_additions + '';
        htmlStr += '</div>';
        htmlStr += '<a href="javascript:void(0)" class="txt_link_btn">View Less</a>';
        htmlStr += '</div>';
        htmlStr += '</div>';
        htmlStr += '</div>';
        htmlStr += '</li>';
      });
      $('#award-container').html(htmlStr);
      $('#award-container').fadeIn();
    } else {
      $('#no-award').fadeIn();
    }
  });
});
window.addEventListener('load', function () {
  var allimages = document.getElementsByTagName('img');

  for (var i = 0; i < allimages.length; i++) {
    if (allimages[i].getAttribute('data-src')) {
      allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
    }
  }
}, false);