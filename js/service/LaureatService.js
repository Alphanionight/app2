function LaureatService(){
    this.laureats = [];
}

LaureatService.prototype.add = function(laur){
    this.laureats.push(laur);
}

LaureatService.prototype.get = function(index){
    return this.laureats[index];
}

LaureatService.prototype.size = function(){
    return this.laureats.length;
}

LaureatService.prototype.load = function(laureats){
    for(let i = 0; i < laureats.length; i++){
        this.laureats.push(
            new Laureat(
                laureats[i].nom,
                laureats[i].prenom,
                laureats[i].email,
                laureats[i].promotion,
                laureats[i].ent_stage,
                laureats[i].ent_contrat,
                laureats[i].ent_actuelle,
                laureats[i].poste_actuelle,
                laureats[i].localisation,
                laureats[i].photo,
                laureats[i].linkedIn
            )
        );
    }
}