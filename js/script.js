$(function () {
  var nav = $('.navbar');
  var navTop = nav.offset().top;
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop >= navTop) {
      nav.addClass('fixed')
    } else if (winTop <= navTop) {
      nav.removeClass('fixed')
    }
  });
});

// $(function () {
//     var about = $('.about');
//     var works = $('.heading-works');
//     var skills = $('.skills');
//     var aboutTop = about.offset().top;
//     var worksTop = works.offset().top;
//     var skillsTop = skills.offset().top;
//     $(window).scroll(function () {
//         var winTop = $(this).scrollTop();
//         if (winTop >= aboutTop) {
//             about.addClass('about-fixed')
//         } else if (winTop >= skillsTop) {
//             about.removeClass('about-fixed')
//         }
//     });
// });

