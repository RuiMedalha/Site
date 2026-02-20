<?php
if (!defined('ABSPATH')) {
  exit;
}
?>

<footer class="hc-footer" role="contentinfo">
  <div class="hc-container">
    <div class="hc-footerGrid">
      <div class="hc-foot-4">
        <div class="hc-pill"><?php echo esc_html(get_bloginfo('name')); ?></div>
        <p style="margin:10px 0 0;">
          <?php esc_html_e('Loja WooCommerce com design clean, rápida e focada em conversão.', 'hotelequip-clean'); ?>
        </p>
      </div>
      <div class="hc-foot-4">
        <strong><?php esc_html_e('Loja', 'hotelequip-clean'); ?></strong>
        <div style="margin-top:10px;">
          <?php
          wp_nav_menu([
            'theme_location' => 'footer',
            'container' => false,
            'fallback_cb' => false,
            'depth' => 1,
          ]);
          ?>
        </div>
      </div>
      <div class="hc-foot-4">
        <strong><?php esc_html_e('Ajuda', 'hotelequip-clean'); ?></strong>
        <ul style="margin:10px 0 0;padding-left:18px;">
          <li><a href="<?php echo esc_url(home_url('/contactos/')); ?>"><?php esc_html_e('Contactos', 'hotelequip-clean'); ?></a></li>
          <li><a href="<?php echo esc_url(home_url('/envios-e-devolucoes/')); ?>"><?php esc_html_e('Envios e devoluções', 'hotelequip-clean'); ?></a></li>
          <li><a href="<?php echo esc_url(home_url('/politica-de-privacidade/')); ?>"><?php esc_html_e('Privacidade', 'hotelequip-clean'); ?></a></li>
        </ul>
      </div>
    </div>

    <div style="margin-top:18px;border-top:1px solid var(--hc-border);padding-top:14px;display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;align-items:center;">
      <span>© <?php echo esc_html((string) gmdate('Y')); ?> <?php echo esc_html(get_bloginfo('name')); ?></span>
      <span><?php esc_html_e('Feito para performance e UX.', 'hotelequip-clean'); ?></span>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>

