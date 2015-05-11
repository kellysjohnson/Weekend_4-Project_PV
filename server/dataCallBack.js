//var etsyapiKey =  'pvdzamk758818jg9jxk19akq';
//var etsyuser = '/users/' + $('.js-query').val();
//var etsydomain = 'https://openapi.etsy.com/v2';

var domain = 'https://api.github.com/users/';
var username = 'kellysjohnson/';
var apiKey = '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d';

var displayData = function (data) {
    // User object is returned JSON property
    console.log("AJAX here hello!");
    var user = data;
    // Dynamically create container
    var $userDiv = $('<div class="well well-sm super"></div>');
    var $name = $('<div class="user-name"></div>');
    // Build img + username header
    $name.append("<img src='" + user.avatar_url + "'>");
    $name.append('<h3><a href="' + user.html_url + '">' + user.login + '</a></h3>');
    $userDiv.append($name);
    //$('.pictureCarrier').append($userDiv);

};

module.exports = displayData;

function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'json',
        crossDomain: true,
        url: encodeURI(domain + username + apiKey),
        complete: function() {
            console.log("complete!")},
        success: function(data) {
            displayData(data.results);
            console.log(data.results);
        }
    });

    // Will be used with search button feature button class=js-query
    // $('.js-query').val()

    //$('.js-query').keyup(function(key){
    //    //console.log(key);
    //
    //    if(key.keyCode ==13){
    //        $('.js-search').click();
    //    }
    //});
}