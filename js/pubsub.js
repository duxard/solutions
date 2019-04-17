const events = {
    events: {},
    subscribe(eventName, fn){
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    notify(eventName, data){
        if(this.events[eventName]){
            this.events[eventName].forEach(fn => fn(data));
        }
    },
    unsubscribe(eventName, fn){
        if(this.events[eventName]){
            for(let i=0; i<this.events[eventName].length; i++){
                if(this.events[eventName][i] === fn){
                    this.events[eventName].splice(i,1);
                    break;
                }
            }
        }
    }
};

