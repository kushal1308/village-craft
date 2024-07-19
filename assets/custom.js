$(document).ready(function () {
  $(".header__icons").css("opacity", "1");
}),
  document.addEventListener("DOMContentLoaded", function () {
    if (
      ((document.querySelector(".header .custom-search").style.opacity = "1"),
      window.innerWidth > 989)
    ) {
      var listMenuItems = document.querySelectorAll(".list-menu li");
      listMenuItems.forEach(function (item) {
        item.addEventListener("mouseenter", function () {
          this.querySelector("details") &&
            ((this.querySelector("details").open = !0),
            this.querySelector("summary").setAttribute("aria-expanded", !0));
        }),
          item.addEventListener("mouseleave", function () {
            this.querySelector("details") &&
              ((this.querySelector("details").open = !1),
              this.querySelector("summary").setAttribute("aria-expanded", !1));
          });
      });
    }
  });
let newLetter = document.querySelector(".newsletter_wrapper"),
  tabButton = document.querySelectorAll(".tab-button"),
  contents = document.querySelectorAll(".content");
(newLetter.onclick = (e) => {
  let id = e.target.dataset.id;
  id &&
    (tabButton.forEach((btn) => {
      btn.classList.remove("active");
    }),
    e.target.classList.add("active"),
    contents.forEach((content) => {
      content.classList.remove("active");
    }),
    document.getElementById(id).classList.add("active"));
}),
  $(document).on(
    "click",
    ".product_coloropti .variant_divval .variant_cuatom_se",
    function () {
      $(this)
        .parents(".grid__item")
        .find(".product_coloropti .variant_divval .variant_cuatom_se")
        .removeClass("active"),
        $(this).addClass("active"),
        $(this)
          .parents(".grid__item")
          .find(".card__inner .media .provar_img")
          .removeClass("active");
      var variant_id_sel = $(this).find("label").attr("data_variant_id");
      $(this)
        .parents(".grid__item")
        .find(".card__inner .media img")
        .each(function () {
          var var_pro_id = $(this).attr("data_variant_id");
          var_pro_id == variant_id_sel
            ? $(this).addClass("active")
            : $(this).removeClass("active");
        });
    }
  ),
  $(".product_variant_option").slick({
    dots: !1,
    infinite: !1,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

$(".option_blocks input").click(function () {
  var color_name = $(this)
    .parent(".option_blocks")
    .find(".col_color_name")
    .text();
  $(".choose_color").text(color_name);
});
//# sourceMappingURL=/s/files/1/0282/8425/6353/t/173/assets/custom.js.map?v=1715313651
