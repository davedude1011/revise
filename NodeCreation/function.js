var WindowWidth = 1_000_000
var WindowHeight = 1_000_000

var Nodes = null

function HandleRestOfCode() {
    function CreateNode(ElementNumber, Type, Content) {
        if (Type == "Button") {
            var NodeDimensions = [150, 50]
        }
        else if (Type == "Document") {
            var NodeDimensions = [200, 300]
        }
        else if (Type == "Iframe") {
            var NodeDimensions = [160, 90]
        }
        else {
            var NodeDimensions = ["MANUAL"]
        }
        let BaseTypes = {
            "Button": {
                "Type": "Button",
                "Text": Content
            },
            "Document": {
                "Type": "Document",
                "InnerHTML": Content
            },
            "Image": {
                "Type": "Image",
                "URL": Content
            },
            "Video": {
                "Type": "Iframe",
                "URL": "https://www.youtube.com/embed/" + Content
            },
            "Iframe": {
                "Type": "Iframe",
                "URL": Content
            }
        }
        let BaseNode = {
            "ElementNumber": ElementNumber,
            "NodeDimensions": NodeDimensions,
            "Position": [100.1, 100.1],
            "Visible": false,
            "ChildrenNumbers": [],
            "Pinned": false,
            "TypeData": BaseTypes[Type],
            "AnchorPoint": "Continuous"
        }
    
        Nodes.push(BaseNode)
    }
    
    var CurrentElementIndex = 0
    
    // Function to populate the parent dropdown
    function populateParentDropdown() {
        const parentDropdown = document.getElementById("parent");
        parentDropdown.innerHTML = '<select id="parent" name="parent"></select>'
    
        Nodes.forEach(parent => {
            let Type = parent["TypeData"]["Type"]
            if (Type == "Button") {
                const option = document.createElement("option");
    
                option.text = `${parent["ElementNumber"]} - ${parent["TypeData"]["Text"]}`
                option.value = parent["ElementNumber"]; // optional: you can set the value to lowercase
                parentDropdown.add(option);
            }
    
            if (parent["ElementNumber"] >= CurrentElementIndex) CurrentElementIndex = parent["ElementNumber"]+1
        });
    }
    
    // Call the function to populate the parent dropdown when the page loads
    populateParentDropdown();
    
    // Function to handle form submission
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // prevent the form from submitting
    
        // Get form values
        const parent = document.getElementById("parent").value;
        const type = document.getElementById("type").value;
        const content = document.getElementById("content").value;
    
        // Do something with the form values (for example, log them to the console)
        console.log("Parent Node:", parent);
        console.log("Type:", type);
        console.log("Content:", content);
    
        console.log(CurrentElementIndex)
    
        CreateNode(CurrentElementIndex, type, content)
        for (let i = 0; i < Nodes.length; i++) {
            if (Nodes[i]["ElementNumber"] == parent) {
                Nodes[i]["ChildrenNumbers"].push(CurrentElementIndex)
            }
        }
    
        CurrentElementIndex++
        populateParentDropdown();
        document.getElementById("content").value = ""
    
        // You can add further processing or send the data to a server here
    });
}

function ExportData() {
    console.log(Nodes)
}

let jsonFilePath = 'https://davedude1011.github.io/revise/NodeArray.json';
fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    Nodes = data
    HandleRestOfCode()
  })
  .catch(error => console.error('Error reading JSON file:', error));