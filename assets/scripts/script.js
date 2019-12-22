window.onload = function () {
            let url = "https://api.darksky.net/forecast/19d4aef9221d5ce3862530f322baf2bb/37.8267,-122.4233";
            var proxy = 'https://cors-anywhere.herokuapp.com/';

  $.ajax({
    url: proxy + url,
    success:function(data) { console.log(data);}
  });
}