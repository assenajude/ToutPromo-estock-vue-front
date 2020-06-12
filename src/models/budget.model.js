export class Budget {
    constructor(produitId, descripBudget,coutUnitaire, qteBudget, qteConsoBudget, dateDebutBud, dateFinBud ) {
        this.produitId = produitId;
        this.descripBudget = descripBudget;
        this.qteBudget = qteBudget;
        this.qteConsoBudget = qteConsoBudget;
        this.coutUnitaire = coutUnitaire;
        this.dateDebutBud = dateDebutBud;
        this.dateFinBud = dateFinBud
    }

}