## Eigenschappen

| **Eigenschap**                                                                   | Herkomst | Gebruik   |
| -------------------------------------------------------------------------------- | -------- | --------- |
| <a href="#access-rights">**access-rights**</a>                                   | Resource |           |
| <a href="#conforms-to">**conforms to**</a>                                       | Resource |           |
| <a href="#contact-point">**contact point**</a>                                   | Resource |           |
| <a href="#creator">**creator**</a>                                               | Resource |           |
| <a href="#description">**description**</a>                                       | Resource | Verplicht |
| <a href="#title-0">**title** </a>                                                  | Resource | Verplicht |
| <a href="#release-date">**release date**                                         | Resource |           |
| <a href="#update-modification-date">**update/modification date**</a>             | Resource |           |
| <a href="#language">**language**  </a>                                           | Resource |           |
| <a href="#publisher">**publisher**    </a>                                       | Resource |           |
| <a href="#identifier">**identifier** </a>                                        | Resource |           |
| <a href="#theme-category">**theme/category** </a>                                | Resource |           |
| <a href="#keyword-tag">**keyword/tag**</a>                                       | Resource |           |
| <a href="#landing-page">**landing page**</a>                                     | Resource |           |
| <a href="#qualified-attribution">**qualified attribution**</a>                   | Resource |           |
| <a href="#license">**license** </a>                                              | Resource |           |
| <a href="#is-referenced-by">**is referenced by**</a>                             | Resource |           |
| <a href="#other-identifier">**other identifier**</a>                             | Resource |           |
| <a href="#resource-status">**resource status**</a>                               | Resource |           |
| <a href="#rights">**rights**</a>                                                 | Resource |           |
| <a href="#legal-foundation">**legal foundation**</a>                             | Resource |           |
| <a href="#resource-classification">**resource classification**</a>               | Resource |           |
| <a href="#source-catalog">**source catalog** </a>                                | Resource |           |
| <a href="#distribution">**distribution**  </a>                                   | Dataset  |           |
| <a href="#frequency">**frequency**  </a>                                         | Dataset  |           |
| <a href="#spatial-geographical-coverage">**spatial/geographical coverage**  </a> | Dataset  |           |
| <a href="#temporal-coverage">**temporal coverage**  </a>                         | Dataset  |           |
| <a href="#has-version">**has version**  </a>                                     | Dataset  |           |
| <a href="#is-version-of">**is version of**  </a>                                 | Dataset  |           |
| <a href="#sample">**sample**  </a>                                               | Dataset  |           |

### distribution

De distributie van de dataset, waarin de data-eigenaar beschrijft hoe de data in de dataset toegankelijk wordt gemaakt.
Een dataset heeft tenminste één distributie.

| Definitie      | Distributie         |
| -------------- | ------------------- |
| RDF Eigenschap | `dcat:distribution` |
| Bereik         | `dcat:Distribution` |
| Kardinaliteit  | `1..*`              |
| Gebruik        | Verplicht           |


### frequency

Een indicatie van de frequentie waarmee de dataset wordt ververst.
De waardelijst voor frequentie is overgenomen van het Publicatiebureau van de EU.

| Definitie      | Wijzigingsfrequentie                                                                 |
| -------------- | ------------------------------------------------------------------------------------ |
| RDF Eigenschap | `dct:accrualPeriodicity`                                                             |
| Bereik         | `donl:Frequentie`, zie https://waardelijsten.dcat-ap-donl.nl/overheid_frequency.json |
| Kardinaliteit  | `0..1`                                                                               |
| Gebruik        | Optioneel                                                                            |

### spatial/geographical coverage

Het geografische gebied waarop de gegevens in de dataset betrekking hebben. Het veld kan worden gevuld met de benaming van een gebied of de coördinaten ervan.

Data.overheid raadt aan om deze eigenschap te vullen met benamingen d.m.v. <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten">OWMS waardelijsten</a> zoals <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.gemeente">gemeentes</a>, <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.provincie">provincies</a>, <a href="https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel.html">koninkrijksdeel</a> of <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.waterschap">waterschappen</a>. Om een specifieke locatie aan te geven kan <a href="https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.postcodehuisnummer">postcode en huisnummer</a>  worden gebruikt. Waar dit allen niet toereikend is kan <a href="https://www.geonames.org/">Geonames</a> worden gebruikt. 

Voor coördinaten wordt de <a href="https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.epsg28992">OWMS standaard EPSG-28992</a> gebruikt. Deze wordt ook in <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">DCAT-AP-DONL 1.1</a> gebruikt en is compatibel met de bounding boxes die het NGR gebruikt. Het NGR heeft ook een <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">handleiding voor het coderen van coördinaten</a>.

| Definitie      | Locatie                                   |
| -------------- | ----------------------------------------- |
| RDF Eigenschap | `dct:spatial`                             |
| Bereik         | De naam of de coördinaten van een gebied. |
| Kardinaliteit  | `0..*`                                    |
| Gebruik        | Optioneel                                 |

<div class="issue" data-number="3"></div>

### temporal coverage

De kleinste periode tussen twee data-items in de dataset.

| Definitie      | Dekking in tijd    |
| -------------- | ------------------ |
| RDF Eigenschap | `dct:temporal`     |
| Bereik         | `dct:PeriodOfTime` |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Aanbevolen         |

### has version

Een gerelateerde dataset waarin een andere versie van de gegevens zijn opgenomen. Deze eigenschap is specifiek voor DCAT-AP-EU. In DCAT 3 worden voorstellen uitgewerkt om versies van dataset op een nette manier te modelleren.

| Definitie      | Heeft versie     |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:hasVersion` |
| Bereik         | `dcat:Dataset`   |
| Kardinaliteit  | `0..*`           |
| Gebruik        | Optioneel        |


### is version of

De inverse van has version en verwijst naar de vorige versie van de dataset. Deze eigenschap is specifiek voor DCAT-AP-EU.

| Definitie      | Is versie van     |
| -------------- | ----------------- |
| RDF Eigenschap | `dct:isVersionOf` |
| Bereik         | `dcat:Dataset`    |
| Kardinaliteit  | `0..*`            |
| Gebruik        | Optioneel         |

<p class="note" title="Herkomst">
DCAT-AP-EU, DCAT-AP-DONL 1.1
</p>

### sample

Een distributie waarin een (kleine) selectie van de data is opgenomen. Die kan bijvoorbeeld worden weergegeven op het dataportaal bij de dataset, zodat eindgebruikers niet zelf eerst de dataset hoeven downloaden om te zien hoe de inhoud bruikbaar is.

Deze eigenschap is specifiek voor DCAT-AP-EU.

| Definitie      | Voorbeeld           |
| -------------- | ------------------- |
| RDF Eigenschap | `adms:sample`       |
| Bereik         | `dcat:Distribution` |
| Kardinaliteit  | `0..*`              |
| Gebruik        | Optioneel           |

