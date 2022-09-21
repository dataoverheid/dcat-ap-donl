  ### Termenlijst
  
#### Gegevensdienst

Een gegevensdienst of `dataservice` is in de eerste plaats een plek waar gegevens opgevraagd kunnen worden. Maar omdat dit via een interface gebeurdt kunnen gebruikers specificaties aan de aanvraag meegeven. Is bijvoorbeeld maar een klein gedeelte van de data nodig, dan zal ook niet de gehele dataset, maar een subset opgestuurd worden. Of wanneer er meerdere formaten van aanlevering mogelijk zijn zoals JSON en XML, dan kan dit ook direct worden gespecificeerd in de aanvraag. Ook is het mogelijk dat een dataservice niet één, maar meerdere datasets ontsluit.

De [`dcat:DataService`](#dcat-DataService) is meer gericht op het ontsluiten van gegevens via een API of user interface waar eigen parameters meegegeven kunnen worden. Zie [verschillen](#verschillen) voor een uitgebreidere uitleg over het verschil tussen beiden.

#### Dataset in `dcat`


#### Catalogus in `dcat` 

In het algemeen gebruik is een catalogus een verzameling van verwijzingen (naar dingen, concepten e.a.). Een [`dcat:Catalog`](#dcat-Catalog) is een verzameling verwijzingen naar andere dcat klasses. Dus een verzameling van datasets, van distributies of andere catalogi. 

Het gebruik van de term catalogus kan verwarring opleveren. In de praktijk zijn er namelijk veel voorbeelden van verzamelingen van verwijzingen die in het algemeen gebruik bestelmpeld zouden worden als catalogus, maar binnen DCAT als [`dcat:Dataset`](#dcat-Dataset). 