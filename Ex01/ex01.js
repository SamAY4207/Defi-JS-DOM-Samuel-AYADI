//Définition des produits dans le tableau "catalogue"
let catalogue = [
    {
        nom: "Barrette de RAM Corsair DDR5 32GB (2*16GB)",
        categorie: "Informatique",
        sousCategorie: "RAM",
        marque: "Corsair",
        type: "Ordinateur Portable",
        prix: 8299.99,
        date: "02/05/2030",


    },

    {
        nom: "Ventirad Corsair A115 compatible socket AM4, AM5 et I1700/1200/1155/1151/1150",
        categorie: "Informatique",
        sousCategorie: "Ventirad",
        marque: "Corsair",
        type: "Ordinateur Fixe",
        prix: 120,
        date: "20/04/2020",


    },

    {
        nom: "Sapphire Nitro+ AMD Radeon RX7800XT, 16GB VRAM",
        categorie: "Informatique",
        sousCategorie: "Carte Graphique",
        marque: "Sapphire",
        type: "Ordinateur Fixe",
        prix: 800,
        date: "01/07/2025",


    },

]

/**
 * @role : Récupére les produits dans le tableau pour les afficher
 * @param :catalogue 
 * @returns : Rien car elle affiche
 */
function ficheProduit(catalogue) {


    /**
    * @role : Récupérer les produits un par un et les stocks dans une div
    * @param :catalogue 
    * @returns : Rien car elle affiche
    */
    //
    let produit = catalogue.forEach(produit => {
        console.log(produit)
    });

    /**
    * @role : Récupère les infos produits et les insére dans la structure html
    * @param :produit 
    * @returns : Rien car elle affiche
    */
    //
    function ajouterADIVProduit(produit) {
        document.getElementById("contenneurProduit").innerHTML += ajouterADIVProduit(`
    <div class="carte-produit">
        <h3>${produit.nom}</h3>
        <p>Marque : ${produit.marque}</p>
          
        <p>Catégorie : ${produit.categorie}</p>

        <p>Sous-Catégorie : ${produit.sousCategorie}</p>

        <p>Type : ${produit.type}</p>

        <p>Prix : <strong>${produit.prix} €</strong></p>

        <p>Date de publication : ${produit.date}
                
        <button class="btn-ajouter">i</button>
    </div>
    `)
    }

}

//Lancement de la fonction
ficheProduit(catalogue)

