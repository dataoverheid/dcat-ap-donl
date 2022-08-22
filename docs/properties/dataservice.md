## Eigenschappen

| **Eigenschap**                                                       | Herkomst | Gebruik   |
| -------------------------------------------------------------------- | -------- | --------- |
| <a href="#access-rights">**access-rights**</a>                       | Resource |           |
| <a href="#conforms-to">**conforms to**</a>                           | Resource |           |
| <a href="#contact-point">**contact point**</a>                       | Resource |           |
| <a href="#creator">**creator**</a>                                   | Resource |           |
| <a href="#description">**description**</a>                           | Resource | Verplicht |
| <a href="#title-0">**title** </a>                                      | Resource | Verplicht |
| <a href="#release-date">**release date**                             | Resource |           |
| <a href="#update-modification-date">**update/modification date**</a> | Resource |           |
| <a href="#language">**language**  </a>                               | Resource |           |
| <a href="#publisher">**publisher**    </a>                           | Resource |           |
| <a href="#identifier">**identifier** </a>                            | Resource |           |
| <a href="#theme-category">**theme/category** </a>                    | Resource |           |
| <a href="#keyword-tag">**keyword/tag**</a>                           | Resource |           |
| <a href="#landing-page">**landing page**</a>                         | Resource |           |
| <a href="#qualified-attribution">**qualified attribution**</a>       | Resource |           |
| <a href="#license">**license** </a>                                  | Resource |           |
| <a href="#is-referenced-by">**is referenced by**</a>                 | Resource |           |
| <a href="#other-identifier">**other identifier**</a>                 | Resource |           |
| <a href="#resource-status">**resource status**</a>                   | Resource |           |
| <a href="#rights">**rights**</a>                                     | Resource |           |
| <a href="#legal-foundation">**legal foundation**</a>                 | Resource |           |
| <a href="#resource-classification">**resource classification**</a>   | Resource |           |
| <a href="#source-catalog">**source catalog** </a>                    | Resource |           |

### endpoint URL

De locatie of het endpoint van de webservice (a Web-resolvable IRI)

| Definitie      | Eindpunt URL       |
| -------------- | ------------------ |
| RDF Eigenschap | `dcat:endpointURL` |
| Bereik         | `rdfs:Resource`    |
| Kardinaliteit  | `1..*`             |
| Gebruik        | Verplicht          |

### endpoint description

De services die via het endpoint beschikbaar zijn, incl. parameters en functies.
Eindgebruikers zijn gebaat bij duidelijke uitleg en voorbeelden. Iets wat developer.overheid.nl ook doet.

| Definitie      | Eindpunt beschrijving      |
| -------------- | -------------------------- |
| RDF Eigenschap | `dcat:endpointDescription` |
| Bereik         | `xsd:string`               |
| Kardinaliteit  | `0..1`                     |
| Gebruik        | Verplicht                  |


### serves dataset

De dataset die dit endpoint beschikbaar stelt.

Volgens DCAT-AP kan een dataservice voorkomen zonder bijbehorende dataset, maar kan een dataservice ook gerelateerd zijn aan meerdere datasets. Verder overlappen de gegevens van dataset en dataservice elkaar grotendeels, omdat het beide "resources" zijn en dus de eigenschappen overerven van `dcat:CatalogResource`.

Als een dataset alleen gedistribueerd wordt via een dataservice (endpoint) dan wordt deze geregistreerd als `dcat:DataService`. Als de dataset daarnaast ook andere distributies heeft, dan wordt ook een instantie dcat:Dataset aangemaakt. In dat geval worden de eigenschappen van de superklasse van catalog resource dubbel vastgelegd, dus zowel in de dataset als in de bijbehorende dataservice.

| Definitie      | Bediende dataset     |
| -------------- | -------------------- |
| RDF Eigenschap | `dcat:servesDataset` |
| Bereik         | `dcat:Dataset`       |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Aanbevolen           |
