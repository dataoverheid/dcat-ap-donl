## Leeswijzer

DCAT 2 bestaat uit verschillende klasses zoals [`dcat:Dataset`](#dcat-Dataset) of [`dcat:Distributie`](#dcat-Distribution).Deze klasses omschrijven de verschillende concepten die nodig zijn bij data uitwisseling. Binnen de klasses vind men eigenschappen. Een eigenschap kan bijvoorbeeld een titel zijn, of hoe groot de dataset is, of wie het gemaakt heeft. Hoe u de omschrijvingen van klasses en eigenschappen kunt interpreteren, samen met een aantal kanttekeningen is te vinden in deze leeswijzer.

### Omschrijving eigenschappen

<b>Naam van de eigenschap</b>

Dit is de originele engelstalige naam zoals gebruikt in de W3C specificatie van DCAT 2, DCAT-AP-EU 2.0.1 en DCAT-AP-DONL 1.1.

<b>Definitie</b>

Dit is de Nederlandstalige definitie van de eigenschap.

<b>RDF-eigenschap</b>

Dit is de (technische) naam van de eigenschap die van toepassing is voor de uitwisseling van de DCAT data. Het bevat een hyperlink naar de originele webpagina die de eigenschap beschrijft. Daar is ook de oorspronkelijke Engelstalige definitie van de eigenschap te lezen.

<b>Bereik</b>

Beschrijft de mogelijke waarden van de eigenschap.

<b>Kardinaliteit</b>

Geeft aan of de eigenschap eigenschap 0, 1 of meerdere keren mag voorkomen. Hierbij wordt gebruik gemaakt van de schrijfwijze x..y, waarbij x het minimaal aantal voorkomens aangeeft en y het maximaal aantal. Bijvoorbeeld 1..n geeft aan dat de eigenschap 1 of meer keer mag voorkomen.
Overigens stelt W3C specificatie van [[[DCAT_20]]] geen eisen aan de cardinaliteit van de eigenschappen, maar [[DCATAP_2]]] wel.

<b>Gebruik</b>

Beschrijft of een eigenschap aanwezig moet zijn, wordt aangegeven met een van de onderstaande termen.

| Terminologie | Nederlands | Definitie                                                                   |
| ------------ | ---------- | --------------------------------------------------------------------------- |
| Mandatory    | Verplicht  | Deze eigenschap moet aanwezig zijn om aan dit applicatieprofiel te voldoen. |
| Recommended  | Aanbevolen | Deze eigenschap is erg waardevol, maar de aanwezigheid is niet verplicht, meestal omdat de eigenschap niet in alle gevallen betekenis heeft. Er wordt sterk aangeraden deze eigenschap in te vullen waar dat kan.  |
| Optional     | Optioneel  | Deze eigenschap wordt ondersteund en kan worden ingevuld naar wens          |

### Ondersteuning voor meertaligheid

In [language](#dct-language1) en [resource language](#dct-language) kunnen de talen worden beschreven die worden gebruikt in inhoud van de resource of distributie. Zo zal een dataset over straatmeubilair waarin de waardes 'lantarenpaal' of 'bankje' worden gebruikt als 
[resource language](#dct-language) 'Nederlands' krijgen. Dit is ongeacht deze taal of talen gebruikt worden in de metadata. Wanneer er meerdere talen worden gebruikt wordt de eigenschap herhaalt voor alle gebruikte talen. Wanneer de inhoud geen taal bevat bevat, bijvoorbeeld omdat alle waardes nummeriek  zijn, worden deze eigenschappen weg gelaten.

Eigenschappen als `dct:title`, `dct:description` en `dct:rights` kunnen waardes in verschillende talen bevatten. Voor elke vertaling wordt de eigenschap herhaald met de toevoeging van een language tag om aan te geven in welke taal de waarde geschreven is. Elke taal mag maar één keer voorkomen. 

In dit [[[DONL]]] profiel worden de volgende talen onderteund:

| Taal       | Tag |
|------------|-----|
| Duits      | de  |
| Engels     | en  |
| Fries      | fy  |
| Nederlands | nl  |

Op data.overheid.nl worden teksten geïndexeerd, zodat eindgebruikers de datasets, dataservices of catalogi kunnen terugvinden op basis van één of meer woorden in de tekst.

### Termenlijst
  
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
[`dcat:DataService`](#dcat-DataService) of [`dcat:Distribution`](#dcat-Distribution)

<b>Catalogus in `dcat` </b>

Het gebruik van de term catalogus kan verwarring opleveren. In het Nederlands resp. Engels is een catalogus resp. catalogue een register of lijst waarin een verzameling voorwerpen of termen is opgenomen, vaak met een korte omschrijving of definitie en een aantal bijzonderheden. Een [`dcat:Catalog`](#dcat-Catalog) is een verzameling dcat klasses, dus een verzameling van datasets, distributies of andere catalogi. Een dact:catalogus kais niet gescchikt om andersoortige catalogi mee te beschrijven.

In de informatietechnologie worden diverse soorten catalogi opgesteld, zoals termenlijsten of taxonomieën. Hoewel DCAT niet geschikt is deze catalogie zelf te beschrijven, kan DCAT wel gebruikt worden om de ontsluiting van zo'n catalogus te beschrijven.Als de catalogus met een RESt/JSON API ontsloten wordt, zal de DCAT beschrijving een dcat:DataService bevatten. Als de catalogus beschikbaar is voor een download, zal er een dcat:Distribution gedefinieerd zijn met bijbehorende dcat:Dataset waarin het doel en de technische beschikbaarheid vastgelegd kunnen worden.


## DCAT beschrijving 

Met behulp van het DCAT-AP-DONL profiel kan iedere partij de aangeboden gegevens beschrijven, zowel aangeboden als data service en als aangeboden als distributies.


## DONL

DONL is de afkorting voor http://data.overheid.nl. Deze voorziening biedt zowel met behulp van een website als via API’s een overzicht van het gegevens aanbod van de Nederlandse overheid.


## Open data

Bladiebla





 In de praktijk zijn er namelijk veel voorbeelden van verzamelingen van verwijzingen die in het algemeen gebruik bestelmpeld zouden worden als catalogus, maar binnen DCAT als [`dcat:Dataset`](#dcat-Dataset). 
