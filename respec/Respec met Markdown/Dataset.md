
## Dataset

### Distributie

De distributie van de dataset, waarin de data-eigenaar beschrijft hoe de data in de dataset toegankelijk wordt gemaakt.

| Definitie       | Distributie        |
|-----------------|--------------------|
| RDF Eigenschap  | `dcat:distribution`|
| Bereik          | `dcat:Distribution`|
| Kardinaliteit   | `1..*`              |
| Gebruik         | Verplicht          |

### Wijzigingsfrequentie

Een indicatie van de frequentie waarmee de dataset wordt ververst.

| Definitie       | Wijzigingsfrequentie                                                                            |
|-----------------|-------------------------------------------------------------------------------------------------|
| RDF Eigenschap  | `dct:accrualPeriodicity`                                                                        |
| Bereik          | `donl:Frequentie`, zie https://waardelijsten.dcat-ap-donl.nl/overheid_frequency.json            |
| Kardinaliteit   | `0..1`                                                                                          |
| Gebruik         | Optioneel                                                                                       |


### Locatie

Het geografische gebied waarop de gegevens in de dataset betrekking hebben.

| Definitie       | Locatie                                    |
|-----------------|--------------------------------------------|
| RDF Eigenschap  | `dct:spatial`                              |
| Bereik          | De naam of de coördinaten van een gebied.  |
| Kardinaliteit   | `0..*`                                     |
| Gebruik         | Optioneel                                  |


### Geografisch detailniveau  

Een indicatie van het geografische detailniveau (in meters) van de gegevens in de dataset.

| Definitie       | Geografisch detailniveau        |
|-----------------|---------------------------------|
| RDF Eigenschap  | `dcat:spatialResolutionInMeters`|
| Bereik          | `xsd:decimal`                   |
| Kardinaliteit   | `0..0`                          |
| Gebruik         | niet opgenomen                  |

### Dekking in tijd: Van

De kleinste periode tussen twee data-items in de dataset.

| Definitie       | Dekking in tijd         |
|-----------------|-------------------------|
| RDF Eigenschap  | `dct:temporal`          |
| Bereik          | `dct:PeriodOfTime`      |
| Kardinaliteit   | `0..1`                  |
| Gebruik         | Aanbevolen              |


### Resolutie in tijd

Van toepassing op datasets die gegevens bevatten die een afhankelijkheid hebben met tijd. de kleinste periode waarover gegevens in de dataset informatie verschaffen.

| Definitie       | Resolutie in tijd        |
|-----------------|--------------------------|
| RDF Eigenschap  | `dcat:temporalResolution`|
| Bereik          | `xsd:duration`           |
| Kardinaliteit   | `0..0`                   |
| Gebruik         | niet opgenomen           |

### Aangemaakt door  

De activiteit of business context waaruit de dataset is voortgekomen.

| Definitie       | Aangemaakt door      |
|-----------------|----------------------|
| RDF Eigenschap  | `prov:wasGeneratedBy`|
| Bereik          | `prov:Activity`      |
| Kardinaliteit   | `0..0`               |
| Gebruik         | niet opgenomen       |

### Documentatie

Een informatiepagina waar aanvullende informatie over deze dataset te vinden is.

| Definitie       | Documentatie  |
|-----------------|---------------|
| RDF Eigenschap  | `foaf:page`   |
| Bereik          | `xsd:anyURI`  |
| Kardinaliteit   | `0..*`        |
| Gebruik         | Optioneel     |

### Heeft versie

Een gerelateerde dataset waarin een andere versie van de gegevens zijn opgenomen.

| Definitie       | Heeft versie    |
|-----------------|-----------------|
| RDF Eigenschap  | `dct:hasVersion`|
| Bereik          | `dcat:Dataset`  |
| Kardinaliteit   | `0..*`          |
| Gebruik         | Optioneel       |

### Is versie van

De inverse van has version en verwijst naar de vorige versie van de dataset.

| Definitie       | Is versie van    |
|-----------------|------------------|
| RDF Eigenschap  | `dct:isVersionOf`|
| Bereik          | `dcat:Dataset`   |
| Kardinaliteit   | `0..*`           |
| Gebruik         | Optioneel        |

### Voorbeeld

Een distributie waarin een (kleine) selectie van de data is opgenomen. Die kan bijvoorbeeld worden weergegeven op het dataportaal bij de dataset, zodat eindgebruikers niet zelf eerst de dataset hoeven downloaden om te zien wa

| Definitie       | Voorbeeld          |
|-----------------|--------------------|
| RDF Eigenschap  | `adms:sample`      |
| Bereik          | `dcat:Distribution`|
| Kardinaliteit   | `0..*`             |
| Gebruik         | Optioneel          |

### Brondataset

Een gerelateerde dataset waaruit de onderhavige dataset is afgeleid.

| Definitie       | Brondataset   |
|-----------------|---------------|
| RDF Eigenschap  | `dct:source`  |
| Bereik          | `dcat:Dataset`|
| Kardinaliteit   | `0..*`        |
| Gebruik         | Optioneel     |

### Versienummer

Een versienummer of andere aanduiding van de versie van de dataset. Dit gegeven onderscheidt de verschillende versies die met de relatie-eigenschappen dct:hasVersion en dct:isVersionOf aan elkaar zijn gelinkt.

| Definitie       | Versienummer     |
|-----------------|------------------|
| RDF Eigenschap  | `owl:versionInfo`|
| Bereik          | `rdfs:Literal`   |
| Kardinaliteit   | `0..1`           |
| Gebruik         | Optioneel        |

### Toelichting bij versie

Een versienummer of andere aanduiding van de versie van de dataset. Dit gegeven onderscheidt de verschillende versies die met de relatie-eigenschappen dct:hasVersion en dct:isVersionOf aan elkaar zijn gelinkt.

| Definitie       | Toelichting bij versie  |
|-----------------|-------------------------|
| RDF Eigenschap  | `adms:versionNotes`     |
| Bereik          | `rdfs:Literal`          |
| Kardinaliteit   | `0..*`                  |
| Gebruik         | Optioneel               |

