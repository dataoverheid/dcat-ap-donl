## Eigenschappen

| **Eigenschap**                          | Kardinaliteit | Aanwezigheid | Herkomst        |
| --------------------------------------- | ------------- | ------------ | --------------- |
| [**primary topic**](#foaf-primaryTopic) | `1..1`        | Mandatory    | Catalogusrecord |
| [**modified**](#dct-modified2)          | `1..1`        | Mandatory    | Catalogusrecord |
| [**listing date**](#dct-issued2)        | `1..1`        | Recommended  | Catalogusrecord |
| [**conformsTo**](#dct-conformsTo2)      | `0..1`        | Recommended  | Catalogusrecord |
| [**source metadata**](#dct-source)      | `0..1`        | Optional     | Catalogusrecord |

### primary topic {#foaf-primaryTopic}

Betreft de verwijzing naar de [`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService) of 
[`dcat:Catalog`](#dcat-Catalog) die met dit record beschreven wordt.

| Definitie      | Waarde                                        |
| -------------- | --------------------------------------------- |
| RDF Eigenschap | `foaf:primaryTopic`                           |
| Bereik         | `dcat:Resource` (dataset, service or catalog) |
| Kardinaliteit  | `1..1`                                        |
| Gebruik        | Mandatory                                     |

### modified {#dct-modified2}

De datum waarop het record in de catalogus voor het laatst is gewijzigd.

| Definitie      | Waarde         |
| -------------- | -------------- |
| RDF Eigenschap | `dct:modified` |
| Bereik         | `xsd:date`     |
| Kardinaliteit  | `1..1`         |
| Gebruik        | Mandatory      |

<aside class="note">

Deze eigenschap moet een datum *en* tijd bevatten conform de [[[ISO8601]]] standaard, `YYYY-MM-DDThh:mm:ss`.

</aside>

### listing date {#dct-issued2}

De datum waarop het record in de catalogus voor het eerst is toegevoegd.

| Definitie      | Waarde       |
| -------------- | ------------ |
| RDF Eigenschap | `dct:issued` |
| Bereik         | `xsd:date`   |
| Kardinaliteit  | `1..1`       |
| Gebruik        | Recommended  |

<aside class="note">

Deze eigenschap moet een datum *en* tijd bevatten conform de [[[ISO8601]]] standaard, `YYYY-MM-DDThh:mm:ss`.

</aside>

### conformsTo {#dct-conformsTo2}

Een verwijzing naar het DCAT applicatieprofiel waar de metadata van de [`dcat:Resource`](#dcat-Resource) zich aan 
voldoet.

| Definitie      | Waarde           |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | `dct:Standard`   |
| Kardinaliteit  | `0..1`           |
| Gebruik        | Recommended      |

<aside class="note">

Gebruik altijd het HTTPS-protocol voor webadressen! Zie ook [[[HTTPS_EN_HSTS]]].

</aside>

### source metadata {#dct-source}

Een verwijzing naar de bron waar de metadata van de [`dcat:Resource`](#dcat-Resource) vandaan komt.

| Definitie      | Waarde       |
| -------------- | ------------ |
| RDF Eigenschap | `dct:source` |
| Bereik         | `xsd:anyURI` |
| Kardinaliteit  | `1..1`       |
| Gebruik        | Optional     |

<aside class="note">

Gebruik altijd het HTTPS-protocol voor webadressen! Zie ook [[[HTTPS_EN_HSTS]]].

</aside>
