## Eigenschappen

### distribution

De distributie van de dataset, waarin de data-eigenaar beschrijft hoe de data in de dataset toegankelijk wordt gemaakt.

| Definitie      | Distributie         |
| -------------- | ------------------- |
| RDF Eigenschap | `dcat:distribution` |
| Bereik         | `dcat:Distribution` |
| Kardinaliteit  | `1..*`              |
| Gebruik        | Verplicht           |

<p class="note" title="Note">
Een dataset heeft tenminste één distributie.
</p>

### frequency

Een indicatie van de frequentie waarmee de dataset wordt ververst.

| Definitie      | Wijzigingsfrequentie                                                                 |
| -------------- | ------------------------------------------------------------------------------------ |
| RDF Eigenschap | `dct:accrualPeriodicity`                                                             |
| Bereik         | `donl:Frequentie`, zie https://waardelijsten.dcat-ap-donl.nl/overheid_frequency.json |
| Kardinaliteit  | `0..1`                                                                               |
| Gebruik        | Optioneel                                                                            |

<p class="note" title="Note">
De waardelijst voor frequentie is overgenomen van het Publicatiebureau van de EU.
</p>

### spatial/geographical coverage

Het geografische gebied waarop de gegevens in de dataset betrekking hebben.
Het veld kan worden gevuld met coördinaten van een gebied of met de benaming ervan. Data.overheid raadt aan om deze eigenschap te vullen met benamingen d.m.v. <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten">OWMS waardelijsten</a> zoals <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.gemeente">gemeentes</a>, <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.provincie">provincies</a>, <a href="https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel.html">koninkrijksdeel</a> of <a href="https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.waterschap">waterschappen</a>. Om een specifieke locatie aan te geven kan <a href="https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.postcodehuisnummer">postcode en huisnummer</a>  worden gebruikt. Waar dit allen niet toereikend is kan <a href="https://www.geonames.org/">Geonames</a> worden gebruikt. 

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

Een gerelateerde dataset waarin een andere versie van de gegevens zijn opgenomen.

| Definitie      | Heeft versie     |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:hasVersion` |
| Bereik         | `dcat:Dataset`   |
| Kardinaliteit  | `0..*`           |
| Gebruik        | Optioneel        |

<p class="note" title="Note">
Deze eigenschap is specifiek voor DCAT-AP-EU.

In DCAT 3 worden voorstellen uitgewerkt om versies van dataset op een nette manier te modelleren.
</p>

<p class="note" title="Herkomst">
DCAT-AP-EU, DCAT-AP-DONL 1.1
</p>

### is version of

De inverse van has version en verwijst naar de vorige versie van de dataset.

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

Een distributie waarin een (kleine) selectie van de data is opgenomen. Die kan bijvoorbeeld worden weergegeven op het dataportaal bij de dataset, zodat eindgebruikers niet zelf eerst de dataset hoeven downloaden om te zien wa

| Definitie      | Voorbeeld           |
| -------------- | ------------------- |
| RDF Eigenschap | `adms:sample`       |
| Bereik         | `dcat:Distribution` |
| Kardinaliteit  | `0..*`              |
| Gebruik        | Optioneel           |

<p class="note" title="Herkomst">
DCAT-AP-EU, DCAT-AP-DONL 1.1
</p>
