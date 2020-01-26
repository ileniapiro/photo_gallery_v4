$('[data-fancybox="gallery"]').fancybox({
  gutter: 50,
  keyboard: true,
  arrows: true,
  smallBtn: "auto",
  animationEffect: "zoom",
  transitionEffect: "fade",
  animationDuration: 1000,
});
const $gallery_items = $(".gallery a");

$("#search").on("keyup", function(event) {
  const $search = $(event.target).val().toUpperCase();
  for (i = 0 ; i < $gallery_items.length ; i += 1) {
    const $search_item = $gallery_items.eq(i);
    if ($search_item.attr("data-caption").toUpperCase().indexOf($search) === -1) {
      $search_item.fadeOut();
    }
    if ($search_item.attr("data-caption").toUpperCase().indexOf($search) !== -1) {
      $search_item.hide().fadeIn();
    }
  }
});
