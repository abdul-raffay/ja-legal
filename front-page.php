<?php get_header('front'); ?>

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
                <input type="text" name="keyword" id="text" class="input_search" value=""
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



  <main id="scroll-page">

    <section class="home-banner white-banner"
      style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/book-shelves-book-stack-bookcase-books-207662.jpg'; ?>) no-repeat center center;">
      <div class="container">
        <div class="wrapper">
          <div class="banner-overlay flex-wrp top-animate"></div>
          <div class="banner-desc flex-wrp top-animateLight">
            <div class="title-def">
              <h2>Home</h2>
            </div>
            <div class="title">
              <h1><span class="gold_title">Client</span> Focused <span class="gold_title">and Result</span> Oriented
              </h1>
            </div>
            <p class="quote">“I am text block. Click edit button to change.”
              <span>(Family Law Client)</span>
            </p>

          </div>
        </div>
      </div>
    </section>

    <section class="home-banner" style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/book-shelves-.jpg'; ?>) no-repeat center center;">
      <div class="container">
        <div class="wrapper">
          <div class="banner-overlay flex-wrp bottom-animate"></div>
          <div class="banner-desc flex-wrp top-animateLight">
            <div class="title-def">
              <h2>About Us</h2>
            </div>
            <div class="title-sub">
              <h2>Not just any other law firm</h2>
            </div>
            <p>JA Legal was founded by Barrister Junaid Ahmed, as a means to provide the most quality legal services at
              the most cost-competitive and accessible of manners. He believes that recourse to legal remedies is a
              basic right for all, and so through JA Legal, he aims to spread wide, legal solutions for everyone.

            </p>

            <div class="btn-wrp">
              <a href="https://jalegal.nytrotech.net/aboutus/" class="btn black-btn">Explore JA Legal
              </a>
              <a href="https://jalegal.nytrotech.net/#" class="btn black-btn">Download Profile</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="home-banner white-banner"
      style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/Group\ 1537.jpg'; ?>) no-repeat center center;">
      <div class="container">
        <div class="wrapper">
          <div class="banner-overlay flex-wrp top-animate"></div>
          <div class="banner-desc flex-wrp top-animateLight">
            <div class="title-def">
              <h2>Expertise</h2>
            </div>
            <p>We work on both corporate and litigious matters. Specifically, JA Legal is regularly engaged by foreign
              companies, multinationals and large local companies to advise them and/or to represent them in cases.
              Along with our portfolio of legal services, we also offer a fast-track procedure for specific legal
              services.

            </p>

            <div class="btn-wrp">

              <a href="https://jalegal.nytrotech.net/expertise-main/" class="btn white-btn">Legal Services
              </a>
              <a href="https://jalegal.nytrotech.net/fast-track-legal-services-3/" class="btn white-btn">Fast-track Services
              </a>
            </div>
          </div>
          <div class="bg-img">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="home-banner" style="background: url(<?php echo get_template_directory_uri().'/img/jalegal_img/main/lawyer.jpg'; ?>) no-repeat center center;">
      <div class="container">
        <div class="wrapper">
          <div class="banner-overlay flex-wrp bottom-animate"></div>
          <div class="banner-desc flex-wrp top-animateLight">
            <div class="title-def">
              <h2>Lawyers</h2>
            </div>
            <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

            </p>

            <div class="btn-wrp">
              <a href="https://jalegal.nytrotech.net/lawyers/" class="btn black-btn">Explore Our Team
              </a>
            </div>
          </div>
          <div class="bg-img">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </section>


    <div id="output"></div>

  </main>
  <div class="godownArrow homepage">
    <div class="circle"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/DownArrow.svg'; ?>" alt="" class="bounce"></div>
  </div>


<?php get_footer('front'); ?>