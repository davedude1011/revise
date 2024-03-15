import os

CompleteArray = []

def CreateCustomArrayNode(ElementNumber, NodeDimensions, Position, Visible, ChildrenNumbers, TypeData):
    BaseNode = {
        "ElementNumber": ElementNumber,
        "NodeDimensions": NodeDimensions,
        "Position": Position,
        "Visible": Visible,
        "ChildrenNumbers": ChildrenNumbers,
        "Pinned": False,
        "TypeData": TypeData
    }
    CompleteArray.append(BaseNode)

def generate_buttons_from_folder(folder_path, parent_element_number=0):
    global CompleteArray
    element_number = parent_element_number
    for root, dirs, files in os.walk(folder_path):
        # Set Visible to True for top-level folders
        if root == folder_path:
            visible = True
        else:
            visible = False
        # Create Button node for each folder
        for dir_name in dirs:
            element_number += 1
            children_numbers = []
            for child_dir in os.listdir(os.path.join(root, dir_name)):
                child_element_number = element_number + len(children_numbers) + 1
                children_numbers.append(child_element_number)
            # Adjust the ChildNumbers of the parent node
            parent_node_index = element_number - 1
            CompleteArray[parent_node_index]["ChildrenNumbers"] = children_numbers
            CreateCustomArrayNode(
                ElementNumber=element_number,
                NodeDimensions=[100, 50],  # Example dimensions
                Position=[100, 100],       # Example position
                Visible=visible,           # Set Visible to True for top-level folders
                ChildrenNumbers=children_numbers,
                TypeData={"Type": "Button", "Text": dir_name}
            )
            # Increment element_number by the number of children for accurate numbering
            element_number += len(children_numbers)

# Example usage:
generate_buttons_from_folder('pages')
print(CompleteArray)  # Output the generated array