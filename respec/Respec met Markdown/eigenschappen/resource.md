## Eigenschappen

### access rights

Met deze eigenschap wordt het openbaarheidsniveau van de resource aangegeven. In <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">DCAT-AP-DONL 1.1</a> werd de waardelijst <a href="https://waardelijsten.dcat-ap-donl.nl/overheid_openbaarheidsniveau.json">openbaarheidsniveau</a> gebruikt en <a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210">DCAT-AP 2.1</a> schrijft de volgende <a href="http://publications.europa.eu/resource/authority/access-right">waardelijst</a> voor.

In de EU waardelijst blijven `Publiek` en `Niet Publiek` dezelfde functie houden, maar om iets dieper op de reden voor `Beperkt` in te gaan zijn daar speciale waarden voor geintroduceerd. Bij data.overheid.nl is er met ditzelfde idee de volgende waardelijst gecreëerd: <a href="https://github.com/dataoverheid/dcat-ap-donl/blob/main/taxonomy/access-rights.ttl">`donl:Openbaarheidsniveau`</a>. In de omschrijvingen van de waardes zijn mappings te vinden naar de EU waardelijst zodat deze goed verder opgepakt kunnen worden.

| Definitie      | Toegang                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:accessRights`                                                                                                         |
| Bereik         | <a href="https://github.com/dataoverheid/dcat-ap-donl/blob/main/taxonomy/access-rights.ttl">`donl:Openbaarheidsniveau`</a> |
| Kardinaliteit  | `0..1`                                                                                                                     |
| Gebruik        | Optioneel                                                                                                                  |

<div class="issue" data-number="28"></div>

### conforms to

De vastgestelde standaard waaraan de data van de beschreven resource voldoet. Hierbij kan worden gedacht aan het model, schema, ontology, view of profiel.

| Definitie      | Standaard        |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | ``dct:Standard`` |
| Kardinaliteit  | `0..*`           |
| Gebruik        | Optioneel        |

<div class="issue" data-number="35"></div>
<div class="issue" data-number="14"></div>

### contact point

Aan de hand van deze informatie kunnen eindgebruikers op data.overheid.nl contact opnemen met de eigenaar van de dataset of dataservice. Bij het invullen van deze eigenschap is het belangrijk om een algemaan mailadres te gebruiken.

| Definitie      | Contactpunt       |
| -------------- | ----------------- |
| RDF Eigenschap | dcat:contactPoint |
| Bereik         | `vcard:Kind`      |
| Kardinaliteit  | `1..1`            |
| Gebruik        | Verplicht         |

<div class="issue" data-number="38"></div>

### creator

De organisatie die verantwoordelijk is voor het creëren van de beschreven resource. Zie eigenschappen <a href="#publisher">publisher</a> en <a href="#qualified-attribution">qualified attribution</a> voor andere rollen.

De waardelijst <a href="https://waardelijsten.dcat-ap-donl.nl/donl_organization.json">`donl_organization`</a> is een verrijkking van <a href="https://standaarden.overheid.nl/owms/terms/Organisatie">`overheid:Organisatie`</a>. De OWMS-waardelijsten zullen op korte termijn worden vervangen door TOOI-waardelijsten. Dit betekent o.a. dat de identificatie van de organisaties zullen veranderen. Organisaties kunnen voorlopig de oude OWMS waarden blijven gebruiken, omdat ze door de software van DONL zullen worden overgezet naar de waarden uit de TOOI-waardelijst.

| Definitie      | Verantwoordelijke organisatie                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:creator`                                                                                  |
| Bereik         | <a href="https://waardelijsten.dcat-ap-donl.nl/donl_organization.json">`donl_organization`</a> |
| Kardinaliteit  | `1..1`                                                                                         |
| Gebruik        | Verplicht                                                                                      |

<div class="issue" data-number="23"></div>

### description

Een beschrijving de resource.

