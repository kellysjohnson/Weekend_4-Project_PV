var hello = "Hello New World!";

var $name = '<p class="head"><span7> Kelly Johnson </span7></p>';
var $address = '<p> Columbia Heights, MN </p>';
var $phoneNum = '<p> 734-674-6525 </p>';

var summary = '<p class="sum"><span8> Continuous learner, quirky, creative, collaborative. Passionate about science, technology, and punny words. Energetic and Eager to Engange and Elevate my coding skills. </span8></p>';

var professionalThings = '<div><div class="col-md-6 pdev"><ul>' +
    '<li> <a href = "http://solutions.3m.com/wps/portal/3M/en_US/NA_Optical/Systems">  <span3>3M Optical</span3> <span4>Systems</span4> <span5>Division</span5> </a> </li><li> Product Engineer </li><li> Quality Assurance </li>' +
    '<li> <a href ="http://solutions.3m.com/wps/portal/3M/en_US/Renewable/Energy" class="red"> 3M Renewable Energy </a></li><li>Product Engineer </li><li>Optimized Operations</li></ul></div>' + '<div class="col-md-6 law"><ul>' + '<li class="Gala">Legal</li><li>Document Reivew</li><li>Patent Law Clerk</li><li>Judicial Extern</li></ul></div></div>';

var carouselHTML;

$(document).ready(function() {
    console.log(hello);

    //Write name at top of page
    $('.nameBlock').append('<div class="nameItems">' + $name + summary +'</div>');



    //Append verses to respective rows in p tags

    $('.verse').append('<p class="Gala well"> For God SO Loved He sent His only begotten Son so that whoever believed in Him would not perish, but have everlasting life.<em>  ~John 3:16</em></p>');
    $('.verse2').append('<p class="Gala well"> I have been crucified with Christ; and it is no longer I who live, but Christ lives in me; and [a]the life which I now live in the flesh I live by faith in the Son of God, who loved me and gave Himself up for me.<em>  ~Galatians 2:20</em></p>');
    $('.verse3').append('<p class="Gala well"> How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching?<em><br>  ~Romans 10:14</em></p>');


    //Professional Things

    console.log(professionalThings);

//    $('.profBanner').append('<div>' + professionalThings + '</div>').children().hide();
//    $('.professional').on("click", function(){
//        $('.profBanner').children().slideToggle();
//    });
//});

    if(resumeHtml === null){
        $.get('template.html', function(data){
            resumeHtml = data;
        });
    } else {
        console.log("You already initiated.");
    }

    $('.professional').append(cityHtml).hide().slideToggle();







