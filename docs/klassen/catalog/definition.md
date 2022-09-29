## Eigenschappen

De onderstaande tabel geeft een overzicht van de herkomst en de toepassing van alle eigenschappen in deze klasse. 
Hierbij wordt ook aangegeven hoe het Europese toepassingsprofiel (DCAT-AP-EU) gebruik maakt van de eigenschap. 
Eigenschappen zonder waarde zijn/worden niet overgenomen in het toepassingsprofiel.

| **Eigenschap**                                          | Kardinaliteit | Aanwezigheid | Herkomst  |
| ------------------------------------------------------- | ------------- | ------------ | --------- |
| [**identifier**](#dct-identifier)                       | `1..1`        | Mandatory    | Resource  |
| [**title**](#dct-title)                                 | `1..n`        | Mandatory    | Resource  |
| [**description**](#dct-description)                     | `1..n`        | Mandatory    | Resource  |
| [**license**](#dct-license)                             | `1..1`        | Mandatory    | Resource  |
| [**creator**](#dct-creator)                             | `1..1`        | Mandatory    | Resource  |
| [**publisher**](#dct-publisher)                         | `1..1`        | Mandatory    | Resource  |
| [**contact point**](#dcat-contactPoint)                 | `1..1`        | Mandatory    | Resource  |
| [**theme/category**](#dcat-theme)                       | `1..n`        | Mandatory    | Resource  |
| [**access-rights**](#dct-accessRights)                  | `0..1`        | Recommended  | Resource  |
| [**keyword/tag**](#dcat-keyword)                        | `0..n`        | Recommended  | Resource  |
| [**release date**](#dct-issued)                         | `0..1`        | Recommended  | Resource  |
| [**update/modification date**](#dct-modified)           | `0..1`        | Recommended  | Resource  |
| [**resource language**](#dct-language)                  | `0..n`        | Recommended  | Resource  |
| [**landing page**](#dcat-landingPage)                   | `0..1`        | Optional     | Resource  |
| [**other identifier**](#adms-identifier)                | `0..n`        | Optional     | Resource  |
| [**conforms to**](#dct-conformsTo)                      | `0..n`        | Optional     | Resource  |
| [**legal foundation**](#donl-grondslag)                 | `0..n`        | Optional     | Resource  |
| [**rights**](#rights)                                   | `0..n`        | Optional     | Resource  |
| [**qualified-attribution**](#prov-qualifiedAttribution) | `0..n`        | Optional     | Resource  |
| [**distribution**](#dcat-distribution1)                 | `0..n`        | Recommended  | Dataset   |
| [**frequency**](#dct-accrualPeriodicity)                | `0..1`        | Recommended  | Dataset   |
| [**spatial/geographical coverage**](#dct-spatial)       | `0..n`        | Optional     | Dataset   |
| [**temporal coverage**](#dct-temporal)                  | `0..1`        | Optional     | Dataset   |
| [**homepage**](#foaf-homepage1)                         | `1..1`        | Mandatory    | Catalogus |
| [**themes**](#dcat-themeTaxonomy)                       | `1..1`        | Mandatory    | Catalogus |
| [**dataset**](#dcat-dataset1)                           | `0..n`        | Recommended  | Catalogus |
| [**service**](#dcat-service)                            | `0..n`        | Recommended  | Catalogus |
| [**catalog**](#dcat-catalog1)                           | `0..n`        | Recommended  | Catalogus |

### homepage {#foaf-homepage1}

De homepage van de catalogus. Een catalogus kan op meerdere dataportals worden gepubliceerd. Deze eigenschap verwijst 
naar de originele homepage. Dat is in de regel de homepage van de maker van de catalogus.

Let op, dit is dus iets anders dan [`dcat:landingPage`](#dcat-landingPage).

| Definitie      | Waarde          |
| -------------- | --------------- |
| RDF Eigenschap | `foaf:homepage` |
| Bereik         | `xsd:anyURI`    |
| Kardinaliteit  | `1..1`          |
| Gebruik        | Mandatory       |

### themes {#dcat-themeTaxonomy}

De themalijst die van toepassing is op alle resources in deze catalogus. Deze zal binnen dit toepassingsprofiel altijd 
verwijzen naar de [[[OWMS_TAXONOMIEBELEIDSAGENDA]]].

| Definitie      | Waarde               |
| -------------- | -------------------- |
| RDF Eigenschap | `dcat:themeTaxonomy` |
| Bereik         | `rdfs:Resource`      |
| Kardinaliteit  | `1..1`               |
| Gebruik        | Mandatory            |

### dataset {#dcat-dataset1}

De (metadata van de) dataset(s) die is/zijn opgenomen in de catalogus.

Het lijkt logisch dat een catalogus tenminste één dataset bevat, omdat een catalogus op zich niet zo interessant is. 
Desondanks geven we hier de cardinaliteit `0..n`, omdat een catalogus ook als resource in een andere catalogus kan 
voorkomen zonder verdere inhoud. In dat geval verwijst de catalogus door naar de homepage op een ander dataportaal die 
de inhoud wel toont. Een ander voorbeeld is een catalogus die alleen dataservices ontsluit.

Zie ook de discussie op [github.com/SEMICeu/DCAT-AP/issues/180](https://github.com/SEMICeu/DCAT-AP/issues/180).

| Definitie      | Waarde         |
| -------------- | -------------- |
| RDF Eigenschap | `dcat:dataset` |
| Bereik         | `dcat:Dataset` |
| Kardinaliteit  | `0..n`         |
| Gebruik        | Recommended    |

### service {#dcat-service}

De (metadata van de) dataservice die voorkomt in de catalogus. Dataservice is een nieuwe resource in DCAT2.

| Definitie      | Waarde             |
| -------------- | ------------------ |
| RDF Eigenschap | `dcat:service`     |
| Bereik         | `dcat:DataService` |
| Kardinaliteit  | `0..n`             |
| Gebruik        | Recommended        |

### catalog {#dcat-catalog1}

De (metadata van de) catalogus die voorkomt in de catalogus. Deze eigenschap maakt dus mogelijk om een catalogus te 
beschouwen als een resource en deze op te nemen in een catalogus.

| Definitie      | Waarde         |
| -------------- | -------------- |
| RDF Eigenschap | `dcat:catalog` |
| Bereik         | `dcat:Catalog` |
| Kardinaliteit  | `0..n`         |
| Gebruik        | Recommended    |
