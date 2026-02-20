<?php
if (!defined('ABSPATH')) {
  exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="hc-skip" href="#main"><?php esc_html_e('Saltar para o conteúdo', 'hotelequip-clean'); ?></a>

<header class="hc-header" role="banner">
  <div class="hc-container">
    <div class="hc-headerInner">
      <div class="hc-brand">
        <a href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php echo esc_attr(get_bloginfo('name')); ?>" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
          <?php if (function_exists('the_custom_logo') && has_custom_logo()): ?>
            <?php the_custom_logo(); ?>
          <?php else: ?>
            <span class="hc-brandMark" aria-hidden="true"></span>
            <span class="hc-brandText">
              <strong><?php echo esc_html(get_bloginfo('name')); ?></strong>
              <span><?php echo esc_html(get_bloginfo('description')); ?></span>
            </span>
          <?php endif; ?>
        </a>
      </div>

      <form class="hc-search" role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
        <span aria-hidden="true">⌕</span>
        <input type="search" name="s" placeholder="<?php esc_attr_e('Pesquisar produtos…', 'hotelequip-clean'); ?>" value="<?php echo esc_attr(get_search_query()); ?>">
        <input type="hidden" name="post_type" value="product">
      </form>

      <nav class="hc-nav" aria-label="<?php esc_attr_e('Navegação principal', 'hotelequip-clean'); ?>">
        <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'container' => false,
          'fallback_cb' => false,
          'depth' => 1,
        ]);
        ?>
      </nav>

      <div class="hc-actions">
        <button class="hc-iconBtn" type="button" data-hc-menu-btn aria-expanded="false" aria-controls="hc-mobile-menu" aria-label="<?php esc_attr_e('Abrir menu', 'hotelequip-clean'); ?>">
          ☰
        </button>

        <?php if (function_exists('wc_get_cart_url')): ?>
          <a class="hc-iconBtn" href="<?php echo esc_url(wc_get_cart_url()); ?>" aria-label="<?php esc_attr_e('Carrinho', 'hotelequip-clean'); ?>">
            🛒
            <span class="hc-cartCount" data-cart-count><?php echo (int) WC()->cart->get_cart_contents_count(); ?></span>
          </a>
        <?php endif; ?>

        <?php if (function_exists('wc_get_page_permalink')): ?>
          <a class="hc-btn hc-btn--ghost" href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>">
            <?php esc_html_e('Conta', 'hotelequip-clean'); ?>
          </a>
        <?php endif; ?>

        <a class="hc-btn hc-btn--primary" href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>">
          <?php esc_html_e('Ver loja', 'hotelequip-clean'); ?>
        </a>
      </div>
    </div>

    <div id="hc-mobile-menu" class="hc-card" data-hc-menu data-open="0" style="display:none;margin:0 0 12px;padding:12px;">
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a class="hc-btn" href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>"><?php esc_html_e('Categorias', 'hotelequip-clean'); ?></a>
        <?php if (function_exists('wc_get_cart_url')): ?>
          <a class="hc-btn" href="<?php echo esc_url(wc_get_cart_url()); ?>"><?php esc_html_e('Carrinho', 'hotelequip-clean'); ?></a>
        <?php endif; ?>
        <?php if (function_exists('wc_get_page_permalink')): ?>
          <a class="hc-btn" href="<?php echo esc_url(wc_get_page_permalink('myaccount')); ?>"><?php esc_html_e('A minha conta', 'hotelequip-clean'); ?></a>
        <?php endif; ?>
      </div>
      <div style="margin-top:10px;">
        <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'container' => false,
          'fallback_cb' => false,
          'depth' => 2,
        ]);
        ?>
      </div>
    </div>
  </div>
</header>

