## Attributen

<p class="note" title="Note">
Note
</p>

### access rights

Informatie over het openbaarheidsniveau van de resource.  

| Definitie      | Toegang                    |
| -------------- | -------------------------- |
| RDF Eigenschap | `dct:accessRights`         |
| Bereik         | `donl:Openbaarheidsniveau` |
| Kardinaliteit  | `0..1`                     |
| Gebruik        | Optioneel                  |

<p class="note" title="Note">
Met deze eigenschap kan worden aangegeven of de dataset `Publiek`, `Niet publiek` of `Beperkt` is. Als een dataset `Beperkt` is betekent dit dat de dataset alleen toegankelijk is onder bepaalde voorwaarden die zijn beschreven in eigenschappen license en rights. Deze drie mogelijke waarden zijn afkomstig van het Publicatiebureau van de EU en voldoen daarmee aan DCAT-AP-EU. Zie https://waardelijsten.dcat-ap-donl.nl/overheid_openbaarheidsniveau.json
</p>

### conforms to

De vastgestelde standaard waaraan de data van de beschreven resource voldoet. Hierbij kan worden gedacht aan het model, schema, ontology, view of profiel.

| Definitie      | Standaard        |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | `xsd:string`     |
| Kardinaliteit  | `0..*`           |
| Gebruik        | Optioneel        |

<div class="issue" data-number="35"></div>
<div class="issue" data-number="14"></div>

<p class="note" title="Note">
Het is zeer gewenst dat DONL hiervoor uiteindelijk een waardelijst met mogelijke standaarden, schema's of ontologieën samenstelt. Tot die tijd kan deze eigenschap worden ingevuld met een string.
</p>

### contact point

Contact-informatie van de beschreven resource.

| Definitie      | Contactpunt                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | dcat:contactPoint                                                                                                                                               |
| Bereik         | `donl:ContactPoint` (nog op te stellen) <- Geadviseerd wordt hiervoor vcard te gebruiken? Welke waardenlijst is compleet genoeg om alle leveranciers te dekken? |
| Kardinaliteit  | `1..1`                                                                                                                                                          |
| Gebruik        | Verplicht                                                                                                                                                       |

<p class="note" title="Note">
Aan de hand van deze informatie kunnen eindgebruikers op data.overheid.nl contact opnemen met de eigenaar van de dataset of dataservice. Dat betekent dat de waardelijst, afgezien van de naam van de desbetreffende organisatie, ook een telefoonnummer of e-mailadres moet bevatten. Eigenschap contact point is alleen relevant (en hoeft dus alleen te worden ingevuld) als deze afwijkt van de eigenschap resource creator 
</p>

### creator

De organisatie die verantwoordelijk is voor de beschreven resource.

| Definitie      | Verantwoordelijke organisatie |
| -------------- | ----------------------------- |
| RDF Eigenschap | `dct:creator`                 |
| Bereik         | `donl:Organization`           |
| Kardinaliteit  | `1..1`                        |
| Gebruik        | Verplicht                     |

<p class="note" title="Note">
De waardelijst geeft een overzicht van alle bekende organisaties. Als de benodigde waarde hierin ontbreekt, kan de contentbeheerder van DONL een nieuwe waarde toevoegen. Het streven is erop gericht om de organisaties op een eenduidige manier te identificeren. Dat betekent dat bijvoorbeeld de `gemeente Eindhoven` op data.overheid.nl op dezelfde manier wordt geïdentificeerd als op andere websites van KOOP, bijvoorbeeld die van officielebekendmakingen.nl.
</p>
<p class="note" title="Note">
De thans gebruikte waardelijst bevat waarden van organisaties die afkomstig zijn uit OWMS. De OWMS-waardelijsten zullen op korte termijn worden vervangen door TOOI-waardelijsten. Dit betekent o.a. dat de identificatie van de organisaties zullen veranderen. De nu gebruikte OWMS waardelijst is beschikbaar op https://waardelijsten.dcat-ap-donl.nl/donl_organization.json. Organisaties kunnen voorlopig de oude OWMS waarden blijven gebruiken, omdat ze door de software van DONL zullen worden overgezet naar de waarden uit de TOOI-waardelijst.
</p>

### description

Een beschrijving de resource.

| Definitie      | Omschrijving      |
| -------------- | ----------------- |
| RDF Eigenschap | `dct:description` |
| Bereik         | `xsd:string`      |
| Kardinaliteit  | `1..1`            |
| Gebruik        | Verplicht         |

