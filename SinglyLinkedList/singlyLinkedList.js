class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!head){
            this.head = newNode;
            this.tail = this.head; 
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;

        let removed = this.head;
        this.head = removed.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return removed;
    }



}

let list1 = new SinglyLinkedList();
console.log(list1.push(5));
console.log(list1.push(10));
console.log(list1.unshift(1));
console.log(list1.pop(), list1);
console.log(list1.shift(), list1)





