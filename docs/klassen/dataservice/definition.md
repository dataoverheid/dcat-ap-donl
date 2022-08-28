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
| [**endpoint URL**](#dcat-endpointURL)                     | `1..1`        | Mandatory    | Dataservice |
| [**endpoint description**](#dcat-endpointDescription)     | `1..1`        | Mandatory    | Dataservice |
| [**serves dataset**](#dcat-servesDataset)                 | `0..n`        | Recommended  | Dataservice |

### endpoint URL {#dcat-endpointURL}

De locatie of het endpoint van de service (over het algemeen een via HTTP raadpleegbaar adres)

| Definitie      | Waarde             |
|----------------|--------------------|
| RDF Eigenschap | `dcat:endpointURL` |
| Bereik         | `rdfs:Resource`    |
| Kardinaliteit  | `1..1`             |
| Gebruik        | Mandatory          |

### endpoint description {#dcat-endpointDescription}

Een verwijzing naar de documentatie die de DataService beschrijft. Denk hierbij aan een verwijzing naar een Open Api
Specification (Swagger), een `OGC:WFS` of `OGC:WMS` getCapabilities aanroep, een `SPARQL Service Description` en 
dergelijke.

Een gebruiker is gebaat bij een accurate en volledige beschrijving van de aangeboden service.

| Definitie      | Waarde                     |
|----------------|----------------------------|
| RDF Eigenschap | `dcat:endpointDescription` |
| Bereik         | `rdfs:Resource`            |
| Kardinaliteit  | `1..1`                     |
| Gebruik        | Mandatory                  |

<aside class="note">
Hoewel deze eigenschap qua naamgeving veel lijkt op <a href="#dct-description">`dct:description`</a>, heeft deze 
eigenschap een aanzienlijk andere definitie!
</aside>

### serves dataset {#dcat-servesDataset}

Een dataset die via deze `dcat:DataService` aangeboden wordt. Een dataservice kan nul, een of meer datasets aanbieden.

| Definitie      | Waarde               |
|----------------|----------------------|
| RDF Eigenschap | `dcat:servesDataset` |
| Bereik         | `dcat:Dataset`       |
| Kardinaliteit  | `0..n`               |
| Gebruik        | Recommended          |
