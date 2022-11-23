## Eigenschappen

In de onderstaande tabel worden de eigenschappen van de `dcat:Dataset` beschreven.

| **Eigenschap**                                                                     | Kardinaliteit | Aanwezigheid | Herkomst |
|------------------------------------------------------------------------------------|---------------|--------------|----------|
| [**identifier**](#dct-identifier)                                                  | `1..1`        | Mandatory    | Resource |
| [**title**](#dct-title)                                                            | `1..n`        | Mandatory    | Resource |
| [**description**](#dct-description)                                                | `1..n`        | Mandatory    | Resource |
| [**license**](#dct-license)                                                        | `1..1`        | Mandatory    | Resource |
| [**creator**](#dct-creator) <em class="new">nieuw</em>                             | `1..1`        | Mandatory    | Resource |
| [**publisher**](#dct-publisher)                                                    | `1..1`        | Mandatory    | Resource |
| [**contact point**](#dcat-contactPoint)                                            | `1..1`        | Mandatory    | Resource |
| [**theme/category**](#dcat-theme)                                                  | `1..n`        | Mandatory    | Resource |
| [**access-rights**](#dct-accessRights)                                             | `0..1`        | Recommended  | Resource |
| [**keyword/tag**](#dcat-keyword)                                                   | `0..n`        | Recommended  | Resource |
| [**release date**](#dct-issued)                                                    | `0..1`        | Recommended  | Resource |
| [**update/modification date**](#dct-modified)                                      | `0..1`        | Recommended  | Resource |
| [**resource language**](#dct-language)                                             | `0..n`        | Recommended  | Resource |
| [**landing page**](#dcat-landingPage)                                              | `0..1`        | Optional     | Resource |
| [**other identifier**](#adms-identifier)                                           | `0..n`        | Optional     | Resource |
| [**conforms to**](#dct-conformsTo) <em class="new">nieuw</em>                      | `0..n`        | Optional     | Resource |
| [**legal foundation**](#donl-grondslag)                                            | `0..n`        | Optional     | Resource |
| [**rights**](#rights)                                                              | `0..n`        | Optional     | Resource |
| [**qualified-attribution**](#prov-qualifiedAttribution) <em class="new">nieuw</em> | `0..n`        | Optional     | Resource |
| [**distribution**](#dcat-distribution1)                                            | `0..n`        | Recommended  | Dataset  |
| [**frequency**](#dct-accrualPeriodicity)                                           | `0..1`        | Recommended  | Dataset  |
| [**spatial/geographical coverage**](#dct-spatial)                                  | `0..n`        | Optional     | Dataset  |
| [**temporal coverage**](#dct-temporal)                                             | `0..1`        | Optional     | Dataset  |

### distribution {#dcat-distribution1}

De distributie van de dataset, waarin de data-eigenaar beschrijft hoe de data in de dataset toegankelijk is gemaakt.

| Definitie      | Waarde              |
|----------------|---------------------|
| RDF Eigenschap | `dcat:distribution` |
| Bereik         | `dcat:Distribution` |
| Kardinaliteit  | `0..n`              |
| Gebruik        | Recommended         |

### frequency {#dct-accrualPeriodicity}

Een indicatie van de frequentie waarmee de dataset wordt ververst.

| Definitie      | Waarde                                                    |
|----------------|-----------------------------------------------------------|
| RDF Eigenschap | `dct:accrualPeriodicity`                                  |
| Bereik         | [`waardelijst mdr:Frequency`](#waardelijst-mdr-Frequency) |
| Kardinaliteit  | `0..1`                                                    |
| Gebruik        | Recommended                                               |

### spatial/geographical coverage {#dct-spatial}

Het geografische gebied waarop de gegevens in de dataset betrekking hebben. Het veld kan worden gevuld met de benaming
van een gebied in de vorm van een URI of de coördinaten ervan.

Voor de invulling van deze eigenschap wordt vereist dat een van de onderstaande opties gekozen wordt:

| Naam                                                                            | Type               | Gebruik     |
|---------------------------------------------------------------------------------|--------------------|-------------|
| [`waardelijst overheid:Koninkrijksdeel`](#waardelijst-overheid-Koninkrijksdeel) | Waardelijst        | Recommended |
| [`waardelijst overheid:Provincie`](#waardelijst-overheid-Provincie)             | Waardelijst        | Recommended |
| [`waardelijst overheid:Waterschap`](#waardelijst-overheid-Waterschap)           | Waardelijst        | Recommended |
| [`waardelijst overheid:Gemeente`](#waardelijst-overheid-Gemeente)               | Waardelijst        | Recommended |
| [[[GEONAMES]]]                                                                  | Waardelijst        | Optional    |
| [[[OWMS_EPSG28992]]]                                                            | Syntaxcodeerschema | Optional    |
| [[[OWMS_POSTCODEHUISNUMMER]]]                                                   | Syntaxcodeerschema | Optional    |

De voorkeur gaat uit naar het gebruik van een van de genoemde OWMS4.0 waardelijsten. Het is echter zo dat deze lijsten
niet altijd een oplossing bieden voor het duiden van een geografisch gebied. Voor die gevallen worden een drietal
alternatieven aangeboden.

- [[[GEONAMES]]] is een internationale database van locatiegegevens. Wanneer een locatie niet in de OWMS4.0
  waardelijsten staat, dan kan deze database geraadpleegd worden om alsnog een locatiereferentie op te nemen.
- [[[OWMS_EPSG28992]]] is een [[[OWMS_SYNTAXCODEERSCHEMA]]] waarmee coordinaten in het [[[EPSG28992]]] stelsel opgenomen
  kunnen worden. Deze optie maakt het mogelijk om bijvoorbeeld een 'bounding-box' op te nemen als locatiegegeven.
- [[[OWMS_POSTCODEHUISNUMMER]]] is een [[[OWMS_SYNTAXCODEERSCHEMA]]] waarmee verwezen kan worden naar een (of een set
  van) combinaties van postcodes en huisnummers.

| Definitie      | Locatie                                   |
|----------------|-------------------------------------------|
| RDF Eigenschap | `dct:spatial`                             |
| Bereik         | De naam of de coördinaten van een gebied. |
| Kardinaliteit  | `0..n`                                    |
| Gebruik        | Optional                                  |

<div class="issue" data-number="3"></div>

### temporal coverage {#dct-temporal}

De tijdsperiode waar de dataset betrekking op heeft. Zie [example-temporal-coverage](#temporal-coverage-0) voor een voorbeeld.

| Definitie      | Waarde             |
|----------------|--------------------|
| RDF Eigenschap | `dct:temporal`     |
| Bereik         | `dct:PeriodOfTime` |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Recommended        |

