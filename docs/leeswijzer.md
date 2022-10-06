## Leeswijzer

DCAT 2 bestaat uit verschillende klasses zoals [`dcat:Dataset`](#dcat-Dataset) of [`dcat:Distributie`](#dcat-Distribution).Deze klasses omschrijven de verschillende concepten die nodig zijn bij data uitwisseling. Binnen de klasses vind men eigenschappen. Een eigenschap kan bijvoorbeeld een titel zijn, of hoe groot de dataset is, of wie het gemaakt heeft. Hoe u de omschrijvingen van klasses en eigenschappen kunt interpreteren, tezamen met een aantal kanttekeningen is te vinden in deze leeswijzer.

### Omschrijving eigenschappen

<b>Naam van de eigenschap</b>

Dit is de originele engelstalige naam zoals gebruikt in de W3C specificatie van DCAT 2, DCAT-AP-EU 2.0.1 en DCAT-AP-DONL 1.1.

<b>Definitie</b>

Dit is de Nederlandstalige definitie van de eigenschap.

<b>RDF-eigenschap</b>

Dit is de (technische) naam van de eigenschap die van toepassing is voor de uitwisseling van de DCAT data. Het bevat een hyperlink naar de originele webpagina die de eigenschap beschrijft.

<b>Bereik</b>

Beschrijft de mogelijke waarden van de eigenschap.

<b>Kardinaliteit</b>

Geeft aan of de eigenschap eigenschap 0, 1 of meerdere keren mag voorkomen. Hierbij wordt gebruik gemaakt van de schrijfwijze x..y, waarbij x het minimaal aantal voorkomens aangeeft en y het maximaal aantal. Bijvoorbeeld 1..n geeft aan dat de eigenschap 1 of meer keer mag voorkomen.
De W3C specificatie van DCAT 2 stelt geen eisen aan de cardinaliteit van de eigenschappen; DCAT-AP-EU wel.

<b>Gebruik</b>

Beschrijft of een eigenschap aanwezig moet zijn, wordt aangegeven met een van de onderstaande termen.

| Terminologie | Nederlands | Definitie                                                                   |
| ------------ | ---------- | --------------------------------------------------------------------------- |
| Mandatory    | Verplicht  | Deze eigenschap moet aanwezig zijn om aan dit applicatieprofiel te voldoen. |
| Recommended  | Aanbevolen | Deze eigenschap is erg waardevol, maar de aanwezigheid is niet verplicht.   |
| Optional     | Optioneel  | Deze eigenschap wordt ondersteund en kan worden ingevuld naar wens          |

### Talen

In [language](#dct-language1) en [resource language](#dct-language) kunnen de talen worden beschreven die worden gebruikt in inhoud van de resource of distributie. Zo zal een dataset over straatmeubilair waarin de waardes 'lantarenpaal' of 'bankje' worden gebruikt als 
[resource language](#dct-language) Nederlands krijgen. Dit is ongeacht de taal/talen gebruikt in de metadata. Wanneer er meerdere talen worden gebruikt kan de eigenschap worden herhaald. Wanneer de inhoud alleen nummeriek is, of geen text bevat kunnen de eigenschappen worden weg gelaten.

Eigenschappen als `dct:title`, `dct:description` en `dct:rights` kunnen waardes in verschillende talen bevatten. Elke vertaling krijgt een eigen instantie met de toevoeging van een language tag om aan te geven in welke taal de waarde geschreven is. Elke taal mag maar één keer voorkomen. 

De volgende talen worden onderteund:

| Taal       | Tag |
|------------|-----|
| Duits      | de  |
| Engels     | en  |
| Fries      | fy  |
| Nederlands | nl  |

Op data.overheid.nl worden teksten geïndexeerd, zodat eindgebruikers de datasets, dataservices of catalogi kunnen terugvinden op basis van één of meer woorden in de tekst.

### Termenlijst
  
<b>Dataservice</b>

Een gegevensdienst of `dataservice` is in de eerste plaats een plek waar gegevens opgevraagd kunnen worden. Maar omdat dit via een interface gebeurdt kunnen gebruikers specificaties aan de aanvraag meegeven. Is bijvoorbeeld maar een klein gedeelte van de data nodig, dan zal ook niet de gehele dataset, maar een subset opgestuurd worden. Of wanneer er meerdere formaten van aanlevering mogelijk zijn zoals JSON en XML, dan kan dit ook direct worden gespecificeerd in de aanvraag. Ook is het mogelijk dat een dataservice niet één, maar meerdere datasets ontsluit.

De [`dcat:DataService`](#dcat-DataService) is meer gericht op het ontsluiten van gegevens via een API of user interface waar eigen parameters meegegeven kunnen worden. Zie [verschillen](#verschillen) voor een uitgebreidere uitleg over het verschil tussen beiden.

<b>Resource </b>

<b>Dataset in `dcat`</b>

<b>Catalogus in `dcat` </b>

In het algemeen gebruik is een catalogus een verzameling van verwijzingen (naar dingen, concepten e.a.). Een [`dcat:Catalog`](#dcat-Catalog) is een verzameling verwijzingen naar andere dcat klasses. Dus een verzameling van datasets, van distributies of andere catalogi. 

Het gebruik van de term catalogus kan verwarring opleveren. In de praktijk zijn er namelijk veel voorbeelden van verzamelingen van verwijzingen die in het algemeen gebruik bestelmpeld zouden worden als catalogus, maar binnen DCAT als [`dcat:Dataset`](#dcat-Dataset). 