var fperson = ["Tom Cruise","Arnold Schwarzenegger","Sylvester Stallone","Morgan Freeman","Nicolas Cage","Vin Diesel"];
for ( var i=0; i <fperson.length; i++)
{
    var btn = $("<button>");
    btn.text(fperson[i]);
    btn.attr("data-name", fperson[i]);

    btn.addClass("b1");
    $("#buttons").append(btn);

}


function displayInfo(){
    var person = $(this).attr("data-name");
    var apikey = "xTM3IzCHa4g2qTL7YkpTyIm4Sym7U4v1";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=" + apikey;

    //
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    //
      .then(function(response) {
          console.log(response);
            var result= response.data;
             
            for (var j=0; j < 10; j++)
                {
                    var newdiv=$("<div>");
                    var p= $("<p>");
                    p.text("Rating :" + result[j].rating);
                    var personImage= $("<img>");
                    personImage.attr("src", result[j].images.fixed_height.url);
                    personImage.addClass("img");
                    p.addClass("p");

                    newdiv.append(p);
                    newdiv.append(personImage);
                    $("#display"+j).prepend(newdiv);

                }
      });


}


$(document).on("click", ".b1", displayInfo);
