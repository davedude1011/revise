var NodeArray: any = null

// @ts-ignore
function HandleRestOfCode() {
    function GetNodePositionFromElementNumber(ElementNumber: Number) {
        for (let i = 0; i < NodeArray.length; i++) {
            let CurrentNode = NodeArray[i]
            if (CurrentNode["ElementNumber"] == ElementNumber) return i
        }
        return null
    }


    let URL = window.location.search;
    let URLparams = new URLSearchParams(URL);
    var CurrentPageElementNumber = Number(URLparams.get('elnum'));
    let CurrentPageNodeIndex = GetNodePositionFromElementNumber(CurrentPageElementNumber)
    if (CurrentPageNodeIndex != null) var CurrentPageNodeData = NodeArray[CurrentPageNodeIndex]

    
    if (CurrentPageNodeData["TypeData"]["Type"] == "Document") {
        // @ts-ignore
        document.querySelector(".main-block")?.innerHTML = CurrentPageNodeData["TypeData"]["InnerHTML"]
    }

    function MakeMovementButtonsAndVideos() {
        let BackNodeData = null
        let ForwardNodeData = null

        if (CurrentPageNodeIndex != null) {
            for (let i = CurrentPageNodeIndex-1; i < NodeArray.length + CurrentPageNodeIndex; i--) {
                console.log(i)
                if (i < 0) i = NodeArray.length-1
                if (NodeArray[i]["TypeData"]["Type"] == "Document" && NodeArray[i]["ElementNumber"] != CurrentPageElementNumber && NodeArray[i]["TypeData"]["InnerHTML"] != "## PLACEHOLDER ##") {
                    BackNodeData = NodeArray[i]
                    break
                }
            }
            for (let i = CurrentPageNodeIndex+1; i < NodeArray.length + CurrentPageNodeIndex; i++) {
                if (i == NodeArray.length) i = 0
                if (NodeArray[i]["TypeData"]["Type"] == "Document" && NodeArray[i]["ElementNumber"] != CurrentPageElementNumber && NodeArray[i]["TypeData"]["InnerHTML"] != "## PLACEHOLDER ##") {
                    ForwardNodeData = NodeArray[i]
                    break
                }
            }
        }
        function GetParentNodeDataFromChildElementNumber(ElementNumber: number) {
            for (let i = 0; i < NodeArray.length; i++) {
                if (NodeArray[i]["ChildrenNumbers"].includes(ElementNumber)) return NodeArray[i]
            }
        }
        function GetArrayOfVideoURLs(ElementNumber: number) {
            let OutputArray = []
            let ParentData = GetParentNodeDataFromChildElementNumber(ElementNumber)
            if (ParentData != null) {
                for (let i = 0; i < ParentData["ChildrenNumbers"].length; i++) {
                    let ChildElementNumber = ParentData["ChildrenNumbers"][i]
                    let ChildNodeIndex = GetNodePositionFromElementNumber(ChildElementNumber)
                    if (ChildNodeIndex != null) {
                        let ChildNodeData = NodeArray[ChildNodeIndex]
                        if (ChildNodeData["TypeData"]["Type"] == "Iframe") {
                            OutputArray.push(ChildNodeData["TypeData"]["URL"])
                        }
                    }
                }
                return OutputArray
            }
            return null
        }


        if (BackNodeData != null && ForwardNodeData != null) {
            let ButtonContainer = document.createElement("div")
            let BackButton = document.createElement("button")
            let ForwardButton = document.createElement("button")
    
            ButtonContainer.classList.add("buttons")
            BackButton.classList.add("back")
            ForwardButton.classList.add("forward")

            BackButton.textContent = GetParentNodeDataFromChildElementNumber(BackNodeData["ElementNumber"])["TypeData"]["Text"]
            ForwardButton.textContent = GetParentNodeDataFromChildElementNumber(ForwardNodeData["ElementNumber"])["TypeData"]["Text"]

            BackButton.setAttribute("ElementNumber", BackNodeData["ElementNumber"])
            ForwardButton.setAttribute("ElementNumber", ForwardNodeData["ElementNumber"])

            BackButton.addEventListener("click", function() {
                // @ts-ignore
                window.location.href = window.location.href.replace(/(\?elnum=)[^\&]+/, "$1" + encodeURIComponent(this.getAttribute("ElementNumber")));
            })
            ForwardButton.addEventListener("click", function() {
                // @ts-ignore
                window.location.href = window.location.href.replace(/(\?elnum=)[^\&]+/, "$1" + encodeURIComponent(this.getAttribute("ElementNumber")));
            })
    
            ButtonContainer.appendChild(BackButton)
            ButtonContainer.appendChild(ForwardButton)

            // @ts-ignore
            document.querySelector(".main-block")?.insertBefore(ButtonContainer, document.querySelector(".main-block")?.firstElementChild)
        }
        let VideoArray = GetArrayOfVideoURLs(CurrentPageElementNumber)
        if (VideoArray != null) {
            for (let i = 0; i < VideoArray.length; i++) {
                let CurrentVideoURL = VideoArray[i]
                let NewVideoElement = document.createElement("div")
                NewVideoElement.innerHTML = `
                    <a href="https://www.youtube.com/watch?v=${CurrentVideoURL.split("embed/")[1].split("?si")[0]}" class="link">video recource link</a><br>
                    <iframe src="${CurrentVideoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br><br>
                `
                document.querySelector(".main-block")?.appendChild(NewVideoElement)
            }
            console.log("VIDEOS: ", VideoArray)
        }
    }
    MakeMovementButtonsAndVideos()
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