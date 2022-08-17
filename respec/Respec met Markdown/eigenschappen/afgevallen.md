## Resource
### type/genre

Het type van de resource.

| Definitie      | Type       |
| -------------- | ---------- |
| RDF Eigenschap | `dct:type` |
| Bereik         |            |
| Kardinaliteit  | `0..1`     |
| Gebruik        | Optioneel  |

<div class="issue" data-number="35"></div>

### relationnieuw

Een niet-gespecificeerde relatie te leggen met een andere resource in een catalogus.

| Definitie      | Relatie        |
| -------------- | -------------- |
| RDF Eigenschap | `dct:relation` |
| Bereik         |                |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Optioneel      |

### qualified relation

Gespecificeerde relaties te leggen met andere resources.

| Definitie      | Specifiek relatie        |
| -------------- | ------------------------ |
| RDF Eigenschap | `dcat:qualifiedRelation` |
| Bereik         |                          |
| Kardinaliteit  | `0..*`                   |
| Gebruik        | Optioneel                |

### has policy

Een ODRL-object dat uitdrukking geeft aan de gebruiksrechten van de onderhavige resource.

| Definitie      | Toegangsbeleid   |
| -------------- | ---------------- |
| RDF Eigenschap | `odrl:hasPolicy` |
| Bereik         | `odrl:Policy`    |
| Kardinaliteit  | `0..*`           |
| Gebruik        | Aanbevolen       |

### other identifier

De verplichte eigenschap dct:identifier bevat de unieke identificatie van de dataset die de data-eigenaar heeft uitgegeven. evt. andere unieke identifiers van de dataset.

| Definitie      | Andere ID         |
| -------------- | ----------------- |
| RDF Eigenschap | `adms:identifier` |
| Bereik         | `rdfs:Literal`    |
| Kardinaliteit  | `0..*`            |
| Gebruik        | Optioneel         |

### metadata language

De natuurlijke taal waarin de metadata van de dataset is beschreven.

| Definitie      | Metadata taal           |
| -------------- | ----------------------- |
| RDF Eigenschap | `donl:metadataLanguage` |
| Bereik         | `rdfs:Literal`          |
| Kardinaliteit  | `1..1`                  |
| Gebruik        | Verplicht               |

### authority

De organisatie die verantwoordelijk is voor de dataset.

| Definitie      | Organisatie          |
| -------------- | -------------------- |
| RDF Eigenschap | `overheid:authority` |
| Bereik         | `rdfs:Literal`       |
| Kardinaliteit  | `0..0`               |
| Gebruik        | niet opgenomen       |

### date planned   

De datum waarop een dataset met status gelijk aan Gepland, beschikbaar komt.

| Definitie      | Geplande datum                    |
| -------------- | --------------------------------- |
| RDF Eigenschap | `skos:concept` (lijkt niet juist) |
| Bereik         | `xsd:date`                        |
| Kardinaliteit  | `0..1`                            |
| Gebruik        | Optioneel                         |

## Catalogus

### themes

De waardelijst (controlled vocabularie) met thema's die (in eigenschap dcat:theme) gekoppeld kunnen worden aan de resources die zijn opgenomen in de catalogus.

| Definitie      | Thema's                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dcat:themeTaxonomy`                                                                           |
| Bereik         | `xsd:anyURI` van een waardelijst, zoals gepubliceerd op https://waardelijsten.dcat-ap-donl.nl/ |
| Kardinaliteit  | `0..*`                                                                                         |
| Gebruik        | Verplicht                                                                                      |


### has part

Deze eigenschap beschrijft de administratieve metadata van de registratie van een resource in een catalogus. Hierbij kan worden gedacht aan de datum/tijd waarop een bepaalde resource is geregistreerd.

| Definitie      | Has part        |
| -------------- | --------------- |
| RDF Eigenschap | `dct:hasPart`  |
| Bereik         | `dcat:Resource` |
| Kardinaliteit  | `0..0`          |
| Gebruik        |

### catalog record

De administratieve metadata van de registratie van een resource in een catalogus. HIerbij kan worden gedacht aan de datum/tijd waarop een bepaalde resource is geregistreerd.

