function PartenaireService(){
    this.partenaires = [];
}

PartenaireService.prototype.add = function(part){
    this.partenaires.push(part);
}

PartenaireService.prototype.get = function(index){
    return this.partenaires[index];
}

PartenaireService.prototype.size = function(){
    return this.partenaires.length;
}

PartenaireService.prototype.load = function(partenaires){
    for(let i = 0; i < partenaires.length; i++){
        this.partenaires.push(
            new Partenaire(
                partenaires[i].name,
                partenaires[i].image,
                partenaires[i].about,
                partenaires[i].info
            )
        );
    }
}
