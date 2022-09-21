  ### Termenlijst
  
#### Gegevensdienst

Een gegevensdienst of `dataservice` is in de eerste plaats een plek waar gegevens opgevraagd kunnen worden. Maar omdat dit via een interface gebeurdt kunnen gebruikers specificaties aan de aanvraag meegeven. Is bijvoorbeeld voor het gebruik maar een klein gedeelte van de data nodig, dan zal ook niet de gehele dataset, maar een subset opgestuurd worden. Of wanneer er meerdere formaten van aanlevering mogelijk zijn zoals JSON en XML, dan kan dit ook direct worden gespecificeerd in de aanvraag. Ook is het mogelijk dat een dataservice niet één, maar meerdere datasets ontsluit.

In [[[DCATAPDONL_11]]] werd de klasse [`dcat:Distributie`](#dcat-Distribution) gebruikt om te omschrijven hoe men bij een dataset kan komen. Bij een [`dcat:Distributie`](#dcat-Distribution) is de insteek dat zo goed mogelijk omschreven wordt wat er aangeleverd wordt. Denk daarbij aan technische informatie als bestandsformaat of groote van het bestand, maar ook aan data specifieke informatie als periode of gebied van metingen. Voor een [`dcat:DataService`](#dcat-DataService) betekende dat, dat er in de formeel gezien voor elk mogelijke aanvraag een distributie aangemaakt moest worden. Dat kan oplopen tot in de duizenden en schiet het doel voorbij. Daarbij is het voor een
[`dcat:Distributie`](#dcat-Distribution) niet mogelijk om gebaseerd te zijn op meerdere datasets.

De [`dcat:DataService`](#dcat-DataService) is meer gericht op het ontsluiten van gegevens via een API of user interface waar eigen parameters meegegeven kunnen worden.


#### Catalog dcat gebruik vs algemeen gebruik



#### Dataset dcat gebruik vs algemeen gebruik


