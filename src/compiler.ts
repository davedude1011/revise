var NodeArray: any = null

// @ts-ignore
function HandleRestOfCode() {
    function IsBaseNode(ElementNumber: number): boolean {
        for (let i = 0; i < NodeArray.length; i++) {
            if (NodeArray[i]["ElementNumber"] == ElementNumber) {
                if (NodeArray[i]["ChildrenNumbers"].length == 0) return true
                else {
                    let ContainsButtons = false
                    for (let j = 0; j < NodeArray[i]["ChildrenNumbers"].length; j++) {
                        // @ts-ignore
                        if (NodeArray[GetNodePositionFromElementNumber(NodeArray[i]["ChildrenNumbers"][j])]["TypeData"]["Type"] == "Button") {
                            ContainsButtons = true
                        }
                    }
                    if (!ContainsButtons) return true
                }
            }
        }
        return false
    }
    function IsTipNode(ElementNumber: number): boolean {
        for (let i = 0; i < NodeArray.length; i++) {
            // @ts-ignore
            try { if (NodeArray[i]["ChildrenNumbers"].includes(ElementNumber)) return false }
            catch{}
        }
        return true
    }
    // @ts-ignore
    function GetNodePositionFromElementNumber(ElementNumber: Number) {
        for (let i = 0; i < NodeArray.length; i++) {
            let CurrentNode = NodeArray[i]
            if (CurrentNode["ElementNumber"] == ElementNumber) return i
        }
        return null
    }
    function RecursiveClosing(ChildElement: HTMLElement, i: number) {
        function QuickClose(ElementNumber: number) {
            setTimeout(function() {
                let CurrentElement: HTMLElement | null = document.querySelector(`[ElementNumber="${String(ElementNumber)}"]`)
                if (CurrentElement) {
                    CurrentElement.style.display = "none"
                    CurrentElement.classList.remove("arrow-rotate")
                    CurrentElement.classList.remove("active")
                }
                // @ts-ignore
                let CurrentNodeArray = NodeArray[GetNodePositionFromElementNumber(ElementNumber)]
                for (let i = 0; i < CurrentNodeArray["ChildrenNumbers"].length; i++) {
                    setTimeout(function() {
                        QuickClose(CurrentNodeArray["ChildrenNumbers"][i])
                    }, i * 100);
                }
            }, 20)
        }
        setTimeout(function() {
            if (ChildElement) {
                // @ts-ignore
                QuickClose(Number(ChildElement.getAttribute("ElementNumber")))
                ChildElement.style.translate = "-100%";
                setTimeout(AlternateBackgroundColors, 60)
                setTimeout(function() {
                    if (ChildElement) {
                        ChildElement.style.display = "none"
                        ChildElement.classList.remove("arrow-rotate")
                    }
                }, 50)
            }
        }, i * 100);
    }
    function GetDocumentChildFromElementNumber(ElementNumber: number) {
        let ParentIndex = GetNodePositionFromElementNumber(ElementNumber)
        if (ParentIndex != null) {
            for (let i = 0; i < NodeArray[ParentIndex]["ChildrenNumbers"].length; i++) {
                let ChildIndex = GetNodePositionFromElementNumber(NodeArray[ParentIndex]["ChildrenNumbers"][i])
                if (ChildIndex != null) {
                    if (NodeArray[ChildIndex]["TypeData"]["Type"] == "Document") return NodeArray[ChildIndex]["ElementNumber"]
                }
            }
        }
    }
    
    for (let i = 0; i < NodeArray.length; i++) {
        if (NodeArray[i]["TypeData"]["Type"] == "Button") {
            let NewElement = document.createElement("div")
    
            let NewText = document.createElement("div")
            let NewArrow = document.createElement("div")
            NewArrow.textContent = "➜"
    
            let TextContent = NodeArray[i]["TypeData"]["Text"]
            if (TextContent != null) NewText.textContent = TextContent
            NewElement.setAttribute("ElementNumber", String(NodeArray[i]["ElementNumber"]))
    
            let ElementNumber = Number(NodeArray[i]["ElementNumber"])
    
            if (IsTipNode(ElementNumber)) {
                NewElement.classList.add("box-outer")
                NewText.classList.add("box-title")
                NewArrow.classList.add("box-arrow")
    
                let NewEmoji = document.createElement("div")
                NewEmoji.textContent = String(NodeArray[i]["TypeData"]["Emoji"])
                NewEmoji.classList.add("box-icon")
                NewElement.appendChild(NewEmoji)
    
                NewElement.style.color = String(NodeArray[i]["TypeData"]["Color"])
            }
            else {
                NewElement.classList.add("menu")
                NewText.classList.add("menu-title")
                NewArrow.classList.add("menu-arrow")
            }
    
            NewElement.appendChild(NewText)
            NewElement.appendChild(NewArrow)
    
            if (IsBaseNode(ElementNumber)) {
                NewElement.classList.add("menu-direct")
                NewArrow.textContent = "📄"

                NewElement.addEventListener("click", function() {
                    let DocumentElementNumber = GetDocumentChildFromElementNumber(Number(this.getAttribute("ElementNumber")))
                    window.open(`page.html?elnum=${DocumentElementNumber}`, "_self")
                })
            }
    
            if (!IsTipNode(ElementNumber)) NewElement.style.display = "none"
            //if (!IsBaseNode(Number(NodeArray[i]["ElementNumber"]))) {
            //    for (let j = 0; j < NodeArray[i]["ChildrenNumbers"].length; j++) {
            //        // @ts-ignore
            //        let CurrentElementArray = NodeArray[NodePositionFromElementNumber(NodeArray[i]["ChildrenNumbers"][j])]
            //    }
            //}
            if (!IsBaseNode(ElementNumber)) {
                NewElement.addEventListener("click", function() {
                    let ThisElementNumber = Number(this.getAttribute("ElementNumber"));
                    // @ts-ignore
                    let ThisNodeArray = NodeArray[GetNodePositionFromElementNumber(ThisElementNumber)]
                    let ChildrenNumbers = ThisNodeArray["ChildrenNumbers"].reverse()
                    let Counter = 0
    
                    this.classList.toggle("arrow-rotate")
    
                    for (let i = 0; i < ChildrenNumbers.length; i++) {
                        let ChildElement: HTMLElement | null = document.querySelector(`[ElementNumber="${ChildrenNumbers[i]}"]`)
                        if (ChildElement) {
                            if (!this.classList.contains("fixed-positions")) {
                                this.parentElement?.insertBefore(ChildElement, this.nextSibling)
                                
                                if (Counter == 0) {
                                    ChildElement.classList.add("margin")
                                    console.log("HJI")
                                }
                            }
                            Counter ++
                            if (ChildElement.classList.contains("active")) {
                                RecursiveClosing(ChildElement, i)
                            }
                            else {
                                setTimeout(function() {
                                    if (ChildElement) {
                                        ChildElement.style.display = "flex";
                                        setTimeout(AlternateBackgroundColors, 60)
                                        setTimeout(function() {
                                            if (ChildElement) ChildElement.style.translate = "0"
                                        }, 50);
                                    }
                                }, (ChildrenNumbers.length - i - 1) * 100);
                                ChildElement.classList.toggle("active")
                            }
                        }
                    }
                    //if (!this.classList.contains("fixed-positions")) {
                    //    this.parentElement?.insertBefore(document.createElement("br"), this.nextSibling)
                    //}
                    this.classList.add("fixed-positions")
                })
            }
    
            document.body.appendChild(NewElement)
        }
    }
    
    function AlternateBackgroundColors() {
        console.log("Alternate background colors")
        let AllMenuItems = document.querySelectorAll('.menu, .box-outer')
        let isOdd = true; // To track odd and even elements
        AllMenuItems.forEach(element => {
            // Check if the element is displayed (not "display: none")
            if (window.getComputedStyle(element).getPropertyValue('display') !== 'none') {
                // Apply background color based on odd/even
                if (isOdd) {
                    // @ts-ignore
                    element.style.backgroundColor = 'var(--box-outer-background-dark-1)';
                } else {
                    // @ts-ignore
                    element.style.backgroundColor = 'var(--box-outer-background-dark-2)';
                }
                isOdd = !isOdd; // Toggle odd/even for the next element
            }
        });
    }
    
    AlternateBackgroundColors()

    //function OpenElementBaseToTip(ElementNumber: number) {
    //    let 
    //}

    document.querySelector(".search-bar")?.addEventListener("input", function() {
        // @ts-ignore
        let SearchQuery = this.value

        let AllElements = document.querySelectorAll(".menu, .box-outer")
        for (let i = 0; i < AllElements.length; i++) {
            // @ts-ignore
            AllElements[i].style.display = "none"
        }

        if (SearchQuery == "") {
            let AllOuterMenuElements = document.querySelectorAll(".box-outer")
            for (let i = 0; i < AllOuterMenuElements.length; i++) {
                // @ts-ignore
                AllOuterMenuElements[i].style.display = "flex"
            }
        }
        else {
            for (let i = 0; i < NodeArray.length; i++) {
                let CurrentNode = NodeArray[i]
                if (CurrentNode["TypeData"]["Type"] == "Button" && CurrentNode["TypeData"]["Text"].toLowerCase().includes(SearchQuery.toLowerCase())) {
                    let Element: HTMLElement | null = document.querySelector(`.menu[ElementNumber="${CurrentNode["ElementNumber"]}"]`)
                    if (Element) {
                        Element.style.display = "flex"
                        Element.style.translate = "0"
                    }
                }
            }
        }

        AlternateBackgroundColors()
    })
}



// @ts-ignore
let jsonFilePath = 'https://davedude1011.github.io/revise/NodeArray.json';
fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    NodeArray = data
    HandleRestOfCode()
  })
  .catch(error => console.error('Error reading JSON file:', error));

// ../NodeArray.json
// https://davedude1011.github.io/revise/NodeArray.json