<p class="note" title="Note">
De website van data.overheid.nl toont de beschrijvende tekst bij de desbetreffende resource en gebruikt deze voor het opbouwen van de zoekindex. Dit betekent dus dat de vindbaarheid van de resource wordt bepaald door de kwaliteit van de tekst.
Tip: Zorg er dus voor dat in de tekst woorden voorkomen die potentiele eindgebruikers zullen gebruiken om de dataset te vinden.
</p>

### title

De naam van de beschreven resource. Op data.overheid.nl wordt deze naam geïndexeerd, zodat eindgebruikers de desbetreffende dataset, dataservice of catalogus kunnen terugvinden op basis van een of meer woorden in de naam.

| Definitie      | Titel        |
| -------------- | ------------ |
| RDF Eigenschap | `dct:title`  |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `1..1`       |
| Gebruik        | Verplicht    |

### release date

De datum waarop de beschreven resource is gepubliceerd.

| Definitie      | Uitgiftedatum  |
| -------------- | -------------- |
| RDF Eigenschap | `dct:issued`   |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | aanbevolen     |

<p class="note" title="Note">
Data.overheid.nl wil hier graag de eerste (vroegste) publicatiedatum registreren waarop de data-leveancier deze dataset, dataservice of catalogus heeft gepubliceerd. Het gaat hier dus niet om de publicatiedatum van de metadata. Ook niet over de wijzigingsdatum van de dataset, dataservice of catalogus, omdat hiervoor de `update/modification` date bestaat.
</p>

### update/modification date

De datum waarop de beschreven resource is gewijzigd.

| Definitie      | Wijzigingsdatum |
| -------------- | --------------- |
| RDF Eigenschap | `dct:modified`  |
| Bereik         | `xsd:dateTime`  |
| Kardinaliteit  | `0..1`          |
| Gebruik        | aanbevolen      |

<p class="note" title="Note">
Het gaat hierbij om de meest recente datum waarop de dataset, dataservice of catalogus is gewijzigd. Wanneer deze datum wijzigt, wordt automatisch de vorige wijzigingsdatum overschreven. Dat geldt even zo goed voor de data zelf. Nieuwe versies overschrijven de oude versies. Mogelijk in de toekomst (DCAT3) wordt een voorziening ingericht om meerdere (temporele) versies van de data te kunnen bewaren in het portaal.
</p>

### language

De natuurlijk taal van de tekstuele metadata die de resource beschrijft.

| Definitie      | Taal                                                                          |
| -------------- | ----------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:language`                                                                |
| Bereik         | `donl:Language`, zie https://waardelijsten.dcat-ap-donl.nl/donl_language.json |
| Kardinaliteit  | `1..1`                                                                        |
| Gebruik        | Verplicht                                                                     |

<div class="issue" data-number="11"></div>

<p class="note" title="Note">
Er is een verschil in definitie van dct:language (voor dataset en dataservice) tussen de specificaties volgens W3C en DCAT-AP-EU. Volgens W3C: A language of the item. This refers to the natural language used for textual metadata (i.e. titles, descriptions, etc) of a cataloged resource (i.e. dataset or service) or the textual values of a dataset distribution. Volgens DCAT-AP-EU This property refers to a language of the Dataset.
</p>


### publisher

De organisatie die verantwoordelijk is voor de uitgifte/publicatie van de resource.

| Definitie      | Verstrekker                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:publisher`                                                                       |
| Bereik         | `donl:Organization`, zie https://waardelijsten.dcat-ap-donl.nl/donl_organization.json |
| Kardinaliteit  | `1..1`                                                                                |
| Gebruik        | Verplicht                                                                             |

<p class="note" title="Note">
Zie ook eigenschap `resource creator` en `contact point`.
</p>

### identifier

De resource volgens de eigenaar van de data. Dit is bij voorkeur een URI.

| Definitie      | Permalink        |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:identifier` |
| Bereik         | `xsd:string`     |
| Kardinaliteit  | `1..1`           |
| Gebruik        | Verplicht        |

<p class="note" title="Note">
Data.overheid.nl neemt hier de oorspronkelijke identificatie van de resource (dataset, dataservice of catalogus) over van de data-eigenaar. Afgezien van deze identifier kan de betreffende dataset, dataservice of catalogus - in de loop van de tijd - ook andere identifiers hebben gekregen. Deze worden overgenomen in een andere eigenschap, namelijk adms:identifier. Een resource kan ook meerdere voorkomens van adms:identifier hebben.
</p>

### theme/category

Een thema uit de taxonomie beleidsagenda.

| Definitie      | Thema                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dcat:theme`                                                                                            |
| Bereik         | Taxonomie beleidsagenda, zie https://waardelijsten.dcat-ap-donl.nl/overheid_taxonomiebeleidsagenda.json |
| Kardinaliteit  | `1..*`                                                                                                  |
| Gebruik        | Verplicht                                                                                               |

