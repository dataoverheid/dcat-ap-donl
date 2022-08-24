## Eigenschappen

| **Eigenschap**                                                                           | Kardinaliteit | Aanwezigheid | Herkomst        |
| ---------------------------------------------------------------------------------------- | ------------- | ------------ | --------------- |
| <a href="#access-rights">**access-rights**</a>                                           | `0..1`        |              | Resource        |
| <a href="#conforms-to">**conforms to**</a><em class="new">nieuw</em>                     | `0..*`        |              | Resource        |
| <a href="#contact-point">**contact point**</a>                                           | `1..1`        |              | Resource        |
| <a href="#creator">**creator**</a><em class="new">nieuw</em>                             | `1..1`        |              | Resource        |
| <a href="#description">**description**</a>                                               | `1..1`        | Mandatory    | Resource        |
| <a href="#title-0">**title** </a>                                                        | `1..1`        | Mandatory    | Resource        |
| <a href="#release-date">**release date**                                                 | `0..1`        |              | Resource        |
| <a href="#update-modification-date">**update/modification date**</a>                     | `0..1`        |              | Resource        |
| <a href="#language">**language**  </a>                                                   | `1..1`        |              | Resource        |
| <a href="#publisher">**publisher**    </a>                                               | `1..1`        |              | Resource        |
| <a href="#identifier">**identifier** </a>                                                | `1..1`        |              | Resource        |
| <a href="#theme-category">**theme/category** </a>                                        | `1..*`        |              | Resource        |
| <a href="#keyword-tag">**keyword/tag**</a>                                               | `0..*`        |              | Resource        |
| <a href="#landing-page">**landing page**</a>                                             | `0..1`        |              | Resource        |
| <a href="#qualified-attribution">**qualified attribution**</a><em class="new">nieuw</em> | `0..*`        |              | Resource        |
| <a href="#license">**license** </a>                                                      | `1..1`        |              | Resource        |
| <a href="#is-referenced-by">**is referenced by**</a><em class="new">nieuw</em>           | `0..*`        |              | Resource        |
| <a href="#other-identifier">**other identifier**</a>                                     | `0..*`        |              | Resource        |
| <a href="#resource-status">**resource status**</a>                                       | `1..1`        |              | Resource        |
| <a href="#rights">**rights**</a>                                                         | `0..1`        |              | Resource        |
| <a href="#legal-foundation">**legal foundation**</a>                                     | `0..*`        |              | Resource        |
| <a href="#resource-classification">**resource classification**</a>                       | `0..*`        |              | Resource        |
| <a href="#source-catalog">**source catalog** </a>                                        | `0..1`        |              | Resource        |
| <a href="#rights">**modified**</a>                                                       | `1..1`        | Mandatory    | Catalogusrecord |
| <a href="#primarytopic">**primaryTopic**</a>                                             | `1..1`        | Mandatory    | Catalogusrecord |


### modified

De datum waarop het record in de catalogus voor het laatst is gewijzigd.

| Definitie      | Wijzigingsdatum |
| -------------- | --------------- |
| RDF Eigenschap | `dct:modified`  |
| Bereik         | `xs:date`       |
| Kardinaliteit  | `1..1`          |
| Gebruik        | Verplicht       |

### primaryTopic

Betreft de verwijzing naar de dcat:Resource (dataset or service) die het record beschrijft.

| Definitie      | Verwijzing                           |
| -------------- | ------------------------------------ |
| RDF Eigenschap | `foaf:primaryTopic`                  |
| Bereik         | `dcat:Resource` (dataset or service) |
| Kardinaliteit  | `1..1`                               |
| Gebruik        | Verplicht                            |