| Definitie      | Catalogus Record     |
| -------------- | -------------------- |
| RDF Eigenschap | `dcat:record`        |
| Bereik         | `dcat:CatalogRecord` |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Optioneel            |

<p class="note" title="Note">
Deze eigenschap en de klasse dcat:CatalogRecord worden niet opgenomen in het toepassingsprofiel van data.overheid.nl, omdat eerder is gebleken dat partijen deze informatie niet aanleveren.
</p>

## CatalogusRecord

### title

| Definitie      | Titel          |
| -------------- | -------------- |
| RDF Eigenschap | `dct:title`    |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Niet opnemen   |


### description

| Definitie      | Omschrijving      |
| -------------- | ----------------- |
| RDF Eigenschap | `dct:description` |
| Bereik         | `rdfs:Literal`    |
| Kardinaliteit  | `0..*`            |
| Gebruik        | Niet opnemen      |


### issued

| Definitie      | Uitgavedatum |
| -------------- | ------------ |
| RDF Eigenschap | `dct:issued` |
| Bereik         | `xsd:date`   |
| Kardinaliteit  | `0..1`       |
| Gebruik        | Niet opnemen |

### conforms to

| Definitie      | Voldoet aan                          |
| -------------- | ------------------------------------ |
| RDF Eigenschap | `dct:conformsTo`                     |
| Bereik         | Waardelijst met toepassingsprofielen |
| Kardinaliteit  | `0..*`                               |
| Gebruik        | Niet opnemen                         |


### change type

| Definitie      | Status            |
| -------------- | ----------------- |
| RDF Eigenschap | `adms:status`     |
| Bereik         | `adms:Changetype` |
| Kardinaliteit  | `0..1`            |
| Gebruik        | Niet opnemen      |

### language

| Definitie      | Taal           |
| -------------- | -------------- |
| RDF Eigenschap | `dct:language` |
| Bereik         | talen          |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Niet opnemen   |

### source metadata

| Definitie      | Bronmetadata         |
| -------------- | -------------------- |
| RDF Eigenschap | `dct:source`         |
| Bereik         | `dcat:CatalogRecord` |
| Kardinaliteit  | `0..1`               |
| Gebruik        | Niet opnemen         |

## Dataset

### spatial resolution

Een indicatie van het geografische detailniveau (in meters) van de gegevens in de dataset.

| Definitie      | Geografisch detailniveau         |
| -------------- | -------------------------------- |
| RDF Eigenschap | `dcat:spatialResolutionInMeters` |
| Bereik         | `xsd:decimal`                    |
| Kardinaliteit  | `0..0`                           |
| Gebruik        | niet opgenomen                   |

<div class="issue" data-number="13"></div>

### temporal resolution

Van toepassing op datasets die gegevens bevatten die een afhankelijkheid hebben met tijd. de kleinste periode waarover gegevens in de dataset informatie verschaffen.

| Definitie      | Resolutie in tijd         |
| -------------- | ------------------------- |
| RDF Eigenschap | `dcat:temporalResolution` |
| Bereik         | `xsd:duration`            |
| Kardinaliteit  | `0..0`                    |
| Gebruik        | niet opgenomen            |

<div class="issue" data-number="13"></div>

### was generated by

De activiteit of business context waaruit de dataset is voortgekomen.

| Definitie      | Aangemaakt door       |
| -------------- | --------------------- |
| RDF Eigenschap | `prov:wasGeneratedBy` |
| Bereik         | `prov:Activity`       |
| Kardinaliteit  | `0..0`                |
| Gebruik        | niet opgenomen        |

### documentation

Een informatiepagina waar aanvullende informatie over deze dataset te vinden is.

| Definitie      | Documentatie |
| -------------- | ------------ |
| RDF Eigenschap | `foaf:page`  |
| Bereik         | `xsd:anyURI` |
| Kardinaliteit  | `0..*`       |
| Gebruik        | Optioneel    |

### source

Een gerelateerde dataset waaruit de onderhavige dataset is afgeleid.

| Definitie      | Brondataset    |
| -------------- | -------------- |
| RDF Eigenschap | `dct:source`   |
| Bereik         | `dcat:Dataset` |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Optioneel      |

### version

