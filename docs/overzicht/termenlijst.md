
  
<b>Dataservice in `dcat`</b>

Een gegevensdienst of `dataservice` is een plek waar gegevens opgevraagd kunnen worden via een interface waar gebruikers specificaties aan de aanvraag meegeven. De gegevens die voldoen aan de meegegeven specificatie worden als antwoord teruggestuurd. Webservices zoals REST/JSON of XML interfaces zijn voorbeelden van [`dcat:DataService`](#dcat-DataService). Merk op dat als de specificatie slechts een deel van de gegevens beschrijft,  alleen die subset wordt opgestuurd. Ook is het mogelijk dat een dataservice niet één, maar meerdere datasets ontsluit. Gebruikelijk is ook dat in de aanvraag gespecifieerd wordt in welk formaat het resultaat wordt gezonden. 

**Zie [verschillen](#verschillen) voor een uitgebreidere uitleg over het verschil tussen beiden.**

<b>Klasse Resource in `dcat`</b>

In de klasses [`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService) en [`dcat:Catalog`](#dcat-Catalog) worden veel dezelfde 
eigenschappen gebruikt. Om niet al deze eigenschappen voor elke klasse opnieuw te hoeven definiëren is in de model beschrijving van DCAT de superklasse 
[`dcat:Resource`](#dcat-Resource) geïntroduceerd. Deze superklasse beschrijft deze gedeelde eigenschappen op één plaats, wat de specificatie overzichtelijker maakt. Ook is het in de toekomst makkelijker om het informatiemodel van DCAT uit te breiden of te wijzigen.

In een DCAT beschrijving kan een [`dcat:Resource`](#dcat-Resource) niet voorkomen, alleen de afgeleide klasses [`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService) en [`dcat:Catalog`](#dcat-Catalog) zijn toegestaan, samen met natuurlijk klasses zoals [`dcat:Distribution`](#dcat-Distribution) die niet zijn afgeleid van de klasse Resource.



<b>Dataset in `dcat`</b>

Een dataset is een gegevensverzameling. Op [[[DONL]]] is deze samengesteld en gepubliceerd door een (overheids-)organisatie. 

De klasse beschrijft de dataset als concept. Het staat dus los van de gegevensverzameling zelf, die mogelijk 
beschikbaar is in een of meerdere representaties, formaten of serialisaties. Deze beschikbare representaties kunnen worden omschreven in een
 [`dcat:Distribution`](#dcat-Distribution) of [`dcat:DataService`](#dcat-DataService).

<b>Catalogus in `dcat` </b>

Het gebruik van de term catalogus kan verwarring opleveren. In het Nederlands resp. Engels is een catalogus resp. catalogue een register of lijst waarin een verzameling voorwerpen of termen is opgenomen, vaak met een korte omschrijving of definitie en een aantal bijzonderheden. Een [`dcat:Catalog`](#dcat-Catalog) is een verzameling dcat klasses, dus een verzameling van datasets, distributies of andere catalogi. Een dact:catalogus is niet geschikt om andersoortige catalogi mee te beschrijven.

In de informatietechnologie worden diverse soorten catalogi opgesteld, zoals termenlijsten of taxonomieën. Hoewel DCAT niet geschikt is deze catalogie inhoudelijk te beschrijven, kan DCAT wel gebruikt worden om een dergelijke catalogus (en het ontsluiten ervan) te beschrijven met [`dcat:Dataset`](#dcat-Dataset), [`dcat:Distribution`](#dcat-Distribution) en [`dcat:DataService`](#dcat-DataService).

<b>DCAT beschrijving </b>

Met behulp van het DCAT-AP-DONL profiel kan iedere partij de aangeboden gegevens beschrijven, zowel aangeboden als data service en als aangeboden als distributies.


<b>DONL</b>

DONL is de afkorting voor http://data.overheid.nl. Deze voorziening biedt zowel met behulp van een website als via API’s een overzicht van het gegevens aanbod van de Nederlandse overheid.


<b>Open data</b>

[Open data](https://data.overheid.nl/en/ondersteuning/open-data/wat-is-open-data) is een verzamelnaam voor gegevensverzameling die gratis beschikbaar worden gesteld voor ieder gebruik, wat wordt aangegeven met een overeenkomstig licentie. Er zijn zeer veel aanbieders van Open Data. Veel overheden, waaronder de Nederlandse streven ernaar zoveel gegevens als Open Data aan te bieden. Twee drijvende gedachte achter de Open Data beweging zijn dat Open Data de transparantie bevorderd en er toepassingen mogelijk worden die niet door de eigenaren van de gegevens voorzien (kunnen) worden. Veel Open Data wordt aangeboden als Linked Data. Hiervoor wordt ook de term Linked Open Data, LOD, gebruikt.








