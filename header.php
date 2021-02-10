<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package salim-and-brothers
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
 <div class="salim__wrapper">
        <!-- Header section  -->
        <header id="header">
            <div class="header__container">
                <div class="header__wrapper">
                    <div class="container">
                        <div class="salim__element">
                            <div class="single__element">
                                <div class="logo__left">
                                    <img class="color" src="<?php echo get_template_directory_uri(); ?>/assets/images/salim&brothers_logo.png" alt="">
                                    <img class="white" src="<?php echo get_template_directory_uri(); ?>/assets/images/salim&brother_logo.png" alt="">
                                    <span>Salim & Brothers</span>
                                </div>
                            </div>
                            <div class="single__element with__menu">
                                <nav id="nav">
                                    <?php
										wp_nav_menu(array(
										'theme_location' => 'main-menu',
										'container' => false,
										'menu_class' => 'main-menu'
										))
									?>
                                </nav>
                                <div class="contact">
                                    <strong><i class="fas fa-phone-alt"></i>+880 1714 110 380</strong>
                                    <span>riponyueicaster@gmail.com</span>
                                </div>
                            </div>
                            <div class="mobile__menu">
                                <span class="line"></span>
                                <span class="line"></span>
                                <span class="line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- End Header section  -->
