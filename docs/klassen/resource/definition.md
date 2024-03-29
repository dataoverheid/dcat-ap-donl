## Eigenschappen

In de onderstaande hoofdstukken worden de eigenschappen van de `dcat:Resource` beschreven.

### identifier {#dct-identifier}

De identifier van de resource volgens de eigenaar van de data. Dit is bij voorkeur URI die via HTTP raadpleegbaar is. Hier wordt de
oorspronkelijke identificatie van de resource (dataset, dataservice of catalogus) genomen zoals de data-eigenaar deze
gepubliceerd heeft.

Afgezien van deze identifier kan de betreffende dataset, dataservice of catalogus - in de loop van de tijd - ook andere
identifiers krijgen. Deze worden overgenomen in [`adms:identifier`](#adms-identifier). Een resource kan meerdere
voorkomens van [`adms:identifier`](#adms-identifier) hebben.

| Definitie      | Waarde           |
|----------------|------------------|
| RDF Eigenschap | `dct:identifier` |
| Bereik         | `xsd:anyURI`     |
| Kardinaliteit  | `1..1`           |
| Gebruik        | Mandatory        |

### title {#dct-title}

De naam van de beschreven resource. Op [[[DONL]]] wordt deze naam geïndexeerd, zodat eindgebruikers de desbetreffende
dataset, dataservice of catalogus kunnen terugvinden op basis van één of meer woorden in de naam.

Een handige vuistregel is om de lengte van de titel te beperken tot ca. 100 tekens. Wanneer de behoefte bestaat om in
meer tekens de dataset te beschrijven, dan kan [`dct:description`](#dct-description) gebruikt worden.

Zie [meertaligheid](#ondersteuning-voor-meertaligheid) voor het omgaan met verschillende talen.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:title`    |
| Bereik         | `rdfs:literal` |
| Kardinaliteit  | `1..n`         |
| Gebruik        | Mandatory      |

### description {#dct-description}

Een beschrijving de resource. [[[DONL]]] toont de beschrijvende tekst bij de desbetreffende resource en gebruikt deze
voor het opbouwen van de zoekindex. Dit betekent dus dat de vindbaarheid van de resource wordt bepaald door de kwaliteit
van de tekst. Om ervoor te zorgen dat eindgebruikers de datasets goed kunnen vinden is het belangrijk dat de tekst goede
trefwoorden bevat.

Zie [meertaligheid](#ondersteuning-voor-meertaligheid) voor het omgaan met verschillende talen.

| Definitie      | Waarde            |
|----------------|-------------------|
| RDF Eigenschap | `dct:description` |
| Bereik         | `rdfs:literal`    |
| Kardinaliteit  | `1..n`            |
| Gebruik        | Mandatory         |

### license {#dct-license}

De formele of wettelijke toestemming waaronder de gegevens in de dataset gebruikt mogen worden.

Licenties kunnen complex zijn, wat de uitwerking en invulling van dit veld kan bemoeilijken. De licenties die van
toepassing zijn op gegevensuitwisseling binnen de overheid zijn meestal vrij eenvoudig. Om die reden is gekozen voor een
waardelijst die een aantal eenvoudige licenties bevat die met name naar de Creative Commons licenties verwezen. Zie ook
[creativecommons.nl/uitleg/](https://creativecommons.nl/uitleg/).

Er kunnen ook licentiegegevens op het niveau van de [`dcat:Distribution`](#dcat-Distribution) worden vastgelegd. Die
mogen niet in tegenspraak zijn met de licentiegegevens van de `dcat:Dataset`.

| Definitie      | Waarde                                                  |
|----------------|---------------------------------------------------------|
| RDF Eigenschap | `dct:license`                                           |
| Bereik         | [`waardelijst donl:License`](#waardelijst-donl-License) |
| Kardinaliteit  | `1..1`                                                  |
| Gebruik        | Mandatory                                               |

<div class="issue" data-number="22"></div>

### creator <em class="new">nieuw</em> {#dct-creator}

De organisatie die verantwoordelijk is voor het creëren van de beschreven bron. Zie eigenschappen
[`dct:publisher`](#dct-publisher) en [`prov:qualifiedAttribution`](#prov-qualifiedAttribution) voor andere rollen.

Voor de invulling van deze eigenschap wordt vereist dat een concept uit een van de onderstaande waardelijsten gekozen
wordt:

| Naam                                                                              | Type        | Gebruik     |
|-----------------------------------------------------------------------------------|-------------|-------------|
| [`waardelijst overheid:Organisatie`](#waardelijst-overheid-Organisatie)           | Waardelijst | Recommended |
| [`waardelijst donl:RelevantOrganization`](#waardelijst-donl-RelevantOrganization) | Waardelijst | Optional    |

Hoewel de meeste overheidsorganisaties opgenomen zijn in de
[`overheid:Organisatie waardelijst`](#waardelijst-overheid-Organisatie), zijn er twee argumenten om naast deze lijst nog
een 'eigen' lijst te hanteren voor het invullen van het `dct:creator` eigenschap.

1. Niet alle overheidsorganisaties zijn opgenomen in [[[OWMS_40]]]. Er moet dus een antwoord zijn voor
   (overheids)organisaties die niet in de `OWMS` taxonomie opgenomen zijn.
2. Hoewel [[[DONL]]] primair een register van overheidsdata is, neemt het ook maatschappelijk relevante data op in het
   register van private partijen. Om te kunnen verwijzen naar deze private partijen moet tenminste een van de
   waardelijsten deze mogelijkheid bieden.

Het heeft de voorkeur dat de [[[OWMS_40]]] lijst gebruikt wordt voor het invullen van deze eigenschap. Wanneer deze
lijst echter niet toereikend is, kan er gebruik gemaakt worden van de `donl:RelevantOrganization` taxonomie.

> Staat uw organisatie in geen van beide lijsten? Neem dan contact op met [[[DONL]]]. Het team van [[[DONL]]] zal
> beoordelen of uw organisatie alsnog opgenomen kan worden in de `donl:RelevantOrganization` taxonomie.

| Definitie      | Waarde                                                                         |
|----------------|--------------------------------------------------------------------------------|
| RDF Eigenschap | `dct:creator`                                                                  |
| Bereik         | De organisatie die verantwoordelijk is voor het creëren van de beschreven bron |
| Kardinaliteit  | `1..1`                                                                         |
| Gebruik        | Mandatory                                                                      |

<aside class="note">

In [[[DCATAPDONL_11]]] heette deze eigenschap `donl:authority`. Dit is in dit profiel recht getrokken zodat het weer
overeenkomt met de bovenliggende DCAT-profielen.

</aside>

<div class="issue" data-number="23"></div>

### publisher {#dct-publisher}

De organisatie die verantwoordelijk is voor de uitgifte/publicatie van de bron. Zie eigenschappen
[`dct:creator`](#dct-creator) en [`prov:qualifiedAttribution`](#prov-qualifiedAttribution) voor andere rollen.

Voor de invulling van deze eigenschap wordt vereist dat een concept uit een van de onderstaande waardelijsten gekozen
wordt:

| Naam                                                                              | Type        | Gebruik     |
|-----------------------------------------------------------------------------------|-------------|-------------|
| [`waardelijst overheid:Organisatie`](#waardelijst-overheid-Organisatie)           | Waardelijst | Recommended |
| [`waardelijst donl:RelevantOrganization`](#waardelijst-donl-RelevantOrganization) | Waardelijst | Optional    |

Hoewel de meeste overheidsorganisaties opgenomen zijn in de
[`overheid:Organisatie waardelijst`](#waardelijst-overheid-Organisatie), zijn er twee argumenten om naast deze lijst nog
een 'eigen' lijst te hanteren voor het invullen van het `dct:creator` eigenschap.

1. Niet alle overheidsorganisaties zijn opgenomen in [[[OWMS_40]]]. Er moet dus een antwoord zijn voor
   (overheids)organisaties die niet in de `OWMS` taxonomie opgenomen zijn.
2. Hoewel [[[DONL]]] primair een register van overheidsdata is, neemt het ook maatschappelijk relevante data op in het
   register van private partijen. Om te kunnen verwijzen naar deze private partijen moet tenminste een van de
   waardelijsten deze mogelijkheid bieden.

Het heeft de voorkeur dat de [[[OWMS_40]]] lijst gebruikt wordt voor het invullen van deze eigenschap. Wanneer deze
lijst echter niet toereikend is, kan er gebruik gemaakt worden van de `donl:RelevantOrganization` taxonomie.

> Staat uw organisatie in geen van beide lijsten? Neem dan contact op met [[[DONL]]]. Het team van [[[DONL]]] zal
> beoordelen of uw organisatie alsnog opgenomen kan worden in de `donl:RelevantOrganization` taxonomie.

| Definitie      | Waarde                                                                                    |
|----------------|-------------------------------------------------------------------------------------------|
| RDF Eigenschap | `dct:publisher`                                                                           |
| Bereik         | De organisatie die verantwoordelijk is voor de uitgifte/publicatie van de beschreven bron |
| Kardinaliteit  | `1..1`                                                                                    |
| Gebruik        | Mandatory                                                                                 |

<div class="issue" data-number="23"></div>

### contact point {#dcat-contactPoint}

Aan de hand van deze informatie kunnen eindgebruikers op [[[DONL]]] contact opnemen met de eigenaar van de dataset of
dataservice. Bij het invullen van deze eigenschap is het belangrijk om een algemeen mailadres te gebruiken. Het is niet
de bedoeling om hier gegevens van individuele personen op te nemen.

Een geldig `dcat:contactPoint` bevat op zijn minst de eigenschap `vcard:fn` en een van de `vcard:hasEmail`,
`vcard:hasTelephone` of `vcard:hasURL` eigenschappen. Voor een voorbeeld zie [#Contact Point](#example-contact-point)

| Definitie      | Waarde              |
| -------------- | ------------------- |
| RDF Eigenschap | `dcat:contactPoint` |
| Bereik         | `vcard:Kind`        |
| Kardinaliteit  | `1..1`              |
| Gebruik        | Mandatory           |

<div class="issue" data-number="38"></div>

### theme/category {#dcat-theme}

Een thema uit de [[[OWMS_TAXONOMIEBELEIDSAGENDA]]].

[[[DONL]]] gebruikt `dcat:theme` om de datasets, dataservices en catalogi naar onderwerp in te delen. Door de eigenschap
verplicht te stellen, kunnen eindgebruikers de betreffende resource altijd terugvinden wanneer zij via het thema zoeken
of navigeren. De homepage toont standaard alle beschikbare thema's. De thema-indeling is hiërarchisch georganiseerd,
zodat datasets ook aan meer specifieke subthema's kunnen worden gekoppeld, bijvoorbeeld subthema `Waterschappen` onder
het thema `Bestuur`.

| Definitie      | Waarde                                                                                        |
|----------------|-----------------------------------------------------------------------------------------------|
| RDF Eigenschap | `dcat:theme`                                                                                  |
| Bereik         | [`waardelijst overheid:TaxonomieBeleidsagenda`](#waardelijst-overheid-TaxonomieBeleidsagenda) |
| Kardinaliteit  | `1..n`                                                                                        |
| Gebruik        | Mandatory                                                                                     |

<aside class="note">

Er is voor thema geen relatie met eigenschap [`dcat:themeTaxonomy`](#dcat-themeTaxonomy) in de bijbehorende catalogus
(dus waarin de dataset of dataservice is opgenomen), omdat voor de thema's één vaste waardelijst wordt gebruikt,
namelijk de [[[OWMS_TAXONOMIEBELEIDSAGENDA]]].

Het is gewenst om de resources ook te kunnen verrijken met andere begrippenkaders. We onderzoeken of hiervoor een
nieuwe eigenschap moet worden geïntroduceerd, of dat kan worden volstaan met deze eigenschap. Wel is het nodig om aan te
geven welke begrippenkaders zijn toegestaan. Mogelijk kan dit worden opgelost door ze aan te geven in
[`dcat:themeTaxonomy`](#dcat-themeTaxonomy) in de catalogus.

</aside>

<div class="issue" data-number="35"></div>

### keyword/tag {#dcat-keyword}

Vrije keywords of termen die de resource beschrijven.

Het gaat hier om vrije tekst, niet te verwarren met [`dcat:theme`](#dcat-theme). Bij deze laatste eigenschap komen de
termen uit een controlled vocabulary (of vastgesteld begrippenkader of waardelijst), en hebben een meer formele status.

Voor beide vormen geldt dat deze de vindbaarheid van de desbetreffende resource kunnen verbeteren. Het is dus
mogelijk om meerdere keywords toe te kennen aan een resource. Deze waarden moeten in afzonderlijke voorkomens van deze
eigenschap worden aangeleverd.

In principe bestaat een tag uit slechts één woord of een kleine combinatie van maximaal twee/drie woorden. Zie [meertaligheid](#ondersteuning-voor-meertaligheid) voor het omgaan met verschillende talen.

| Definitie      | Trefwoord      |
|----------------|----------------|
| RDF Eigenschap | `dcat:keyword` |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `0..n`         |
| Gebruik        | Recommended    |

### landing page {#dcat-landingPage}

De webpagina die toegang geeft tot de resource (dataset, dataservice of catalogus) en aanvullende informatie verschaft
over de resource. Het gaat hierbij om de originele webpagina van de data-eigenaar.

| Definitie      | Waarde             |
|----------------|--------------------|
| RDF Eigenschap | `dcat:landingPage` |
| Bereik         | `xsd:anyURI`       |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Optional           |

### access rights {#dct-accessRights}

Met deze eigenschap wordt het openbaarheidsniveau van de resource aangegeven. [[[DCATAP_21]]] schrijft de
[[[MDR_ACCESSRIGHTS]]] waardelijst voor. Bij [[[DONL]]] bestaat de behoefte om _ook_ te beschrijven _waarom_ een bron
beperkt of niet beschikbaar is. Om deze reden is de [`donl:AccessRights`](#waardelijst-donl-AccessRights)
geïntroduceerd. Deze lijst bevat concepten die de openbaarheid van een bron beschrijven _en_ wat de reden is, wanneer de
openbaarheid niet publiek is.

| Definitie      | Waarde                                                            |
|----------------|-------------------------------------------------------------------|
| RDF Eigenschap | `dct:accessRights`                                                |
| Bereik         | [`waardelijst donl:AccessRights`](#waardelijst-donl-AccessRights) |
| Kardinaliteit  | `0..1`                                                            |
| Gebruik        | Recommended                                                       |

<div class="issue" data-number="28"></div>

### resource language {#dct-language}

De natuurlijke taal van de data in de resource. Zie [meertaligheid](#ondersteuning-voor-meertaligheid) voor het omgaan met verschillende talen.

| Definitie      | Waarde                                                    |
|----------------|-----------------------------------------------------------|
| RDF Eigenschap | `dct:language`                                            |
| Bereik         | [`waardelijst donl:Language`](#waardelijst-donl-Language) |
| Kardinaliteit  | `0..n`                                                    |
| Gebruik        | Recommended                                               |

<div class="issue" data-number="11"></div>

<aside class="note">

Er is een verschil in definitie van `dct:language` (voor dataset en dataservice) tussen de specificaties volgens
[[[DCAT_20]]] en [[[DCATAP_21]]]. Dit toepassingsprofiel volgt [[[DCATAP_21]]]

[[[DCAT_20]]]: A language of the item. This refers to the natural language used for textual metadata (i.e. titles,
descriptions, et cetera) of a cataloged resource (i.e. dataset or service) or the textual values of a dataset
distribution.

[[[DCATAP_21]]]: This property refers to a language of the dataset.

</aside>

### other identifier {#adms-identifier}

De verplichte eigenschap [`dct:identifier`](#dct-identifier) bevat de unieke identificatie van de dataset die de
data-eigenaar heeft uitgegeven. Deze eigenschap bevat evt. andere unieke identifiers van de dataset zoals gegeven door
catalogi als [[[DONL]]] of andere partijen. Wanneer men voor de dataset van een ander een eigen identifier gebruiken wil, wordt aangeraden dit te doen door middel van `other identifier`.

In de `adms:identifier` wordt de identifier benoemd in `skos:notation` en de uitgever van de identifier in
`dct:creator`.

Voor een voorbeeld zie [#Other identifier](#example-other-identifier)

| Definitie      | Waarde            |
|----------------|-------------------|
| RDF Eigenschap | `adms:identifier` |
| Bereik         | `adms:Identifier` |
| Kardinaliteit  | `0..n`            |
| Gebruik        | Optional          |

<div class="issue" data-number="24"></div>

### conforms to <em class="new">nieuw</em> {#dct-conformsTo}

De vastgestelde standaard waaraan de data van de beschreven resource voldoet. Hierbij kan worden gedacht aan het model,
schema, ontology, view of profiel. Het opnemen van bestandsformaten is belangrijker in het veld
[`dct:format`](#dct-format) en [`dct:mediaType`](#dct-mediaType) van de distributies, dan in `dct:conformsTo`.

| Definitie      | Waarde           |
|----------------|------------------|
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | `dct:Standard`   |
| Kardinaliteit  | `0..n`           |
| Gebruik        | Optional         |

<div class="issue" data-number="35"></div>
<div class="issue" data-number="14"></div>

### legal foundation {#donl-grondslag}

Het regelingelement dat de wettelijke grondslag vormt voor de dataset. Zie [Legal Foundation](#donl-LegalFoundation) voor een verdere omschrijving van `donl:LegalFoundation`

| Definitie      | Waarde                 |
|----------------|------------------------|
| RDF Eigenschap | `donl:grondslag`       |
| Bereik         | `donl:LegalFoundation` |
| Kardinaliteit  | `0..n`                 |
| Gebruik        | Optional               |

<div class="issue" data-number="19"></div>

### release date {#dct-issued}

De datum waarop de beschreven resource is gepubliceerd.

[[[DONL]]] registreert hier de eerste (vroegste) publicatiedatum waarop de data-leverancier deze dataset, dataservice of
catalogus heeft gepubliceerd. Het gaat hier dus niet om de publicatiedatum van de metadata. Ook niet over de
wijzigingsdatum van de dataset, dataservice of catalogus, hiervoor is de [`dct:modified`](#dct-modified) eigenschap.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:issued`   |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | Recommended    |

<aside class="note">

Gebruik altijd een datum _en_ tijd conform de [[[ISO8601]]] notatie, `YYYY-MM-DDThh:mm:ss`.

</aside>

### update/modification date {#dct-modified}

De datum waarop de beschreven resource is gewijzigd.

Het gaat hierbij om de meest recente datum waarop de dataset, dataservice of catalogus is gewijzigd. Nieuwe versies
overschrijven automatisch de oude versies.

Deze eigenschap is niet/minder waardevol wanneer de data continue, of volgens een vast schema, veranderd. In dat geval
kan beter [`dct:accrualPeriodicity`](#dct-accrualPeriodicity) gebruikt worden.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:modified` |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | Recommended    |

<aside class="note">

Gebruik altijd een datum _en_ tijd conform de [[[ISO8601]]] notatie, `YYYY-MM-DDThh:mm:ss`.

</aside>

### rights {#dct-rights}

De overige gebruiksrechten die niet worden gedekt met [`dct:license`](#dct-license), zoals de copyright-statements.
Deze eigenschap kan bijvoorbeeld gebruikt worden om aan te geven hoe de attributie moet plaatsvinden wanneer bij
[`dct:license`](#dct-license) een CC-BY licentie is gekozen.

Zie [meertaligheid](#ondersteuning-voor-meertaligheid) voor het omgaan met verschillende talen.

| Definitie      | Waarde         |
|----------------|----------------|
| RDF Eigenschap | `dct:rights`   |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `0..n`         |
| Gebruik        | Optional       |

<div class="issue" data-number="22"></div>

### qualified attribution <em class="new">nieuw</em> {#prov-qualifiedAttribution}

Een organisatie, anders dan de `dct:creator` of `dct:publisher` die ook een verantwoordelijkheid draagt voor de
resource.

In het bereik `prov:Attribution` wordt in de eigenschap `prov:hadRole` de rol van de organisatie benoemd. Hier kan
worden gekozen uit de ISO-waardelijst [[[ISO19115_ROLECODE]]].

In `prov:agent` wordt de naam van de organisatie opgenomen. Omdat dit niet altijd overheidsorganisaties zullen zijn
hoeft deze waarde niet uit een de organisatie waardelijsten (`owms:Organisatie` en/of `donl:RelevantOrganization`) te
komen.

| Definitie      | Waarde                      |
|----------------|-----------------------------|
| RDF Eigenschap | `prov:qualifiedAttribution` |
| Bereik         | `prov:Attribution`          |
| Kardinaliteit  | `0..n`                      |
| Gebruik        | Optional                    |

<div class="issue" data-number="31"></div>
<div class="issue" data-number="23"></div>
<div class="issue" data-number="25"></div>
