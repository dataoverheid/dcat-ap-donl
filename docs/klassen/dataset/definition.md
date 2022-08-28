## Eigenschappen

In de onderstaande tabel worden de eigenschappen van de `dcat:Dataset` beschreven.

| **Eigenschap**                                            | Kardinaliteit | Aanwezigheid | Herkomst |
|-----------------------------------------------------------|---------------|--------------|----------|
| [**identifier**](#identifier)                             | `1..1`        | Mandatory    | Resource |
| [**title**](#title)                                       | `1..1`        | Mandatory    | Resource |
| [**description**](#description)                           | `1..1`        | Mandatory    | Resource |
| [**license**](#license)                                   | `1..1`        | Mandatory    | Resource |
| [**creator**](#creator)                                   | `1..1`        | Mandatory    | Resource |
| [**publisher**](#publisher)                               | `1..1`        | Mandatory    | Resource |
| [**contact point**](#contact-point)                       | `1..1`        | Mandatory    | Resource |
| [**theme/category**](#theme-category)                     | `1..n`        | Mandatory    | Resource |
| [**landing page**](#landing-page)                         | `0..1`        | Recommended  | Resource |
| [**access-rights**](#access-rights)                       | `0..1`        | Recommended  | Resource |
| [**language**](#language)                                 | `0..1`        | Recommended  | Resource |
| [**other identifier**](#other-identifier)                 | `0..n`        | Recommended  | Resource |
| [**keyword/tag**](#keyword-tag)                           | `0..n`        | Recommended  | Resource |
| [**conforms to**](#conforms-to)                           | `0..n`        | Recommended  | Resource |
| [**legal foundation**](#legal-foundation)                 | `0..n`        | Recommended  | Resource |
| [**release date**](#release-date)                         | `0..1`        | Optional     | Resource |
| [**update/modification date**](#update-modification-date) | `0..1`        | Optional     | Resource |
| [**resource status**](#resource-status)                   | `0..1`        | Optional     | Resource |
| [**rights**](#rights)                                     | `0..1`        | Optional     | Resource |
| [**source-catalog**](#source-catalog)                     | `0..1`        | Optional     | Resource |
| [**qualified-attribution**](#qualified-attribution)       | `0..n`        | Optional     | Resource |
| [**is referenced by**](#is-referenced-by)                 | `0..n`        | Optional     | Resource |
| [**resource classification**](#resource-classification)   | `0..n`        | Optional     | Resource |
| [**distribution**](#dcat-distribution1)                   | `0..n`        | Recommended  | Dataset  |
| [**frequency**](#dct-accrualPeriodicity)                  | `0..1`        | Recommended  | Dataset  |
| [**spatial/geographical coverage**](#dct-spatial)         | `0..n`        | Optional     | Dataset  |
| [**temporal coverage**](#dct-temporal)                    | `0..1`        | Optional     | Dataset  |

### distribution {#dcat-distribution1}

De distributie van de dataset, waarin de data-eigenaar beschrijft hoe de data in de dataset toegankelijk is gemaakt.



| Definitie      | Waarde              |
|----------------|---------------------|
| RDF Eigenschap | `dcat:distribution` |
| Bereik         | `dcat:Distribution` |
| Kardinaliteit  | `1..n`              |
| Gebruik        | Recommended         |

### frequency

Een indicatie van de frequentie waarmee de dataset wordt ververst.

| Definitie      | Waarde                                                    |
|----------------|-----------------------------------------------------------|
| RDF Eigenschap | `dct:accrualPeriodicity`                                  |
| Bereik         | [`waardelijst mdr:Frequency`](#waardelijst-mdr-Frequency) |
| Kardinaliteit  | `0..1`                                                    |
| Gebruik        | Recommended                                               |

### spatial/geographical coverage

Het geografische gebied waarop de gegevens in de dataset betrekking hebben. Het veld kan worden gevuld met de benaming van een gebied of de coördinaten ervan.

Data.overheid raadt aan om deze eigenschap te vullen met benamingen d.m.v. <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten">OWMS waardelijsten</a> zoals <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.gemeente">gemeentes</a>, <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.provincie">provincies</a>, <a href="https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel.html">koninkrijksdeel</a> of <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.waterschap">waterschappen</a>. Om een specifieke locatie aan te geven kan <a href="https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.postcodehuisnummer">postcode en huisnummer</a>  worden gebruikt. Waar dit allen niet toereikend is kan <a href="https://www.geonames.org/">Geonames</a> worden gebruikt. 

Voor coördinaten wordt de <a href="https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.epsg28992">OWMS standaard EPSG-28992</a> gebruikt. Deze wordt ook in <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">DCAT-AP-DONL 1.1</a> gebruikt en is compatibel met de bounding boxes die het NGR gebruikt. Het NGR heeft ook een <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">handleiding voor het coderen van coördinaten</a>.

| Definitie      | Locatie                                   |
|----------------|-------------------------------------------|
| RDF Eigenschap | `dct:spatial`                             |
| Bereik         | De naam of de coördinaten van een gebied. |
| Kardinaliteit  | `0..*`                                    |
| Gebruik        | Optioneel                                 |

<div class="issue" data-number="3"></div>

### temporal coverage

De kleinste periode tussen twee data-items in de dataset.

| Definitie      | Dekking in tijd    |
|----------------|--------------------|
| RDF Eigenschap | `dct:temporal`     |
| Bereik         | `dct:PeriodOfTime` |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Aanbevolen         |
