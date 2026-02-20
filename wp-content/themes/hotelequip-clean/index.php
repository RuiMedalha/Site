<?php
if (!defined('ABSPATH')) {
  exit;
}

get_header();
?>

<main id="main" class="hc-main">
  <div class="hc-container">
    <div class="hc-page">
      <?php if (have_posts()): ?>
        <?php while (have_posts()): the_post(); ?>
          <article <?php post_class('hc-card'); ?> style="padding:16px;margin-bottom:16px;">
            <h2 style="margin:0 0 8px;">
              <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h2>
            <div style="color:var(--hc-muted);">
              <?php the_excerpt(); ?>
            </div>
          </article>
        <?php endwhile; ?>
      <?php else: ?>
        <div class="hc-card" style="padding:16px;">
          <h1 style="margin:0 0 8px;"><?php esc_html_e('Nada encontrado', 'hotelequip-clean'); ?></h1>
          <p style="margin:0;color:var(--hc-muted);"><?php esc_html_e('Tenta pesquisar por outro termo.', 'hotelequip-clean'); ?></p>
        </div>
      <?php endif; ?>
    </div>
  </div>
</main>

<?php
get_footer();

