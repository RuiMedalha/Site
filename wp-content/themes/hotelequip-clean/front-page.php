<?php
if (!defined('ABSPATH')) {
  exit;
}

get_header();
?>

<main id="main" class="hc-main">
  <div class="hc-container">
    <section class="hc-hero">
      <div class="hc-pill"><?php esc_html_e('Equipamentos profissionais', 'hotelequip-clean'); ?></div>
      <h1><?php esc_html_e('Uma loja mais clean, rápida e fácil de comprar.', 'hotelequip-clean'); ?></h1>
      <p><?php esc_html_e('Navegação por categorias, filtros úteis e páginas de produto orientadas à decisão. Tudo com performance e consistência visual.', 'hotelequip-clean'); ?></p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a class="hc-btn hc-btn--primary" href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>">
          <?php esc_html_e('Explorar categorias', 'hotelequip-clean'); ?>
        </a>
        <a class="hc-btn" href="<?php echo esc_url(home_url('/contactos/')); ?>">
          <?php esc_html_e('Falar com a equipa', 'hotelequip-clean'); ?>
        </a>
      </div>
    </section>

    <div class="hc-sectionTitle">
      <h2><?php esc_html_e('Destaques', 'hotelequip-clean'); ?></h2>
      <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>"><?php esc_html_e('Ver todos', 'hotelequip-clean'); ?></a>
    </div>

    <?php
    if (function_exists('wc_get_products')) {
      $products = wc_get_products([
        'status' => 'publish',
        'limit' => 8,
        'orderby' => 'date',
        'order' => 'DESC',
      ]);

      if (!empty($products)) {
        echo '<ul class="products columns-4">';
        foreach ($products as $product) {
          $post_object = get_post($product->get_id());
          setup_postdata($GLOBALS['post'] =& $post_object);
          wc_get_template_part('content', 'product');
        }
        wp_reset_postdata();
        echo '</ul>';
      }
    }
    ?>
  </div>
</main>

<?php get_footer(); ?>

