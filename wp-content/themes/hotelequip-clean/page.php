<?php
if (!defined('ABSPATH')) {
  exit;
}

get_header();
?>

<main id="main" class="hc-main">
  <div class="hc-container">
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
      <article <?php post_class('hc-card'); ?> style="padding:18px;">
        <h1 style="margin:0 0 10px;"><?php the_title(); ?></h1>
        <div class="content" style="color:var(--hc-muted);">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; endif; ?>
  </div>
</main>

<?php
get_footer();

