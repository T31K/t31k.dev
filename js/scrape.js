$("#followerNumber").hide();
$.getJSON(
  "https://api.allorigins.win/get?url=" +
    encodeURIComponent("https://t31k.medium.com/"),
  function (data) {
    let { contents } = data;
    let followerNumber = contents.substring(
      contents.indexOf("Followers") - 4,
      contents.indexOf("Followers") - 1
    );
    $("#followerNumber").text(followerNumber);
    setTimeout(function () {
      $("#followerNumber").show();
      $(".lds-dual-ring").hide();
    }, 4000);
  }
);
