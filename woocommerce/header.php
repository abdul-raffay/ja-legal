<!DOCTYPE html>

<html <?php language_attributes(); ?> class="no-js">
<head>
	
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	
	<?php
	
	$nectar_options = get_nectar_theme_options();
	
	if ( ! empty( $nectar_options['responsive'] ) && '1' === $nectar_options['responsive'] ) { 
		echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />';
	} else { 
		echo '<meta name="viewport" content="width=1200" />';
	} 
	
	// Shortcut icon fallback.
	if ( ! empty( $nectar_options['favicon'] ) && ! empty( $nectar_options['favicon']['url'] ) ) {
		echo '<link rel="shortcut icon" href="'. esc_url( nectar_options_img( $nectar_options['favicon'] ) ) .'" />';
	}
	
	wp_head();
	
	?>
	
</head>

<?php

$nectar_header_options = nectar_get_header_variables();

?>

<body <?php body_class(); ?> <?php nectar_body_attributes(); ?>>
	
	<?php
	
	nectar_hook_after_body_open();
	
	// nectar_hook_before_header_nav();
	
	// Boxed theme option opening div.
	if ( $nectar_header_options['n_boxed_style'] ) {
		echo '<div id="boxed">';
	}
	
	// get_template_part( 'includes/partials/header/header-space' );
	
	?>
	
	<div id="header-outer" <?php nectar_header_nav_attributes(); ?>>
		<!-- <header>
			<nav>
				<div class="container">
					<div class="wrapper flex-wrp">
					<div class="logo">
						<a href="index.html"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo-b.svg'; ?>" alt="logo" class="white-logo"></a>
						<a href="index.html"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo.png'; ?>" alt="logo" class="black-logo active"></a>
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
					<ul class="main-menu">
						<li><a href="https://jalegal.nytrotech.net/">HOME</a></li>
						<li><a href="https://jalegal.nytrotech.net/about/">ABOUT</a></li>
						<li><a href="https://jalegal.nytrotech.net/expertise-main/">EXPERTISE</a></li>
						<li><a href="https://jalegal.nytrotech.net/lawyers/">LAWYERS</a></li>
						<li><a href="https://jalegal.nytrotech.net/fast-track-legal-services-3/">FAST-TRACK LEGAL SERVICES</a></li>
						<li><a href="https://jalegal.nytrotech.net/overseas-law/">ARE YOU AN OVERSEAS LAW FIRM</a></li>
						<li><a href="https://jalegal.nytrotech.net/contact/">OFFICES AND CONTACTS</a></li>
						<li><a href="https://jalegal.nytrotech.net/get-involved/">GET INVOLVED</a></li>
					</ul>
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
		</header> -->
		<?php
		
		// get_template_part( 'includes/partials/header/secondary-navigation' );
		
		if ('ascend' !== $nectar_header_options['theme_skin'] && 
			'left-header' !== $nectar_header_options['header_format']) {
			// get_template_part( 'includes/header-search' );
		}
		
		get_template_part( 'includes/partials/header/header-menu' );
		
		
		?>
		
	</div>
	
	<?php
	
	if ( ! empty( $nectar_options['enable-cart'] ) && '1' === $nectar_options['enable-cart'] ) {
		// get_template_part( 'includes/partials/header/woo-slide-in-cart' );
	}
	
	if ( 'ascend' === $nectar_header_options['theme_skin'] || 
		'left-header' === $nectar_header_options['header_format'] && 
		'false' !== $nectar_header_options['header_search'] ) {
		// get_template_part( 'includes/header-search' ); 
	}
	
	?>
	
	<div id="ajax-content-wrap">
		<?php
		
		nectar_hook_after_outer_wrap_open();
