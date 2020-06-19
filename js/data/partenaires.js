var name = "CAPGEMINI";
var image = "images/capgemini.jpg";
var about1 = "A la fois groupe international et acteur technologique de proximité avec son entité Sogeti. Mais aussi expert reconnu de la transformation et de l’innovation digitale, et du conseil avec Capgemini Invent. Enfin, leader mondial des services informatiques et de la transformation numérique reconnu et souvent récompensé… Une telle diversité vous offre la possibilité d’exprimer toutes vos capacités, de relever les défis les plus variés et de participer à l’invention des nouveaux business models et des usages de demain.";
var link = "https://www.capgemini.com/fr-fr/carrieres/lifeatcapgemini/";
var about = [ about1, link];
var info1 = "Classement en 2020: 9 éme";
var info2 = "Chiffre d'affaires : 15,22 milliards $";
var info3 = "Revenu net : 870 millions $";
var info4 = "270 000 collaborateurs dans 50 pays";
var info = [ info1, info2, info3, info4];
var campgemini = new Partenaire(name, image, about, info);

var name = "CGI";
var image = "images/CGI.jpg";
var about1 = "CGI est l’une des rares sociétés de services-conseils complets possédant l’envergure, la portée et les capacités pour répondre aux besoins des clients en matière de transformation numérique d’entreprise. Nos 78 000 conseillers et professionnels travaillent en proximité avec des clients issus de 10 secteurs d’activité à partir de plus de 400 localisations dans le monde. Nous nous appuyons sur nos capacités mondiales pour aider les clients à définir, à élaborer, à mettre en oeuvre et à exécuter des stratégies efficaces pour répondre aux attentes des consommateurs et des citoyens.";
var about2 = "Plus de 170 solutions de propriété intellectuelle desservant 50 000 clients";
var link = "https://www.cgi.com/fr/profil-entreprise";
var about = [ about1, about2, link];
var info1 = "Classement en 2020: 29 éme";
var info2 = "Chiffre d'affaires : 12,1 milliards $";
var info3 = "Revenu net : 951 millions $";
var info = [ info1, info2, info3];
var cgi = new Partenaire(name, image, about, info);

var name = "CEGEDIM";
var image = "images/cegedim.jpg";
var about1 = "Fondée en 1969, Cegedim est une entreprise de technologies et de services spécialisée dans la gestion des flux numériques de l’écosystème santé et BtoB, ainsi que dans la conception de logiciels métiers destinés aux professionnels de santé et de l’assurance.";
var about2 = "Plus de 170 solutions de propriété intellectuelle desservant 50 000 clients";
var link = "https://www.cegedim.fr/groupe/presentation/Pages/Presentation.aspx";
var about = [about1, about2, link];
var info1 = "178 000 postes de travail de médecins";
var info2 = "66 000 postes de travail de pharmaciens";
var info3 = "Chiffre d'affaires : 549 milliards $";
var info4 = "Revenu net : 40,4 millions $";
var info = [ info1, info2, info3];
var cegedim = new Partenaire(name, image, about, info);

var partenaires = [
    campgemini,
    cgi,
    cegedim,
    /*UMANIS,
    ATOS,
    S2M,
    SG_ATS,
    ACCENTURE,
    SQLi,
    HPS,
    LNet,
    Sopra_Steria,
    BDSI_Maroc,
    FEDASO*/
]