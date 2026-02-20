<?php
if (!defined('ABSPATH')) {
  exit;
}

get_header();
?>

<main id="main" class="hc-main">
  <div class="hc-container">
    <div class="hc-card" style="padding:18px;">
      <h1 style="margin:0 0 10px;"><?php esc_html_e('Página não encontrada', 'hotelequip-clean'); ?></h1>
      <p style="margin:0 0 14px;color:var(--hc-muted);">
        <?php esc_html_e('O link pode estar desatualizado ou a página foi removida.', 'hotelequip-clean'); ?>
      </p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a class="hc-btn hc-btn--primary" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Voltar ao início', 'hotelequip-clean'); ?></a>
        <?php if (function_exists('wc_get_page_id')): ?>
          <a class="hc-btn" href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>"><?php esc_html_e('Ir para a loja', 'hotelequip-clean'); ?></a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</main>

<?php get_footer(); ?>

