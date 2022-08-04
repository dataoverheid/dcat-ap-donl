## Attributen

De onderstaande tabel geeft een overzicht van de herkomst en de toepassing van alle eigenschappen in deze klasse. Hierbij wordt ook aangegeven hoe het Europese toepassingsprofiel (DCAT-AP-EU) gebruik maakt van de eigenschap. Eigenschappen zonder waarde zijn/worden niet overgenomen in het toepassingsprofiel.

| **Eigenschap**               | Herkomst  | Gebruik    |
| ---------------------------- | --------- | ---------- |
| **Access rights**            | Resource  |            |
| **Conforms to**              | Resource  |            |
| **Contact point**            | Resource  | Verplicht  |
| **Creator**                  | Resource  | Verplicht  |
| **Description**              | Resource  | Verplicht  |
| **Title**                    | Resource  | Verplicht  |
| **Release date**             | Resource  | Aanbevolen |
| **Update/modification date** | Resource  | Aanbevolen |
| **Language**                 | Resource  | Aanbevolen |
| **Publisher**                | Resource  | Verplicht  |
| **Identifier**               | Resource  | Aanbevolen |
| **Theme/category**           | Resource  |            |
| **Keyword/tag**              | Resource  | Optioneel  |
| **Landing page**             | Resource  | Optioneel  |
| **Qualified attribution**    | Resource  |            |
| **License**                  | Resource  |            |
| **Rights**                   | Resource  |            |
| **Is referenced by**         | Resource  |            |
| **Other identifier**         | Resource  | Optioneel  |
| **Resource status**          | Resource  |            |
| **Legal foundation**         | Resource  |            |
| **Resource classification**  | Resource  |            |
| **Wob exclusion reason**     | Resource  |            |
| **Source catalog**           | Resource  |            |
| **Homepage**                 | Catalogus | Verplicht  |
| **Dataset**                  | Catalogus | Aanbevolen |
| **Service**                  | Catalogus | Aanbevolen |
| **Catalognieuw**             | Catalogus | Aanbevolen |
| **Catalog record**           | Catalogus |            |

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



