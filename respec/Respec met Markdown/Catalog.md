## Catalogus

### Homepage

De homepage van de catalogus.  

| Definitie      | Homepage        |
|----------------|-----------------|
| RDF Eigenschap | `foaf:homepage` |
| Bereik         | `xsd:anyURI`    |
| Kardinaliteit	 | `1..1`          |
| Gebruik        | Verplicht       |

<p class="note" title="Note">
Een catalogus kan op meerdere dataportals worden gepubliceerd. Deze eigenschap verwijst naar de originele homepage. Dat is in de regel de homepage van de maker van de catalogus. Let op, dit is dus iets anders dan resource - landing page. TODO: link naar resource - landing page
</p>


### Gegevensverzameling

De (metadata van de) dataset(s) die is/zijn opgenomen in de catalogus.

| Definitie      | gegevensverzameling    |
|----------------|------------------------|
| RDF Eigenschap | `dcat:dataset`         |
| Bereik         | `dcat:Dataset`         |
| Kardinaliteit	 | `0..*`                 |
| Gebruik        | Aanbevolen             |

<p class="note" title="Note">
Het lijkt logisch dat een catalogus tenminste één dataset bevat, omdat een catalogus op zich niet zo interessant is. Desondanks geven we hier de cardinaliteit 0..*, omdat een catalogus ook als resource in een andere catalogus kan voorkomen zonder verdere inhoud. In dat geval verwijst de catalogus door naar de homepage op een ander dataportaal die de inhoud wel toont.
    
Zie de discussie op https://github.com/SEMICeu/DCAT-AP/issues/180    
</p>


### Dienst  

De (metadata van de) dataservice die voorkomt in de catalogus.

| Definitie      | Dienst              |
|----------------|---------------------|
| RDF Eigenschap | `dcat:service`      |
| Bereik         | `dcat:DataService`  |
| Kardinaliteit	 | `0..*`              |
| Gebruik        | Aanbevolen          |

<p class="note" title="Note">
Dataservice is een nieuwe resource in DCAT2. Om de metadata van dataservices te kunnen uitwisselen krijgt data.overheid.nl een nieuwe API voorziening.
Zie: https://github.com/w3c/dxwg/issues/1431
</p>


### Catalogus

De (metadata van de) catalogus die voorkomt in de catalogus. Deze eigenschap maakt dus mogelijk om een catalogus te beschouwen als een resource en deze op te nemen in een catalogus.

| Definitie      | Catalogus        |
|----------------|------------------|
| RDF Eigenschap | `dcat:catalog`   |
| Bereik         | `dcat:Catalog`   |
| Kardinaliteit	 | `0..*`           |
| Gebruik        | Aanbevolen       |

<p class="note" title="Note">
Vraag: Op dit moment is het op data.overheid.nl al mogelijk om catalogi op te nemen in een catalogus, maar worden deze catalogi geregistreerd als dataset. In DCAT2 is een catalogus, net als een dataset en dataservice, gemodelleerd als aparte resource. Hoe willen we hiermee omgaan?
</p>


### Catalogus Record

De administratieve metadata van de registratie van een resource in een catalogus. HIerbij kan worden gedacht aan de datum/tijd waarop een bepaalde resource is geregistreerd.

| Definitie      | Catalogus Record       |
|----------------|------------------------|
| RDF Eigenschap | `dcat:record`          |
| Bereik         | `dcat:CatalogRecord`   |
| Kardinaliteit	 | `0..*`                 |
| Gebruik        | Optioneel              |

<p class="note" title="Note">
Deze eigenschap en de klasse dcat:CatalogRecord worden niet opgenomen in het toepassingsprofiel van data.overheid.nl, omdat eerder is gebleken dat partijen deze informatie niet aanleveren.
</p>
