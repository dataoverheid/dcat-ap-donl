## Eigenschappen

In de onderstaande tabel worden de eigenschappen van de `dcat:DataService` beschreven.

| **Eigenschap**                                            | Kardinaliteit | Aanwezigheid | Herkomst    |
|-----------------------------------------------------------|---------------|--------------|-------------|
| [**identifier**](#identifier)                             | `1..1`        | Mandatory    | Resource    |
| [**title**](#title)                                       | `1..1`        | Mandatory    | Resource    |
| [**description**](#description)                           | `1..1`        | Mandatory    | Resource    |
| [**license**](#license)                                   | `1..1`        | Mandatory    | Resource    |
| [**creator**](#creator)                                   | `1..1`        | Mandatory    | Resource    |
| [**publisher**](#publisher)                               | `1..1`        | Mandatory    | Resource    |
| [**contact point**](#contact-point)                       | `1..1`        | Mandatory    | Resource    |
| [**theme/category**](#theme-category)                     | `1..n`        | Mandatory    | Resource    |
| [**landing page**](#landing-page)                         | `0..1`        | Recommended  | Resource    |
| [**access-rights**](#access-rights)                       | `0..1`        | Recommended  | Resource    |
| [**language**](#language)                                 | `0..1`        | Recommended  | Resource    |
| [**other identifier**](#other-identifier)                 | `0..n`        | Recommended  | Resource    |
| [**keyword/tag**](#keyword-tag)                           | `0..n`        | Recommended  | Resource    |
| [**conforms to**](#conforms-to)                           | `0..n`        | Recommended  | Resource    |
| [**legal foundation**](#legal-foundation)                 | `0..n`        | Recommended  | Resource    |
| [**release date**](#release-date)                         | `0..1`        | Optional     | Resource    |
| [**update/modification date**](#update-modification-date) | `0..1`        | Optional     | Resource    |
| [**resource status**](#resource-status)                   | `0..1`        | Optional     | Resource    |
| [**rights**](#rights)                                     | `0..1`        | Optional     | Resource    |
| [**source-catalog**](#source-catalog)                     | `0..1`        | Optional     | Resource    |
| [**qualified-attribution**](#qualified-attribution)       | `0..n`        | Optional     | Resource    |
| [**is referenced by**](#is-referenced-by)                 | `0..n`        | Optional     | Resource    |
| [**resource classification**](#resource-classification)   | `0..n`        | Optional     | Resource    |
| [**endpoint URL**](#endpoint-url)                         | `1..1`        | Mandatory    | Dataservice |
| [**endpoint description**](#endpoint-description)         | `1..1`        | Mandatory    | Dataservice |
| [**serves dataset**](#serves-dataset)                     | `0..n`        | Recommended  | Dataservice |

### endpoint URL

De locatie of het endpoint van de webservice (a Web-resolvable IRI)

| Definitie      | Waarde             |
| -------------- |--------------------|
| RDF Eigenschap | `dcat:endpointURL` |
| Bereik         | `rdfs:Resource`    |
| Kardinaliteit  | `1..1`             |
| Gebruik        | Mandatory          |

### endpoint description

De services die via het endpoint beschikbaar zijn, incl. parameters en functies. Eindgebruikers zijn gebaat bij 
duidelijke uitleg en voorbeelden.

| Definitie      | Waarde                     |
| -------------- |----------------------------|
| RDF Eigenschap | `dcat:endpointDescription` |
| Bereik         | `xsd:string`               |
| Kardinaliteit  | `1..1`                     |
| Gebruik        | Mandatory                  |

### serves dataset

Een dataset die via deze `dcat:DataService` aangeboden wordt. Een dataservice kan nul, een of meer datasets aanbieden.

| Definitie      | Waarde               |
| -------------- |----------------------|
| RDF Eigenschap | `dcat:servesDataset` |
| Bereik         | `dcat:Dataset`       |
| Kardinaliteit  | `0..n`               |
| Gebruik        | Recommended          |