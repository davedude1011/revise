var BaseNodes: any = null

// @ts-ignore
function HandleRestOfCode() {
  const WindowHeight = 1_000_000
  const WindowWidth = 1_000_000
  var zIndexCounter = 999

  var CurrentElementHoveredOn: any = null
  var MouseCoords: any = []
  var ZoomLevel = 1

  var IsHoverArrowMaxZ = false

  var ConnectionOptions = [
      "Bezier",
      "Flowchart",
      "Straight",
      "StateMachine"
  ]

  let Settings = JSON.parse(localStorage.getItem("Settings") || JSON.stringify({
      "BackgroundColor": "#343541",
      "ForgroundColor": "#282833",
      "ConnectionType": "Flowchart",
      "NodeTheme": "Dark",
      "HoverArrowMaxZ": "false"
  }))

  function ChangeNodeThemeOutsiders() {
      if (Settings["NodeTheme"] == "Dark") {
          document.querySelector(".node-container")?.classList.add("dark-theme")
          document.querySelector(".node-container")?.classList.remove("light-theme")

          document.querySelector(".info-panel")?.classList.add("dark-theme")
          document.querySelector(".info-panel")?.classList.remove("light-theme")

          document.querySelector(".waypoint-nav-bar-shell")?.classList.add("dark-theme")
          document.querySelector(".waypoint-nav-bar-shell")?.classList.remove("light-theme")

          document.querySelector(".zoom-container")?.classList.add("dark-theme")
          document.querySelector(".zoom-container")?.classList.remove("light-theme")

          document.querySelector(".back-button")?.classList.add("dark-theme")
          document.querySelector(".back-button")?.classList.remove("light-theme")
      }
      else if (Settings["NodeTheme"] == "Light") {
          document.querySelector(".node-container")?.classList.add("light-theme")
          document.querySelector(".node-container")?.classList.remove("dark-theme")

          document.querySelector(".info-panel")?.classList.add("light-theme")
          document.querySelector(".info-panel")?.classList.remove("dark-theme")

          document.querySelector(".waypoint-nav-bar-shell")?.classList.add("light-theme")
          document.querySelector(".waypoint-nav-bar-shell")?.classList.remove("dark-theme")

          document.querySelector(".zoom-container")?.classList.add("light-theme")
          document.querySelector(".zoom-container")?.classList.remove("dark-theme")

          document.querySelector(".back-button")?.classList.add("light-theme")
          document.querySelector(".back-button")?.classList.remove("dark-theme")
      }
  }
  ChangeNodeThemeOutsiders()

  //{
  //    "ElementNumber": n,
  //    "NodeDimensions": [
  //        160,
  //        90
  //    ],
  //    "Position": [
  //        100,
  //        100
  //    ],
  //    "Visible": false,
  //    "ChildrenNumbers": [],
  //    "Pinned": false,
  //    "TypeData": {
  //        "Type": "Document",
  //        "URL": "## PLACEHOLDER ##"
  //    }
  //}

  var ActiveNodeStorageString = localStorage.getItem("ActiveNodeStorage")
  var ActiveNodeStorage = ActiveNodeStorageString !== null ? JSON.parse(ActiveNodeStorageString) : [];

  interface ColorAssigner {
      [key: string]: string;
  }
  var ColorAsigner: ColorAssigner = {
      "Button": "#8f8f8f",
      "Document": "#32a864",
      "Image": "#38d1cc",
      "Iframe": "#ba38d1"
  };

  for (let i = 0; i < BaseNodes.length; i++) {
      if (i != 0) {
          if (BaseNodes[i]["ElementNumber"] != BaseNodes[i-1]["ElementNumber"]+1) {
              console.log(i)
          }
      }
  }

  //let Icons: any = {
  //    "Waypoint": ``
  //}


  for (let i = 0; i < BaseNodes.length; i++) {
      let CurrentBaseNodeElementNumber = BaseNodes[i]["ElementNumber"]
      let CurrentBaseNodeChildNumbers = BaseNodes[i]["ChildrenNumbers"]

      let NodeMissed = true
      for (let j = 0; j < ActiveNodeStorage.length; j++) {
          let CurrentActiveNodeElementNumber = ActiveNodeStorage[j]["ElementNumber"]

          if (CurrentBaseNodeElementNumber == CurrentActiveNodeElementNumber) {
              NodeMissed = false
              j = ActiveNodeStorage.length

              if (ActiveNodeStorage.length > 0) {
                  let CurrentActiveNodeChildNumbers = ActiveNodeStorage[i]["ChildrenNumbers"]
                  if (CurrentBaseNodeChildNumbers != CurrentActiveNodeChildNumbers) {
                      ActiveNodeStorage[i]["ChildrenNumbers"] = CurrentBaseNodeChildNumbers
                  }
              }
          }
      }

      if (NodeMissed) {
          ActiveNodeStorage.push(BaseNodes[i])
      }
  }

  function showToast(type: string, message: string) {
      // @ts-ignore
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-left",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "500",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };
    
      // @ts-ignore
      toastr[type](message);
  }

  function createArrowConnection(sourceElement: HTMLElement, targetElement: HTMLElement) {
      // @ts-ignore
      jsPlumb.ready(function() {
          // @ts-ignore
          var instance = jsPlumb.getInstance();
          
          let TargetElementNumber = targetElement.getAttribute("ElementNumber");
          if (TargetElementNumber != null) {
              let TargetElementIndex: any = GetNodePositionFromElementNumber(Number(TargetElementNumber));
              let TargetElementType = ActiveNodeStorage[TargetElementIndex]["TypeData"]["Type"];

              // @ts-ignore
              let SourceAnchor = ActiveNodeStorage[GetNodePositionFromElementNumber(Number(sourceElement.getAttribute("ElementNumber")))]["AnchorPoint"]
              // @ts-ignore
              let TargetAnchor = ActiveNodeStorage[GetNodePositionFromElementNumber(Number(targetElement.getAttribute("ElementNumber")))]["AnchorPoint"]

              console.log([SourceAnchor, TargetAnchor])
              if (TargetElementType != null) {
                  // Provide TypeScript with type information about ColorAsigner
                  let ChosenColor = ColorAsigner[TargetElementType];
          
                  // @ts-ignore
                  var connection = instance.connect({
                      source: sourceElement.id, // ID of the source element
                      target: targetElement.id, // ID of the target element
                      anchors: [SourceAnchor, TargetAnchor], // Anchor points for the connection

                      endpoint: "Blank", // Use a blank endpoint (no arrow)
                      paintStyle: { stroke: ChosenColor, strokeWidth: 2 },
                      // @ts-ignore
                      connector: Settings["ConnectionType"], // Customize the wire style
                      overlays: [
                        ["Arrow", { location: 1, width: 10, length: 10 }] // Add an arrow overlay at the end of the wire
                      ]
                  });
                  document.querySelector(".node-container")?.appendChild(connection.canvas);

                  connection.canvas.setAttribute("ArrowSource", sourceElement.id);
                  connection.canvas.setAttribute("ArrowTarget", targetElement.id);
              }
          }
      });
  }

  function CenterScreen() {
      let Body: HTMLElement | null = document.querySelector(".node-container");
      if (Body) {
          Body.style.height = WindowHeight + "px"
          Body.style.width = WindowWidth + "px"
          setTimeout(function () {
              window.scrollTo(WindowWidth/2 - (window.innerWidth/2), WindowHeight/2 - (window.innerWidth/2));
          }, 5);
      }
  }

  function GetNodePositionFromElementNumber(ElementNumber: Number) {
      for (let i = 0; i < ActiveNodeStorage.length; i++) {
          let CurrentNode = ActiveNodeStorage[i]
          if (CurrentNode["ElementNumber"] == ElementNumber) return i
      }
      return null
  }

  function TogglePinNode(ElementNumber: number) {
      let NodeIndex = GetNodePositionFromElementNumber(Number(ElementNumber))
      if (NodeIndex != null) {
          let PinState = ActiveNodeStorage[NodeIndex]["Pinned"]
          let NodeElement = document.querySelector(`[ElementNumber="${String(ElementNumber)}"]`)
          if (NodeElement) {
              if (PinState == false) {
                  NodeElement.classList.add("pinned")
                  NodeElement.setAttribute("pinned", "true")
              }
              else {
                  NodeElement.classList.remove("pinned")
                  NodeElement.setAttribute("pinned", "false")
              }
          }
          ActiveNodeStorage[NodeIndex]["Pinned"] = !PinState
      }
  }

  function RefreshOrFadeAllNodeArrows(ElementNumber: Number, IsJustFading: Boolean = false) {
      let AllArrows = document.querySelectorAll("svg.jtk-connector")
      let CurrentNode = document.getElementById(String(ElementNumber))
      if (CurrentNode) {
          for (let i = 0; i < AllArrows.length; i++) {
              let CurrentArrow = AllArrows[i]
              if (CurrentArrow.getAttribute("ArrowSource") == String(ElementNumber)) {
                  if (!IsJustFading) {
                      CurrentArrow.remove()
                      let TargetElement = document.getElementById(CurrentArrow.getAttribute("ArrowTarget") || "---")
                      let TargetElementIndex = GetNodePositionFromElementNumber(Number(TargetElement?.getAttribute("ElementNumber")))
                      setTimeout(function() {
                          if (TargetElement && CurrentNode && TargetElementIndex != null) {
                              if (ActiveNodeStorage[TargetElementIndex]["Visible"] == true) createArrowConnection(CurrentNode, TargetElement)
                          }
                      }, 2)
                  }
                  else {
                      CurrentArrow.classList.add("faded")
                  }
              }
              else if (CurrentArrow.getAttribute("ArrowTarget") == String(ElementNumber)) {
                  if (!IsJustFading) {
                      CurrentArrow.remove()
                      let TargetElement = document.getElementById(CurrentArrow.getAttribute("ArrowSource") || "---")
                      let TargetElementIndex = GetNodePositionFromElementNumber(Number(CurrentArrow?.getAttribute("ElementNumber")))
                      setTimeout(function() {
                          if (TargetElement && CurrentNode && TargetElementIndex != null) {
                              if (ActiveNodeStorage[TargetElementIndex]["Visible"] == true) createArrowConnection(TargetElement, CurrentNode)
                          }
                      }, 2)
                  }
                  else {
                      CurrentArrow.classList.add("faded")
                  }
              }
          }
      }
  }
  function RefreshAllArrows() {
      try {
          let AllNodeElements = document.querySelector(".node-container")?.querySelectorAll("div")
          // @ts-ignore
          for (let i = 0; i < AllNodeElements.length; i++) {
              // @ts-ignore
              RefreshOrFadeAllNodeArrows(Number(AllNodeElements[i].getAttribute("ElementNumber")))
          }
      }
      catch{}
  }
  function ChangeNodeColorTheme() {
      try {
          let AllNodeElements = document.querySelector(".node-container")?.querySelectorAll("div")
          // @ts-ignore
          for (let i = 0; i < AllNodeElements.length; i++) {
              if (Settings["NodeTheme"] == "Dark") {
                  // @ts-ignore
                  AllNodeElements[i].classList.add("dark-theme")
                  // @ts-ignore
                  AllNodeElements[i].classList.remove("light-theme")
              }
              else if (Settings["NodeTheme"] == "Light") {
                  // @ts-ignore
                  AllNodeElements[i].classList.add("light-theme")
                  // @ts-ignore
                  AllNodeElements[i].classList.remove("dark-theme")
              }
          }
          ChangeNodeThemeOutsiders()
      }
      catch{}
  }
  // @ts-ignore
  function CreateNode(IsNewNode: Boolean, NodeData: any) {
      function RecursiveChildDeletion(ElementNumber: Number) {
          let NodeIndex = GetNodePositionFromElementNumber(Number(ElementNumber))
          if (NodeIndex != null) {
              let NodeData = ActiveNodeStorage[NodeIndex];
              if (NodeData["Pinned"] == false) {
                  NodeData["Visible"] = false

                  let NodeElement: HTMLElement | null = document.querySelector(`[ElementNumber="${ElementNumber}"]`)
                  //if (NodeElement) NodeElement.style.display = "none"
                  if (NodeElement) NodeElement.remove()

                  let AllArrows = document.querySelectorAll("svg.jtk-connector")
                  for (let i = 0; i < AllArrows.length; i++) {
                      if (AllArrows[i].getAttribute("ArrowTarget") == String(ElementNumber) || AllArrows[i].getAttribute("ArrowSource") == String(ElementNumber)) AllArrows[i].remove()
                  }

                  let ChildrenNumbers = NodeData["ChildrenNumbers"]
                  if (ChildrenNumbers.length > 0) {
                      for (let i = 0; i < ChildrenNumbers.length; i++) {
                          RecursiveChildDeletion(ChildrenNumbers[i])
                      }
                  }
              }
          }
      }
      function CreateNewNode(NodeType: any) {
          let TempNode = document.createElement(NodeType)
          TempNode.style.position = "absolute"
          
          if (Settings["NodeTheme"] == "Dark") TempNode.classList.add("dark-theme")
          else if (Settings["NodeTheme"] == "Light") TempNode.classList.add("light-theme")

          if (NodeData["Position"][0] == 100.1 && NodeData["Position"][1] == 100.1) {
              for (let i = 0; i < ActiveNodeStorage.length; i++) {
                  if (ActiveNodeStorage[i]["ChildrenNumbers"].includes(NodeData["ElementNumber"])) {
                      TempNode.style.left = ActiveNodeStorage[i]["Position"][0] + 'px';
                      TempNode.style.top = ActiveNodeStorage[i]["Position"][1] + Number(ActiveNodeStorage[i]["NodeDimensions"][1]) + 20 + 'px';

                      // take these away to keep the lement snapped to parent on refresh before moved
                      NodeData["Position"][0] = ActiveNodeStorage[i]["Position"][0];
                      NodeData["Position"][1] = ActiveNodeStorage[i]["Position"][1] + Number(ActiveNodeStorage[i]["NodeDimensions"][1]) + 20;
                  }
              }
          }
          else {
              TempNode.style.left = NodeData["Position"][0] + 'px';
              TempNode.style.top = NodeData["Position"][1] + 'px';
          }
          
          TempNode.style.width = Number(NodeData["NodeDimensions"][0]) + 'px'
          TempNode.style.height = Number(NodeData["NodeDimensions"][1]) + 'px'

          TempNode.textContent = NodeData["TypeData"]["Text"]
          TempNode.setAttribute("ElementNumber", String(NodeData["ElementNumber"]))
          TempNode.id = String(NodeData["ElementNumber"])
          TempNode.setAttribute("Moving", "false");

          return TempNode
      }
      function EndpointEradication() {
          let AllEndpoints = document.querySelectorAll("div.jtk-endpoint")
          for (let i = 0; i < AllEndpoints.length; i++) {
              AllEndpoints[i].remove()
          }
      }
      function ElementDraggable(Element: HTMLElement) {
          // @ts-ignore
          interact(Element).draggable({
              // @ts-ignore
              onstart: function(event) {
                  const target = event.target;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      target.setAttribute("Moving", "true");
                      target.style.zIndex = zIndexCounter += 1
                  }
              },
              // @ts-ignore
              onmove: function(event) {
                  const target = event.target;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover') || target.getAttribute("moving") == "true") {
                      target.style.left = (Number(String(target.style.left).split("px")[0]) + event.dx) + "px";
                      target.style.top = (Number(String(target.style.top).split("px")[0]) + event.dy) + "px";

                      let TargetIndex = GetNodePositionFromElementNumber(Number(target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["Position"] = [Number(String(target.style.left).split("px")[0]), Number(String(target.style.top).split("px")[0])];
                      }
                  }
              },
              // @ts-ignore
              onend: function(event) {
                  const target = event.target;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      setTimeout(function() {
                          target.setAttribute("Moving", "false");
                      }, 2)
                  }
              }
          });
      }
      function RecursiveSearchNodeOpeningUp(ElementNumber: number) {
        for (let i = 0; i < ActiveNodeStorage.length; i++) {
          if (ActiveNodeStorage[i]["ElementNumber"] == ElementNumber) {
            ActiveNodeStorage[i]["Visible"] = true
            CreateNode(true, ActiveNodeStorage[i])



            for (let j = 0; j < ActiveNodeStorage.length; j++) {
              if (ActiveNodeStorage[j]["ChildrenNumbers"].includes(ActiveNodeStorage[i]["ElementNumber"])) {
                RecursiveSearchNodeOpeningUp(ActiveNodeStorage[j]["ElementNumber"])

                setTimeout(function() {
                  let StartElement: HTMLElement | null = document.querySelector(`div[ElementNumber="${ActiveNodeStorage[j]["ElementNumber"]}"]`)
                  let EndElement: HTMLElement | null = document.querySelector(`div[ElementNumber="${ElementNumber}"]`)
                  if (StartElement && EndElement) {
                    createArrowConnection(StartElement, EndElement)
                  }
                  console.log(StartElement, EndElement)
                }, 20)
              }
            }
          }
        }
      }
      let NodeType = NodeData["TypeData"]["Type"]
      if (NodeType == "Button") {
          console.log(NodeData["Position"])
          var NewNode: HTMLElement = CreateNewNode("div")

          if (NodeData["Visible"]) NewNode.style.display = "block"
          else NewNode.style.display = "none"

          NewNode.setAttribute("contenteditable", "true")
          NewNode.classList.add("button")

          NewNode.addEventListener("input", function() {
              let ElementNumber = this.getAttribute("ElementNumber")
              let NodeDataIndex: any = GetNodePositionFromElementNumber(Number(ElementNumber))
              if (NodeData) {
                  ActiveNodeStorage[NodeDataIndex]["TypeData"]["Text"] = this.innerHTML
              }
          })

          NewNode.innerHTML = NodeData["TypeData"]["Text"]

          NewNode.addEventListener("click", function() {
              if (this.getAttribute("Moving") == "false") {
                  let NewNodeIndex = GetNodePositionFromElementNumber(Number(this.getAttribute("ElementNumber")))
                  if (NewNodeIndex != null && ActiveNodeStorage[NewNodeIndex]["Pinned"] == false) {
                      let ChildNodes = ActiveNodeStorage[NewNodeIndex]["ChildrenNumbers"]
                      
                      for (let i = 0; i < ChildNodes.length; i++) {
                          let ChildNode = ChildNodes[i]
                          let ChildNodeIndex = GetNodePositionFromElementNumber(ChildNode)
      
                          if (ChildNodeIndex) {
                              let ChildIsVisible = ActiveNodeStorage[ChildNodeIndex]["Visible"]
                              ActiveNodeStorage[ChildNodeIndex]["Visible"] = !ChildIsVisible
      
                              //let ChildNodeElement: HTMLElement | null = document.querySelector(`[ElementNumber='${String(ChildNodeIndex)}']`)
                              //if (ChildNodeElement) {
                              //    if (ChildIsVisible) {
                              //        RecursiveChildDeletion(ChildNode)
                              //    }
                              //    else {
                              //        ChildNodeElement.style.display = "block"
      //
                              //        createArrowConnection(this, ChildNodeElement)
                              //    }
                              //}

                              if (ActiveNodeStorage[ChildNodeIndex]["NodeDimensions"][0] != 0 && ActiveNodeStorage[ChildNodeIndex]["NodeDimensions"][1] != 0) {
                                  if (ChildIsVisible) {
                                      RecursiveChildDeletion(ChildNode)
                                  }
                                  else {
                                      CreateNode(true, ActiveNodeStorage[ChildNodeIndex])
      
                                      let ChildNodeElement: HTMLElement | null = document.querySelector(`[ElementNumber='${String(ChildNodeIndex)}']`)
                                      if (ChildNodeElement) createArrowConnection(this, ChildNodeElement)
                                  }
                              }
                          }
                      }
                  }
              }
          })
          ElementDraggable(NewNode)
      }
      else if (NodeType == "Document") {
          function DocumentNodeResize(TargetNode: HTMLElement, NewWidth: number) {
              let AllTextElements = TargetNode.querySelectorAll<HTMLElement>(".text")
              for (let i = 0; i < AllTextElements.length; i++) {
                  AllTextElements[i].style.fontSize = `${NewWidth / 40}px`;
                  AllTextElements[i].style.marginBottom = `${NewWidth / 25}px`;
              }

              let AllHeaderElements = TargetNode.querySelectorAll<HTMLElement>(".header")
              for (let i = 0; i < AllHeaderElements.length; i++) {
                  AllHeaderElements[i].style.fontSize = `${NewWidth / 30}px`;
              }

              let AllTitleElements = TargetNode.querySelectorAll<HTMLElement>(".title")
              for (let i = 0; i < AllTitleElements.length; i++) {
                  AllTitleElements[i].style.fontSize = `${NewWidth / 15}px`;
              }

              let AllDateElements = TargetNode.querySelectorAll<HTMLElement>(".date")
              for (let i = 0; i < AllDateElements.length; i++) {
                  AllDateElements[i].style.fontSize = `${NewWidth / 35}px`;
              }

              let AllSubjectElements = TargetNode.querySelectorAll<HTMLElement>(".subject")
              for (let i = 0; i < AllSubjectElements.length; i++) {
                  AllSubjectElements[i].style.fontSize = `${NewWidth / 25}px`;
              }
          }

          var NewNode: HTMLElement = CreateNewNode("div")
          var NewNodeHandle: HTMLElement = document.createElement("div")
          var NewNodeContent: HTMLElement = document.createElement("div")

          if (NodeData["Visible"]) {
              NewNode.style.display = "block";
          }
          else {
              NewNode.style.display = "none";
          }

          NewNode.classList.add("document-container")
          NewNodeHandle.classList.add("document-handle")
          NewNodeContent.classList.add("document-cover")
      
          if (NodeData["TypeData"]["InnerHTML"] == "" || NodeData["Custom"] == true) {
              NewNodeContent.classList.add("note")
              NewNodeContent.innerHTML = NodeData["TypeData"]["InnerHTML"]
          }
          else NewNodeContent.innerHTML = NodeData["TypeData"]["InnerHTML"]

          NewNode.setAttribute("AspectRatio", String(NodeData["NodeDimensions"][0]/NodeData["NodeDimensions"][1]))
          NewNodeContent.setAttribute("contenteditable", "true")
          NewNodeContent.setAttribute("ElementNumber", NodeData["ElementNumber"])

          NewNodeContent.addEventListener("input", function() {
              let ElementNumber = this.getAttribute("ElementNumber")
              let NodeDataIndex: any = GetNodePositionFromElementNumber(Number(ElementNumber))
              if (NodeData) {
                  ActiveNodeStorage[NodeDataIndex]["TypeData"]["InnerHTML"] = this.innerHTML
              }
          })

          // @ts-ignore
          interact(NewNode).resizable({
              edges: { bottom: true, left: true, right: true },
              listeners: {
                  // @ts-ignore
                  move(event) {
                      const { x, y } = event.target.dataset;
                      const { width, height } = event.rect;
                      // @ts-ignore
                      const aspectRatio = parseFloat(NewNode.getAttribute('AspectRatio')) || 1;

                      let newWidth = width;
                      let newHeight = height;
                      let newX = event.deltaRect.left;
                      let newY = event.deltaRect.top;

                      // Calculate new dimensions while preserving aspect ratio
                      if (event.edges.right) {
                          newHeight = width / aspectRatio;
                      } else if (event.edges.bottom) {
                          newWidth = height * aspectRatio;
                      } else if (event.edges.left) {
                          newHeight = width / aspectRatio;
                          newX = event.deltaRect.right;
                      } else if (event.edges.top) {
                          newWidth = height * aspectRatio;
                          newY = event.deltaRect.bottom;
                      }

                      // Update element style
                      event.target.style.width = `${newWidth}px`;
                      event.target.style.height = `${newHeight}px`;
                      let TargetIndex = GetNodePositionFromElementNumber(Number(event.target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["NodeDimensions"] = [newWidth, newHeight];
                      }

                      DocumentNodeResize(event.target, newWidth)
                      event.target.style.transform = `translate(${newX}px, ${newY}px)`;

                      // Update data attributes
                      Object.assign(event.target.dataset, {
                          x: parseFloat(x || '0') + newX,
                          y: parseFloat(y || '0') + newY,
                      });
                  }
              },
              modifiers: [
                  // @ts-ignore
                  interact.modifiers.aspectRatio({
                      ratio: 'preserve',
                      modifiers: [
                          // @ts-ignore
                          interact.modifiers.restrictEdges({
                              outer: 'parent',
                              endOnly: true,
                          }),
                      ],
                  }),
              ],
          });
          // @ts-ignore
          MathJax.Hub.Config({
              tex2jax: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']] }
          });

          NewNode.appendChild(NewNodeHandle)
          NewNode.appendChild(NewNodeContent)

          // @ts-ignore
          interact(NewNodeHandle).draggable({
              // @ts-ignore
              onstart: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      target.setAttribute("Moving", "true");
                      target.style.zIndex = zIndexCounter += 1
                  }
              },
              // @ts-ignore
              onmove: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover') || target.getAttribute("moving") == "true") {
                      target.style.left = (Number(String(target.style.left).split("px")[0]) + event.dx) + "px";
                      target.style.top = (Number(String(target.style.top).split("px")[0]) + event.dy) + "px";

                      let TargetIndex = GetNodePositionFromElementNumber(Number(target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["Position"] = [Number(String(target.style.left).split("px")[0]), Number(String(target.style.top).split("px")[0])];
                      }
                  }
              },
              // @ts-ignore
              onend: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      setTimeout(function() {
                          target.setAttribute("Moving", "false");
                      }, 2)
                  }
              }
          });
          DocumentNodeResize(NewNode, NodeData["NodeDimensions"][0])
      }
      else if (NodeType == "Image") {
          var NewNode: HTMLElement = CreateNewNode("img")

          if (NodeData["Visible"]) NewNode.style.display = "block"
          else NewNode.style.display = "none"

          NewNode.classList.add("image")
          // @ts-ignore
          NewNode.src = NodeData["TypeData"]["URL"]
          NewNode.setAttribute("AspectRatio", String(NodeData["NodeDimensions"][0]/NodeData["NodeDimensions"][1]))

          // @ts-ignore
          interact(NewNode).resizable({
              edges: { top: true, bottom: true, left: true, right: true },
              listeners: {
                  // @ts-ignore
                  move(event) {
                      const { x, y } = event.target.dataset;
                      const { width, height } = event.rect;
                      // @ts-ignore
                      const aspectRatio = parseFloat(NewNode.getAttribute('AspectRatio')) || 1;

                      let newWidth = width;
                      let newHeight = height;
                      let newX = event.deltaRect.left;
                      let newY = event.deltaRect.top;

                      // Calculate new dimensions while preserving aspect ratio
                      if (event.edges.right) {
                          newHeight = width / aspectRatio;
                      } else if (event.edges.bottom) {
                          newWidth = height * aspectRatio;
                      } else if (event.edges.left) {
                          newHeight = width / aspectRatio;
                          newX = event.deltaRect.right;
                      } else if (event.edges.top) {
                          newWidth = height * aspectRatio;
                          newY = event.deltaRect.bottom;
                      }

                      // Update element style
                      event.target.style.width = `${newWidth}px`;
                      event.target.style.height = `${newHeight}px`;
                      let TargetIndex = GetNodePositionFromElementNumber(Number(event.target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["NodeDimensions"] = [newWidth, newHeight];
                      }

                      event.target.style.transform = `translate(${newX}px, ${newY}px)`;

                      // Update data attributes
                      Object.assign(event.target.dataset, {
                          x: parseFloat(x || '0') + newX,
                          y: parseFloat(y || '0') + newY,
                      });
                  }
              },
              modifiers: [
                  // @ts-ignore
                  interact.modifiers.aspectRatio({
                      ratio: 'preserve',
                      modifiers: [
                          // @ts-ignore
                          interact.modifiers.restrictEdges({
                              outer: 'parent',
                              endOnly: true,
                          }),
                      ],
                  }),
              ],
          });
          // @ts-ignore
          MathJax.Hub.Config({
              tex2jax: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']] }
          });

          ElementDraggable(NewNode)
      }
      else if (NodeType == "Iframe") {
          var NewNode: HTMLElement = CreateNewNode("div")
          let NewIframe: HTMLElement = document.createElement("iframe")
          let NewInput: HTMLInputElement = document.createElement("input")

          if (NodeData["Visible"]) NewNode.style.display = "block"
          else NewNode.style.display = "none"

          NewNode.classList.add("iframe")
          // @ts-ignore
          NewIframe.src = NodeData["TypeData"]["URL"]
          NewNode.setAttribute("AspectRatio", String(NodeData["NodeDimensions"][0]/NodeData["NodeDimensions"][1]))
          NewInput.classList.add("iframe-input")
          NewInput.setAttribute("ElementNumber", NodeData["ElementNumber"])
          NewInput.value = NodeData["TypeData"]["URL"]

          NewInput.addEventListener("input", function() {
              let ThisIframeElemet = this.nextSibling
              // @ts-ignore
              let ThisElementNumber = this.getAttribute("ElementNumber")
              if (ThisElementNumber != null) {
                  let ThisArrayIndex = GetNodePositionFromElementNumber(Number(ThisElementNumber))
                  if (ThisArrayIndex != null) {
                      ActiveNodeStorage[ThisArrayIndex]["TypeData"]["URL"] = String(this.value)
                      // @ts-ignore
                      ThisIframeElemet.src = String(this.value)
                      console.log(ThisIframeElemet)
                  }
              }
          })

          NewNode.appendChild(NewIframe)
          NewNode.appendChild(NewInput)

          // @ts-ignore
          interact(NewNode).resizable({
              edges: { left: true, right: true },
              listeners: {
                  // @ts-ignore
                  move(event) {
                      const { x, y } = event.target.dataset;
                      const { width, height } = event.rect;
                      // @ts-ignore
                      const aspectRatio = parseFloat(NewNode.getAttribute('AspectRatio')) || 1;

                      let newWidth = width;
                      let newHeight = height;
                      let newX = event.deltaRect.left;
                      let newY = event.deltaRect.top;

                      // Calculate new dimensions while preserving aspect ratio
                      if (event.edges.right) {
                          newHeight = width / aspectRatio;
                      } else if (event.edges.bottom) {
                          newWidth = height * aspectRatio;
                      } else if (event.edges.left) {
                          newHeight = width / aspectRatio;
                          newX = event.deltaRect.right;
                      } else if (event.edges.top) {
                          newWidth = height * aspectRatio;
                          newY = event.deltaRect.bottom;
                      }

                      // Update element style
                      event.target.style.width = `${newWidth}px`;
                      event.target.style.height = `${newHeight}px`;
                      let TargetIndex = GetNodePositionFromElementNumber(Number(event.target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["NodeDimensions"] = [newWidth, newHeight];
                      }

                      event.target.style.transform = `translate(${newX}px, ${newY}px)`;

                      // Update data attributes
                      Object.assign(event.target.dataset, {
                          x: parseFloat(x || '0') + newX,
                          y: parseFloat(y || '0') + newY,
                      });
                  }
              },
              modifiers: [
                  // @ts-ignore
                  interact.modifiers.aspectRatio({
                      ratio: 'preserve',
                      modifiers: [
                          // @ts-ignore
                          interact.modifiers.restrictEdges({
                              outer: 'parent',
                              endOnly: true,
                          }),
                      ],
                  }),
              ],
          });
          // @ts-ignore
          MathJax.Hub.Config({
              tex2jax: { inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]']] }
          });
          
          ElementDraggable(NewNode)
      }
      else if (NodeType == "Export") {
          var NewNode: HTMLElement = CreateNewNode("div")
          var NewNodeButton: HTMLElement = document.createElement("Button")
          var NewNodeOutput: HTMLElement = document.createElement("div")
          var NewNodeHandle: HTMLElement = document.createElement("div")

          if (NodeData["Visible"]) {
              NewNode.style.display = "block";
          }
          else {
              NewNode.style.display = "none";
          }

          NewNode.classList.add("export-container")
          NewNodeButton.classList.add("export-button")
          NewNodeOutput.classList.add("export-output")
          NewNodeHandle.classList.add("export-handle")
          
          NewNodeButton.textContent = "EXPORT NODES"
          NewNodeOutput.setAttribute("contenteditable", "true")

          NewNodeButton.addEventListener("click", function() {
              let Output = this.nextElementSibling
              if (Output) {
                  Output.textContent = JSON.stringify(ActiveNodeStorage)
              }
          })

          

          NewNode.appendChild(NewNodeButton)
          NewNode.appendChild(NewNodeOutput)
          NewNode.appendChild(NewNodeHandle)

          // @ts-ignore
          interact(NewNodeHandle).draggable({
              // @ts-ignore
              onstart: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      target.setAttribute("Moving", "true");
                      target.style.zIndex = zIndexCounter += 1
                  }
              },
              // @ts-ignore
              onmove: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover') || target.getAttribute("moving") == "true") {
                      target.style.left = (Number(String(target.style.left).split("px")[0]) + event.dx) + "px";
                      target.style.top = (Number(String(target.style.top).split("px")[0]) + event.dy) + "px";

                      let TargetIndex = GetNodePositionFromElementNumber(Number(target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["Position"] = [Number(String(target.style.left).split("px")[0]), Number(String(target.style.top).split("px")[0])];
                      }
                  }
              },
              // @ts-ignore
              onend: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      setTimeout(function() {
                          target.setAttribute("Moving", "false");
                      }, 2)
                  }
              }
          });
      }
      else if (NodeType == "Waypoint") {
          var NewNode: HTMLElement = CreateNewNode("div")
          var NewNodeIcon: HTMLElement = document.createElement("div")
          var NewNodeText: HTMLInputElement = document.createElement("input")

          if (NodeData["Visible"]) {
              NewNode.style.display = "block";
          }
          else {
              NewNode.style.display = "none";
          }

          NewNode.classList.add("waypoint-container")
          NewNodeIcon.classList.add("waypoint-icon")
          NewNodeText.classList.add("waypoint-text")

          NewNode.textContent = ""

          //NewNodeIcon.innerHTML = Icons[NodeData["TypeData"]["Icon"]]
          NewNodeText.setAttribute("ElementNumber", NodeData["ElementNumber"])
          NewNodeText.value = NodeData["TypeData"]["Text"]
          NewNodeText.placeholder = "Waypoint Title"

          NewNodeText.addEventListener("input", function() {
              ActiveNodeStorage[Number(this.getAttribute("ElementNumber"))]["TypeData"]["Text"] = this.value

              // @ts-ignore
              document.querySelector(`.waypoint-nav-bar-icon[ElementNumber="${this.getAttribute("ElementNumber")}"]`)?.textContent = this.value
          })

          

          NewNode.appendChild(NewNodeIcon)
          NewNode.appendChild(NewNodeText)

          let NewWaypointNavbar = document.createElement("div")
          NewWaypointNavbar.classList.add("waypoint-nav-bar-icon")
          NewWaypointNavbar.setAttribute("ElementNumber", NodeData["ElementNumber"])
          NewWaypointNavbar.textContent = NodeData["TypeData"]["Text"]

          NewWaypointNavbar.addEventListener("click", function() {
              // @ts-ignore
              let WaypointArrayItem = ActiveNodeStorage[GetNodePositionFromElementNumber(this.getAttribute("ElementNumber"))]

              let WaypointCoords = WaypointArrayItem["Position"]
              window.scrollTo((WaypointCoords[0] - (window.innerWidth/2)) * ZoomLevel, (WaypointCoords[1] - (window.innerHeight/2)) * ZoomLevel)
              console.log(ZoomLevel)
          })

          document.querySelector(".waypoint-nav-bar")?.appendChild(NewWaypointNavbar)

          // @ts-ignore
          interact(NewNodeIcon).draggable({
              // @ts-ignore
              onstart: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      target.setAttribute("Moving", "true");
                      target.style.zIndex = zIndexCounter += 1
                  }
              },
              // @ts-ignore
              onmove: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover') || target.getAttribute("moving") == "true") {
                      target.style.left = (Number(String(target.style.left).split("px")[0]) + event.dx) + "px";
                      target.style.top = (Number(String(target.style.top).split("px")[0]) + event.dy) + "px";

                      let TargetIndex = GetNodePositionFromElementNumber(Number(target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["Position"] = [Number(String(target.style.left).split("px")[0]), Number(String(target.style.top).split("px")[0])];
                      }
                  }
              },
              // @ts-ignore
              onend: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      setTimeout(function() {
                          target.setAttribute("Moving", "false");
                      }, 2)
                  }
              }
          });
      }
      else if (NodeType == "Settings") {
          var NewNode: HTMLElement = CreateNewNode("div")
          var NewNodeUI: HTMLElement = document.createElement("div")
          var NewNodeHandle: HTMLElement = document.createElement("div")

          if (NodeData["Visible"]) {
              NewNode.style.display = "block";
          }
          else {
              NewNode.style.display = "none";
          }

          NewNode.classList.add("settings-container")
          NewNodeUI.classList.add("settings-ui-container")
          NewNodeUI.setAttribute("ElementNumber", NodeData["ElementNumber"])

          // BackgroundColor
          //let NewButton = document.createElement("input")
          //NewButton.type = "color"
          //NewButton.value = Settings["BackgroundColor"]
          //NewButton.addEventListener("input", function() {
          //    let NodeIndex = GetNodePositionFromElementNumber(Number(this.parentElement?.getAttribute("ElementNumber")))
          //    if (NodeIndex != null) Settings["BackgroundColor"] = this.value
          //})
          //NewNodeUI.appendChild(NewButton)

          // ForgroundColor
          //NewButton = document.createElement("input")
          //NewButton.type = "color"
          //NewButton.value = Settings["ForgroundColor"]
          //NewButton.addEventListener("input", function() {
          //    let NodeIndex = GetNodePositionFromElementNumber(Number(this.parentElement?.getAttribute("ElementNumber")))
          //    if (NodeIndex != null) Settings["ForgroundColor"] = this.value
          //})
          //NewNodeUI.appendChild(NewButton)

          // ConnectionType
          // @ts-ignore
          let NewButton = document.createElement("button")
          NewButton.textContent = "Connection Type"
          NewButton.addEventListener("click", function() {
              let NewConnectionOption = ""
              for (let i = 0; i < ConnectionOptions.length; i++) {
                  if (ConnectionOptions[i] == Settings["ConnectionType"]) {
                      if (i == ConnectionOptions.length-1) NewConnectionOption = ConnectionOptions[0]
                      else NewConnectionOption = ConnectionOptions[i+1]
                  }
              }
              showToast("success", NewConnectionOption)
              Settings["ConnectionType"] = NewConnectionOption
              let NodeIndex = GetNodePositionFromElementNumber(Number(this.parentElement?.getAttribute("ElementNumber")))
              if (NodeIndex != null) Settings["ConnectionType"] = NewConnectionOption
              RefreshAllArrows()
          })
          NewNodeUI.appendChild(NewButton)

          //Dark and Light Theme
          let NewButtonContainer = document.createElement("div")
          let NewDarkButton = document.createElement("button")
          let NewLightButton = document.createElement("button")
          NewDarkButton.textContent = "Dark"
          NewLightButton.textContent = "Light"
          NewDarkButton.addEventListener("click", function() {
              Settings["NodeTheme"] = "Dark"
              showToast("success", Settings["NodeTheme"] + " mode!")
              ChangeNodeColorTheme()
          })
          NewLightButton.addEventListener("click", function() {
              Settings["NodeTheme"] = "Light"
              showToast("success", Settings["NodeTheme"] + " mode!")
              ChangeNodeColorTheme()
          })
          NewButtonContainer.appendChild(NewDarkButton)
          NewButtonContainer.appendChild(NewLightButton)
          NewNodeUI.appendChild(NewButtonContainer)

          //"NodeTheme": "Dark",
          //"HoverArrowMaxZ": "false"
          
          NewNodeHandle.classList.add("settings-handle")

          NewNode.appendChild(NewNodeHandle)
          NewNode.appendChild(NewNodeUI)

          //@ts-ignore
          interact(NewNodeHandle).draggable({
              // @ts-ignore
              onstart: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      target.setAttribute("Moving", "true");
                      target.style.zIndex = zIndexCounter += 1
                  }
              },
              // @ts-ignore
              onmove: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover') || target.getAttribute("moving") == "true") {
                      target.style.left = (Number(String(target.style.left).split("px")[0]) + event.dx) + "px";
                      target.style.top = (Number(String(target.style.top).split("px")[0]) + event.dy) + "px";
          
                      let TargetIndex = GetNodePositionFromElementNumber(Number(target.getAttribute("ElementNumber")));
                      if (TargetIndex != null) {
                          ActiveNodeStorage[TargetIndex]["Position"] = [Number(String(target.style.left).split("px")[0]), Number(String(target.style.top).split("px")[0])];
                      }
                  }
              },
              // @ts-ignore
              onend: function(event) {
                  const target = event.target.parentNode;
                  if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                      setTimeout(function() {
                          target.setAttribute("Moving", "false");
                      }, 2)
                  }
              }
          });
      }
      else if (NodeType == "Search") {
        var NewNode: HTMLElement = CreateNewNode("div")
        var NewNodeHandle: HTMLElement = document.createElement("div")
        var NewNodeInput: HTMLElement = document.createElement("input")
        var NewNodeSearchContainer: HTMLElement = document.createElement("div")

        if (NodeData["Visible"]) {
            NewNode.style.display = "block";
        }
        else {
            NewNode.style.display = "none";
        }

        NewNode.classList.add("search-container")
        NewNodeHandle.classList.add("search-handle")
        NewNodeInput.classList.add("search-input")
        NewNodeSearchContainer.classList.add("search-inner-container")

        NewNodeInput.addEventListener("input", function() {
          // @ts-ignore
          let SearchValue: string = this.value
          // @ts-ignore
          let ResultContainer: HTMLElement = this.nextElementSibling

          if (ResultContainer) {
            ResultContainer.innerHTML = ""
    
            for (let i = 0; i < ActiveNodeStorage.length; i++) {
              let NodeData = ActiveNodeStorage[i]
              let NodeType = NodeData["TypeData"]["Type"]
    
              if (NodeType == "Button") {
                if (NodeData["TypeData"]["Text"].toLowerCase().includes(SearchValue.toLowerCase())) {
                  console.log(NodeData["TypeData"]["Text"])
    
                  let NewSearchResult = document.createElement("button")
                  NewSearchResult.classList.add("search-result")
                  NewSearchResult.innerHTML = NodeData["TypeData"]["Text"]
                  NewSearchResult.setAttribute("ElementNumber", NodeData["ElementNumber"])

                  NewSearchResult.addEventListener("click", function() {
                    // @ts-ignore
                    let NodeData = ActiveNodeStorage[GetNodePositionFromElementNumber(Number(this.getAttribute("ElementNumber")))]

                    RecursiveSearchNodeOpeningUp(NodeData["ElementNumber"])

                    setTimeout(function() {
                      let WaypointCoords = NodeData["Position"]
                      window.scrollTo((WaypointCoords[0] - (window.innerWidth/2)) * ZoomLevel, (WaypointCoords[1] - (window.innerHeight/2)) * ZoomLevel)
                    }, 200)
                  })

    
                  ResultContainer.appendChild(NewSearchResult)
                }
              }
            }
          }
        })

        NewNode.appendChild(NewNodeHandle)
        NewNode.appendChild(NewNodeInput)
        NewNode.appendChild(NewNodeSearchContainer)

        // @ts-ignore
        interact(NewNodeHandle).draggable({
            // @ts-ignore
            onstart: function(event) {
                const target = event.target.parentNode;
                if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                    target.setAttribute("Moving", "true");
                    target.style.zIndex = zIndexCounter += 1
                }
            },
            // @ts-ignore
            onmove: function(event) {
                const target = event.target.parentNode;
                if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover') || target.getAttribute("moving") == "true") {
                    target.style.left = (Number(String(target.style.left).split("px")[0]) + event.dx) + "px";
                    target.style.top = (Number(String(target.style.top).split("px")[0]) + event.dy) + "px";

                    let TargetIndex = GetNodePositionFromElementNumber(Number(target.getAttribute("ElementNumber")));
                    if (TargetIndex != null) {
                        ActiveNodeStorage[TargetIndex]["Position"] = [Number(String(target.style.left).split("px")[0]), Number(String(target.style.top).split("px")[0])];
                    }
                }
            },
            // @ts-ignore
            onend: function(event) {
                const target = event.target.parentNode;
                if (target.getAttribute("pinned") != "true" && !event.target.querySelector(':hover')) {
                    setTimeout(function() {
                        target.setAttribute("Moving", "false");
                    }, 2)
                }
            }
        });
      }
      else {
          var NewNode: HTMLElement = document.createElement("span")
      }

      if (NodeType != "Button") {
          let NodeChildrenNumbers = NodeData["ChildrenNumbers"]
          for (let i = 0; i < NodeChildrenNumbers.length; i++) {
              let CurrentChildArray = GetNodePositionFromElementNumber(NodeChildrenNumbers[i])

              if (CurrentChildArray != null) {
                  let CurrentChildArrayElement = ActiveNodeStorage[CurrentChildArray]
                  ActiveNodeStorage[CurrentChildArray]["Visible"] = true

                  CreateNode(true, CurrentChildArrayElement)
                  setTimeout(function() {
                      let CreatedElement: HTMLElement | null = document.querySelector(`[ElementNumber="${CurrentChildArrayElement["ElementNumber"]}"]`)
                      if (CreatedElement) createArrowConnection(NewNode, CreatedElement)
                  }, 2)
              }
          }
          console.log(NodeChildrenNumbers)
      }
      if (NodeData["Pinned"]) {
          NewNode.classList.add("pinned")
          NewNode.setAttribute("Pinned", "true")
      }

      NewNode.addEventListener("mouseup", function() {
          RefreshOrFadeAllNodeArrows(Number(this.getAttribute("ElementNumber")))

          setTimeout(EndpointEradication, 2)
      })
      NewNode.addEventListener('contextmenu', function(event) {
          event.preventDefault();
          //RecursiveChildDeletion(Number(this.getAttribute("ElementNumber")))
      });
      NewNode.addEventListener("mousedown", function(event) {
          if (event.button == 0) {
              if (this.getAttribute("pinned") != "true") {
                  RefreshOrFadeAllNodeArrows(Number(this.getAttribute("ElementNumber")), true)
              }
          }
          else if (event.button == 1) {
              event.preventDefault()
              //
          }
      })

      NewNode.addEventListener("mouseover", function() {
          let TargetArrows: any = document.querySelectorAll(`svg[ArrowTarget="${this.getAttribute("ElementNumber")}"]`)
          for (let i = 0; i < TargetArrows.length; i++) {
              TargetArrows[i].classList.add("arrow-hover")
              if (IsHoverArrowMaxZ) TargetArrows[i].style.zIndex = String(zIndexCounter++)
              else TargetArrows[i].style.zIndex = "0";
          }
          let SourceArrows: any = document.querySelectorAll(`svg[ArrowSource="${this.getAttribute("ElementNumber")}"]`)
          for (let i = 0; i < SourceArrows.length; i++) {
              SourceArrows[i].classList.add("arrow-hover")
              if (IsHoverArrowMaxZ) SourceArrows[i].style.zIndex = String(zIndexCounter++)
              else SourceArrows[i].style.zIndex = "0";
          }
          CurrentElementHoveredOn = this
      })
      NewNode.addEventListener("mouseleave", function() {
          let TargetArrows: any = document.querySelectorAll(`svg[ArrowTarget="${this.getAttribute("ElementNumber")}"]`)
          for (let i = 0; i < TargetArrows.length; i++) {
              TargetArrows[i].classList.remove("arrow-hover")
              TargetArrows[i].style.zIndex = "0";
          }
          let SourceArrows: any = document.querySelectorAll(`svg[ArrowSource="${this.getAttribute("ElementNumber")}"]`)
          for (let i = 0; i < SourceArrows.length; i++) {
              SourceArrows[i].classList.remove("arrow-hover")
              SourceArrows[i].style.zIndex = "0";
          }
          CurrentElementHoveredOn = null
      })

      document.querySelector(".node-container")?.appendChild(NewNode)

      //if (NodeType == "Document") {
      //    let AllDocumentTextElements = document.querySelectorAll(".document-cover .text:not(.js-text-selector), .document-cover .header:not(.js-text-selector)")
      //    for (let i = 0; i < AllDocumentTextElements.length; i++) {
      //        let CurrentTextElement = AllDocumentTextElements[i]
      //        CurrentTextElement.classList.add("js-text-selector")
      //
      //        //CurrentTextElement.addEventListener("click", function() {
      //        //    console.log(CurrentTextElement.textContent)
      //        //})
  //
      //        //CurrentTextElement.addEventListener("mouseup", function() {
      //        //    var selection = window.getSelection()?.toString();
      //        //    console.log(selection)
      //        //    if (selection != "") {
      //        //      var range = window.getSelection()?.getRangeAt(0);
      //        //      var span = document.createElement("span");
      //        //      span.classList.toggle("text-highlight");
      //        //      range?.surroundContents(span);
      //        //    }
      //        //  });
      //    }
      //    console.log(AllDocumentTextElements)
      //}
  }

  function LinkAllExisitingNodes() {
      for (let i = 0; i < ActiveNodeStorage.length; i++) {
          let CurrentArrayNode = ActiveNodeStorage[i]
          let ArrayNodeElement: HTMLElement | null = document.querySelector(`[ElementNumber="${String(CurrentArrayNode["ElementNumber"])}"]`)
          if (CurrentArrayNode["Visible"] == true && ArrayNodeElement) {
              let ArrayNodeChildren = CurrentArrayNode["ChildrenNumbers"]
              for (let j = 0; j < ArrayNodeChildren.length; j++) {
                  let CurrentChildIndex = ArrayNodeChildren[j]
                  let CurrentChildElement: HTMLElement | null = document.querySelector(`[ElementNumber="${String(CurrentChildIndex)}"]`)
                  if (CurrentChildElement && CurrentChildElement.style.display != "none") {
                      createArrowConnection(ArrayNodeElement, CurrentChildElement)
                  }
              }
          }
      }
  }

  CenterScreen()
  for (let i = 0; i < ActiveNodeStorage.length; i++) {
      if (ActiveNodeStorage[i]["Visible"]) CreateNode(true, ActiveNodeStorage[i])
  }
  LinkAllExisitingNodes()

  setInterval(function() {
      localStorage.setItem('ActiveNodeStorage', JSON.stringify(ActiveNodeStorage))
      localStorage.setItem("Settings", JSON.stringify(Settings))
  }, 1000)

  document.addEventListener('mousemove', function(event) {
      MouseCoords[0] = event.clientX;
      MouseCoords[1] = event.clientY;
  });

  document.addEventListener('keypress', function(event) {
      // @ts-ignore
      if (document.activeElement.tagName == "BODY") {
          if (event.key == 'r') {
              let ElementNumber = CurrentElementHoveredOn.getAttribute("ElementNumber")
              let ElementIndex = GetNodePositionFromElementNumber(ElementNumber)
      
              if (ElementIndex != null) {
                  let AnchorPoint = ActiveNodeStorage[ElementIndex]["AnchorPoint"]
                  if (AnchorPoint == "TopLeft") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "Top"
                  else if (AnchorPoint == "Top") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "TopRight"
                  else if (AnchorPoint == "TopRight") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "Right"
                  else if (AnchorPoint == "Right") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "BottomRight"
                  else if (AnchorPoint == "BottomRight") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "Bottom"
                  else if (AnchorPoint == "Bottom") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "BottomLeft"
                  else if (AnchorPoint == "BottomLeft") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "Left"
                  else if (AnchorPoint == "Left") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "Continuous"
                  else if (AnchorPoint == "Continuous") ActiveNodeStorage[ElementIndex]["AnchorPoint"] = "TopLeft"
                  showToast("success", ActiveNodeStorage[ElementIndex]["AnchorPoint"])
                  
                  RefreshOrFadeAllNodeArrows(ElementNumber, false)
              }
          }
          else if (event.key == "e") {
              TogglePinNode(Number(CurrentElementHoveredOn.getAttribute("ElementNumber")))
          }
      }
  });
  
  let zoomInput = document.querySelector(".zoom-input");

  if (zoomInput) {
      zoomInput.addEventListener("input", function() {
        console.log("IHJI")
          for (let i = 0; i < 2; i++) {

              // @ts-ignore
              let ZoomDimensionsBefore = [Number(document.querySelector(".node-container")?.style.width.split("px")[0])*ZoomLevel, Number(document.querySelector(".node-container")?.style.height.split("px")[0])*ZoomLevel]
              let CurrentUserPosition = [window.scrollX, window.scrollY]
  
              // @ts-ignore
              ZoomLevel = Number(this.value);
  
              // @ts-ignore
              let ZoomDimensionsAfter = [Number(document.querySelector(".node-container")?.style.width.split("px")[0])*ZoomLevel, Number(document.querySelector(".node-container")?.style.height.split("px")[0])*ZoomLevel]
  
              let NewUserPosition = [(ZoomDimensionsBefore[0]/CurrentUserPosition[0])*(ZoomDimensionsAfter[0]/100), (ZoomDimensionsBefore[1]/CurrentUserPosition[1])*(ZoomDimensionsAfter[1]/100)]
  
              // @ts-ignore
              document.querySelector(".node-container")?.style.zoom = ZoomLevel;
  
              if (CurrentUserPosition.length > 1) {
                  // @ts-ignore
                  window.scrollTo(NewUserPosition[0], NewUserPosition[1])
              }
          }
          // @ts-ignore
          document.querySelector(".zoom-value")?.textContent = Math.round(ZoomLevel*100) + "%"
      });
  }

  document.querySelector(".waypoint-button")?.addEventListener("click", function() {
      document.querySelector(".waypoint-nav-bar-shell")?.classList.toggle("waypoint-shell-out")
  })

  function GetCustomNodeArray() {
      let NewElementNumber = ActiveNodeStorage[ActiveNodeStorage.length - 1]["ElementNumber"] + 1

      let Position = [WindowWidth/2, WindowHeight/2]

      let NodeCreationElement: HTMLElement | null = document.querySelector(".node-menu-container")
      if (NodeCreationElement) {
          Position = [
              Number(NodeCreationElement.style.left.split("px")[0]),
              Number(NodeCreationElement.style.top.split("px")[0]) + Number(NodeCreationElement.style.height) + 5
          ]
      }

      return [
          {
              "ElementNumber": NewElementNumber,
              "NodeDimensions": [
                  150,
                  80
              ],
              "Position": Position,
              "Visible": true,
              "ChildrenNumbers": [],
              "Pinned": false,
              "TypeData": {
                  "Type": "Button",
                  "Text": "Button Name"
              },
              "AnchorPoint": "Continuous"
          },
          {
              "ElementNumber": NewElementNumber,
              "NodeDimensions": [
                  400,
                  600
              ],
              "Position": Position,
              "Visible": true,
              "Custom": true,
              "ChildrenNumbers": [],
              "Pinned": false,
              "TypeData": {
                  "Type": "Document",
                  "InnerHTML": ""
              },
              "AnchorPoint": "Continuous"
          },
          {
              "ElementNumber": NewElementNumber,
              "NodeDimensions": [
                  160,
                  90
              ],
              "Position": Position,
              "Custom": true,
              "Visible": true,
              "ChildrenNumbers": [],
              "Pinned": false,
              "TypeData": {
                  "Type": "Iframe",
                  "URL": ""
              },
              "AnchorPoint": "Continuous"
          },
          {
              "ElementNumber": NewElementNumber,
              "NodeDimensions": [
                  200,
                  150
              ],
              "Position": Position,
              "Visible": true,
              "ChildrenNumbers": [],
              "Pinned": false,
              "TypeData": {
                  "Type": "Waypoint",
                  "Icon": "Waypoint",
                  "Text": ""
              },
              "AnchorPoint": "Continuous"
          },
          {
              "ElementNumber": NewElementNumber,
              "NodeDimensions": [
                  500,
                  500
              ],
              "Position": Position,
              "Visible": true,
              "ChildrenNumbers": [],
              "Pinned": false,
              "TypeData": {
                  "Type": "Settings"
              },
              "AnchorPoint": "Continuous"
          },
          {
            "ElementNumber": NewElementNumber,
            "NodeDimensions": [
              400,
              600
            ],
            "Position": Position,
            "Visible": true,
            "ChildrenNumbers": [],
            "Pinned": false,
            "TypeData": {
              "Type": "Search"
            },
            "AnchorPoint": "Continuous"
          }
      ]
  }
  function CloseCustomNodePanel() { document.querySelector(".node-menu-container")?.remove() }

  document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      CloseCustomNodePanel()

      console.log(CurrentElementHoveredOn)
      let ParentNodeElementNumber: any = null
      if (CurrentElementHoveredOn) ParentNodeElementNumber = Number(CurrentElementHoveredOn.getAttribute("ElementNumber"))


      let NodeTypes = GetCustomNodeArray()

      // Creating the CustomNode Node

      let NodeContainer = document.createElement("div")
      let NodeClose = document.createElement("button")

      NodeClose.textContent = "Close"
      NodeClose.classList.add("node-menu-close")
      NodeClose.addEventListener("click", CloseCustomNodePanel)

      NodeContainer.appendChild(NodeClose)

      NodeContainer.classList.add("node-menu-container")
      NodeContainer.style.left = MouseCoords[0] + window.pageXOffset + "px"
      NodeContainer.style.top = MouseCoords[1] + window.pageYOffset + "px"
      NodeContainer.style.zIndex = String(zIndexCounter + 1)

      if (ParentNodeElementNumber != null) {
          let DeleteNode = document.createElement("button")

          DeleteNode.textContent = "Delete Node"
          DeleteNode.classList.add("node-menu-delete")

          DeleteNode.addEventListener("click", function() {
              let ParentElementIndex = GetNodePositionFromElementNumber(ParentNodeElementNumber)
              if (ParentElementIndex != null) {
                  ActiveNodeStorage[ParentElementIndex] = {
                      "ElementNumber": ParentNodeElementNumber,
                      "NodeDimensions": [
                          0,
                          0
                      ],
                      "Position": [
                          0,
                          0
                      ],
                      "Visible": false,
                      "ChildrenNumbers": [],
                      "Pinned": false,
                      "TypeData": {
                          "Type": "Document",
                          "URL": "## PLACEHOLDER ##"
                      },
                      "AnchorPoint": "Continuous"
                  }
              }

              RefreshOrFadeAllNodeArrows(ParentNodeElementNumber, false)
              for (let i = 0; i < 2; i++) {
                  let ParentElement = document.querySelector(`[ElementNumber="${ParentNodeElementNumber}"]`)
                  if (ParentElement != null) {
                      ParentElement.remove()
                      console.log("olj")
                  }
              }

              CloseCustomNodePanel()
          })

          let ParentCheckbox = document.createElement("div")
      
          ParentCheckbox.innerHTML = `
          <input type="checkbox" id="${ParentNodeElementNumber}" value="${ParentNodeElementNumber}" class="parent-checkbox"></input>
          <label for="${ParentNodeElementNumber}" class="checkbox-label">Parent?</label>
          `
          ParentCheckbox.classList.add("checkbox-container")

          

          NodeContainer.appendChild(DeleteNode)
          NodeContainer.appendChild(ParentCheckbox)
      }

      for (let i = 0; i < NodeTypes.length; i++) {
          let NewNodeButton = document.createElement("button")
          NewNodeButton.textContent = NodeTypes[i]["TypeData"]["Type"]

          NewNodeButton.setAttribute("type", NodeTypes[i]["TypeData"]["Type"])
          NewNodeButton.classList.add("node-menu-button")

          if (ParentNodeElementNumber != null) NewNodeButton.setAttribute("ParentNodeElementNumber", String(ParentNodeElementNumber))

          NewNodeButton.addEventListener("click", function() {
              let NodeTypes = GetCustomNodeArray()
              let ThisNodeType = null
              for (let i = 0; i < NodeTypes.length; i++) {
                  if (NodeTypes[i]["TypeData"]["Type"] == this.getAttribute("type")) ThisNodeType = NodeTypes[i]
              }

              if (ThisNodeType) {

                  // @ts-ignore
                  let IsParentMode = document.querySelector(".parent-checkbox")?.checked

                  if (IsParentMode == true) {

                      let ChildNodeElementNumber: string | null = this.getAttribute("ParentNodeElementNumber")
                      if (ChildNodeElementNumber != null) {
                          // @ts-ignore
                          ThisNodeType["ChildrenNumbers"].push(Number(ChildNodeElementNumber))
                          ActiveNodeStorage.push(ThisNodeType)
                          CreateNode(true, ActiveNodeStorage[ActiveNodeStorage.length - 1])

                          setTimeout(function() {
                              let ChildElement: HTMLElement | null = document.querySelector(`[ElementNumber="${ParentNodeElementNumber}"]`)
                              let ThisElement: HTMLElement | null = document.querySelector(`[ElementNumber="${NodeTypes[i]["ElementNumber"]}"]`)
                              if (ChildElement && ThisElement) {
                                  createArrowConnection(ThisElement, ChildElement)
                              }
                          }, 2)
                      }

                  }
                  else {
                      
                      let ParentNodeElementNumber = this.getAttribute("ParentNodeElementNumber")
                      if (ParentNodeElementNumber != null) {
                          let ParentArrayIndex = GetNodePositionFromElementNumber(Number(ParentNodeElementNumber))
                          if (ParentArrayIndex != null) {
                              ActiveNodeStorage[ParentArrayIndex]["ChildrenNumbers"].push(ThisNodeType["ElementNumber"])
                          
                              setTimeout(function() {
                                  let ParentElement: HTMLElement | null = document.querySelector(`[ElementNumber="${ParentNodeElementNumber}"]`)
                                  let ThisElement: HTMLElement | null = document.querySelector(`[ElementNumber="${NodeTypes[i]["ElementNumber"]}"]`)
                                  if (ParentElement && ThisElement) {
                                      createArrowConnection(ParentElement, ThisElement)
                                  }
                              }, 2)
                          }
                      }
                  
                      ActiveNodeStorage.push(ThisNodeType)
                      CreateNode(true, ActiveNodeStorage[ActiveNodeStorage.length - 1])

                  }
                  
              }

              CloseCustomNodePanel()
          })
          
          NodeContainer.appendChild(NewNodeButton)
      }
      
      document.querySelector(".node-container")?.appendChild(NodeContainer)
  })
}












// @ts-ignore
let jsonFilePath = 'https://davedude1011.github.io/revise/NodeArray.json';
fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    BaseNodes = data
    HandleRestOfCode()
  })
  .catch(error => console.error('Error reading JSON file:', error));