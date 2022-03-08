var imageNames = [
    "\"Stone Golem\" - Album Art Commission for Connected Sounds [2021/2022]",
    "\"Splatter Girl\" - My personal take on the out of place shopkeeper from Splatter Master (PS2) [2022]",
    "untitled [2021]",
    "\"Northern Lights\" - Album Art Commission for Connected Sounds [2021]",
    "\"Nega Eggman\" - A gift for Laura [2020]",
    "\"Close Friends\" - Album Art Commission for Connected Sounds [2020]",
    "\"Into The Unknown\" - Album Art Commission for Connected Sounds [2020]",
    "\"Star Spread\" - Album Art Commission for AdamJLE [2019]",
];
var currentArt = 0;
var totalArt = 7;

function OnClickArt(artID) {
    document.getElementById("image_preview").style.visibility = "visible";
    currentArt = artID;
    ShowFullArt(artID);
}

function CloseArt() {
    document.getElementById("image_fullview").remove();
    document.getElementById("art_title").remove();
    document.getElementById("image_preview").style.visibility = "hidden";
    currentArt = 0;
}

function NextArt(artID) {
    // add fadeout then delete
    document.getElementById("image_fullview").remove();
    document.getElementById("art_title").remove();

    if(artID > totalArt) {
        artID = 0;
    }
    else if(artID < 0) {
        artID = totalArt;
    }
    currentArt = artID;
    ShowFullArt(artID);
}

function ShowFullArt(artID) {
    // add art fade in
    var newImg = new Image();
    newImg.id = "artpiece" + artID;
    newImg.src = "media/art/artpiece" + artID + ".png";
    //newImg.src = "media/icons/x-temp.png";
    var tempWidth;
    newImg.onload = function() {
        //alert(this.width + 'x' + this.height);
        tempWidth = this.width;

        newImg.id = "image_fullview";

        //if(newImg.height > newImg.width) {
            var height = 0;
            var body = window.document.body;
            if (window.innerHeight) {
                height = window.innerHeight;
            } else if (body.parentElement.clientHeight) {
                height = body.parentElement.clientHeight;
            } else if (body && body.clientHeight) {
                height = body.clientHeight;
            }
            newImg.height = height * 0.8;
        //}
        // else {
        //     newImg.width = 800;
        // }
        
        var artDiv = document.getElementById("image_and_title");

        var imageText = document.createElement("H2");
        imageText.id = "art_title"
        var text = document.createTextNode(imageNames[artID]);
        imageText.appendChild(text);

        // Append img and title to new div
        artDiv.appendChild(newImg);
        artDiv.appendChild(imageText);

        newImg.style.position = "fixed";
        newImg.style.top  = "calc(50% - " + newImg.height / 2 + "px)";
        newImg.style.left = "calc(50% - " + newImg.width / 2 + "px)";
        newImg.style["-webkit-animation"] = "fadein 1s"; /* Safari, Chrome and Opera > 12.1 */
        newImg.style["-moz-animation"] = "fadein 1s"; /* Firefox < 16 */
        newImg.style["-ms-animation"] = "fadein 1s"; /* Internet Explorer */
        newImg.style["-o-animation"] = "fadein 1s"; /* Opera < 12.1 */
        newImg.style["animation"] = "fadein 1s"; 
        newImg.style["pointer-events"] = "none";

        imageText.style["-webkit-animation"] = "fadein 1s"; /* Safari, Chrome and Opera > 12.1 */
        imageText.style["-moz-animation"] = "fadein 1s"; /* Firefox < 16 */
        imageText.style["-ms-animation"] = "fadein 1s"; /* Internet Explorer */
        imageText.style["-o-animation"] = "fadein 1s"; /* Opera < 12.1 */
        imageText.style["animation"] = "fadein 1s"; 
    }

    function vh(v) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (v * h) / 100;
      }
      
      function vw(v) {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return (v * w) / 100;
      }
      
}