<div class="issue" data-number="35"></div>

<p class="note" title="Note">
Data.overheid.nl gebruikt `theme/category` om de datasets, dataservices en catalogi naar onderwerp in te delen. Door de eigenschap verplicht te stellen, kunnen eindgebruikers de betreffende resource altijd terugvinden wanneer zij via het thema zoeken of navigeren. De homepage toont standaard alle beschikbare thema's. De thema indeling is hiërarchisch georganiseerd, zodat datasets ook aan meer specifieke subthema's kunnen worden gekoppeld, bijvoorbeeld subthema `Waterschappen` onder het thema `Bestuur`.

Er is voor thema geen relatie met eigenschap `dcat:themeTaxonomy` in de bijbehorende catalogus (dus waarin de dataset of dataservice is opgenomen), omdat voor de thema's één vaste waardelijst wordt gebruikt.

Het is gewenst om de resources ook te kunnen verrijken met andere begrippenkaders. We onderzoeken of hiervoor een nieuwe eigenschap moet worden geïntroduceerd, of dat kan worden volstaan met deze eigenschap. Wel is het nodig om aan te geven welke begrippenkaders zijn toegestaan. Mogelijk kan dit worden opgelost door ze aan te geven in `dcat:themeTaxonomy` in de catalogus.
</p>

### keyword/tag

Vrije keywords of termen die de resource beschrijven.

| Definitie      | Trefwoord      |
| -------------- | -------------- |
| RDF Eigenschap | `dcat:keyword` |
| Bereik         | `xsd:string`   |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Aanbevolen     |

<p class="note" title="Note">
Het gaat hier om vrije tekst, niet te verwarren met dcat:theme. Bij deze laatste eigenschap komen de termen uit een controled vacabulary (of vastgesteld begrippenkader of waardelijst), en hebben een meer formele status. Overigens geldt voor beide vormen dat deze de vindbaarheid van de desbetreffende resource kunnen verbeteren.
Het is dus mogelijk om meerdere keywords toe te kennen aan een resource. Deze waarden moeten in afzonderlijke voorkomens van deze eigenschap worden aangeleverd.
</p>
<p class="note" title="Note">
Het is dus mogelijk om meerdere keywords toe te kennen aan een resource. Deze waarden moeten in afzonderlijke voorkomens van deze eigenschap worden aangeleverd.
</p>

### landing page

De webpagina die toegang geeft tot de resource (dataset, dataservice of catalogus) en aanvullende informatie verschaft over de resource. Het gaat hierbij om de originele webpagina van de data-eigenaar.

| Definitie      | Webpagina          |
| -------------- | ------------------ |
| RDF Eigenschap | `dcat:landingPage` |
| Bereik         | `xsd:anyURI`       |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Optioneel          |


### qualified attribution 

Een persoon of organisatie, anders dan contact point, resource creator of publisher die ook een verantwoordelijkheid draagt voor de resource.

| Definitie      | Overige verantwoordelijken  |
| -------------- | --------------------------- |
| RDF Eigenschap | `prov:qualifiedAttribution` |
| Bereik         | `prov:Attribution`          |
| Kardinaliteit  | `0..*`                      |
| Gebruik        | Optioneel                   |

<aside class="example" title="Voorbeeld">
  <p>
    Zie <a href="https://www.w3.org/TR/vocab-dcat-2/#qualified-attribution">Voorbeeld van W3C</a>
  <p>
  </pre>
</aside>

<div class="issue" data-number="31"></div>
<div class="issue" data-number="23"></div>
<div class="issue" data-number="25"></div>

### license

Het juridische document dat de gebruiksrechten van de resource beschrijft.

