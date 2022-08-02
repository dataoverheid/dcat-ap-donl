## Resource

### Toegang

Informatie over het openbaarheidsniveau van de resource.  

| Definitie      | Toegang        |
|----------------|-----------------|
| RDF Eigenschap | `dct:accessRights` |
| Bereik         | `donl:Openbaarheidsniveau`    |
| Kardinaliteit	 | `0..1`          |
| Gebruik        | Optioneel       |

### Standaard

De vastgestelde standaard waaraan de data van de beschreven resource voldoet. Hierbij kan worden gedacht aan het model, schema, ontology, view of profiel.

| Definitie      | Standaard       |
|----------------|-----------------|
| RDF Eigenschap | `dct:conformsTo`|
| Bereik         | `xsd:string`    |
| Kardinaliteit	 | `0..*`          |
| Gebruik        | Optioneel       |

### Contactpunt

Contact-informatie van de beschreven resource.

| Definitie       | Contactpunt                                                                                                                                                                |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RDF Eigenschap  | dcat:contactPoint                                                                                                                                                          |
| Bereik          | `donl:ContactPoint` (nog op te stellen) <- Geadviseerd wordt hiervoor vcard te gebruiken? Welke waardenlijst is compleet genoeg om alle leveranciers te dekken?  |
| Kardinaliteit   | `1..1`                                                                                                                                                                       |
| Gebruik         | Verplicht                                                                                                                                                                  |

### Verantwoordelijke organisatie

De organisatie die verantwoordelijk is voor de beschreven resource.

| Definitie       | Verantwoordelijke organisatie  |
|-----------------|--------------------------------|
| RDF Eigenschap  | `dct:creator`                    |
| Bereik          | `donl:Organization`  |
| Kardinaliteit   | `1..1`                           |
| Gebruik         | Verplicht                      |

### Omschrijving

Een beschrijving de resource.

| Definitie       | Omschrijving     |
|-----------------|------------------|
| RDF Eigenschap  | `dct:description`|
| Bereik          | `xsd:string`     |
| Kardinaliteit   | `1..1`           |
| Gebruik         | Verplicht        |

### Titel

De naam van de beschreven resource. Op data.overheid.nl wordt deze naam geïndexeerd, zodat eindgebruikers de desbetreffende dataset, dataservice of catalogus kunnen terugvinden op basis van een of meer woorden in de naam.

| Definitie       | Titel                   |
|-----------------|-------------------------|
| RDF Eigenschap  | `dct:title`               |
| Bereik          | `xsd:string`  |
| Kardinaliteit   | `1..1`                    |
| Gebruik         | Verplicht               |

### Uitgiftedatum

De datum waarop de beschreven resource is gepubliceerd.

| Definitie       | Uitgiftedatum  |
|-----------------|----------------|
| RDF Eigenschap  | `dct:issued`     |
| Bereik          | `xsd:dateTime`   |
| Kardinaliteit   | `0..1`           |
| Gebruik         | aanbevolen     |

### Wijzigingsdatum

De datum waarop de beschreven resource is gewijzigd.

| Definitie       | Wijzigingsdatum  |
|-----------------|------------------|
| RDF Eigenschap  | `dct:modified`     |
| Bereik          | `xsd:dateTime`     |
| Kardinaliteit   | `0..1`             |
| Gebruik         | aanbevolen       |

### Taal

De natuurlijk taal van de tekstuele metadata die de resource beschrijft.

| Definitie       | Taal                                                                                     |
|-----------------|------------------------------------------------------------------------------------------|
| RDF Eigenschap  | `dct:language`                                                                            |
| Bereik          | `donl:Language`, zie https://waardelijsten.dcat-ap-donl.nl/donl_language.json  |
| Kardinaliteit   | `1..1`                                                                                     |
| Gebruik         | Verplicht                                                                                |

### Verstrekker

De organisatie die verantwoordelijk is voor de uitgifte/publicatie van de resource.

| Definitie       | Verstrekker                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------------|
| RDF Eigenschap  | `dct:publisher`                                                                                    |
| Bereik          | `donl:Organization`, zie https://waardelijsten.dcat-ap-donl.nl/donl_organization.json  |
| Kardinaliteit   | `1..1`                                                                                             |
| Gebruik         | Verplicht                                                                                        |

### Permalink

De resource volgens de eigenaar van de data. Dit is bij voorkeur een URI.

| Definitie       | Permalink       |
|-----------------|-----------------|
| RDF Eigenschap  | `dct:identifier`  |
| Bereik          | `xsd:string`      |
| Kardinaliteit   | `1..1`            |
| Gebruik         | Verplicht       |

