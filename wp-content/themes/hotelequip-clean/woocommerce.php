<?php
if (!defined('ABSPATH')) {
  exit;
}

get_header();
?>

<main id="main" class="hc-main">
  <div class="hc-container">
    <div class="hc-page">
      <?php woocommerce_content(); ?>
    </div>
  </div>
</main>

<?php
get_footer();

