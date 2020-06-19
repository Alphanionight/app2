function ActivityService(){
    this.activities = [];
}

ActivityService.prototype.add = function(act){
    this.activities.push(act);
}

ActivityService.prototype.get = function(index){
    return this.activities[index];
}

ActivityService.prototype.size = function(){
    return this.activities.length;
}

ActivityService.prototype.load = function(activities){
    for(let i = 0; i < activities.length; i++){
        this.activities.push(
            new Activity(
                activities[i].image,
                activities[i].label,
                activities[i].text,
                activities[i].date
            )
        );
    }
}