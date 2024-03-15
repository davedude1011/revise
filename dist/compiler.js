"use strict";
var NodeArray = null;
function HandleRestOfCode() {
    var _a;
    function IsBaseNode(ElementNumber) {
        for (let i = 0; i < NodeArray.length; i++) {
            if (NodeArray[i]["ElementNumber"] == ElementNumber) {
                if (NodeArray[i]["ChildrenNumbers"].length == 0)
                    return true;
                else {
                    let ContainsButtons = false;
                    for (let j = 0; j < NodeArray[i]["ChildrenNumbers"].length; j++) {
                        if (NodeArray[GetNodePositionFromElementNumber(NodeArray[i]["ChildrenNumbers"][j])]["TypeData"]["Type"] == "Button") {
                            ContainsButtons = true;
                        }
                    }
                    if (!ContainsButtons)
                        return true;
                }
            }
        }
        return false;
    }
    function IsTipNode(ElementNumber) {
        for (let i = 0; i < NodeArray.length; i++) {
            try {
                if (NodeArray[i]["ChildrenNumbers"].includes(ElementNumber))
                    return false;
            }
            catch (_a) { }
        }
        return true;
    }
    function GetNodePositionFromElementNumber(ElementNumber) {
        for (let i = 0; i < NodeArray.length; i++) {
            let CurrentNode = NodeArray[i];
            if (CurrentNode["ElementNumber"] == ElementNumber)
                return i;
        }
        return null;
    }
    function RecursiveClosing(ChildElement, i) {
        function QuickClose(ElementNumber) {
            setTimeout(function () {
                let CurrentElement = document.querySelector(`[ElementNumber="${String(ElementNumber)}"]`);
                if (CurrentElement) {
                    CurrentElement.style.display = "none";
                    CurrentElement.classList.remove("arrow-rotate");
                    CurrentElement.classList.remove("active");
                }
                let CurrentNodeArray = NodeArray[GetNodePositionFromElementNumber(ElementNumber)];
                for (let i = 0; i < CurrentNodeArray["ChildrenNumbers"].length; i++) {
                    setTimeout(function () {
                        QuickClose(CurrentNodeArray["ChildrenNumbers"][i]);
                    }, i * 100);
                }
            }, 20);
        }
        setTimeout(function () {
            if (ChildElement) {
                QuickClose(Number(ChildElement.getAttribute("ElementNumber")));
                ChildElement.style.translate = "-100%";
                setTimeout(AlternateBackgroundColors, 60);
                setTimeout(function () {
                    if (ChildElement) {
                        ChildElement.style.display = "none";
                        ChildElement.classList.remove("arrow-rotate");
                    }
                }, 50);
            }
        }, i * 100);
    }
    function GetDocumentChildFromElementNumber(ElementNumber) {
        let ParentIndex = GetNodePositionFromElementNumber(ElementNumber);
        if (ParentIndex != null) {
            for (let i = 0; i < NodeArray[ParentIndex]["ChildrenNumbers"].length; i++) {
                let ChildIndex = GetNodePositionFromElementNumber(NodeArray[ParentIndex]["ChildrenNumbers"][i]);
                if (ChildIndex != null) {
                    if (NodeArray[ChildIndex]["TypeData"]["Type"] == "Document")
                        return NodeArray[ChildIndex]["ElementNumber"];
                }
            }
        }
    }
    for (let i = 0; i < NodeArray.length; i++) {
        if (NodeArray[i]["TypeData"]["Type"] == "Button") {
            let NewElement = document.createElement("div");
            let NewText = document.createElement("div");
            let NewArrow = document.createElement("div");
            NewArrow.textContent = "➜";
            let TextContent = NodeArray[i]["TypeData"]["Text"];
            if (TextContent != null)
                NewText.textContent = TextContent;
            NewElement.setAttribute("ElementNumber", String(NodeArray[i]["ElementNumber"]));
            let ElementNumber = Number(NodeArray[i]["ElementNumber"]);
            if (IsTipNode(ElementNumber)) {
                NewElement.classList.add("box-outer");
                NewText.classList.add("box-title");
                NewArrow.classList.add("box-arrow");
                let NewEmoji = document.createElement("div");
                NewEmoji.textContent = String(NodeArray[i]["TypeData"]["Emoji"]);
                NewEmoji.classList.add("box-icon");
                NewElement.appendChild(NewEmoji);
                NewElement.style.color = String(NodeArray[i]["TypeData"]["Color"]);
            }
            else {
                NewElement.classList.add("menu");
                NewText.classList.add("menu-title");
                NewArrow.classList.add("menu-arrow");
            }
            NewElement.appendChild(NewText);
            NewElement.appendChild(NewArrow);
            if (IsBaseNode(ElementNumber)) {
                NewElement.classList.add("menu-direct");
                NewArrow.textContent = "📄";
                NewElement.addEventListener("click", function () {
                    let DocumentElementNumber = GetDocumentChildFromElementNumber(Number(this.getAttribute("ElementNumber")));
                    window.open(`page.html?elnum=${DocumentElementNumber}`, "_self");
                });
            }
            if (!IsTipNode(ElementNumber))
                NewElement.style.display = "none";
            if (!IsBaseNode(ElementNumber)) {
                NewElement.addEventListener("click", function () {
                    var _a;
                    let ThisElementNumber = Number(this.getAttribute("ElementNumber"));
                    let ThisNodeArray = NodeArray[GetNodePositionFromElementNumber(ThisElementNumber)];
                    let ChildrenNumbers = ThisNodeArray["ChildrenNumbers"].reverse();
                    let Counter = 0;
                    this.classList.toggle("arrow-rotate");
                    for (let i = 0; i < ChildrenNumbers.length; i++) {
                        let ChildElement = document.querySelector(`[ElementNumber="${ChildrenNumbers[i]}"]`);
                        if (ChildElement) {
                            if (!this.classList.contains("fixed-positions")) {
                                (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(ChildElement, this.nextSibling);
                                if (Counter == 0) {
                                    ChildElement.classList.add("margin");
                                    console.log("HJI");
                                }
                            }
                            Counter++;
                            if (ChildElement.classList.contains("active")) {
                                RecursiveClosing(ChildElement, i);
                            }
                            else {
                                setTimeout(function () {
                                    if (ChildElement) {
                                        ChildElement.style.display = "flex";
                                        setTimeout(AlternateBackgroundColors, 60);
                                        setTimeout(function () {
                                            if (ChildElement)
                                                ChildElement.style.translate = "0";
                                        }, 50);
                                    }
                                }, (ChildrenNumbers.length - i - 1) * 100);
                                ChildElement.classList.toggle("active");
                            }
                        }
                    }
                    this.classList.add("fixed-positions");
                });
            }
            document.body.appendChild(NewElement);
        }
    }
    function AlternateBackgroundColors() {
        console.log("Alternate background colors");
        let AllMenuItems = document.querySelectorAll('.menu, .box-outer');
        let isOdd = true;
        AllMenuItems.forEach(element => {
            if (window.getComputedStyle(element).getPropertyValue('display') !== 'none') {
                if (isOdd) {
                    element.style.backgroundColor = 'var(--box-outer-background-dark-1)';
                }
                else {
                    element.style.backgroundColor = 'var(--box-outer-background-dark-2)';
                }
                isOdd = !isOdd;
            }
        });
    }
    AlternateBackgroundColors();
    (_a = document.querySelector(".search-bar")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", function () {
        let SearchQuery = this.value;
        let AllElements = document.querySelectorAll(".menu, .box-outer");
        for (let i = 0; i < AllElements.length; i++) {
            AllElements[i].style.display = "none";
        }
        if (SearchQuery == "") {
            let AllOuterMenuElements = document.querySelectorAll(".box-outer");
            for (let i = 0; i < AllOuterMenuElements.length; i++) {
                AllOuterMenuElements[i].style.display = "flex";
            }
        }
        else {
            for (let i = 0; i < NodeArray.length; i++) {
                let CurrentNode = NodeArray[i];
                if (CurrentNode["TypeData"]["Type"] == "Button" && CurrentNode["TypeData"]["Text"].toLowerCase().includes(SearchQuery.toLowerCase())) {
                    let Element = document.querySelector(`.menu[ElementNumber="${CurrentNode["ElementNumber"]}"]`);
                    if (Element) {
                        Element.style.display = "flex";
                        Element.style.translate = "0";
                    }
                }
            }
        }
        AlternateBackgroundColors();
    });
}
let jsonFilePath = '../NodeArray.json';
fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
    NodeArray = data;
    HandleRestOfCode();
})
    .catch(error => console.error('Error reading JSON file:', error));
//# sourceMappingURL=compiler.js.map