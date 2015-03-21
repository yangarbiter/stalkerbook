var page = require('webpage').create();

var data = {}

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.viewportSize = {
  width: 1920,
  height: 1080
};

page.open("http://facebook.com", function(status) {
  page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js", function() {
    if ( status === "success" ) {
      page.evaluate(function() {
        document.querySelector("input[name='email']").value = "";
        document.querySelector("input[name='pass']").value = "";
        document.querySelector("#login_form").submit();

        console.log("Login submitted!");
      });
      window.setTimeout(function () {
        var t = page.evaluate(function() {
          var target = "your target friend's name"
          document.getElementById("u_0_2c").value = target;
          return document.querySelector("input[data-reactid='.2u.$ordered_list.$your-friend's-fb-id.0.0.1.2.1']").innerHTML;
        });
        page.render('colorwheel.png');
        console.log(t);
        phantom.exit();
      }, 10000);
    }
  });
});
