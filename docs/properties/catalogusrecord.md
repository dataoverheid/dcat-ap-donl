## Eigenschappen

| **Eigenschap**                                                       | Herkomst        | Gebruik   |
| -------------------------------------------------------------------- | --------------- | --------- |
| <a href="#access-rights">**access-rights**</a>                       | Resource        |           |
| <a href="#conforms-to">**conforms to**</a>                           | Resource        |           |
| <a href="#contact-point">**contact point**</a>                       | Resource        |           |
| <a href="#creator">**creator**</a>                                   | Resource        |           |
| <a href="#description">**description**</a>                           | Resource        | Verplicht |
| <a href="#title-0">**title** </a>                                      | Resource        | Verplicht |
| <a href="#release-date">**release date**                             | Resource        |           |
| <a href="#update-modification-date">**update/modification date**</a> | Resource        |           |
| <a href="#language">**language**  </a>                               | Resource        |           |
| <a href="#publisher">**publisher**    </a>                           | Resource        |           |
| <a href="#identifier">**identifier** </a>                            | Resource        |           |
| <a href="#theme-category">**theme/category** </a>                    | Resource        |           |
| <a href="#keyword-tag">**keyword/tag**</a>                           | Resource        |           |
| <a href="#landing-page">**landing page**</a>                         | Resource        |           |
| <a href="#qualified-attribution">**qualified attribution**</a>       | Resource        |           |
| <a href="#license">**license** </a>                                  | Resource        |           |
| <a href="#is-referenced-by">**is referenced by**</a>                 | Resource        |           |
| <a href="#other-identifier">**other identifier**</a>                 | Resource        |           |
| <a href="#resource-status">**resource status**</a>                   | Resource        |           |
| <a href="#rights">**rights**</a>                                     | Resource        |           |
| <a href="#legal-foundation">**legal foundation**</a>                 | Resource        |           |
| <a href="#resource-classification">**resource classification**</a>   | Resource        |           |
| <a href="#source-catalog">**source catalog** </a>                    | Resource        |           |
| **modified**                                                         | Catalogusrecord |           |
| **primaryTopic**                                                     | Catalogusrecord |           |

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

