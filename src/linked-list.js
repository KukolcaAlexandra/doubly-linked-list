const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.length = 0;
    }

    append(data) {
        /*var node = {
                data: data,
                prev: null,
                next: null,
            };*/
        var node = new Node(data);
        
        if(this.length == 0){
            this._head = node;
            this._tail = node;
            
        }else{
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;
        return this;
    }

    head() {
        if(this.length > 0){
            return this._head.data;
        } else{
            //throw new Error("List has zero length");
            return null;
        }
    }

    tail() {
        if(this.length > 0){
            return this._tail.data;
        } else{
            //throw new Error("List has zero length");
            return null;
        }

    }

    at(index) {
        if(this.length < index){
            //throw new Error("The index of the item more than length");
            return null;
        } else{
            var node = this._head;
            var i = 0;
            while (i != index){
                node = node.next;
                i++;
            }
            return node.data;
        }
    }

    insertAt(index, data) {
        if(this.length < index){
            //throw new Error("The index of the item more than length");
            return null;
        } else{
            if(this.length == 0){
                var node = new Node(data);
                this._head = node;
                this._tail = node;  
                this.length++; 

            }else{
                var node = this._head;
                var i = 0;
                while (i != index){
                    node = node.next;
                    i++;
                }
            }
            node.data = data;
        }
        return this;
        /*if(index < this.length){
            var node = {
                data: data,
                next: null,
                prev: null,
            }

            var nodeCur = this._at(index);
            var nodePrev = nodeCur.prev;
            var nodeNext = nodeCur.next;

            node.prev = nodePrev;
            node.next = nodeNext;
            nodePrev.next = node;
            nodeNext.prev = node;

            this.length++;
            return this;
        } else{
            throw new Error("The index of the item more than length");
        }*/
    }

    isEmpty() {
        if (this.length == 0){
            return true;
        }
        else{
            return false;
        }
    }



    deleteAt(index) {
        if (index < this.length) {

            var node = this._head;
            var i = 0;
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.data = node.next.data;
                this._tail = node;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            this.length--;
            return this;
        } else {
            //throw new Error("The index of the item that you have selected more than the length of the list.");
            return this;
        }
    }

    clear() {
        if(this.length != 0){
            var index = this.length - 1;
            while(index != 0){
                //deleteAt(i);
                var node = this._head;
                var i = 0;
                while (i < index) {
                    node = node.next;
                    i++;
                }
                while (i != this.length - 1) {
                    node.data = node.next.data;
                    this._tail = node;
                    node = node.next;
                    i++;
                }
                node.data = null;
                node.next = null;
                this.length--;
                index--;
            }
        }
       /*var node = new Node();
       this._head = node;
       this._tail = node;
       this.length = 0;*/
       this._head = null;
       this._tail = null;
       this.length = 0;
       return this;
        /*this._head = null;
        this._tail = null;
        this.length = 0;*/
        
       
    }

    reverse() {
        var node_buf = {
            data: null,
            next: null,
            prev: null,
        }

        var node_head = this._head;
        var node_tail = this._tail;

        var i = 0;
        //if (this.length > 1){
        while (i < Math.floor(this.length / 2)) { 
            node_buf.data = node_tail.data;
            node_tail.data = node_head.data;
            node_head.data = node_buf.data;
            node_head = node_head.next;
            node_tail = node_tail.prev;
            i++;
        }
        //}
        return this;
    }

    indexOf(data) {
        var node = this._head;
        var i = 0;
        while (i != this.length) {
            if (node.data == data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;

        
    }
}

module.exports = LinkedList;
