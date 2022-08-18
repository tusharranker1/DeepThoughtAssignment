let http = new XMLHttpRequest();

http.open("get", "product.json", true);

http.send();

// target the element
const journeyBox = document.getElementById("box1");
const journeyBoxOpener = document.getElementById("lines-wrapper");
const journeyNavigation = document.getElementsByClassName("lines");
const mainContainer = document.getElementById("main-conatiner");
const assetHeading = document.getElementsByClassName("asset-heading");
const assetsContainer = document.getElementsByClassName("assets");
const assetFooter = document.getElementsByClassName("asset-footer");
const asset3Content = document.getElementById("data-from-jason");
// variables

let journeyBoxStaus = false;
let dropDownStatus = false;
let openThreadStatus = true;

// event handlers

journeyBoxOpener.addEventListener("click", openJourneyBox);

// function
function dropDownAsset(i) {
  if (!dropDownStatus) {
    if (i % 2 != 0) {
      assetsContainer[i].style.height = "800px";
    } else {
      assetsContainer[i].style.height = "500px";
    }

    assetFooter[i].style.transform = "rotateZ(180deg)";
    dropDownStatus = true;
  } else {
    if (i % 2 != 0) {
      assetsContainer[i].style.height = "500px";
    } else {
      assetsContainer[i].style.height = "300px";
    }
    assetFooter[i].style.transform = "rotateZ(0deg)";
    dropDownStatus = false;
  }

  if (i == 1) {
    document.getElementById("thread1").style.height = "700px";
  }
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 60) {
    mainContainer.style.backgroundColor = "rgb(56, 52, 255)";
    document.getElementById("box2-header").style.backgroundColor = "black";
    for (let i = 0; i < assetHeading.length; i++) {
      assetHeading[i].style.backgroundColor = "rgb(10, 7, 241)";
    }
  }
  if (window.pageYOffset < 60) {
    mainContainer.style.backgroundColor = "white";
    document.getElementById("box2-header").style.backgroundColor =
      "rgb(10, 7, 241)";
    for (let i = 0; i < assetHeading.length; i++) {
      assetHeading[i].style.backgroundColor = "black";
    }
  }
});

function openJourneyBox() {
  if (journeyBoxStaus == true) {
    journeyBox.style.transform = "translateX(-240px) ";
    journeyBoxStaus = false;
    journeyNavigation[1].style.opacity = "1";
    journeyNavigation[0].style.margin = "2px 0px";
    journeyNavigation[2].style.margin = "2px 0px";
    journeyNavigation[0].style.transform = "rotateZ(0deg) translate(0px, 0px)";
    journeyNavigation[2].style.transform = "rotateZ(0deg) translate(0px, 0px)";
    journeyNavigation[0].style.width = "20px";
    journeyNavigation[2].style.width = "20px";
  } else {
    journeyBox.style.transform = "translateX(0px) ";
    journeyBoxStaus = true;

    journeyNavigation[1].style.opacity = "0";
    journeyNavigation[0].style.margin = "0px";
    journeyNavigation[2].style.margin = "0px";
    journeyNavigation[0].style.transform = "rotateZ(38deg) translate(3px, 6px)";
    journeyNavigation[2].style.transform =
      "rotateZ(-38deg) translate(3px, -6px)";
    journeyNavigation[0].style.width = "30px";
    journeyNavigation[2].style.width = "30px";
  }
}

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);
    let output1 = `
        <div class="JSONasset1">${products.tasks[0].assets[0].asset_description}</div>
    `;
    let output2 = `
        <div class="reflection">${products.tasks[0].assets[2].asset_content}</div>
    `;
    let output3 = `
    <iframe src="${products.tasks[0].assets[3].display_asset_docs}" class="pdfFromJason">
    `;

    let output4 = `
    <div id="asset5-content">
    <iframe src="${products.tasks[0].assets[8].display_asset_video}" class="youtube-video"></iframe>
                    </div>
    `;
    let output5 = `
    <div id="asset6-content">
    <iframe src="${products.tasks[0].assets[7].display_asset_url}" class="audio-file"></iframe>
    </div>
    `;

    document.getElementById("asset1-content").innerHTML += output1;
    asset3Content.innerHTML += output2;
    document.getElementById("asset4-content").innerHTML += output3;
    document.getElementById("asset5").innerHTML += output4;
    document.getElementById("asset6").innerHTML += output5;
  }
};
