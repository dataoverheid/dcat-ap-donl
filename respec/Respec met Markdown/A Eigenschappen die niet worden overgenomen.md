## A Eigenschappen die niet worden overgenomen

### Catalogus - Thema's

De waardelijst (controlled vocabularie) met thema's die (in eigenschap dcat:theme) gekoppeld kunnen worden aan de resources die zijn opgenomen in de catalogus.

| Definitie      | Thema's                                                                                                                                                          |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RDF Eigenschap | `dcat:themeTaxonomy`                                                                                                                                               |
| Bereik         | `xsd:anyURI` van een waardelijst, zoals gepubliceerd op https://waardelijsten.dcat-ap-donl.nl/                                                                     |
| Kardinaliteit	 | `0..*`                                                                                                                                                             |
| Gebruik        | Verplicht                                                                                                                                                        |


### Catalogus - Has part

Deze eigenschap beschrijft de administratieve metadata van de registratie van een resource in een catalogus. Hierbij kan worden gedacht aan de datum/tijd waarop een bepaalde resource is geregistreerd.

| Definitie      | Has part                                                                                                                                                                                      |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RDF Eigenschap |` dct:hasPart`                                                                                                                                                                                               |
| Bereik         | `dcat:Resource`                                                                                                                                                                                             |
| Kardinaliteit	 | `0..0`                                                                                                                                                                                                      |
| Gebruik        |                                                                                                         

### Resource - Type

Het type van de resource.

| Definitie       | Type       |
|-----------------|------------|
| RDF Eigenschap  | `dct:type`   |
| Bereik          |            |
| Kardinaliteit   | `0..1`      |
| Gebruik         | Optioneel  |

### Resource - Relatie

Een niet-gespecificeerde relatie te leggen met een andere resource in een catalogus.

| Definitie       | Relatie       |
|-----------------|---------------|
| RDF Eigenschap  | `dct:relation`  |
| Bereik          |               |
| Kardinaliteit   | `0..*`         |
| Gebruik         | Optioneel     |

### Resource - Specifiek relatie 

Gespecificeerde relaties te leggen met andere resources.

| Definitie       | Specifiek relatie       |
|-----------------|-------------------------|
| RDF Eigenschap  | `dcat:qualifiedRelation`  |
| Bereik          |                         |
| Kardinaliteit   | `0..*`                    |
| Gebruik         | Optioneel               |

### Resource - Toegangsbeleid

Een ODRL-object dat uitdrukking geeft aan de gebruiksrechten van de onderhavige resource.

| Definitie       | Toegangsbeleid  |
|-----------------|-----------------|
| RDF Eigenschap  | `odrl:hasPolicy`  |
| Bereik          | `odrl:Policy`     |
| Kardinaliteit   | `0..*`            |
| Gebruik         | Aanbevolen      |

### Resource - Provenance

De verplichte eigenschap dct:identifier bevat de unieke identificatie van de dataset die de data-eigenaar heeft uitgegeven. evt. andere unieke identifiers van de dataset.

| Definitie       | Andere ID        |
|-----------------|------------------|
| RDF Eigenschap  | `adms:identifier`  |
| Bereik          | `rdfs:Literal`     |
| Kardinaliteit   | `0..*`             |
| Gebruik         | Optioneel        |

### Resource - Metadata taal

De natuurlijke taal waarin de metadata van de dataset is beschreven.

| Definitie       | Metadata taal          |
|-----------------|------------------------|
| RDF Eigenschap  | `donl:metadataLanguage`  |
| Bereik          | `rdfs:Literal`           |
| Kardinaliteit   | `1..1`                   |
| Gebruik         | Verplicht              |

### Resource - Organisatie

De organisatie die verantwoordelijk is voor de dataset.

| Definitie       | Organisatie         |
|-----------------|---------------------|
| RDF Eigenschap  | `overheid:authority`  |
| Bereik          | `rdfs:Literal`        |
| Kardinaliteit   | `0..0`                |
| Gebruik         | niet opgenomen      |

### Resource - Geplande datum    

De datum waarop een dataset met status gelijk aan Gepland, beschikbaar komt.

| Definitie       | Geplande datum                   |
|-----------------|----------------------------------|
| RDF Eigenschap  | `skos:concept` (lijkt niet juist)  |
| Bereik          | `xsd:date`                         |
| Kardinaliteit   | `0..1`                             |
| Gebruik         | Optioneel                        |

### CatalogusRecord - Titel

| Definitie       | Titel         |
|-----------------|---------------|
| RDF Eigenschap  | `dct:title`     |
| Bereik          | `rdfs:Literal`  |
| Kardinaliteit   | `0..*`          |
| Gebruik         | Niet opnemen  |


### CatalogusRecord - Omschrijving

| Definitie       | Omschrijving     |
|-----------------|------------------|
| RDF Eigenschap  | `dct:description`  |
| Bereik          | `rdfs:Literal`     |
| Kardinaliteit   | `0..*`             |
| Gebruik         | Niet opnemen     |


### CatalogusRecord - Uitgavedatum

| Definitie       | Uitgavedatum  |
|-----------------|---------------|
| RDF Eigenschap  | `dct:issued`    |
| Bereik          | `xsd:date`      |
| Kardinaliteit   | `0..1`          |
| Gebruik         | Niet opnemen  |

### CatalogusRecord - Voldoet aan  

| Definitie       | Voldoet aan                           |
|-----------------|---------------------------------------|
| RDF Eigenschap  | `dct:conformsTo`                        |
| Bereik          | Waardelijst met toepassingsprofielen  |
| Kardinaliteit   | `0..*`                                  |
| Gebruik         | Niet opnemen                          |


### CatalogusRecord - Status

| Definitie       | Status                       |
|-----------------|------------------------------|
| RDF Eigenschap  | `adms:status`                  |
| Bereik          |  `adms:Changetype`  |
| Kardinaliteit   | `0..1`                         |
| Gebruik         | Niet opnemen                 |

### CatalogusRecord - Taal

| Definitie       | Taal          |
|-----------------|---------------|
| RDF Eigenschap  | `dct:language`  |
| Bereik          | talen         |
| Kardinaliteit   | `0..*`          |
| Gebruik         | Niet opnemen  |

### CatalogusRecord - Bronmetadata

| Definitie       | Bronmetadata        |
|-----------------|---------------------|
| RDF Eigenschap  | `dct:source`          |
| Bereik          | `dcat:CatalogRecord`  |
| Kardinaliteit   | `0..1`                |
| Gebruik         | Niet opnemen        |






<p class="note" title="Note">
Wat wordt hier nog toegevoegd
</p>
