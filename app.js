var colorList = [
  "#034f84",
  "#f7cac9",
  "#c94c4c",
  "#80ced6",
  "#bc5a45",
  "#ff7b25",
  "#588c7e",
  "#622569",
  "#feb236",
  "#d64161",
  "#ff7b25"
];


function generate(){
  $.ajax({url: "https://s3.ap-south-1.amazonaws.com/idontlikework/wfh-reasons.json", method:'GET', success: function(result){
      var randomText = result[Math.floor( Math.random() * result.length)].text;
      $('#reason').text(randomText);
      $('#reason').scramble(1000, 20, "alphabet", true);
    }});
    var currentColor = Math.floor(Math.random() * 10);
    $("button").css("color", colorList[currentColor]);
    $("body").css("background-color", colorList[currentColor]);
}

$("button").click(function() {
  generate();
});

function clickToCopy() {
  var text = $(".reason")[0].innerText;
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

$('body').keyup(function(e){
   if(e.keyCode == 32){
    // space bar
    generate();
   }
});

generate();