Data.overheid.nl toont de beschrijvende tekst bij de desbetreffende resource en gebruikt deze voor het opbouwen van de zoekindex. Dit betekent dus dat de vindbaarheid van de resource wordt bepaald door de kwaliteit van de tekst.
Om ervoor te zorgen dat potentiele eindgebruikers de datasets goed kunnen vinden is het belangrijk dat de tekst goede treftwoorden bevat.

| Definitie      | Omschrijving      |
| -------------- | ----------------- |
| RDF Eigenschap | `dct:description` |
| Bereik         | `xsd:string`      |
| Kardinaliteit  | `1..1`            |
| Gebruik        | Verplicht         |

### title

De naam van de beschreven resource. Op data.overheid.nl wordt deze naam geïndexeerd, zodat eindgebruikers de desbetreffende dataset, dataservice of catalogus kunnen terugvinden op basis van een of meer woorden in de naam.

| Definitie      | Titel        |
| -------------- | ------------ |
| RDF Eigenschap | `dct:title`  |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `1..1`       |
| Gebruik        | Verplicht    |

### release date

De datum waarop de beschreven resource is gepubliceerd.

Data.overheid.nl registreert hier de eerste (vroegste) publicatiedatum waarop de data-leveancier deze dataset, dataservice of catalogus heeft gepubliceerd. Het gaat hier dus niet om de publicatiedatum van de metadata. Ook niet over de wijzigingsdatum van de dataset, dataservice of catalogus, hiervoor is de `update/modification date` eigenschap.

| Definitie      | Uitgiftedatum  |
| -------------- | -------------- |
| RDF Eigenschap | `dct:issued`   |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | aanbevolen     |

### update/modification date

De datum waarop de beschreven resource is gewijzigd.

Het gaat hierbij om de meest recente datum waarop de dataset, dataservice of catalogus is gewijzigd. Nieuwe versies overschrijven de oude versies. Mogelijk in de toekomst (DCAT3) wordt een voorziening ingericht om meerdere (temporele) versies van de data te kunnen bewaren in het portaal.

| Definitie      | Wijzigingsdatum |
| -------------- | --------------- |
| RDF Eigenschap | `dct:modified`  |
| Bereik         | `xsd:dateTime`  |
| Kardinaliteit  | `0..1`          |
| Gebruik        | aanbevolen      |

### language

De natuurlijk taal van de data in de resource.


| Definitie      | Taal                                                                                   |
| -------------- | -------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:language`                                                                         |
| Bereik         | <a href="https://waardelijsten.dcat-ap-donl.nl/donl_language.json">`donl:Language`</a> |
| Kardinaliteit  | `1..1`                                                                                 |
| Gebruik        | Verplicht                                                                              |

Zie ook <a href="#language-0">**language**</a> in distributie.    

<div class="issue" data-number="11"></div>

<p class="note" title="Note">
Er is een verschil in definitie van dct:language (voor dataset en dataservice) tussen de specificaties volgens W3C en DCAT-AP-EU. Volgens W3C: A language of the item. This refers to the natural language used for textual metadata (i.e. titles, descriptions, etc) of a cataloged resource (i.e. dataset or service) or the textual values of a dataset distribution. Volgens DCAT-AP-EU This property refers to a language of the Dataset.
</p>


### publisher

De organisatie die verantwoordelijk is voor de uitgifte/publicatie van de resource. Zie eigenschappen <a href="#creator">creator</a> en <a href="#qualified-attribution">qualified attribution</a> voor andere rollen.

De waardelijst <a href="https://waardelijsten.dcat-ap-donl.nl/donl_organization.json">`donl_organization`</a> is een verrijkking van <a href="https://standaarden.overheid.nl/owms/terms/Organisatie">`overheid:Organisatie`</a>. De OWMS-waardelijsten zullen op korte termijn worden vervangen door TOOI-waardelijsten. Dit betekent o.a. dat de identificatie van de organisaties zullen veranderen. Organisaties kunnen voorlopig de oude OWMS waarden blijven gebruiken, omdat ze door de software van DONL zullen worden overgezet naar de waarden uit de TOOI-waardelijst.

| Definitie      | Verstrekker                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:publisher`                                                                                |
| Bereik         | <a href="https://waardelijsten.dcat-ap-donl.nl/donl_organization.json">`donl_organization`</a> |
| Kardinaliteit  | `1..1`                                                                                         |
| Gebruik        | Verplicht                                                                                      |

