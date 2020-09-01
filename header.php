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

<body <?php // body_class(); ?> <?php nectar_body_attributes(); ?>>
	
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
		<header class="header">
			<nav class="check">
				<div class="container">
					<div class="wrapper flex-wrp pdCustomMenu" style="">
						<div class="logo">
							<a href="<?php echo esc_url(site_url()); ?>"><img src="<?php echo get_template_directory_uri().'/img/jalegal_img/logo-b.svg'; ?>" alt="logo" class="white-logo active"></a>
						</div>
						<div class="searh_menu_icon">
							<span class="search">
								<style>
									#show_bg_icon {
										display: none;
									}
								</style>
								<a href="javascript:;" id="show_bg_icon" class="white_bg ">
									<img src="<?php echo get_template_directory_uri().'/img/jalegal_img/search.svg' ?>" alt="search">
								</a>
								<a href="javascript:;" id="remove_bg_icon" class="white_bg ">
									<img src="<?php echo get_template_directory_uri().'/img/jalegal_img/search_black.svg' ?>" alt="search">
								</a>
							</span>
							<div id="menu-toggle" class="menu-toggle menu-black">
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
								'menu_class' => 'main-menu navCustomMenu',
							));
						?>
							<div class="footer">
								<div class="career-wrp">
								</div>
								<div class="soc-wrp">
									<ul class="flex-wrp soc-icons">
										<li><a href="" target="_blank" rel="noopener"><i class="fab fa-fab fa-linkedin"></i></a></li>
										<li><a href="" target="_blank" rel="noopener"><i class="fab fa-fab fa-twitter"></i></a></li>
										<li><a href="" target="_blank" rel="noopener"><i class="fab fa-fab fa-youtube"></i></a></li>
									</ul>
									<ul class="flex-wrp footerCustomButton">
										<li><a href="">Privacy Policy</a></li>
										<li><a href="">Terms of Use</a></li>
										<li><a href="">Disclaimer</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<?php
		
		// get_template_part( 'includes/partials/header/secondary-navigation' );
		
		if ('ascend' !== $nectar_header_options['theme_skin'] && 
			'left-header' !== $nectar_header_options['header_format']) {
			// get_template_part( 'includes/header-search' );
		}
		
		// get_template_part( 'includes/partials/header/header-menu' );
		
		
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
	
	<div id="overlayCustom"></div>
	<style>
		#overlayCustom {
			width: 100%;
			height: 100vh;
			background-color: white;
			display: none;
			position: fixed;
			top: 0;
			z-index: 20;
		}
		.activeHeaderBG {
			background-color: #fff;
		}
	</style>
	<script>
		// var isToggled = true;
		document.getElementById('menu-toggle').addEventListener("click", function() {	
			// if(isToggled) {
			// 	isToggled = false;
			// 	document.getElementById('remove_bg_icon').style.display = "none";	
			// 	document.getElementById('show_bg_icon').style.display = "block";
			// }
			// else{
			// 	isToggled = true;
			// 	document.getElementById('remove_bg_icon').style.display = "block";	
			// 	document.getElementById('show_bg_icon').style.display = "none";
			// }

			if(document.getElementById('remove_bg_icon').style.display === "none") {
				document.getElementById('remove_bg_icon').style.display = "block";	
				document.getElementById('show_bg_icon').style.display = "none";
			}
			else {
				document.getElementById('remove_bg_icon').style.display = "none";	
				document.getElementById('show_bg_icon').style.display = "block";
			}

			if(document.getElementById('overlayCustom').style.display === 'block') {
				document.getElementById('overlayCustom').style.display = 'none';
			}
			else {
				document.getElementById('overlayCustom').style.display = 'block';
			}
		});
		var $ = jQuery;
		$(function() {
			$(window).on("scroll", function() {
				if($(window).scrollTop() > 50) {
					$(".header").addClass("activeHeaderBG");
				} else {
					//remove the background property so it comes transparent again (defined in your css)
				$(".header").removeClass("activeHeaderBG");
				}
			});
			$('#overlayCustom').on("click", function() {
				$("#menu-toggle").removeClass('active');
				$(".searh_menu_icon").removeClass('current');
				$(".menu-drop").removeClass('active');
				// if($(window).scrollTop() > 50) {
				// 	$(".header").addClass("activeHeaderBG");
				// } else {
				// 	//remove the background property so it comes transparent again (defined in your css)
				// $(".header").removeClass("activeHeaderBG");
				// }
				// console.log("nice");
			});
		});
		document.getElementById('overlayCustom').addEventListener('click', function() {
			document.getElementById('overlayCustom').style.display = "none";
		});
	</script>
	<div id="ajax-content-wrap">
		<?php
		
		nectar_hook_after_outer_wrap_open();
