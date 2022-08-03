## Dataservice

### Eindpunt URL

De locatie of het endpoint van de webservice (a Web-resolvable IRI)

| Definitie      | Eindpunt URL      |
|----------------|-------------------|
| RDF Eigenschap | `dcat:endpointURL`|
| Bereik         | `rdfs:Resource`   |
| Kardinaliteit  | `1..*`            |
| Gebruik        | Verplicht         |

### Eindpunt beschrijving

De services die via het endpoint beschikbaar zijn, incl. parameters en functies.

| Definitie      | Eindpunt beschrijving     |
|----------------|---------------------------|
| RDF Eigenschap | `dcat:endpointDescription`|
| Bereik         | `xsd:string`              |
| Kardinaliteit  | `0..1`                    |
| Gebruik        | Verplicht                 |

### Bediende dataset

De dataset die dit endpoint beschikbaar stelt.

| Definitie      | Bediende dataset    |
|----------------|---------------------|
| RDF Eigenschap | `dcat:servesDataset`|
| Bereik         | `dcat:Dataset`      |
| Kardinaliteit  | `0..*`              |
| Gebruik        | Aanbevolen          |