<div class="issue" data-number="23"></div>

### identifier

De resource volgens de eigenaar van de data. Dit is bij voorkeur een URI.
Hier wordt de oorspronkelijke identificatie van de resource (dataset, dataservice of catalogus) genomen zoals de data-eigenaar deze gepubliceerd heeft.

Afgezien van deze identifier kan de betreffende dataset, dataservice of catalogus - in de loop van de tijd - ook andere identifiers krijgen. Deze worden overgenomen in `adms:identifier`. Een resource kan meerdere voorkomens van `adms:identifier` hebben.
De EU heeft een <a href="https://github.com/SEMICeu/DCAT-AP/blob/2.x.y-draft/releases/2.x.y/usageguide-identifiers.md"> gebruikshandleiding voor identifiers</a>.

| Definitie      | Permalink        |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:identifier` |
| Bereik         | `xsd:string`     |
| Kardinaliteit  | `1..1`           |
| Gebruik        | Verplicht        |

### theme/category

Een thema uit de taxonomie beleidsagenda.

| Definitie      | Thema                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dcat:theme`                                                                                            |
| Bereik         | Taxonomie beleidsagenda, zie https://waardelijsten.dcat-ap-donl.nl/overheid_taxonomiebeleidsagenda.json |
| Kardinaliteit  | `1..*`                                                                                                  |
| Gebruik        | Verplicht                                                                                               |

<div class="issue" data-number="35"></div>

<p class="note" title="Note">
Data.overheid.nl gebruikt `theme/category` om de datasets, dataservices en catalogi naar onderwerp in te delen. Door de eigenschap verplicht te stellen, kunnen eindgebruikers de betreffende resource altijd terugvinden wanneer zij via het thema zoeken of navigeren. De homepage toont standaard alle beschikbare thema's. De thema indeling is hiërarchisch georganiseerd, zodat datasets ook aan meer specifieke subthema's kunnen worden gekoppeld, bijvoorbeeld subthema `Waterschappen` onder het thema `Bestuur`.

Er is voor thema geen relatie met eigenschap `dcat:themeTaxonomy` in de bijbehorende catalogus (dus waarin de dataset of dataservice is opgenomen), omdat voor de thema's één vaste waardelijst wordt gebruikt.

Het is gewenst om de resources ook te kunnen verrijken met andere begrippenkaders. We onderzoeken of hiervoor een nieuwe eigenschap moet worden geïntroduceerd, of dat kan worden volstaan met deze eigenschap. Wel is het nodig om aan te geven welke begrippenkaders zijn toegestaan. Mogelijk kan dit worden opgelost door ze aan te geven in `dcat:themeTaxonomy` in de catalogus.
</p>

### keyword/tag

Vrije keywords of termen die de resource beschrijven.

| Definitie      | Trefwoord      |
| -------------- | -------------- |
| RDF Eigenschap | `dcat:keyword` |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Aanbevolen     |

<p class="note" title="Note">
Het gaat hier om vrije tekst, niet te verwarren met dcat:theme. Bij deze laatste eigenschap komen de termen uit een controled vacabulary (of vastgesteld begrippenkader of waardelijst), en hebben een meer formele status. Overigens geldt voor beide vormen dat deze de vindbaarheid van de desbetreffende resource kunnen verbeteren.
Het is dus mogelijk om meerdere keywords toe te kennen aan een resource. Deze waarden moeten in afzonderlijke voorkomens van deze eigenschap worden aangeleverd.
</p>
<p class="note" title="Note">
Het is dus mogelijk om meerdere keywords toe te kennen aan een resource. Deze waarden moeten in afzonderlijke voorkomens van deze eigenschap worden aangeleverd.
</p>

