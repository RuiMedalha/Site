<?php

declare(strict_types=1);

if (!defined('ABSPATH')) {
  exit;
}

function hc_theme_setup(): void {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
  add_theme_support('custom-logo', ['height' => 48, 'width' => 220, 'flex-height' => true, 'flex-width' => true]);

  add_theme_support('woocommerce');
  add_theme_support('wc-product-gallery-zoom');
  add_theme_support('wc-product-gallery-lightbox');
  add_theme_support('wc-product-gallery-slider');

  register_nav_menus([
    'primary' => __('Menu Principal', 'hotelequip-clean'),
    'footer' => __('Menu Rodapé', 'hotelequip-clean'),
  ]);
}
add_action('after_setup_theme', 'hc_theme_setup');

function hc_enqueue_assets(): void {
  $ver = wp_get_theme()->get('Version');

  wp_enqueue_style('hotelequip-clean', get_stylesheet_uri(), [], $ver);
  wp_enqueue_style('hotelequip-clean-theme', get_template_directory_uri() . '/assets/css/theme.css', [], $ver);

  wp_enqueue_script('hotelequip-clean', get_template_directory_uri() . '/assets/js/main.js', [], $ver, true);

  wp_localize_script('hotelequip-clean', 'hcTheme', [
    'ajaxUrl' => admin_url('admin-ajax.php'),
  ]);
}
add_action('wp_enqueue_scripts', 'hc_enqueue_assets');

/**
 * WooCommerce: wrappers para layout consistente e clean.
 */
function hc_wc_wrapper_start(): void {
  echo '<main id="main" class="hc-main"><div class="hc-container"><div class="hc-page">';
}
function hc_wc_wrapper_end(): void {
  echo '</div></div></main>';
}
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
add_action('woocommerce_before_main_content', 'hc_wc_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'hc_wc_wrapper_end', 10);

/**
 * WooCommerce: limpeza de ruído visual.
 */
add_filter('woocommerce_enqueue_styles', '__return_empty_array');

// Opcional: remover breadcrumb padrão (podemos reintroduzir de forma mais clean depois).
remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);

/**
 * Ajax: fragmento do mini-carrinho (header badge).
 */
function hc_cart_count_fragment(array $fragments): array {
  ob_start();
  ?>
  <span class="hc-cartCount" data-cart-count>
    <?php echo (int) WC()->cart->get_cart_contents_count(); ?>
  </span>
  <?php
  $fragments['span[data-cart-count]'] = ob_get_clean();
  return $fragments;
}
add_filter('woocommerce_add_to_cart_fragments', 'hc_cart_count_fragment');

/**
 * Pequenos ajustes de labels.
 */
add_filter('gettext', function (string $translated, string $text, string $domain): string {
  if ($domain !== 'woocommerce') {
    return $translated;
  }
  if ($text === 'Select a value') {
    return __('Selecionar', 'hotelequip-clean');
  }
  return $translated;
}, 10, 3);

