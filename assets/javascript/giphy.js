// array that hold a intial list of item to display gif
var fperson = ["TOM CRUISE","ARNOLD SCHWARZENEGGER","SYLVESTER STALLONE","MORGAN FREEMAN","NICOLAS CAGE","VIN DIESEL"];

// funtcion that creat button on page
function creatbt() {


for ( var i=0; i <fperson.length; i++)
{
    // creating a button
    var btn = $("<button>");
    // setting button text to ites from array
    btn.text(fperson[i]);
    // setting attribute to button as same as list items
    btn.attr("data-name", fperson[i]);
    // adding class for css
    btn.addClass("btn btn-primary btn-lg");
    // adding a class b1 
    btn.addClass("b1");
    // adding that  button to div to dispaly on page
    $("#buttons").append(btn);

}

};

// funtcion that displays gif on page
function displayInfo(){
    // storing a data-name attribute value to variable
    var person = $(this).attr("data-name");
    // setting api key
    var apikey = "xTM3IzCHa4g2qTL7YkpTyIm4Sym7U4v1";
    // url for gifs
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=" + apikey;

    // ajax funtcion
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    
      .then(function(response) {
          console.log(response);
        //   storing a data that we got from response to a result
          var result= response.data;
        //   making my dispaly div to empty
             for(var k=0;k<10;k++)
             {
                 $("#display"+k).text("");
             }
            //  display all gif on page
            for (var j=0; j < 10; j++)
                {
                    // creating a div
                    var newdiv=$("<div>");
                    // creating a p tag for text
                    var p= $("<p>");
                    // adding class to paragraph
                    p.addClass("text1");
                    // setting text of p tag to ratting of image
                    p.text("Rating :" + result[j].rating);
                    // making image
                    var personImage= $("<img>");
                    // setting image src and adding class
                    personImage.attr("src", result[j].images.fixed_height.url);
                    personImage.addClass("img");
                    // adding a p class to paragraph
                    p.addClass("p");
                    // appending to newdiv paragraph and image
                    newdiv.append(p);
                    newdiv.append(personImage);
                    // prepending that newdiv to page display div
                    $("#display"+j).prepend(newdiv);

                }
      });


}
// function that get value from user to add item to list
function add1(){
    // storing text from textbox to variable
    var tet = $("#t1").val().trim();
    // conveting that text to uppercase
    var text= tet.toUpperCase();
    // console.log(text);
    // checking if that item entered by user is already exist then alert else adding that item to list
    if (fperson.includes(text))
    {
        alert(" Sorry!! Already hava in list !!");
    }
    else 
    {
        // adding that item to array list
        fperson.push(text);
        // resetting dispaly div of buttons
        $("#buttons").text("");
        // calling function
        creatbt();
    }

    
};

// calling function that creates buttons
creatbt();
// after click on button those have class b1 calling displayinfo function
$(document).on("click", ".b1", displayInfo);