Een versienummer of andere aanduiding van de versie van de dataset. Dit gegeven onderscheidt de verschillende versies die met de relatie-eigenschappen dct:hasVersion en dct:isVersionOf aan elkaar zijn gelinkt.

| Definitie      | Versienummer      |
| -------------- | ----------------- |
| RDF Eigenschap | `owl:versionInfo` |
| Bereik         | `rdfs:Literal`    |
| Kardinaliteit  | `0..1`            |
| Gebruik        | Optioneel         |

### version notes

Een versienummer of andere aanduiding van de versie van de dataset. Dit gegeven onderscheidt de verschillende versies die met de relatie-eigenschappen dct:hasVersion en dct:isVersionOf aan elkaar zijn gelinkt.

| Definitie      | Toelichting bij versie |
| -------------- | ---------------------- |
| RDF Eigenschap | `adms:versionNotes`    |
| Bereik         | `rdfs:Literal`         |
| Kardinaliteit  | `0..*`                 |
| Gebruik        | Optioneel              |

## Distributie

### spatial resolution

Een indicatie van het geografische detailniveau in meters van de gegevens in de distributie.

| Definitie      | Geografisch detailniveau         |
| -------------- | -------------------------------- |
| RDF Eigenschap | `dcat:spatialResolutionInMeters` |
| Bereik         | `xsd:decimal`                    |
| Kardinaliteit  | `0..1`                           |
| Gebruik        | Optioneel                        |

### temporal resolution

De kleinste periode tussen twee data-items in de distributie.

| Definitie      | Periode                   |
| -------------- | ------------------------- |
| RDF Eigenschap | `dcat:temporalResolution` |
| Bereik         | `xsd:duration`            |
| Kardinaliteit  | `0..1`                    |
| Gebruik        | Optioneel                 |

### compression format

De Distributie kan zijn gecomprimeerd om de omvang van het bestand te verminderen. In dat geval specificeert edze eigenschap het compressie-formaat dat is toegepast.

| Definitie      | Compressieformaat     |
| -------------- | --------------------- |
| RDF Eigenschap | `dcat:compressFormat` |
| Bereik         |                       |
| Kardinaliteit  |                       |
| Gebruik        |                       |

<div class="issue" data-number="9"></div>

### packaging format  

Van toepassing op distributies van datasets die zijn samengesteld uit meerdere bestanden en vervolgens worden gebundeld in bijvoorbeeld een zip-bestand. Als dit het geval is, geeft deze eigenschap het media type van het pakket.

| Definitie      | Ingepakt formaat                                                                  |
| -------------- | --------------------------------------------------------------------------------- |
| RDF Eigenschap | `dcat:packageFormat`                                                              |
| Bereik         | `iana:Mediatypes`, zie https://waardelijsten.dcat-ap-donl.nl/iana_mediatypes.json |
| Kardinaliteit  |                                                                                   |
| Gebruik        |                                                                                   |

<div class="issue" data-number="9"></div>

### availability

Hoe lang de distributie beschikbaar zal blijven.

| Definitie      | Beschikbaarheid       |
| -------------- | --------------------- |
| RDF Eigenschap | `dcatap:availability` |
| Bereik         | Waardelijst           |
| Kardinaliteit  |                       |
| Gebruik        |                       |

<p class="note" title="Note">
Zie <a href="http://publications.europa.eu/resource/authority/planned-availability">http://publications.europa.eu/resource/authority/planned-availability</a>
</p>

## Dataservice

### hasPolicy

Deze eigenschap biedt de aanbieders van data de mogelijkheid om op een gestructureerde manier (complexe) voorwaarden toe te kennen waaronder afnemers de data in de distributie mogen gebruiken. een instantie van de ODRL klasse.

Deze eigenschap is onderwerp van een uitbreidingen voor data.overheid.nl die nog verder moet worden uitgewerkt.

| Definitie      | Toegangsbeleid   |
| -------------- | ---------------- |
| RDF Eigenschap | `odrl:hasPolicy` |
| Bereik         | `odrl:Policy`    |
| Kardinaliteit  | `0..1`           |
| Gebruik        | Optioneel        |

hasPolicy komt voor in <a href="#resource">resource</a>, maar wordt niet gebruikt in DCAT-AP-DONL_2.  

<div class="issue" data-number="7"></div>