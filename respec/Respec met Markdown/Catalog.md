## Attributen

De onderstaande tabel geeft een overzicht van de herkomst en de toepassing van alle eigenschappen in deze klasse. Hierbij wordt ook aangegeven hoe het Europese toepassingsprofiel (DCAT-AP-EU) gebruik maakt van de eigenschap. Eigenschappen zonder waarde zijn/worden niet overgenomen in het toepassingsprofiel.

| **Eigenschap**               | Herkomst  | Gebruik    |
| ---------------------------- | --------- | ---------- |
| **access rights**            | Resource  |            |
| **conforms to**              | Resource  |            |
| **contact point**            | Resource  | Verplicht  |
| **creator**                  | Resource  | Verplicht  |
| **description**              | Resource  | Verplicht  |
| **title**                    | Resource  | Verplicht  |
| **release date**             | Resource  | Aanbevolen |
| **update/modification date** | Resource  | Aanbevolen |
| **language**                 | Resource  | Aanbevolen |
| **publisher**                | Resource  | Verplicht  |
| **identifier**               | Resource  | Aanbevolen |
| **theme/category**           | Resource  |            |
| **keyword/tag**              | Resource  | Optioneel  |
| **landing page**             | Resource  | Optioneel  |
| **qualified attribution**    | Resource  |            |
| **license**                  | Resource  |            |
| **rights**                   | Resource  |            |
| **is referenced by**         | Resource  |            |
| **other identifier**         | Resource  | Optioneel  |
| **resource status**          | Resource  |            |
| **legal foundation**         | Resource  |            |
| **resource classification**  | Resource  |            |
| **wob exclusion reason**     | Resource  |            |
| **source catalog**           | Resource  |            |
| **homepage**                 | Catalogus | Verplicht  |
| **dataset**                  | Catalogus | Aanbevolen |
| **service**                  | Catalogus | Aanbevolen |
| **catalognieuw**             | Catalogus | Aanbevolen |

### Homepage

De homepage van de catalogus.  

| Definitie      | Homepage                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog_homepage">`foaf:homepage`</a> |
| Bereik         | `xsd:anyURI`                                                                                |
| Kardinaliteit  | `1..1`                                                                                      |
| Gebruik        | Verplicht                                                                                   |

<p class="note" title="Note">
Een catalogus kan op meerdere dataportals worden gepubliceerd. Deze eigenschap verwijst naar de originele homepage. Dat is in de regel de homepage van de maker van de catalogus. Let op, dit is dus iets anders dan resource - landing page. TODO: link naar resource - landing page
</p>


### Dataset

De (metadata van de) dataset(s) die is/zijn opgenomen in de catalogus.

| Definitie      | Gegevensverzameling                                                                       |
| -------------- | ----------------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog_dataset">`dcat:dataset`</a> |
| Bereik         | `dcat:Dataset`                                                                            |
| Kardinaliteit  | `0..*`                                                                                    |
| Gebruik        | Aanbevolen                                                                                |

<p class="note" title="Note">
Het lijkt logisch dat een catalogus tenminste één dataset bevat, omdat een catalogus op zich niet zo interessant is. Desondanks geven we hier de cardinaliteit 0..*, omdat een catalogus ook als resource in een andere catalogus kan voorkomen zonder verdere inhoud. In dat geval verwijst de catalogus door naar de homepage op een ander dataportaal die de inhoud wel toont.
    
Zie de discussie op https://github.com/SEMICeu/DCAT-AP/issues/180    
</p>


### Service  

De (metadata van de) dataservice die voorkomt in de catalogus.

| Definitie      | Dienst                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog_service">`dcat:service`</a> |
| Bereik         | `dcat:DataService`                                                                        |
| Kardinaliteit  | `0..*`                                                                                    |
| Gebruik        | Aanbevolen                                                                                |

<p class="note" title="Note">
Dataservice is een nieuwe resource in DCAT2. Om de metadata van dataservices te kunnen uitwisselen krijgt data.overheid.nl een nieuwe API voorziening.
Zie: https://github.com/w3c/dxwg/issues/1431
</p>


### Catalog

De (metadata van de) catalogus die voorkomt in de catalogus. Deze eigenschap maakt dus mogelijk om een catalogus te beschouwen als een resource en deze op te nemen in een catalogus.

| Definitie      | Catalogus                                                                         |
| -------------- | --------------------------------------------------------------------------------- |
| RDF Eigenschap | <a href="https://www.w3.org/TR/vocab-dcat-2/#Property:catalog">`dcat:catalog`</a> |
| Bereik         | `dcat:Catalog`                                                                    |
| Kardinaliteit  | `0..*`                                                                            |
| Gebruik        | Aanbevolen                                                                        |

<p class="note" title="Note">
Vraag: Op dit moment is het op data.overheid.nl al mogelijk om catalogi op te nemen in een catalogus, maar worden deze catalogi geregistreerd als dataset. In DCAT2 is een catalogus, net als een dataset en dataservice, gemodelleerd als aparte resource. Hoe willen we hiermee omgaan?
</p>



