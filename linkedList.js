class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;    
    }
}
class LinkedList {
    constructor() {
        // null head of the linked list
        this.head = null;    
    }

    // adding a new node at the end of the linked list
    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            // If the list is empty the new node is the head
            this.head = newNode;  
        } else {
            // Starting from the head
            let current = this.head;  
            while (current.next !== null) {
                // moving to the last node
                current = current.next;  
            }
            // the new node is the next of the last node
            current.next = newNode;  
        }
    }

    removeNodes(x) {
        while (this.head !== null && this.head.value > x) {
            // Moving the head pointer to the next node
            this.head = this.head.next;  
        }

        let current = this.head;
        // moving node by node and removing nodes where value is greater than x
        while (current !== null && current.next !== null) {
            if (current.next.value > x) {
                // Skipping the node that needs to be removed
                current.next = current.next.next;  
            } else {
                 // Moving to the next node
                current = current.next; 
            }
        }
    }

    printList() {
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' ')); 
    }
}

const list = new LinkedList();


console.log("Original list:");
list.printList();

list.removeNodes(7);

console.log("Modified list:");
list.printList();
