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
        if(!this.head){
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

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.head;
        let counter = 0;
        while(counter < index-1){
            prev = prev.next;
            counter++
        }
        let aft = prev.next;
        newNode.next = aft;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let prev = this.head;
        let counter = 0;
        while(counter !== index-1){
            prev = prev.next;
            counter++
        }
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let prev = null;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next; 
        }
        return this;
    }
}

let list1 = new SinglyLinkedList();
console.log(list1.push(5));
console.log(list1.push(10));
console.log(list1.push(15));
console.log(list1.reverse())