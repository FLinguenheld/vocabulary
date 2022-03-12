




try {
    // const response = await fetch(url);
    const response = await fetch(url);

    if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }

    const data = await response.json();
    // return data;


    console.log(data)




} catch (error)	{
    console.log(error);
    Dom.addElemWithText('p', "Echec de la connexion à l'API", this._container, "error");
    throw new Error(`Erreur fetch ! statut : ${error}`);
}








