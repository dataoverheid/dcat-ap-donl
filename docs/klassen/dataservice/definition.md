## Eigenschappen

In de onderstaande tabel worden de eigenschappen van de `dcat:DataService` beschreven.

| **Eigenschap**                                                                     | Kardinaliteit | Aanwezigheid | Herkomst    |
|------------------------------------------------------------------------------------|---------------|--------------|-------------|
| [**identifier**](#dct-identifier)                                                  | `1..1`        | Mandatory    | Resource    |
| [**title**](#dct-title)                                                            | `1..n`        | Mandatory    | Resource    |
| [**description**](#dct-description)                                                | `1..n`        | Mandatory    | Resource    |
| [**license**](#dct-license)                                                        | `1..1`        | Mandatory    | Resource    |
| [**creator**](#dct-creator) <em class="new">nieuw</em>                             | `1..1`        | Mandatory    | Resource    |
| [**publisher**](#dct-publisher)                                                    | `1..1`        | Mandatory    | Resource    |
| [**contact point**](#dcat-contactPoint)                                            | `1..1`        | Mandatory    | Resource    |
| [**theme/category**](#dcat-theme)                                                  | `1..n`        | Mandatory    | Resource    |
| [**access-rights**](#dct-accessRights)                                             | `0..1`        | Recommended  | Resource    |
| [**keyword/tag**](#dcat-keyword)                                                   | `0..n`        | Recommended  | Resource    |
| [**release date**](#dct-issued)                                                    | `0..1`        | Recommended  | Resource    |
| [**update/modification date**](#dct-modified)                                      | `0..1`        | Recommended  | Resource    |
| [**resource language**](#dct-language)                                             | `0..n`        | Recommended  | Resource    |
| [**landing page**](#dcat-landingPage)                                              | `0..1`        | Optional     | Resource    |
| [**other identifier**](#adms-identifier)                                           | `0..n`        | Optional     | Resource    |
| [**conforms to**](#dct-conformsTo) <em class="new">nieuw</em>                      | `0..n`        | Optional     | Resource    |
| [**legal foundation**](#donl-grondslag)                                            | `0..n`        | Optional     | Resource    |
| [**rights**](#rights)                                                              | `0..n`        | Optional     | Resource    |
| [**qualified-attribution**](#prov-qualifiedAttribution) <em class="new">nieuw</em> | `0..n`        | Optional     | Resource    |
| [**endpoint URL**](#dcat-endpointURL) <em class="new">nieuw</em>                   | `1..1`        | Mandatory    | Dataservice |
| [**endpoint description**](#dcat-endpointDescription) <em class="new">nieuw</em>   | `1..1`        | Mandatory    | Dataservice |
| [**serves dataset**](#dcat-servesDataset) <em class="new">nieuw</em>               | `0..n`        | Recommended  | Dataservice |

### endpoint URL <em class="new">nieuw</em> {#dcat-endpointURL}

De locatie of het endpoint van de service (over het algemeen een via HTTP raadpleegbaar adres).

| Definitie      | Waarde             |
| -------------- | ------------------ |
| RDF Eigenschap | `dcat:endpointURL` |
| Bereik         | `rdfs:Resource`    |
| Kardinaliteit  | `1..1`             |
| Gebruik        | Mandatory          |

### endpoint description <em class="new">nieuw</em> {#dcat-endpointDescription}

Een verwijzing naar de documentatie die de DataService beschrijft. Denk hierbij aan een verwijzing naar een Open Api
Specification (Swagger), een `OGC:WFS` of `OGC:WMS` getCapabilities aanroep, een `SPARQL Service Description` en
dergelijke.

Een gebruiker is gebaat bij een accurate en volledige beschrijving van de aangeboden service.

| Definitie      | Waarde                     |
| -------------- | -------------------------- |
| RDF Eigenschap | `dcat:endpointDescription` |
| Bereik         | `rdfs:Resource`            |
| Kardinaliteit  | `1..1`                     |
| Gebruik        | Mandatory                  |

<aside class="note">
Hoewel deze eigenschap qua naamgeving veel lijkt op <a href="#dct-description">`dct:description`</a>, heeft deze
eigenschap een aanzienlijk andere definitie!
</aside>

### serves dataset <em class="new">nieuw</em> {#dcat-servesDataset}

Een dataset die via deze `dcat:DataService` aangeboden wordt. Een dataservice kan nul, een of meer datasets aanbieden.

| Definitie      | Waarde               |
| -------------- | -------------------- |
| RDF Eigenschap | `dcat:servesDataset` |
| Bereik         | `dcat:Dataset`       |
| Kardinaliteit  | `0..n`               |
| Gebruik        | Recommended          |
