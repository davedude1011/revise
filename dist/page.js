"use strict";
var NodeArray = null;
function HandleRestOfCode() {
    var _a;
    function GetNodePositionFromElementNumber(ElementNumber) {
        for (let i = 0; i < NodeArray.length; i++) {
            let CurrentNode = NodeArray[i];
            if (CurrentNode["ElementNumber"] == ElementNumber)
                return i;
        }
        return null;
    }
    let URL = window.location.search;
    let URLparams = new URLSearchParams(URL);
    var CurrentPageElementNumber = Number(URLparams.get('elnum'));
    let CurrentPageNodeIndex = GetNodePositionFromElementNumber(CurrentPageElementNumber);
    if (CurrentPageNodeIndex != null)
        var CurrentPageNodeData = NodeArray[CurrentPageNodeIndex];
    if (CurrentPageNodeData["TypeData"]["Type"] == "Document") {
        (_a = document.querySelector(".main-block")) === null || _a === void 0 ? void 0 : _a.innerHTML = CurrentPageNodeData["TypeData"]["InnerHTML"];
    }
    function MakeMovementButtonsAndVideos() {
        var _a, _b, _c;
        let BackNodeData = null;
        let ForwardNodeData = null;
        if (CurrentPageNodeIndex != null) {
            for (let i = CurrentPageNodeIndex - 1; i < NodeArray.length + CurrentPageNodeIndex; i--) {
                console.log(i);
                if (i < 0)
                    i = NodeArray.length - 1;
                if (NodeArray[i]["TypeData"]["Type"] == "Document" && NodeArray[i]["ElementNumber"] != CurrentPageElementNumber && NodeArray[i]["TypeData"]["InnerHTML"] != "## PLACEHOLDER ##") {
                    BackNodeData = NodeArray[i];
                    break;
                }
            }
            for (let i = CurrentPageNodeIndex + 1; i < NodeArray.length + CurrentPageNodeIndex; i++) {
                if (i == NodeArray.length)
                    i = 0;
                if (NodeArray[i]["TypeData"]["Type"] == "Document" && NodeArray[i]["ElementNumber"] != CurrentPageElementNumber && NodeArray[i]["TypeData"]["InnerHTML"] != "## PLACEHOLDER ##") {
                    ForwardNodeData = NodeArray[i];
                    break;
                }
            }
        }
        function GetParentNodeDataFromChildElementNumber(ElementNumber) {
            for (let i = 0; i < NodeArray.length; i++) {
                if (NodeArray[i]["ChildrenNumbers"].includes(ElementNumber))
                    return NodeArray[i];
            }
        }
        function GetArrayOfVideoURLs(ElementNumber) {
            let OutputArray = [];
            let ParentData = GetParentNodeDataFromChildElementNumber(ElementNumber);
            if (ParentData != null) {
                for (let i = 0; i < ParentData["ChildrenNumbers"].length; i++) {
                    let ChildElementNumber = ParentData["ChildrenNumbers"][i];
                    let ChildNodeIndex = GetNodePositionFromElementNumber(ChildElementNumber);
                    if (ChildNodeIndex != null) {
                        let ChildNodeData = NodeArray[ChildNodeIndex];
                        if (ChildNodeData["TypeData"]["Type"] == "Iframe") {
                            OutputArray.push(ChildNodeData["TypeData"]["URL"]);
                        }
                    }
                }
                return OutputArray;
            }
            return null;
        }
        if (BackNodeData != null && ForwardNodeData != null) {
            let ButtonContainer = document.createElement("div");
            let BackButton = document.createElement("button");
            let ForwardButton = document.createElement("button");
            ButtonContainer.classList.add("buttons");
            BackButton.classList.add("back");
            ForwardButton.classList.add("forward");
            BackButton.textContent = GetParentNodeDataFromChildElementNumber(BackNodeData["ElementNumber"])["TypeData"]["Text"];
            ForwardButton.textContent = GetParentNodeDataFromChildElementNumber(ForwardNodeData["ElementNumber"])["TypeData"]["Text"];
            BackButton.setAttribute("ElementNumber", BackNodeData["ElementNumber"]);
            ForwardButton.setAttribute("ElementNumber", ForwardNodeData["ElementNumber"]);
            BackButton.addEventListener("click", function () {
                window.location.href = window.location.href.replace(/(\?elnum=)[^\&]+/, "$1" + encodeURIComponent(this.getAttribute("ElementNumber")));
            });
            ForwardButton.addEventListener("click", function () {
                window.location.href = window.location.href.replace(/(\?elnum=)[^\&]+/, "$1" + encodeURIComponent(this.getAttribute("ElementNumber")));
            });
            ButtonContainer.appendChild(BackButton);
            ButtonContainer.appendChild(ForwardButton);
            (_a = document.querySelector(".main-block")) === null || _a === void 0 ? void 0 : _a.insertBefore(ButtonContainer, (_b = document.querySelector(".main-block")) === null || _b === void 0 ? void 0 : _b.firstElementChild);
        }
        let VideoArray = GetArrayOfVideoURLs(CurrentPageElementNumber);
        if (VideoArray != null) {
            for (let i = 0; i < VideoArray.length; i++) {
                let CurrentVideoURL = VideoArray[i];
                let NewVideoElement = document.createElement("div");
                NewVideoElement.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${CurrentVideoURL.split("embed/")[1].split("?si")[0]}" class="link">video recource link</a><br>
                    <iframe src="${CurrentVideoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br><br>
                `;
                (_c = document.querySelector(".main-block")) === null || _c === void 0 ? void 0 : _c.appendChild(NewVideoElement);
            }
            console.log("VIDEOS: ", VideoArray);
        }
    }
    MakeMovementButtonsAndVideos();
}
let jsonFilePath = 'https://davedude1011.github.io/revise/NodeArray.json';
fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
    NodeArray = data;
    HandleRestOfCode();
})
    .catch(error => console.error('Error reading JSON file:', error));
//# sourceMappingURL=page.js.map