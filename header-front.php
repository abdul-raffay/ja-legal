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
            <a href="<?php echo esc_url(site_url()); ?>"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo-b.svg'; ?>" alt="logo" class="white-logo"></a>
            <a href="<?php echo esc_url(site_url()); ?>"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo.png'; ?>" alt="logo" class="black-logo active"></a>
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