### landing page

De webpagina die toegang geeft tot de resource (dataset, dataservice of catalogus) en aanvullende informatie verschaft over de resource. Het gaat hierbij om de originele webpagina van de data-eigenaar.

| Definitie      | Webpagina          |
| -------------- | ------------------ |
| RDF Eigenschap | `dcat:landingPage` |
| Bereik         | `xsd:anyURI`       |
| Kardinaliteit  | `0..1`             |
| Gebruik        | Optioneel          |


### qualified attribution 

Een persoon of organisatie, anders dan de resource <a href="#creator">creator</a> of <a href="#publisher">publisher</a> die ook een verantwoordelijkheid draagt voor de resource.

In het bereik <a href="https://www.w3.org/TR/prov-o/#Attribution">`prov:Attribution`</a> wordt in de eigenschap `prov:hadRole` de rol van de organisatie benoemd. Hier kan worden gekozen uit de ISO waardelijst <a href="https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml">CI_RoleCode</a>.

In `prov:agent` wordt de naam van de organisatie opgenomen. Omdat dit niet altijd overheidsorganisaties zullen zijn hoeft deze waarde niet uit <a href="https://waardelijsten.dcat-ap-donl.nl/donl_organization.json">`donl_organization`</a> te komen. 

| Definitie      | Overige verantwoordelijken                                                 |
| -------------- | -------------------------------------------------------------------------- |
| RDF Eigenschap | `prov:qualifiedAttribution`                                                |
| Bereik         | <a href="https://www.w3.org/TR/prov-o/#Attribution">`prov:Attribution`</a> |
| Kardinaliteit  | `0..*`                                                                     |
| Gebruik        | Optioneel                                                                  |

<aside class="example" title="Voorbeeld">
  <p>
    Zie <a href="https://www.w3.org/TR/vocab-dcat-2/#qualified-attribution">Voorbeeld van W3C</a>
  <p>
  </pre>
</aside>

<div class="issue" data-number="31"></div>
<div class="issue" data-number="23"></div>
<div class="issue" data-number="25"></div>

### license

Het juridische document dat de gebruiksrechten van de resource beschrijft.

Omdat de OWMS-waardelijsten op korte termijn worden vervangen door TOOI, zal ook de waardelijst met licenties gaan wijzigen. We streven ernaar op de nieuwe lijst backwards compatible te houden met de oude lijst. Dat betekent dat een aangeleverde oude waarde automatisch wordt omgezet naar de nieuwe waarde.

Omdat er beiden aan datasets en distributies licenties meegegeven kunnen worden is het mogelijk dat er conflicten ontstaan.

