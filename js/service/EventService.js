function EventService(){
    this.events = [];
}

EventService.prototype.add = function(event){
    this.events.push(event);
}

EventService.prototype.get = function(index){
    return this.events[index];
}

EventService.prototype.size = function(){
    return this.events.length;
}

EventService.prototype.load = function(events){
    for(let i = 0; i < events.length; i++){
        this.events.push(
            new Evnt(
                events[i].image,
                events[i].label,
                events[i].text,
                events[i].day,
                events[i].month,
                events[i].hour,
                events[i].minute
            )
        );
    }
}