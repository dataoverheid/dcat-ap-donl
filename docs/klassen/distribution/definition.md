## Eigenschappen

In de onderstaande tabel worden de eigenschappen van de `dcat:Distribution` beschreven.

| **Eigenschap**                                                       | Kardinaliteit | Aanwezigheid | Herkomst    |
|----------------------------------------------------------------------|---------------|--------------|-------------|
| [**accessURL**](#dcat-accessURL)                                     | `1..1`        | Mandatory    | Distributie |
| [**format**](#dct-format)                                            | `1..1`        | Mandatory    | Distributie |
| [**title**](#dct-title1)                                             | `1..1`        | Mandatory    | Distributie |
| [**description**](#dct-description1)                                 | `1..1`        | Mandatory    | Distributie |
| [**license**](#dct-license1)                                         | `1..1`        | Mandatory    | Distributie |
| [**access service**](#dcat-accessService) <em class="new">nieuw</em> | `0..1`        | Recommended  | Distributie |
| [**download URL**](#dcat-downloadURL)                                | `0..1`        | Recommended  | Distributie |
| [**modified**](#dct-modified1)                                       | `0..1`        | Recommended  | Distributie |
| [**issued**](#dct-issued1)                                           | `0..1`        | Optional     | Distributie |
| [**language**](#dct-language1)                                       | `0..n`        | Optional     | Distributie |
| [**rights**](#dct-rights1)                                           | `0..n`        | Optional     | Distributie |
| [**byteSize**](#dcat-byteSize)                                       | `0..1`        | Optional     | Distributie |
| [**conformsTo**](#dct-conformsTo1) <em class="new">nieuw</em>        | `0..n`        | Optional     | Distributie |
| [**mediaType**](#dct-mediaType)                                      | `0..1`        | Optional     | Distributie |
| [**checksum**](#spdx-checksum)                                       | `0..1`        | Optional     | Distributie |
| [**documentation**](#foaf-page1)                                     | `0..n`        | Optional     | Distributie |
| [**supportingRole**](#donl-supportingRole)                           | `0..1`        | Optional     | Distributie |

### accessURL {#dcat-accessURL}

Het web-adres (URL) van de site die toegang verschaft tot de data, aan de hand van bijvoorbeeld een webformulier, een 
zoekopdracht of een API-call. Het is niet vereist dat dit adres een directe link naar de data is. Hier mag ook verwezen 
worden naar een landings-pagina die de link naar de data aanbiedt. Er kan in dat geval met 
[`dcat:downloadURL`](#dcat-downloadURL) een directe link naar de data aangeboden worden.

Wanneer de data via een [`dcat:DataService`](#dcat-DataService) wordt aangeboden, dan staat in deze eigenschap de 
volledige API-call waarmee de data uit de service gehaald kan worden. Met [`dcat:accessService`](#dcat-accessService) 
wordt dan de link gemaakt met de [`dcat:DataService`](#dcat-DataService).

| Definitie      | Waarde           |
|----------------|------------------|
| RDF Eigenschap | `dcat:accessURL` |
| Bereik         | `xsd:anyURI`     |
| Kardinaliteit  | `1..1`           |
| Gebruik        | Mandatory        |

<aside class="note">

Gebruik altijd het HTTPS-protocol voor webadressen! Zie ook [[[HTTPS_EN_HSTS]]].

</aside>

### format {#dct-format}

Informatie over het bestandsformaat van de distributie volgens de indeling van het publicatiebureau van de EU.

| Definitie      | Waarde                                                  |
|----------------|---------------------------------------------------------|
| RDF Eigenschap | `dct:format`                                            |
| Bereik         | [`waardelijst mdr:Filetype`](#waardelijst-mdr-Filetype) |
| Kardinaliteit  | `1..1`                                                  |
| Gebruik        | Mandatory                                               |

<div class="issue" data-number="8"></div>

### title {#dct-title1}

De titel is belangrijk voor de herkenbaarheid van een distributie, dus kies deze zorgvuldig. Voor iedere taal kan één 
aparte titel worden opgenomen per taal die wordt aangeduid door een "language tag" achter de literal. Merk op dat er in 
`dct:language` een waarde moet voorkomen voor elke taal.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:title`    |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `1..1`         |
| Gebruik        | Mandatory      |

> Zie ook [`dct:title`](#dct-title) van [`dcat:Resource`](#dcat-Resource).

### description {#dct-description1}

Een beschrijving van de distributie in aanvulling op de titel, waarmee eindgebruikers een goed beeld krijgen welke 
gegevens in de Distributie aanwezig zijn. Samen zijn deze het belangrijkste waarmee een gebruiker een distributie kan 
beoordelen, dus kies deze zorgvuldig. Voor iedere taal kan één beschrijving worden opgenomen per taal aangeduid een 
"language tag" achter de literal.

Voor overige informatie over de Distributie is de eigenschap Documentation beschikbaar, waarin naar aanvullende 
webpagina's verwezen wordt.

| Definitie      | Waarde            |
|----------------|-------------------|
| RDF Eigenschap | `dct:description` |
| Bereik         | `rdfs:Literal`    |
| Kardinaliteit  | `1..1`            |
| Gebruik        | Mandatory         |

> Zie ook [`dct:description`](#dct-description) in [`dcat:Resource`](#dct-Resource).

### license {#dct-license1}

De formele of wettelijke toestemming waaronder de gegevens in de distributie gebruikt mogen worden.

Licenties kunnen complex zijn, wat de uitwerking en invulling van dit veld kan bemoeilijken. De licenties die van 
toepassing zijn op gegevensuitwisseling binnen de overheid zijn meestal vrij eenvoudig. Om die reden is gekozen voor een 
waardelijst die een aantal eenvoudige licenties bevat die met name naar de Creative Commons licenties verwezen. Zie ook 
[creativecommons.nl/uitleg/](https://creativecommons.nl/uitleg/).

Er kunnen ook licentiegegevens op het niveau van de dataset ([`dcat:Resource`](#dcat-Resource)) worden vastgelegd. Die 
mogen niet in tegenspraak zijn met de licentiegegevens van de onderliggende `dcat:Distribution`s.

| Definitie      | Waarde                                                  |
|----------------|---------------------------------------------------------|
| RDF Eigenschap | `dct:license`                                           |
| Bereik         | [`waardelijst donl:License`](#waardelijst-donl-License) |
| Kardinaliteit  | `1..1`                                                  |
| Gebruik        | Mandatory                                               |
 
> Zie ook [`dct:license`](#dct-license) in [`dcat:Resource`](#dct-Resource).

### accessService <em class="new">nieuw</em> {#dcat-accessService}

Alleen van toepassing wanneer de distributie via een dataservice bereikbaar is. De dataservice biedt dan toegang tot het 
bestand of de bestanden van deze distributie. Access service wordt niet ingevuld als de toegang tot de distributie.

Deze eigenschap is nieuw in DCAT2 en biedt aanbieders van datasets de mogelijkheid om extra informatie te verstrekken 
over datasets die via een dataservice wordt aangeboden.

| Definitie      | Waarde               |
|----------------|----------------------|
| RDF Eigenschap | `dcat:accessService` |
| Bereik         | `dcat:DataService`   |
| Kardinaliteit  | `0..1`               |
| Gebruik        | Recommended          |

### downloadURL {#dcat-downloadURL}

De URL waarmee eindgebruikers het bestand direct kunnen downloaden in een van de beschikbare formaten. Dit formaat wordt 
aangegeven in de distributie in eigenschap `dct:format` en/of `dcat:mediaType`.

Wanneer `dcat:accessURL` al de directe link naar de data aanbiedt, hoeft deze eigenschap niet ingevuld te worden.

| Definitie      | Waarde             |
|----------------|--------------------|
| RDF Eigenschap | `dcat:downloadURL` |
| Bereik         | `xsd:anyURI`       |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Recommended        |

### modified {#dct-modified1}

De datum waarop de data-eigenaar de distributie voor het laatst heeft gewijzigd. Dat geldt zowel voor een wijziging van 
de inhoud van de distributie als voor de metadata van de distributie. Deze eigenschap moet een datum *en* tijd bevatten 
conform de [[[ISO8601]]] standaard.

Bij de eerstvolgende wijziging wordt de oude wijzigingsdatum overschreven.

Als de gegevens automatisch periodiek worden aangepast hoeft deze waarde niet telkens gewijzigd te worden. Gebruikers 
kunnen dan uitgaan van de waarde van [`dct:accrualPeriodicity`](#dct-accrualPeriodicity) die in de bovenliggende 
`dcat:Dataset` is opgenomen.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:modified` |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | Recommended    |

> Zie ook [`dct:modified`](#dct-modified) in [`dcat:Resource`](#dct-Resource).

<div class="issue" data-number="4"></div>

### issued {#dct-issued1}

De datum waarop de data-eigenaar de distributie voor de eerste keer heeft gepubliceerd. Deze eigenschap moet een datum 
*en* tijd bevatten conform de [[[ISO8601]]] standaard.

Als tijd niet bekend is, kan hier de tijd 00:00:00 worden ingevuld. Als er geen tijdzone wordt opgegeven, moet er 
uitgegaan worden van de Nederlandse tijd.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:issued`   |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | Optional       |

> Zie ook [`dct:issued`](#dct-issued) in [`dcat:Resource`](#dct-Resource).

### language {#dct-language1}

De natuurlijke taal van de gegevens in de distributie. Als er meerdere talen voorkomen in de distributie wordt deze als
nieuwe distributie aangeboden. Deze moeten overeenkomen met de benoemde talen in de bovenliggende dataset.

Niet alle data die aangeboden wordt is taalgebonden (denk aan cijfers, statistieken etc.), om deze reden is deze 
eigenschap optioneel.

| Definitie      | Waarde                                                    |
|----------------|-----------------------------------------------------------|
| RDF Eigenschap | `dct:language`                                            |
| Bereik         | [`waardelijst donl:Language`](#waardelijst-donl-Language) |
| Kardinaliteit  | `0..n`                                                    |
| Gebruik        | Optional                                                  |

> Zie ook [`dct:language`](#dct-language) in [`dcat:Resource`](#dct-Resource).

<div class="issue" data-number="11"></div>

### rights {#dct-rights1}

De overige gebruiksrechten die niet worden gedekt met [`dct:license`](#dct-license1), zoals de copyright-statements. 
Deze eigenschap kan bijvoorbeeld gebruikt worden om aan te geven hoe de attributie moet plaatsvinden wanneer bij 
[`dct:license`](#dct-license1) een CC-BY licentie is gekozen.

Voor iedere taal kan één aparte rights-statement worden opgenomen die wordt aangeduid door een "language tag" achter de 
literal te plaatsen.

| Definitie      | Waarde       |
|----------------|--------------|
| RDF Eigenschap | `dct:rights` |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `0..n`       |
| Gebruik        | Optional     |
 
> Zie ook [`dct:rights`](#dct-rights) in [`dcat:Resource`](#dct-Resource).

### byteSize {#dcat-byteSize}

De omvang van de distributie (het feitelijke bestand) in bytes. Deze eigenschap is alleen relevant wanneer de grootte 
van het bestand bekend is. Wanneer het bijvoorbeeld om realtime (of near-realtime) data gaat, die dus op elk moment kan 
veranderen, dan is de grootte minder goed te voorspellen. In dat geval is het aan te bevelen om deze eigenschap niet in 
te vullen.

Uiteraard is een negatieve omvang niet mogelijk. De waarde moet dus 0 of hoger zijn.

| Definitie      | Waarde          |
|----------------|-----------------|
| RDF Eigenschap | `dcat:byteSize` |
| Bereik         | `xsd:decimal`   |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Optional        |

### conformsTo <em class="new">nieuw</em> {#dct-conformsTo1}

Een vastgestelde standaard waaraan de data in de distributie voldoet. Deze property kan meerdere keren voorkomen. 
Wanneer een andere eigenschap al beschrijft dat er aan een standaard wordt voldaan, dan hoeft deze niet nog een keer 
opgenomen te worden in deze eigenschap (bijvoorbeeld de bestandsformaat-standaard wordt al gedekt via `dct:format`).

De gebruikte standaard kan heel divers zijn en verschillen per context. Denk bijvoorbeeld aan een standaard die 
beschrijft hoe de gegevens in de dataset zijn verzameld. Of aan een standaard hoe de gegevens zijn gecodeerd, of hoe de 
gegevens in een model passen, of welke representatie of view deze gegevens van het geheel bevatten, et cetera.

Verwijs naar standaarden door middel van een HTTPS adres.

| Definitie      | Waarde           |
|----------------|------------------|
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | `dct:Standard`   |
| Kardinaliteit  | `0..n`           |
| Gebruik        | Recommended      |

<aside class="note">

Gebruik altijd het HTTPS-protocol voor webadressen! Zie ook [[[HTTPS_EN_HSTS]]].

</aside>

> Zie ook [`dct:conformsTo`](#dct-conformsTo) in [`dcat:Resource`](#dct-Resource).

### mediaType {#dct-mediaType}

Informatie over de bestandsindeling (of MIME-type) van de distributie, volgens de indeling van [[[IANA_MEDIATYPES]]].

| Definitie      | Waarde                                                       |
|----------------|--------------------------------------------------------------|
| RDF Eigenschap | `dcat:mediaType`                                             |
| Bereik         | [`waardelijst iana:Mediatypes`](#waardelijst-iana-Mediatype) |
| Kardinaliteit  | `0..1`                                                       |
| Gebruik        | Optional                                                     |

<div class="issue" data-number="8"></div>

### checksum {#spdx-checksum}

Met een checksum of controlegetal kan een afnemer eenvoudig vaststellen of een gedownload bestand identiek is aan het 
aangeboden bestand (en dus niet tussentijds is gewijzigd).

De `spdx:Checksum` klasse bevat naast de berekende checksum-waarde ook een property die het gebruikte algoritme 
aangeeft. Op dit moment ondersteunt DCAT-AP-EU alleen SHA1 (`spdx:checksumAlgorithm_sha1`).

| Definitie      | Waarde          |
|----------------|-----------------|
| RDF Eigenschap | `spdx:checksum` |
| Bereik         | `spdx:Checksum` |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Optional        |

<div class="issue" data-number="10"></div>

### documentation {#foaf-page1}

Een informatiepagina waar aanvullende informatie over deze distributie te vinden is.

Merk op dat eigenschap `dct:description` gebruikt kan worden om de betreffende distributie te beschrijven. Deze tekst 
wordt afgebeeld bij de distributie op data.overheid.nl. De eigenschap documentation verwijst met een hyperlink naar de 
webpagina die ook een beschrijving geeft van de distributie, mogelijk aangevuld met extra informatie die niet wordt 
opgenomen in `dct:description`. Denk aan hoe de gegevens geïnterpreteerd moeten worden, een beschrijving van het formaat 
van de gegevens of hoe de gegevens verkregen kunnen worden.

Een aantal data-eigenaren kiest ervoor om de documentatie als op zichzelf staande distributie toe te voegen aan de 
dataset. In die gevallen hoeft deze eigenschap niet ingevuld te worden.

| Definitie      | Waarde       |
|----------------|--------------|
| RDF Eigenschap | `foaf:page`  |
| Bereik         | `xsd:anyURI` |
| Kardinaliteit  | `0..n`       |
| Gebruik        | Optional     |

<aside class="note">

Gebruik altijd het HTTPS-protocol voor webadressen! Zie ook [[[HTTPS_EN_HSTS]]].

</aside>

### supportingRole {#donl-supportingRole}

Met deze eigenschap kan aangegeven worden wat voor ondersteunende rol deze distributie heeft als onderdeel van de 
dataset. Een distributie kan bijvoorbeeld als documentatie dienen van de dataset, terwijl een andere distributie de 
daadwerkelijke data aanbiedt. In dat geval kan de "documentatie" distributie een `donl:supportingRole` eigenschap 
opnemen om deze verhouding te duiden.

| Definitie      | Waarde                                                                |
|----------------|-----------------------------------------------------------------------|
| RDF Eigenschap | `donl:supportingRole`                                                 |
| Bereik         | [`waardelijst donl:SupportingRole`](#waardelijst-donl-SupportingRole) |
| Kardinaliteit  | `0..1`                                                                |
| Gebruik        | Optional                                                              |

<div class="issue" data-number="12"></div>
