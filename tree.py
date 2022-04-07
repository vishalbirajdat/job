import json

with open('input.json', 'r') as json_data:
    input_dict_list = json.load(json_data)

leavesList = []
leavesPerNode = []

def get_leaves(dictList):
    global leavesList
    for dict in dictList:
        if "branches" in dict:
            get_leaves(dict["branches"])
        else:
            leavesList = leavesList + dict["leaves"]
            


def get_total_leaves(dictList):
    tempList = []
    for sub_dict in dictList["branches"]:
        if "branches" not in sub_dict:
            tempList += sub_dict["leaves"]
        else: 
            return tempList + get_total_leaves(sub_dict)
    return tempList

def get_leaves_per_node(dictList):
    global leavesPerNode
    for dict in dictList:
        if "branches" in dict:
            leavesPerNode.append((dict["id"],  get_total_leaves(dict)))
            get_leaves_per_node(dict["branches"])
        else:
            leavesPerNode.append((dict["id"], dict["leaves"]))




class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []
        self.parent = None

    def get_level(self):
        level = 0
        p = self.parent
        while p:
            level += 1
            p = p.parent

        return level

    def print_tree(self):
        spaces = ' ' * self.get_level() * 3
        prefix = spaces + "|__" if self.parent else ""
        print(prefix + self.data)
        if self.children:
            for child in self.children:
                child.print_tree()

    def add_child(self, child):
        child.parent = self
        self.children.append(child)


def build_product_tree():
    root = TreeNode("Json data")
    for i in leavesPerNode:
        node = str(i[0])
        node = TreeNode(node)
        for item in i[1]:
            node.add_child(TreeNode(item))
        root.add_child(node)

    root.print_tree()



if __name__ == '__main__':
    get_leaves(input_dict_list)
    # print("Leaves: "+ str(leavesList))

    get_leaves_per_node(input_dict_list)
    # print("Leaves per node: " + str(leavesPerNode))
    
    build_product_tree()
