<?php 

// For Logo
// add_theme_support('custom-logo', array(
//     'height'      => 47,
//     'width'       => 180,
//     'flex-width'  => false,
//     'flex-height' => false,
// ));

// add_theme_support( 'customize-selective-refresh-widgets' );

// First Section
function home_section($wp_customize) {
    // Section
    $wp_customize->add_section('home_section', array(
        'title'           => 'Home Section',
        'priority'        => 3,
        'active_callback' => 'is_front_page',
    ));

    // Enable/Disable Control
    $wp_customize->add_setting('show_home', array(
        'default'    => false,
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('enable_home', array(
        'label'    => 'Show Home Section',
        'section'  => 'home_section',
        'settings' => 'show_home',
        'type'     => 'checkbox',
    ));

    // Title
    $wp_customize->add_setting('title_home', array(
        'default'    => 'Home',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_title_home', array(
        'label'    => 'First Section Title',
        'section'  => 'home_section',
        'settings' => 'title_home',
        'type'     => 'text',
    ));

    // Description
    $wp_customize->add_setting('description_home', array(
        'default'    => 'Client Focused and Result Oriented',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_description_home', array(
        'label'    => 'First Section Description',
        'section'  => 'home_section',
        'settings' => 'description_home',
        'type'     => 'textarea',
    ));

    // Quote
    $wp_customize->add_setting('quote_home', array(
        'default'    => 'I am text block. Click edit button to change',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_quote_home', array(
        'label'    => 'Quote',
        'section'  => 'home_section',
        'settings' => 'quote_home',
        'type'     => 'textarea',
    ));
    // Quote Author
    $wp_customize->add_setting('quote_author_home', array(
        'default'    => 'Family Law Client',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_quote_author_home', array(
        'label'    => 'Quote Author',
        'section'  => 'home_section',
        'settings' => 'quote_author_home',
        'type'     => 'text',
    ));
}
add_action( 'customize_register', 'home_section' );


// Second Section
function about_section($wp_customize) {
    // Section
    $wp_customize->add_section('about_section', array(
        'title'           => 'About Section',
        'priority'        => 4,
        'active_callback' => 'is_front_page',
    ));

    // Enable/Disable Control
    $wp_customize->add_setting('show_about', array(
        'default'    => false,
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('enable_about', array(
        'label'    => 'Show About Section',
        'section'  => 'about_section',
        'settings' => 'show_about',
        'type'     => 'checkbox',
    ));

    // Title
    $wp_customize->add_setting('title_about', array(
        'default'    => 'About Us',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_title_about', array(
        'label'    => 'Second Section Title',
        'section'  => 'about_section',
        'settings' => 'title_about',
        'type'     => 'text',
    ));

    // Sub-Title
    $wp_customize->add_setting('subtitle_about', array(
        'default'    => 'Not just any other law firm',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_subtitle_about', array(
        'label'    => 'Second Section Sub Title',
        'section'  => 'about_section',
        'settings' => 'subtitle_about',
        'type'     => 'text',
    ));

    // Description
    $wp_customize->add_setting('description_about', array(
        'default'    => 'hello world',
        'capability' => 'edit_theme_options',
    ));

    $wp_customize->add_control('show_description_about', array(
        'label'    => 'Second Section Description',
        'section'  => 'about_section',
        'settings' => 'description_about',
        'type'     => 'textarea',
    ));
}
add_action( 'customize_register', 'about_section' );


// Third Section
function expertise_section($wp_customize) {
    // Section
    $wp_customize->add_section('expertise_section', array(
        'title'    => 'Expertise Section',
        'priority' => 5,
    ));
}
add_action( 'customize_register', 'expertise_section' );

// Fourth Section
function lawyers_section($wp_customize) {
    $wp_customize->add_section('lawyers_section', array(
        'title'    => 'Lawyers Section',
        'priority' => 6,
    ));
}
add_action( 'customize_register', 'lawyers_section' );
