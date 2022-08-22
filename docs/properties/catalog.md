## Eigenschappen

De onderstaande tabel geeft een overzicht van de herkomst en de toepassing van alle eigenschappen in deze klasse. Hierbij wordt ook aangegeven hoe het Europese toepassingsprofiel (DCAT-AP-EU) gebruik maakt van de eigenschap. Eigenschappen zonder waarde zijn/worden niet overgenomen in het toepassingsprofiel.

| **Eigenschap**                                                       | Herkomst  | Gebruik    |
| -------------------------------------------------------------------- | --------- | ---------- |
| <a href="#access-rights">**access-rights**</a>                       | Resource  |            |
| <a href="#conforms-to">**conforms to**</a>                           | Resource  |            |
| <a href="#contact-point">**contact point**</a>                       | Resource  | Verplicht  |
| <a href="#creator">**creator**</a>                                   | Resource  | Verplicht  |
| <a href="#description">**description**</a>                           | Resource  | Verplicht  |
| <a href="#title-0">**title** </a>                                      | Resource  | Verplicht  |
| <a href="#release-date">**release date**                             | Resource  | Aanbevolen |
| <a href="#update-modification-date">**update/modification date**</a> | Resource  | Aanbevolen |
| <a href="#language">**language**  </a>                               | Resource  | Aanbevolen |
| <a href="#publisher">**publisher**    </a>                           | Resource  | Verplicht  |
| <a href="#identifier">**identifier** </a>                            | Resource  | Aanbevolen |
| <a href="#theme-category">**theme/category** </a>                    | Resource  |            |
| <a href="#keyword-tag">**keyword/tag**</a>                           | Resource  | Optioneel  |
| <a href="#landing-page">**landing page**</a>                         | Resource  | Optioneel  |
| <a href="#qualified-attribution">**qualified attribution**</a>       | Resource  |            |
| <a href="#license">**license** </a>                                  | Resource  |            |
| <a href="#is-referenced-by">**is referenced by**</a>                 | Resource  |            |
| <a href="#other-identifier">**other identifier**</a>                 | Resource  | Optioneel  |
| <a href="#resource-status">**resource status**</a>                   | Resource  |            |
| <a href="#rights">**rights**</a>                                     | Resource  |            |
| <a href="#legal-foundation">**legal foundation**</a>                 | Resource  |            |
| <a href="#resource-classification">**resource classification**</a>   | Resource  |            |
| <a href="#source-catalog">**source catalog** </a>                    | Resource  |            |
| <a href="#homepage">**homepage** </a>                                | Catalogus | Verplicht  |
| <a href="#dataset">**dataset**</a>                                   | Catalogus | Aanbevolen |
| <a href="#service">**service**</a>                                   | Catalogus | Aanbevolen |
| <a href="#catalog">**catalog**  </a>                                 | Catalogus | Aanbevolen |

### homepage

De homepage van de catalogus.

Een catalogus kan op meerdere dataportals worden gepubliceerd. Deze eigenschap verwijst naar de originele homepage. Dat is in de regel de homepage van de maker van de catalogus.

Let op, dit is dus iets anders dan <a href="#landing-page">landing page</a>.

| Definitie      | Homepage                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog_homepage">`foaf:homepage`</a> |
| Bereik         | `xsd:anyURI`                                                                                |
| Kardinaliteit  | `1..1`                                                                                      |
| Gebruik        | Verplicht                                                                                   |

### dataset

De (metadata van de) dataset(s) die is/zijn opgenomen in de catalogus.

Het lijkt logisch dat een catalogus tenminste één dataset bevat, omdat een catalogus op zich niet zo interessant is. Desondanks geven we hier de cardinaliteit 0..*, omdat een catalogus ook als resource in een andere catalogus kan voorkomen zonder verdere inhoud. In dat geval verwijst de catalogus door naar de homepage op een ander dataportaal die de inhoud wel toont.

Zie ook de discussie op https://github.com/SEMICeu/DCAT-AP/issues/180  

| Definitie      | Gegevensverzameling                                                                       |
| -------------- | ----------------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog_dataset">`dcat:dataset`</a> |
| Bereik         | `dcat:Dataset`                                                                            |
| Kardinaliteit  | `0..*`                                                                                    |
| Gebruik        | Aanbevolen                                                                                |

### service  

De (metadata van de) dataservice die voorkomt in de catalogus.

Dataservice is een nieuwe resource in DCAT2. Om de metadata van dataservices te kunnen uitwisselen krijgt data.overheid.nl een nieuwe API voorziening.
Zie: https://github.com/w3c/dxwg/issues/1431

| Definitie      | Dienst                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog_service">`dcat:service`</a> |
| Bereik         | `dcat:DataService`                                                                        |
| Kardinaliteit  | `0..*`                                                                                    |
| Gebruik        | Aanbevolen                                                                                |

### catalog

De (metadata van de) catalogus die voorkomt in de catalogus. Deze eigenschap maakt dus mogelijk om een catalogus te beschouwen als een resource en deze op te nemen in een catalogus.

| Definitie      | Catalogus                                                                         |
| -------------- | --------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog">`dcat:catalog`</a> |
| Bereik         | `dcat:Catalog`                                                                    |
| Kardinaliteit  | `0..*`                                                                            |
| Gebruik        | Aanbevolen                                                                        |




