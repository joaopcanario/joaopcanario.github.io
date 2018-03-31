$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
 $(document).click(function (event) {
   const clickover = $(event.target);
   const _opened = $(".navbar-collapse").hasClass("show");

   if (_opened === true && !clickover.hasClass("navbar-toggler")) {
     $(".navbar-toggler").click();
   }
 });
});

$(function () {
  const $content = $('#jsonContent');
  const data = {
    rss_url: 'https://medium.com/feed/@joaopcanario'
  };

  $.get('https://api.rss2json.com/v1/api.json', data, function (response) {
    if (response.status == 'ok') {
      let output = '';

      $.each(response.items, function (k, item) {

        if (item.categories.length > 0) {
          const border = ($(window).width() < 768) ? `border-0` : ``;

          output += `<div class="col-sm-6"><div class="card ${border} mb-3"">`;

          const srcStart = item.description.indexOf(`<figure><img alt="" src="`) + 25;
          const srcEnd = item.description.indexOf(`"></figure>`);

          const src = item.description.substring(srcStart, srcEnd);

          output += `<img class="card-img-top" src="${src}" alt="">`;
          output += `<div class="card-body">`;
          output += `<h5 class="card-title"><a href="${item.link}">${item.title}</a></h5>`;

          const startSub = item.description.indexOf(`<h4>`) + 4;
          const endSub = item.description.indexOf(`</h4>`);

          output += `<p class="card-text">${item.description.substring(startSub, endSub)}</p>`;

          const dayMonth = `<small>${$.format.date(item.pubDate, "dd/MM")}</small>`
          const pubDate = `${dayMonth}<br>${$.format.date(item.pubDate, "yyyy")}`

          output += `<div class="card-img-overlay"><h5 class="card-title">${pubDate}</h5></div>`;
          output += '</div></div></div>';

          return k <= 2;
        }
      });

      $content.html(output);
    }
  });
});