<?php get_header('front'); ?>

  



  <main id="scroll-page">

    <!-- Home Section -->
    <?php 
    
      if(get_theme_mod('show_home')) {
        ?>
        <section class="home-banner white-banner"
          style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/book-shelves-book-stack-bookcase-books-207662.jpg'; ?>) no-repeat center center;">
          <div class="container">
            <div class="wrapper">
              <div class="banner-overlay flex-wrp top-animate"></div>
              <div class="banner-desc flex-wrp top-animateLight">
                <div class="title-def">
                  <h2><?php echo get_theme_mod('title_home'); ?></h2>
                </div>
                <?php 
                  if(get_theme_mod( 'description_home' )) {
                      ?>
                      <div class="title">
                        <h1>
                          <?php echo get_theme_mod('description_home'); ?>
                          <!-- <span class="gold_title">Client</span> Focused <span class="gold_title">and Result</span> Oriented -->
                        </h1>
                      </div>
                      <?php
                  }
                ?>
                <?php if(get_theme_mod('quote_home')){ ?>
                  <p class="quote">“<?php echo get_theme_mod('quote_home'); ?>.”
                    <?php if(get_theme_mod('quote_author_home')) { ?>
                    <span>(<?php echo get_theme_mod('quote_author_home'); ?>)</span>
                    <?php } ?>
                  </p>
                <?php } ?>
              </div>
            </div>
          </div>
        </section>
        <?php
      }
        
    ?>


    <?php
      if(get_theme_mod('show_about')) {
        ?>
        <section class="home-banner" style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/book-shelves-.jpg'; ?>) no-repeat center center;">
          <div class="container">
            <div class="wrapper">
              <div class="banner-overlay flex-wrp bottom-animate"></div>
              <div class="banner-desc flex-wrp top-animateLight">
                <?php if(get_theme_mod('title_about')){ ?>
                  <div class="title-def" id="about-title-def">
                    <h2><?php echo get_theme_mod('title_about'); ?></h2>
                  </div>
                <?php } ?>
                <?php if(get_theme_mod('subtitle_about')){ ?>
                  <div class="title-sub">
                    <h2><?php echo get_theme_mod('subtitle_about'); ?></h2>
                  </div>
                <?php } ?>
                <?php if(get_theme_mod('description_about')) { ?>
                  <p><?php echo get_theme_mod('description_about'); ?></p>
                <?php } ?>
                <div class="btn-wrp">
                  <a href="<?php echo get_page_link(get_page_by_path( '/aboutus', OBJECT, 'page' )->ID); ?>" class="btn black-btn">Explore JA Legal
                  </a>
                  <a href="#" class="btn black-btn">Download Profile</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <?php 
      }
    ?>

    <!-- Expertise Section -->
    <?php if(get_theme_mod('show_expertise')) { ?>
      <section class="home-banner white-banner"
        style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/Group\ 1537.jpg'; ?>) no-repeat center center;">
        <div class="container">
          <div class="wrapper">
            <div class="banner-overlay flex-wrp top-animate"></div>
            <div class="banner-desc flex-wrp top-animateLight">
              <?php if(get_theme_mod('title_expertise')) { ?>
                <div class="title-def">
                  <h2><?php echo get_theme_mod('title_expertise'); ?></h2>
                </div>
              <?php } ?>
              <?php if(get_theme_mod('description_expertise')) { ?>
                <p>
                  <?php echo get_theme_mod('description_expertise'); ?>
                </p>
              <?php } ?>
              <div class="btn-wrp">

                <a href="<?php echo get_page_link(get_page_by_path( '/expertise-main', OBJECT, 'page' )->ID); ?>" class="btn white-btn">Legal Services
                </a>
                <a href="<?php echo get_page_link(get_page_by_path( '/fast-track-legal-services-3', OBJECT, 'page' )->ID); ?>" class="btn white-btn">Fast-track Services
                </a>
              </div>
            </div>
            <div class="bg-img">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </section>
    <?php } ?>

    <!-- Lawyers Section -->
    <?php if(get_theme_mod('show_lawyer')) { ?>
      <section class="home-banner" style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/lawyer.jpg'; ?>) no-repeat center center;">
        <div class="container">
          <div class="wrapper">
            <div class="banner-overlay flex-wrp bottom-animate"></div>
            <div class="banner-desc flex-wrp top-animateLight">
              <?php if(get_theme_mod('title_lawyer')){ ?>
                <div class="title-def">
                  <h2><?php echo get_theme_mod('title_lawyer'); ?></h2>
                </div>
              <?php } ?>
              <?php if(get_theme_mod('description_lawyer')) { ?>
                <p>
                  <?php echo get_theme_mod('description_lawyer'); ?>
                </p>
              <?php } ?>

              <div class="btn-wrp">
                <a href="<?php echo get_page_link(get_page_by_path( '/lawyers', OBJECT, 'page' )->ID); ?>" class="btn black-btn">Explore Our Team
                </a>
              </div>
            </div>
            <div class="bg-img">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </section>
    <?php } ?>


    <div id="output"></div>

  </main>
  <div class="godownArrow homepage">
    <div class="circle"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/DownArrow.svg'; ?>" alt="" class="bounce"></div>
  </div>


<?php get_footer('front'); ?>