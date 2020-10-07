var images = [];
var currentArt = 0;
var totalArt = 4;

function OnClickArt(artID) {
    document.getElementById("image_preview").style.visibility = "visible";
    ShowFullArt(artID);
}

function CloseArt() {
    document.getElementById("image_fullview").remove();
    document.getElementById("image_preview").style.visibility = "hidden";
}

function NextArt(artID) {
    // add fadeout then delete
    document.getElementById("image_fullview").remove();

    if(currentArt > totalArt) {
        artID = 0;
    }
    else if(artID < 0) {
        artID = totalArt;
    }
    ShowFullArt(artID);
}

function ShowFullArt(artID) {
    // add art fade in
    var newImg = new Image();
    newImg.name = "artpiece" + artID;
    newImg.src = "media/art/artpiece" + artID + ".png";
    //newImg.src = "media/icons/x-temp.png";
    var tempWidth;
    newImg.onload = function() {
        //alert(this.width + 'x' + this.height);
        tempWidth = this.width;

        newImg.id = "image_fullview"
        if(newImg.height > newImg.width) {
            newImg.height = 800;
        }
        else {
            newImg.width = 800;
        }
        currentArt = artID;
        
        document.getElementById("image_preview").appendChild(newImg);
        newImg.style.position = "relative";
        newImg.style.top  = "calc(50% - " + newImg.height / 2 + "px)";
        newImg.style.left = "calc(50% - " + newImg.width / 2 + "px)";
    }
    
    
}