### Thema

Een thema uit de taxonomie beleidsagenda.

| Definitie       | Thema                                                                                                                |
|-----------------|----------------------------------------------------------------------------------------------------------------------|
| RDF Eigenschap  | `dcat:theme`                                                                                                           |
| Bereik          | Taxonomie beleidsagenda, zie https://waardelijsten.dcat-ap-donl.nl/overheid_taxonomiebeleidsagenda.json  |
| Kardinaliteit   | `1..*`                                                                                                                 |
| Gebruik         | Verplicht                                                                                                            |

### Trefwoord

Vrije keywords of termen die de resource beschrijven.

| Definitie       | Trefwoord     |
|-----------------|---------------|
| RDF Eigenschap  | `dcat:keyword`  |
| Bereik          | `xsd:string`    |
| Kardinaliteit   | `0..*`          |
| Gebruik         | Aanbevolen    |


### Webpagina

De webpagina die toegang geeft tot de resource (dataset, dataservice of catalogus) en aanvullende informatie verschaft over de resource. Het gaat hierbij om de originele webpagina van de data-eigenaar.

| Definitie       | Webpagina         |
|-----------------|-------------------|
| RDF Eigenschap  | `dcat:landingPage`  |
| Bereik          | `xsd:anyURI`        |
| Kardinaliteit   | `0..1`              |
| Gebruik         | Optioneel         |


### Overige verantwoordelijken 

Een persoon of organisatie, anders dan contact point, resource creator of publisher die ook een verantwoordelijkheid draagt voor de resource.

| Definitie       | Overige verantwoordelijken  |
|-----------------|-----------------------------|
| RDF Eigenschap  | `prov:qualifiedAttribution`   |
| Bereik          | `prov:Attribution`            |
| Kardinaliteit   | `0..*`                        |
| Gebruik         | Optioneel                   |


### Licentie

Het juridische document dat de gebruiksrechten van de resource beschrijft.

| Definitie       | Licentie                                                                                                                                                                           |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RDF Eigenschap  | `dct:license`                                                                                                                                                                        |
| Bereik          | `donl:License`, zie https://waardelijsten.dcat-ap-donl.nl/donl_license.json. De lijst is samengesteld uit waarden die zijn overgenomen van creativecommons.org en OWMS.  |
| Kardinaliteit   | `1..1`                                                                                                                                                                               |
| Gebruik         | Verplicht                                                                                                                                                                          |

### Verwezen door

Externe publicaties, bijvoorbeeld een artikel dat verwijst naar onderhavige resource (dataset).

| Definitie       | Verwezen door       |
|-----------------|---------------------|
| RDF Eigenschap  | `dct:isReferencedBy`  |
| Bereik          | `rdfs:Resource`       |
| Kardinaliteit   | `0..*`                |
| Gebruik         | Optioneel           |

### Status

Informatie over de beschikbaarheid van de dataset.

| Definitie       | Status                                                       |
|-----------------|--------------------------------------------------------------|
| RDF Eigenschap  | `adms:status`                                                  |
| Bereik          | `Overheid:DatasetStatus`. Mogelijke waarden zijn:  |
| Kardinaliteit   | `1..1`                                                         |
| Gebruik         | Verplicht                                                    |


### Grondslag

Het regelingelement dat de wettelijke grondslag vormt voor de dataset.

| Definitie       | Grondslag                                 |
|-----------------|-------------------------------------------|
| RDF Eigenschap  | `overheid:grondslag`                        |
| Bereik          | `donl:LegalFoundation`               |
| Kardinaliteit   | `0..*`                                      |
| Gebruik         | Optioneel                                 |

### Vocabulaire

Een resource op basis van een controled vocabulary, zodat de desbetreffende resource beter vindbaar en herkenbaar wordt op de site van data.overheid.nl.

| Definitie       | Vocabulaire                        |
|-----------------|------------------------------------|
| RDF Eigenschap  | `donl:resourceClassification`        |
| Bereik          | Waardelijst (nader uit te werken)  |
| Kardinaliteit   | `0..*`                               |
| Gebruik         | Optioneel                          |


### Broncatalogus

In welke catalogus de dataset (resource) als eerste is gepubliceerd.

| Definitie       | Broncatalogus                                                                |
|-----------------|------------------------------------------------------------------------------|
| RDF Eigenschap  | donl:sourceCatalog (komt niet voor in de documentatie van DCAT-AP-DONL 1.1)  |
| Bereik          | xsd:string                                                                   |
| Kardinaliteit   | 0..1                                                                         |
| Gebruik         | Optioneel                                                                    |