| Definitie      | Licentie                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:license`                                                                                                                                   |
| Bereik         | <a href="https://waardelijsten.dcat-ap-donl.nl/donl_license.json">`donl:License`</a>, samengesteld uit waarden van creativecommons.org en OWMS. |
| Kardinaliteit  | `1..1`                                                                                                                                          |
| Gebruik        | Verplicht                                                                                                                                       |

<div class="issue" data-number="22"></div>

### is referenced by

Externe publicaties, bijvoorbeeld een artikel dat verwijst naar onderhavige resource (dataset).

Deze eigenschap kan worden geïnterpreteerd als de terugverwijzing (inverse relatie) naar de resource (buiten het dataplatform) dat naar de dataset, dataservice of catalogus verwijst.

| Definitie      | Verwezen door        |
| -------------- | -------------------- |
| RDF Eigenschap | `dct:isReferencedBy` |
| Bereik         | `rdfs:Resource`      |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Optioneel            |

### other identifier

De verplichte eigenschap <a href="#identifier">identifier</a> bevat de unieke identificatie van de dataset die de data-eigenaar heeft uitgegeven. Deze eigenschap bevat evt. andere unieke identifiers van de dataset zoals gegeven door catalogi als data.overheid.nl.

In de `adms:identifier` wordt de identifier benoemd in `skos:notation` en de uitgever van de identifier in `dct:creator`. De EU heeft een <a href="https://github.com/SEMICeu/DCAT-AP/blob/2.x.y-draft/releases/2.x.y/usageguide-identifiers.md"> gebruikshandleiding voor identifiers</a>.

Let op, een resource wordt na het aanmaken niet aangepast door anderen met deze other identifier als utizondering. Een other identifier kan worden toegevoegd als verreiking van de dcat informatie.

| Definitie      | Andere identificatie |
| -------------- | -------------------- |
| RDF Eigenschap | `adms:identifier`    |
| Bereik         | `rdfs:Literal`       |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Optioneel            |

<div class="issue" data-number="24"></div>

### resource status

Informatie over de beschikbaarheid van de dataset.

| Definitie      | Status                                            |
| -------------- | ------------------------------------------------- |
| RDF Eigenschap | `adms:status`                                     |
| Bereik         | `Overheid:DatasetStatus`. Mogelijke waarden zijn: |
| Kardinaliteit  | `1..1`                                            |
| Gebruik        | Verplicht                                         |

### rights

De overige gebruiksrechten die niet worden gedekt met dct:license of dct:accessRights, zoals de copyright statements. Omdat er beiden aan datasets en distributies right meegegeven kunnen worden is het mogelijk dat er conflicten ontstaan.

| Definitie      | Rechten      |
| -------------- | ------------ |
| RDF Eigenschap | `dct:rights` |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `0..1`       |
| Gebruik        | Optioneel    |

<div class="issue" data-number="22"></div>

### legal foundation

Het regelingelement dat de wettelijke grondslag vormt voor de dataset.

| Definitie      | Grondslag              |
| -------------- | ---------------------- |
| RDF Eigenschap | `overheid:grondslag`   |
| Bereik         | `donl:LegalFoundation` |
| Kardinaliteit  | `0..*`                 |
| Gebruik        | Optioneel              |

<div class="issue" data-number="19"></div>

<p class="note" title="Note">
Bij verwijzingen naar Nederlandse wet- en regelgeving moet de hyperlink voldoen aan de Juriconnect standaard.
</p>

###  resource classification

Een resource op basis van een controled vocabulary, zodat de desbetreffende resource beter vindbaar en herkenbaar wordt op de site van data.overheid.nl.

| Definitie      | Vocabulaire                       |
| -------------- | --------------------------------- |
| RDF Eigenschap | `donl:resourceClassification`     |
| Bereik         | Waardelijst (nader uit te werken) |
| Kardinaliteit  | `0..*`                            |
| Gebruik        | Optioneel                         |

<p class="note" title="Note">
Deze eigenschap typeert een resource op basis van een controled vocabulary, zodat de desbetreffende resource beter vindbaar en herkenbaar wordt op de site van data.overheid.nl.

Op dit moment realiseert data.overheid.nl deze eigenschap met behulp van 4 aparte eigenschappen, met een waardebereik gelijk aan "ja" of "nee". Deze eigenschappen zijn:

- De dataset een high value dataset (resource) is.
- De gegevens in de dataset (resource) zijn voortgekomen uit een basisregistratie.
- De dataset (resource) referentiedata betreft.
- De gegevens in de dataset (resource) een landelijke dekking hebben.
</p>

### source catalog

In welke catalogus de dataset (resource) als eerste is gepubliceerd.

| Definitie      | Broncatalogus                                                               |
| -------------- | --------------------------------------------------------------------------- |
| RDF Eigenschap | donl:sourceCatalog (komt niet voor in de documentatie van DCAT-AP-DONL 1.1) |
| Bereik         | xsd:string                                                                  |
| Kardinaliteit  | 0..1                                                                        |
| Gebruik        | Optioneel                                                                   |
