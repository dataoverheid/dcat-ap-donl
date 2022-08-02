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
| Gebruik        |                                                                                                                                                                                                           |

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
