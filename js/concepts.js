var gsa_imgs = [
    "media/concepts/gsa_tainted/gsa_sketch_1_small.png",
    "media/concepts/gsa_tainted/gsa_2_Carrier_1_small.png",
    "media/concepts/gsa_tainted/carrier_infested_small.png",
    "media/concepts/gsa_tainted/gsa_model_sheet.png"
];

var old_robot_imgs = [
    "media/concepts/old_robot/robo_concept_1.png",
    "media/concepts/old_robot/robo_concept_2_coloured(kinda).png",
    "media/concepts/old_robot/Service_bot_sheetv2.png",
    "media/concepts/old_robot/sb_1_search_SMALL.png",
    "media/concepts/old_robot/sb_2_playerDetected_SMALL.png",
    "media/concepts/old_robot/sb_3_chase_SMALL.png",
    "media/concepts/old_robot/sb_4_movement_SMALL.png",
    "media/concepts/old_robot/sb_5_attack_SMALL.png",
    "media/concepts/old_robot/Warden_1.png",
    "media/concepts/old_robot/warden_concept.png"
];

var environment_imgs = [
    "media/concepts/thinking_city_environment/hoprt_hallway.png",
    "media/concepts/thinking_city_environment/foyer_hologram.png",
    "media/concepts/thinking_city_environment/props.png"
];

var currentArt;
var totalArt;
var currentImgs;

function OnClickSection(conceptID) {
    document.getElementById("image_preview").style.visibility = "visible";
    currentArt = 0;
    switch(conceptID) {
        case 0:
            currentImgs = gsa_imgs;
            ShowFullSection();
            totalArt = 3;
            break;
        case 1:
            currentImgs = old_robot_imgs;
            ShowFullSection();
            totalArt = 9;
            break;
        case 2:
            currentImgs = environment_imgs;
            ShowFullSection();
            totalArt = 2;
            break;
    }
    
}

function NextArt(artID) {
    // add fadeout then delete
    document.getElementById("image_fullview").remove();
    if(artID > totalArt) {
        artID = 0;
    }
    else if(artID < 0) {
        artID = totalArt;
    }
    currentArt = artID;
    ShowFullSection(artID);
}

function CloseSection() {
    document.getElementById("image_fullview").remove();
    document.getElementById("image_preview").style.visibility = "hidden";
    currentArt = 0;
}

function ShowFullSection() {
    // add art fade in
    var newImg = new Image();
    newImg.id = "artpiece" + currentArt;
    newImg.src = currentImgs[currentArt];
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

        // Append img and title to new div
        artDiv.appendChild(newImg);

        newImg.style.position = "fixed";
        newImg.style.top  = "calc(50% - " + newImg.height / 2 + "px)";
        newImg.style.left = "calc(50% - " + newImg.width / 2 + "px)";
        newImg.style["-webkit-animation"] = "fadein 1s"; /* Safari, Chrome and Opera > 12.1 */
        newImg.style["-moz-animation"] = "fadein 1s"; /* Firefox < 16 */
        newImg.style["-ms-animation"] = "fadein 1s"; /* Internet Explorer */
        newImg.style["-o-animation"] = "fadein 1s"; /* Opera < 12.1 */
        newImg.style["animation"] = "fadein 1s"; 
        newImg.style["pointer-events"] = "none";
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