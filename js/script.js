$(document).ready(function() {

  function hideAll() {
    $('#fanfare').hide();
    $('#heartwants').hide();
    $('#BRNT').hide();
    $('#HUSH').hide();
  }

  hideAll();

  $('.albumart').click(function() {
    hideAll();

    switch ($(this).attr("id")) {
      case "fanfare_img":
        $('#fanfare').slideToggle().show();
        break;
      case "heartwants_img":
        $('#heartwants').slideToggle().show();
        break;
      case "BRNT_img":
        $('#BRNT').slideToggle().show();
        break;
      case "HUSH_img":
        $('#HUSH').slideToggle().show();
        break;
    }

    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
    });

  });


});
