!(function (t) {
  "use strict";
  if (
    (t(window).on("load", function () {
      t(".preloader").fadeOut(), t(".swiper-fade").addClass("fade-ani");
    }),
    t(".preloader").length > 0 &&
      t(".preloaderCls").each(function () {
        t(this).on("click", function (e) {
          e.preventDefault(), t(".preloader").css("display", "none");
        });
      }),
    (t.fn.thmobilemenu = function (e) {
      var a = t.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          appendElement: '<span class="th-mean-expand"></span>',
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        e
      );
      return this.each(function () {
        var e = t(this);
        function s() {
          e.toggleClass(a.bodyToggleClass);
          var s = "." + a.subMenuClass;
          t(s).each(function () {
            t(this).hasClass(a.subMenuToggleClass) &&
              (t(this).removeClass(a.subMenuToggleClass),
              t(this).css("display", "none"),
              t(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        e.find("." + a.subMenuParent).each(function () {
          var e = t(this).find("ul");
          e.addClass(a.subMenuClass),
            e.css("display", "none"),
            t(this).addClass(a.subMenuParent),
            t(this).addClass(a.thSubMenuParent),
            t(this).children("a").append(a.appendElement);
        });
        var o = "." + a.thSubMenuParent + " > a";
        t(o).each(function () {
          t(this).on("click", function (e) {
            var s, o;
            e.preventDefault(),
              (s = t(this).parent()),
              (o = s.children("ul")).length > 0 &&
                (s.toggleClass(a.subMenuParentToggle),
                o.slideToggle(a.toggleSpeed),
                o.toggleClass(a.subMenuToggleClass));
          });
        }),
          t(a.menuToggleBtn).each(function () {
            t(this).on("click", function () {
              s();
            });
          }),
          e.on("click", function (t) {
            t.stopPropagation(), s();
          }),
          e.find("div").on("click", function (t) {
            t.stopPropagation();
          });
      });
    }),
    t(".th-menu-wrapper").thmobilemenu(),
    t(window).scroll(function () {
      t(this).scrollTop() > 500
        ? (t(".sticky-wrapper").addClass("sticky"),
          t(".category-menu").addClass("close-category"))
        : (t(".sticky-wrapper").removeClass("sticky"),
          t(".category-menu").removeClass("close-category"));
    }),
    t(".scroll-top").length > 0)
  ) {
    var e = document.querySelector(".scroll-top"),
      a = document.querySelector(".scroll-top path"),
      s = a.getTotalLength();
    (a.style.transition = a.style.WebkitTransition = "none"),
      (a.style.strokeDasharray = s + " " + s),
      (a.style.strokeDashoffset = s),
      a.getBoundingClientRect(),
      (a.style.transition = a.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var o = function () {
      var e = t(window).scrollTop(),
        o = t(document).height() - t(window).height(),
        i = s - (e * s) / o;
      a.style.strokeDashoffset = i;
    };
    o(), t(window).scroll(o);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(e).addClass("show")
        : jQuery(e).removeClass("show");
    }),
      jQuery(e).on("click", function (t) {
        return (
          t.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 750),
          !1
        );
      });
  }
  t("[data-bg-src]").length > 0 &&
    t("[data-bg-src]").each(function () {
      var e = t(this).attr("data-bg-src");
      t(this).css("background-image", "url(" + e + ")"),
        t(this).removeAttr("data-bg-src").addClass("background-image");
    }),
    t("[data-bg-color]").length > 0 &&
      t("[data-bg-color]").each(function () {
        var e = t(this).attr("data-bg-color");
        t(this).css("background-color", e), t(this).removeAttr("data-bg-color");
      }),
    t("[data-border]").each(function () {
      var e = t(this).data("border");
      t(this).css("--th-border-color", e);
    }),
    t("[data-mask-src]").length > 0 &&
      t("[data-mask-src]").each(function () {
        var e = t(this).attr("data-mask-src");
        t(this).css({
          "mask-image": "url(" + e + ")",
          "-webkit-mask-image": "url(" + e + ")",
        }),
          t(this).addClass("bg-mask"),
          t(this).removeAttr("data-mask-src");
      }),
    t(".th-slider").each(function () {
      var e = t(this),
        a = t(this).data("slider-options"),
        s = e.find(".slider-prev"),
        o = e.find(".slider-next"),
        i = e.find(".slider-pagination"),
        n = a.autoplay,
        r = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween ? a.spaceBetween : 30,
          loop: 0 != a.loop,
          speed: a.speed ? a.speed : 1e3,
          autoplay: n || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: o.get(0), prevEl: s.get(0) },
          pagination: {
            el: i.get(0),
            clickable: !0,
            renderBullet: function (t, e) {
              return (
                '<span class="' +
                e +
                '" aria-label="Go to Slide ' +
                (t + 1) +
                '"></span>'
              );
            },
          },
        },
        l = JSON.parse(e.attr("data-slider-options"));
      l = t.extend({}, r, l);
      new Swiper(e.get(0), l);
      if (
        (t(".slider-area").length > 0 &&
          t(".slider-area")
            .closest(".container")
            .parent()
            .addClass("arrow-wrap"),
        e.hasClass("slider-tab"))
      )
        var c = new Swiper(e.get(0), l);
      else if (e.hasClass("tab-view")) var p = new Swiper(e.get(0), l);
      else new Swiper(e.get(0), l);
      p & c && ((p.controller.control = c), (c.controller.control = p));
    }),
    t("[data-ani]").each(function () {
      var e = t(this).data("ani");
      t(this).addClass(e);
    }),
    t("[data-ani-delay]").each(function () {
      var e = t(this).data("ani-delay");
      t(this).css("animation-delay", e);
    }),
    t("[data-slider-prev], [data-slider-next]").on("click", function () {
      (t(this).data("slider-prev") || t(this).data("slider-next"))
        .split(", ")
        .forEach(function (e) {
          var a = t(e);
          if (a.length) {
            var s = a[0].swiper;
            s && (t(this).data("slider-prev") ? s.slidePrev() : s.slideNext());
          }
        });
    }),
    (t.fn.activateSliderThumbs = function (e) {
      var a = t.extend({ sliderTab: !1, tabButton: ".tab-btn" }, e);
      return this.each(function () {
        var e = t(this),
          s = e.find(a.tabButton),
          o = t('<span class="indicator"></span>').appendTo(e),
          i = e.data("slider-tab"),
          n = t(i)[0].swiper;
        if (
          (s.on("click", function (e) {
            e.preventDefault();
            var s = t(this);
            if (
              (s.addClass("active").siblings().removeClass("active"),
              c(s),
              s.prevAll(a.tabButton).addClass("list-active"),
              s.nextAll(a.tabButton).removeClass("list-active"),
              a.sliderTab)
            ) {
              var o = s.index();
              n.slideTo(o);
            }
          }),
          a.sliderTab)
        ) {
          n.on("slideChange", function () {
            var t = n.realIndex,
              e = s.eq(t);
            e.addClass("active").siblings().removeClass("active"),
              c(e),
              e.prevAll(a.tabButton).addClass("list-active"),
              e.nextAll(a.tabButton).removeClass("list-active");
          });
          var r = n.activeIndex,
            l = s.eq(r);
          l.addClass("active").siblings().removeClass("active"),
            c(l),
            l.prevAll(a.tabButton).addClass("list-active"),
            l.nextAll(a.tabButton).removeClass("list-active");
        }
        function c(t) {
          var e = t.position(),
            a = parseInt(t.css("margin-top")) || 0,
            s = parseInt(t.css("margin-left")) || 0;
          o.css("--height-set", t.outerHeight() + "px"),
            o.css("--width-set", t.outerWidth() + "px"),
            o.css("--pos-y", e.top + a + "px"),
            o.css("--pos-x", e.left + s + "px");
        }
      });
    }),
    t(".hero-thumb").length &&
      t(".hero-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      });
  var i = ".ajax-contact",
    n = '[name="email"]',
    r = t(".form-messages");
  function l() {
    var e = t(i).serialize();
    (function () {
      var e,
        a = !0;
      function s(s) {
        s = s.split(",");
        for (var o = 0; o < s.length; o++)
          (e = i + " " + s[o]),
            t(e).val()
              ? (t(e).removeClass("is-invalid"), (a = !0))
              : (t(e).addClass("is-invalid"), (a = !1));
      }
      s(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        t(n).val() &&
        t(n)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (t(n).removeClass("is-invalid"), (a = !0))
          : (t(n).addClass("is-invalid"), (a = !1));
      return a;
    })() &&
      jQuery
        .ajax({ url: t(i).attr("action"), data: e, type: "POST" })
        .done(function (e) {
          r.removeClass("error"),
            r.addClass("success"),
            r.text(e),
            t(i + ' input:not([type="submit"]),' + i + " textarea").val("");
        })
        .fail(function (t) {
          r.removeClass("success"),
            r.addClass("error"),
            "" !== t.responseText
              ? r.html(t.responseText)
              : r.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function c(e, a, s, o) {
    t(a).on("click", function (a) {
      a.preventDefault(), t(e).addClass(o);
    }),
      t(e).on("click", function (a) {
        a.stopPropagation(), t(e).removeClass(o);
      }),
      t(e + " > div").on("click", function (a) {
        a.stopPropagation(), t(e).addClass(o);
      }),
      t(s).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), t(e).removeClass(o);
      });
  }
  function p(t) {
    return parseInt(t, 10) || 0;
  }
  t(i).on("submit", function (t) {
    t.preventDefault(), l();
  }),
    c(".popup-search-box", ".searchBoxToggler", ".searchClose", "show"),
    c(".sidemenu-cart", ".sideMenuToggler", ".sideMenuCls", "show"),
    c(".sidemenu-info", ".sideMenuInfo", ".sideMenuCls", "show"),
    t(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    t(".popup-video").magnificPopup({ type: "iframe" }),
    t(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    (t.fn.sectionPosition = function (e, a) {
      t(this).each(function () {
        var s,
          o,
          i,
          n,
          r,
          l = t(this);
        (s = Math.floor(l.height() / 2)),
          (o = l.attr(e)),
          (i = l.attr(a)),
          (n = p(t(i).attr("data-original-padding-top"))),
          (r = p(t(i).attr("data-original-padding-bottom"))),
          n ||
            (t(i).attr("data-original-padding-top", t(i).css("padding-top")),
            (n = p(t(i).attr("data-original-padding-top")))),
          r ||
            (t(i).attr(
              "data-original-padding-bottom",
              t(i).css("padding-bottom")
            ),
            (r = p(t(i).attr("data-original-padding-bottom")))),
          "top-half" === o
            ? (t(i).css("padding-bottom", r + s + "px"),
              l.css("margin-top", "-" + s + "px"))
            : "bottom-half" === o &&
              (t(i).css("padding-top", n + s + "px"),
              l.css("margin-bottom", "-" + s + "px"));
      });
    });
  function d() {
    t("[data-sec-pos]").length &&
      t("[data-sec-pos]").imagesLoaded(function () {
        t("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
      });
  }
  d(),
    t(window).on("resize", function () {
      t("[data-sec-pos]").each(function () {
        var e = t(this).attr("data-pos-for");
        t(e).css("padding-top", t(e).attr("data-original-padding-top")),
          t(e).css("padding-bottom", t(e).attr("data-original-padding-bottom"));
      }),
        d();
    }),
    t(".filter-active").imagesLoaded(function () {
      if (t(".filter-active").length > 0) {
        var e = t(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
        t(".filter-menu-active").on("click", "button", function () {
          var a = t(this).attr("data-filter");
          e.isotope({ filter: a });
        }),
          t(".filter-menu-active").on("click", "button", function (e) {
            e.preventDefault(),
              t(this).addClass("active"),
              t(this).siblings(".active").removeClass("active");
          });
      }
    }),
    t(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var e = ".masonary-active, .woocommerce-Reviews .comment-list";
        t(e).length > 0 &&
          t(e).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          t('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            t(e).isotope({ filter: "*" });
          });
      }
    ),
    t(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (t.fn.shapeMockup = function () {
      t(this).each(function () {
        var e = t(this),
          a = e.data("top"),
          s = e.data("right"),
          o = e.data("bottom"),
          i = e.data("left");
        e.css({ top: a, right: s, bottom: o, left: i })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    t(".shape-mockup") && t(".shape-mockup").shapeMockup(),
    t(".progress-bar").waypoint(
      function () {
        t(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    (t.fn.countdown = function () {
      t(this).each(function () {
        var e = t(this),
          a = new Date(e.data("offer-date")).getTime();
        function s(t) {
          return e.find(t);
        }
        var o = setInterval(function () {
          var t = new Date().getTime(),
            i = a - t,
            n = Math.floor(i / 864e5),
            r = Math.floor((i % 864e5) / 36e5),
            l = Math.floor((i % 36e5) / 6e4),
            c = Math.floor((i % 6e4) / 1e3);
          n < 10 && (n = "0" + n),
            r < 10 && (r = "0" + r),
            l < 10 && (l = "0" + l),
            c < 10 && (c = "0" + c),
            i < 0
              ? (clearInterval(o),
                e.addClass("expired"),
                e.find(".message").css("display", "block"))
              : (s(".day").html(n),
                s(".hour").html(r),
                s(".minute").html(l),
                s(".seconds").html(c));
        }, 1e3);
      });
    }),
    t(".counter-list").length && t(".counter-list").countdown(),
    t(".date-pick").datetimepicker({
      timepicker: !1,
      datepicker: !0,
      format: "d-m-y",
      step: 10,
    }),
    t(".time-pick").datetimepicker({ datepicker: !1, format: "H:i", step: 30 }),
    t(".date-time-pick").datetimepicker({}),
    t(".th-btn.style-border").each(function () {
      var e = t(this).text();
      t(this).empty(),
        t(this).append('<span class="top-line"></span>'),
        t(this).append('<span class="text">' + e + "</span>"),
        t(this).append('<span class="bottom-line-1"></span>'),
        t(this).append('<span class="bottom-line-2"></span>');
    }),
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      TweenMax,
      ScrollToPlugin
    ),
    gsap.config({ nullTargetWarn: !1 });
  ScrollSmoother.create({
    smooth: 1.35,
    effects: !0,
    smoothTouch: !0,
    normalizeScroll: !1,
    ignoreMobileResize: !0,
  });
  function u(t) {
    let e = document.querySelectorAll(t);
    e && 0 !== e.length
      ? e.forEach((t) => {
          let e = gsap.timeline(),
            a = new SplitText(t, { type: "words,chars" });
          e.from(a.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }),
            ScrollTrigger.create({
              animation: e,
              trigger: t,
              start: "top 90%",
              end: "bottom 60%",
              scrub: !1,
              markers: !1,
              toggleActions: "play none none none",
            });
        })
      : console.error("No elements found for selector: " + t);
  }
  t(document).ready(function () {
    function e() {
      var e;
      t(".sticky-wrapper").hasClass("sticky")
        ? t("#smooth-wrapper").css("padding-top", "0")
        : ((e = t(".th-header").outerHeight()),
          t("#smooth-wrapper").css("padding-top", e + "px"));
    }
    (e(),
    t(window).resize(function () {
      e();
    }),
    "undefined" != typeof MutationObserver) &&
      new MutationObserver(function (t) {
        t.forEach(function (t) {
          "attributes" === t.type && "class" === t.attributeName && e();
        });
      }).observe(document.querySelector(".sticky-wrapper"), { attributes: !0 });
    t(document).mousemove(function (e) {
      var a = e.pageX,
        s = e.pageY;
      t(".custom-element").animate({ left: a, top: s }, 300);
    });
  }),
    gsap.utils.toArray(".title-ani").forEach((t) => {
      const e = gsap.timeline({
          scrollTrigger: {
            trigger: t,
            start: "top 90%",
            end: "bottom 60%",
            scrub: !1,
            markers: !1,
            toggleActions: "play none none none",
          },
        }),
        a = new SplitText(t, { type: "words, lines" });
      gsap.set(t, { perspective: 500 }),
        a.split({ type: "lines" }),
        e.from(a.lines, {
          duration: 1.2,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: !0,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
    }),
    gsap.utils.toArray(".text-ani").forEach((t) => {
      const e = gsap.timeline({
          scrollTrigger: {
            trigger: t,
            start: "top 90%",
            duration: 2,
            end: "bottom 60%",
            scrub: !1,
            markers: !1,
            toggleActions: "play none none none",
          },
        }),
        a = new SplitText(t, { type: "lines" });
      gsap.set(t, { perspective: 400 }),
        a.split({ type: "lines" }),
        e.from(a.lines, {
          duration: 1,
          delay: 0.5,
          opacity: 0,
          rotationX: -80,
          force3D: !0,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
    }),
    t(document).ready(function () {
      var e = t(".tx-split-text");
      0 != e.length &&
        (gsap.registerPlugin(SplitText),
        e.each(function (e, a) {
          (a.split = new SplitText(a, {
            type: "lines,words,chars",
            linesClass: "split-line",
          })),
            gsap.set(a, { perspective: 400 }),
            t(a).hasClass("split-in-fade") &&
              gsap.set(a.split.chars, { opacity: 0, ease: "Back.easeOut" }),
            t(a).hasClass("split-in-right") &&
              gsap.set(a.split.chars, {
                opacity: 0,
                x: "50",
                ease: "Back.easeOut",
              }),
            t(a).hasClass("split-in-left") &&
              gsap.set(a.split.chars, {
                opacity: 0,
                x: "-50",
                autoAlpha: 0,
                ease: "circ.out",
              }),
            t(a).hasClass("split-in-up") &&
              gsap.set(a.split.chars, {
                opacity: 0,
                y: "80",
                ease: "circ.out",
              }),
            t(a).hasClass("split-in-down") &&
              gsap.set(a.split.chars, {
                opacity: 0,
                y: "-80",
                ease: "circ.out",
              }),
            t(a).hasClass("split-in-rotate") &&
              gsap.set(a.split.chars, {
                opacity: 0,
                rotateX: "50deg",
                ease: "circ.out",
              }),
            t(a).hasClass("split-in-scale") &&
              gsap.set(a.split.chars, {
                opacity: 0,
                scale: "0.5",
                ease: "circ.out",
              }),
            (a.anim = gsap.to(a.split.chars, {
              scrollTrigger: { trigger: a, start: "top 90%" },
              x: "0",
              y: "0",
              rotateX: "0",
              scale: 1,
              opacity: 1,
              duration: 1,
              stagger: 0.01,
              autoAlpha: 1,
            }));
        }));
    }),
    t(".title-ani2").length > 0 && u(".title-ani2"),
    t(".hero-style2 .hero-title2").length > 0 && u(".hero-style2 .hero-title2"),
    t(".hero-style2 .hero-title3").length > 0 && u(".hero-style2 .hero-title3"),
    t(".sub-title2").length > 0 && u(".sub-title2"),
    t(".sub-title2 + .sec-title").length > 0 && u(".sub-title2 + .sec-title"),
    t(".sub-title3").length > 0 && u(".sub-title3"),
    t(".sub-title3 + .sec-title").length > 0 && u(".sub-title3 + .sec-title"),
    t(".sub-title4").length > 0 && u(".sub-title4"),
    t(".sub-title4 + .sec-title").length > 0 && u(".sub-title4 + .sec-title"),
    gsap.utils.toArray(".flipX").forEach((t, e) => {
      gsap.set(t, { opacity: 0.7 });
      let a = gsap.timeline();
      a.set(t, { position: "relative" }),
        a.to(t, {
          scrollTrigger: {
            trigger: t,
            scrub: 0.5,
            duration: 1.5,
            start: "top bottom+=100",
            end: "bottom center+=250",
            markers: !1,
          },
          scale: 1,
          opacity: 1,
          rotateY: 0,
        });
    }),
    gsap.utils.toArray(".flipY").forEach((t, e) => {
      gsap.set(t, { opacity: 0.7 });
      let a = gsap.timeline();
      a.set(t, { position: "relative" }),
        a.to(t, {
          scrollTrigger: {
            trigger: t,
            scrub: 2,
            duration: 1.5,
            start: "top bottom+=100",
            end: "bottom bottom+=100",
            markers: !1,
          },
          scale: 1,
          opacity: 1,
          rotateX: 0,
        });
    });
  const g = document.querySelectorAll(".gspin");
  Array.from(g).forEach((t) => {
    t &&
      gsap
        .timeline({
          scrollTrigger: {
            trigger: t,
            start: "top 95%",
            end: "bottom -95%",
            scrub: !0,
            markers: !1,
          },
        })
        .to(t, { duration: 0.4, rotation: 720, ease: "power2.out" });
  }),
    (function () {
      const t = document.querySelector(".img-box6 .img1 img");
      if (t) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: t,
              start: "top 95%",
              end: "bottom -95%",
              scrub: !0,
              markers: !1,
            },
          })
          .to(t, { duration: 0.1, rotation: 360, ease: "power2.out" });
      }
    })(),
    t(".color-switch-btns button").each(function () {
      const e = t(this),
        a = e.data("color");
      e.css("--theme-color", a),
        e.on("click", function () {
          const e = t(this).data("color");
          t(":root").css("--theme-color", e);
        });
    }),
    t("#thcolorpicker").on("input", function () {
      const e = t(this).val();
      var a;
      (a = e), t(":root").css("--theme-color", a);
    }),
    t(document).on("click", ".switchIcon", function () {
      t(".color-scheme").toggleClass("active");
    }),
    t("#ship-to-different-address-checkbox").on("change", function () {
      t(this).is(":checked")
        ? t("#ship-to-different-address").next(".shipping_address").slideDown()
        : t("#ship-to-different-address").next(".shipping_address").slideUp();
    }),
    t(".woocommerce-form-login-toggle a").on("click", function (e) {
      e.preventDefault(), t(".woocommerce-form-login").slideToggle();
    }),
    t(".woocommerce-form-coupon-toggle a").on("click", function (e) {
      e.preventDefault(), t(".woocommerce-form-coupon").slideToggle();
    }),
    t(".shipping-calculator-button").on("click", function (e) {
      e.preventDefault(),
        t(this).next(".shipping-calculator-form").slideToggle();
    }),
    t('.wc_payment_methods input[type="radio"]:checked')
      .siblings(".payment_box")
      .show(),
    t('.wc_payment_methods input[type="radio"]').each(function () {
      t(this).on("change", function () {
        t(".payment_box").slideUp(),
          t(this).siblings(".payment_box").slideDown();
      });
    }),
    t(".rating-select .stars a").each(function () {
      t(this).on("click", function (e) {
        e.preventDefault(),
          t(this).siblings().removeClass("active"),
          t(this).parent().parent().addClass("selected"),
          t(this).addClass("active");
      });
    }),
    t(".quantity-plus").each(function () {
      t(this).on("click", function (e) {
        e.preventDefault();
        var a = t(this).siblings(".qty-input"),
          s = parseInt(a.val(), 10);
        isNaN(s) || a.val(s + 1);
      });
    }),
    t(".quantity-minus").each(function () {
      t(this).on("click", function (e) {
        e.preventDefault();
        var a = t(this).siblings(".qty-input"),
          s = parseInt(a.val(), 10);
        !isNaN(s) && s > 1 && a.val(s - 1);
      });
    })
    // window.addEventListener(
    //   "contextmenu",
    //   function (t) {
    //     t.preventDefault();
    //   },
    //   !1
    // ),
    // (document.onkeydown = function (t) {
    //   return (
    //     123 != event.keyCode &&
    //     (!t.ctrlKey || !t.shiftKey || t.keyCode != "I".charCodeAt(0)) &&
    //     (!t.ctrlKey || !t.shiftKey || t.keyCode != "C".charCodeAt(0)) &&
    //     (!t.ctrlKey || !t.shiftKey || t.keyCode != "J".charCodeAt(0)) &&
    //     (!t.ctrlKey || t.keyCode != "U".charCodeAt(0)) &&
    //     void 0
    //   );
    // });
})
(jQuery);
