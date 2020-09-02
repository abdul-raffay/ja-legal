<!DOCTYPE html>

<html <?php language_attributes(); ?> class="no-js">

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>
      
  </title>
<!-- 
  <link rel="canonical" href="index.html" /> -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
    integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/jalegal_style/onepage-scroll.css'; ?>">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/jalegal_style/style.css'; ?>">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri().'/css/jalegal_style/media.css'; ?>">
  <?php // wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <div class="loader">
    <span>
      <img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo-b.svg'; ?>" alt="loader">
    </span>
  </div>
  <div class="page-overlay demoClass " style="display: none;"></div>

  <header>
    <nav>
      <div class="container">
        <div class="wrapper flex-wrp">
          <div class="logo">
            <a href="<?php echo esc_url(site_url()); ?>"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo.png'; ?>" alt="logo" class="white-logo active"></a>
            <a href="<?php echo esc_url(site_url()); ?>"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo-b.svg'; ?>" alt="logo" class="black-logo"></a>
          </div>
          <div class="searh_menu_icon">
            <span class="search">
              <a href="javascript:;" class="white_bg">
                <img src="<?php echo get_template_directory_uri().'/img/jalegal_img/search.svg' ?>" alt="search">
              </a>
              <a href="javascript:;" class="black_bg">
                <img src="<?php echo get_template_directory_uri().'/img/jalegal_img/search_black.svg' ?>" alt="search">
              </a>
            </span>
            <div class="menu-toggle">
              <span></span>
            </div>
          </div>
        </div>

        <div class="menu-drop flex-wrp">
            <style>
                .main-menu > li > a {
                    text-transform: uppercase !important;
                }
            </style>
            <?php
                wp_nav_menu(array(
                    'theme_location' => 'custom-nav-menu',
                    'container' => 'ul',
                    'menu_class' => 'main-menu',
                ));
            ?>
          <div class="footer">
            <div class="career-wrp">
            </div>
            <div class="soc-wrp">
              <ul class="flex-wrp soc-icons">
                <li><a href="" target="_blank" rel="noopener"><i class="fab fa-fab fa-linkedin-in"></i></a></li>
                <li><a href="" target="_blank" rel="noopener"><i class="fab fa-fab fa-twitter"></i></a></li>
                <li><a href="" target="_blank" rel="noopener"><i class="fab fa-fab fa-youtube"></i></a></li>
              </ul>
              <ul class="flex-wrp">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div id="searchWrap">
    <div class="team-container">
      <a href="javascript:;" class="closeBtn"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/Close.png'; ?>" alt="Close"></a>
      <div class="name-header">
        <div>
          <div class="wrapper">
            <div class="title-def">
              <h3>Search</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="searchpage">
        <div>
          <div class="wrapper">
            <div class="search_box">
              <form id="search-box" class="" action="" method="get">
                <input type="text" name="s" id="text" class="input_search" value=""
                  placeholder="Search for people, events, expertise etc…" />
                <button type="submit" class="searchBtn">
                  <img src="<?php echo get_template_directory_uri().'/img/jalegal_img/search_icon.png'; ?>" alt="search" />
                </button>
              </form>
            </div>
            <div class="search_suggestion">
              <div class="searchAll">See all results for <a href="#" id="result-text">""</a></div>
            </div>
            <div class="search_result">
              <div class="result_lenght"></div>
              <ul class="filter_nav_bar">
                <li><b>Filters:</b></li>
                <li><a href="javascript:void(0)" class="active" data-str="all">All</a></li>
                <li><a href="javascript:void(0)" class="" data-str="people">People</a></li>
                <li><a href="javascript:void(0)" class="" data-str="expertise_area">Expertise</a></li>
                <li><a href="javascript:void(0)" class="" data-str="publication">Insights</a></li>
                <li><a href="javascript:void(0)" class="" data-str="news">News</a></li>
              </ul>
              <div class="results">
                <ul class="results-ul">

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>