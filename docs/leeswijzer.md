## Leeswijzer

Dit toepassingsprofiel beschrijft alle klassen en eigenschappen die onderdeel zijn van DCAT-AP-DONL 2.0. Per klasse en 
eigenschap beschrijft het toepassingsprofiel of deze verplicht, aanbevolen of optioneel moet/mag worden aangeleverd. Ook 
sluit het toepassingsprofiel de aanlevering van enkele klassen en eigenschappen uit. Dit betekent dat ze niet 
aangeleverd kunnen worden en dus ook niet worden weergegeven op data.overheid.nl. De reden hiervoor wordt bij de 
desbetreffende klasse of eigenschap toegelicht.

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

Geeft aan of de eigenschap eigenschap 0, 1 of meerdere keren mag voorkomen. Hierbij wordt gebruik gemaakt van de schrijfwijze x..y, waarbij x het minimaal aantal voorkomens aangeeft en y het maximaal aantal. Bijvoorbeeld 1..* geeft aan dat de eigenschap 1 of meer keer mag voorkomen.
De W3C specificatie van DCAT 2 stelt geen eisen aan de cardinaliteit van de eigenschappen; DCAT-AP-EU wel. Om hierin inzicht te verschaffen bevat deze tekst per DCAT klasse ook een overzicht van de toepassing.

<b>Gebruik</b>

Zie <a href="#aanwezigheid-eigenschappen">**aanwezigheid eigenschappen**  </a>. Beschrijft of een eigenschap verplicht is, aanbevolen of optioneel.

### Aanwezigheid eigenschappen

Of een eigenschap aanwezig moet zijn, wordt aangegeven met een van de onderstaande termen.

| Terminologie | Nederlands | Definitie                                                                   |
| ------------ | ---------- | --------------------------------------------------------------------------- |
| Mandatory    | Verplicht  | Deze eigenschap moet aanwezig zijn om aan dit applicatieprofiel te voldoen. |
| Recommended  | Aanbevolen | Deze eigenschap is erg waardevol, maar de aanwezigheid is niet verplicht.   |
| Optional     | Optioneel  | Deze eigenschap wordt ondersteund en kan worden ingevuld naar wens          |



### Talen

<p>De tekstuele waarden kunnen in maximaal één natuurlijke taal worden aangeleverd. Bij voorkeur is dat Nederlands. Als de beschrijvingen worden aangeleverd in een andere taal, dan moet de taal kan worden aangegeven in eigenschap dct:language. Op data.overheid.nl wordt deze tekst geïndexeerd, zodat eindgebruikers de desbetreffende dataset, dataservice of catalogus kunnen terugvinden op basis van één of meer woorden in de tekst.</p>

### Termenlijst
  
#### Gegevensdienst

Een gegevensdienst of `dataservice` is in de eerste plaats een plek waar gegevens opgevraagd kunnen worden. Maar omdat dit via een interface gebeurdt kunnen gebruikers specificaties aan de aanvraag meegeven. Is bijvoorbeeld maar een klein gedeelte van de data nodig, dan zal ook niet de gehele dataset, maar een subset opgestuurd worden. Of wanneer er meerdere formaten van aanlevering mogelijk zijn zoals JSON en XML, dan kan dit ook direct worden gespecificeerd in de aanvraag. Ook is het mogelijk dat een dataservice niet één, maar meerdere datasets ontsluit.

De [`dcat:DataService`](#dcat-DataService) is meer gericht op het ontsluiten van gegevens via een API of user interface waar eigen parameters meegegeven kunnen worden. Zie [verschillen](#verschillen) voor een uitgebreidere uitleg over het verschil tussen beiden.

#### Dataset in `dcat`


#### Catalogus in `dcat` 

In het algemeen gebruik is een catalogus een verzameling van verwijzingen (naar dingen, concepten e.a.). Een [`dcat:Catalog`](#dcat-Catalog) is een verzameling verwijzingen naar andere dcat klasses. Dus een verzameling van datasets, van distributies of andere catalogi. 

Het gebruik van de term catalogus kan verwarring opleveren. In de praktijk zijn er namelijk veel voorbeelden van verzamelingen van verwijzingen die in het algemeen gebruik bestelmpeld zouden worden als catalogus, maar binnen DCAT als [`dcat:Dataset`](#dcat-Dataset). 