| Definitie      | Licentie                                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:license`                                                                                                                                                           |
| Bereik         | `donl:License`, zie https://waardelijsten.dcat-ap-donl.nl/donl_license.json. De lijst is samengesteld uit waarden die zijn overgenomen van creativecommons.org en OWMS. |
| Kardinaliteit  | `1..1`                                                                                                                                                                  |
| Gebruik        | Verplicht                                                                                                                                                               |

<p class="note" title="Note">
Deze eigenschap is geen onderdeel van DCAT-AP-EU.
Omdat de OWMS-waardelijsten op korte termijn worden vervangen door TOOI, zal ook de waardelijst met licenties gaan wijzigen. We streven ernaar op de nieuwe lijst backwards compatible te houden met de oude lijst. Dat betekent dat een aangeleverde oude waarde automatisch wordt omgezet naar de nieuwe waarde.
</p>

### is referenced by

Externe publicaties, bijvoorbeeld een artikel dat verwijst naar onderhavige resource (dataset).

| Definitie      | Verwezen door        |
| -------------- | -------------------- |
| RDF Eigenschap | `dct:isReferencedBy` |
| Bereik         | `rdfs:Resource`      |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Optioneel            |

<p class="note" title="Note">
Deze eigenschap kan worden geïnterpreteerd als de terugverwijzing (inverse relatie) naar de resource (buiten het dataplatform) dat naar de dataset, dataservice of catalogus verwijst.
</p>

### other identifier

De verplichte eigenschap `dct:identifier` bevat de unieke identificatie van de dataset die de data-eigenaar heeft uitgegeven. Deze eigenschap bevat evt. andere unieke identifiers van de dataset.

| Definitie      | Andere identificatie |
| -------------- | -------------------- |
| RDF Eigenschap | `adms:identifier`    |
| Bereik         | `rdfs:Literal`       |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Optioneel            |

<p class="note" title="Note">
Een voorbeeld van een alternatieve identificatie is de URI die de dataset krijgt zodra deze wordt opgenomen in de catalogus op data.overheid.nl.
</p>

### resource status

Informatie over de beschikbaarheid van de dataset.

| Definitie      | Status                                            |
| -------------- | ------------------------------------------------- |
| RDF Eigenschap | `adms:status`                                     |
| Bereik         | `Overheid:DatasetStatus`. Mogelijke waarden zijn: |
| Kardinaliteit  | `1..1`                                            |
| Gebruik        | Verplicht                                         |

### rights

De overige gebruiksrechten die niet worden gedekt met dct:license of dct:accessRights, zoals de copyright statements.

| Definitie      | Rechten      |
| -------------- | ------------ |
| RDF Eigenschap | `dct:rights` |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `0..1`       |
| Gebruik        | Optioneel    |

### legal foundation

Het regelingelement dat de wettelijke grondslag vormt voor de dataset.

| Definitie      | Grondslag              |
| -------------- | ---------------------- |
| RDF Eigenschap | `overheid:grondslag`   |
| Bereik         | `donl:LegalFoundation` |
| Kardinaliteit  | `0..*`                 |
| Gebruik        | Optioneel              |

<div class="issue" data-number="19"></div>

<p class="note" title="Note">
Bij verwijzingen naar Nederlandse wet- en regelgeving moet de hyperlink voldoen aan de Juriconnect standaard.
</p>

###  resource classification

Een resource op basis van een controled vocabulary, zodat de desbetreffende resource beter vindbaar en herkenbaar wordt op de site van data.overheid.nl.

| Definitie      | Vocabulaire                       |
| -------------- | --------------------------------- |
| RDF Eigenschap | `donl:resourceClassification`     |
| Bereik         | Waardelijst (nader uit te werken) |
| Kardinaliteit  | `0..*`                            |
| Gebruik        | Optioneel                         |

<p class="note" title="Note">
Deze eigenschap typeert een resource op basis van een controled vocabulary, zodat de desbetreffende resource beter vindbaar en herkenbaar wordt op de site van data.overheid.nl.

Op dit moment realiseert data.overheid.nl deze eigenschap met behulp van 4 aparte eigenschappen, met een waardebereik gelijk aan "ja" of "nee". Deze eigenschappen zijn:

- De dataset een high value dataset (resource) is.
- De gegevens in de dataset (resource) zijn voortgekomen uit een basisregistratie.
- De dataset (resource) referentiedata betreft.
- De gegevens in de dataset (resource) een landelijke dekking hebben.
</p>

### source catalog

In welke catalogus de dataset (resource) als eerste is gepubliceerd.

| Definitie      | Broncatalogus                                                               |
| -------------- | --------------------------------------------------------------------------- |
| RDF Eigenschap | donl:sourceCatalog (komt niet voor in de documentatie van DCAT-AP-DONL 1.1) |
| Bereik         | xsd:string                                                                  |
| Kardinaliteit  | 0..1                                                                        |
| Gebruik        | Optioneel                                                                   |
