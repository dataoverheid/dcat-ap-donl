## Eigenschappen

| **Eigenschap**                                          | Herkomst    | Gebruik   |
| ------------------------------------------------------- | ----------- | --------- |
| <a href="#title">**title** </a>                         | Distributie | Verplicht |
| <a href="#description-0">**description** </a>           | Distributie | Verplicht |
| <a href="#issued">**issued** </a>                       | Distributie |           |
| <a href="#modified">**modified** </a>                   | Distributie |           |
| <a href="#language-0">**language** </a>                 | Distributie |           |
| <a href="#license-0">**license** </a>                   | Distributie |           |
| <a href="#accessrights">**accessRights** </a>           | Distributie |           |
| <a href="#rights-0">**rights** </a>                     | Distributie |           |
| <a href="#haspolicy">**hasPolicy** </a>                 | Distributie |           |
| <a href="#accessurl">**accessURL** </a>                 | Distributie |           |
| <a href="#accessservice">**accessService** </a>         | Distributie |           |
| <a href="#downloadurl">**downloadURL** </a>             | Distributie |           |
| <a href="#bytesize">**byteSize** </a>                   | Distributie |           |
| <a href="#conformsto">**conformsTo** </a>               | Distributie |           |
| <a href="#mediatype">**mediaType** </a>                 | Distributie |           |
| <a href="#format">**format** </a>                       | Distributie |           |
| <a href="#checksum">**checksum** </a>                   | Distributie |           |
| <a href="#documentation">**documentation** </a>         | Distributie |           |
| <a href="#status">**status** </a>                       | Distributie |           |
| <a href="#distribution-type">**distribution type** </a> | Distributie |           |

### title

De titel van de distributie.

| Definitie      | Titel          |
| -------------- | -------------- |
| RDF Eigenschap | `dct:title`    |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `1..1`         |
| Gebruik        | Verplicht      |

<p class="note" title="Note">
	De titel is belangrijk voor de herkenbaarheid van een distributie, dus kies deze zorgvuldig. Voor iedere taal kan één aparte titel worden opgenomen per taal die wordt aangeduid door een "language tag" achter de literal. Merk op dat er in dct:language een waarde moet voorkomen voor elke taal.
</p>

Zie ook <a href="#title-0">title</a> in <a href="#resource">resource</a>.

### description

Een beschrijving van de distributie in aanvulling op de titel, waarmee eindgebruikers een goed beeld krijgen welke gegevens in de Distributie aanwezig zijn.

| Definitie      | Omschrijving      |
| -------------- | ----------------- |
| RDF Eigenschap | `dct:description` |
| Bereik         | `rdfs:Literal`    |
| Kardinaliteit  | `1..1`            |
| Gebruik        | Verplicht         |

<p class="note" title="Note">
	De beschrijving is met de titel het belangrijkste waarmee een gebruiker een distributie kan beoordelen, dus kies deze zorgvuldig. Voor iedere taal kan één beschrijving worden opgenomen per taal aangeduid een "language tag" achter de literal.
</p>

<p class="note" title="Note">
Voor overige informatie over de Distributie is de eigenschap Documentation beschikbaar, waarin naar aanvullende webpagina's verwezen wordt.
</p>

Zie ook <a href="#description">description</a> in <a href="#resource">resource</a>.

### issued

De datum waarop de data-eigenaar de distributie voor de eerste keer heeft gepubliceerd.

| Definitie      | Uitgiftedatum  |
| -------------- | -------------- |
| RDF Eigenschap | `dct:issued`   |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | Optioneel      |

<p class="note" title="Note">
Als tijd niet bekend is, kan hier de tijd 0:00 worden ingevuld.
Als er geen tijdzone wordt opgegeven, gaat DONL uit van de Nederlandse tijd.
</p>

Zie ook <a href="#release-date">release-date</a> in <a href="#resource">resource</a>.

### modified

De datum waarop de data-eigenaar de distributie voor het laatst heeft gewijzigd. Dat geldt zowel voor een wijziging van de inhoud van de distributie als voor de metadata van de distributie.

| Definitie      | Wijzigingsdatum |
| -------------- | --------------- |
| RDF Eigenschap | `dct:modified`  |
| Bereik         | `xsd:dateTime`  |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Aanbevolen      |

<div class="issue" data-number="4"></div>

<p class="note" title="Note">
Bij de eerstvolgende wijziging wordt de oude wijzigingsdatum overschreven.

Als de gegevens automatisch kort na elkaar worden aangepast hoeft deze waarde niet telkens gewijzigd te worden. Gebruikers kunnen dan uitgaan van de waarde van dcterms:accrualPeriodicity.
</p>

Zie ook <a href="#update-modification-date">update-modification-date</a> in <a href="#resource">resource</a>.

### language

De natuurlijke taal van de gegevens in de distributie. Als er meerdere talen voorkomen in de distributie wordt deze als nieuwe distributie aangeboden. Deze moeten overeenkomen met de benoemde talen in de bovenliggende dataset.

| Definitie      | Taal                                                                                   |
| -------------- | -------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:language`                                                                         |
| Bereik         | <a href="https://waardelijsten.dcat-ap-donl.nl/donl_language.json">`donl:Language`</a> |
| Kardinaliteit  | `0..*`                                                                                 |
| Gebruik        | Optioneel                                                                              |

Zie ook <a href="#language">language</a> in <a href="#resource">resource</a>.   

<div class="issue" data-number="11"></div>

### license

De formele of wettelijke toestemming waaronder de gegevens in de distributie gebruikt mogen worden.

| Definitie      | Licentie                                                                    |
| -------------- | --------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:license`                                                               |
| Bereik         | `donl:License`, zie https://waardelijsten.dcat-ap-donl.nl/donl_license.json |
| Kardinaliteit  | `1..1`                                                                      |
| Gebruik        | Verplicht                                                                   |

<p class="note" title="Note">
Licenties kunnen complex zijn, wat de uitwerking en invulling van dit veld kan bemoeilijken. De licenties die van toepassing zijn op gegevensuitwisseling binnen de overheid zijn meestal vrij eenvoudig. Om die reden is gekozen voor een waardelijst die een aantal eenvoudige licenties bevat die met name naar de Creative Commons licenties verwezen. Zie ook https://creativecommons.nl/uitleg/.
</p>

<p class="note" title="Note">
Als de gegevens in de distribution niet open zijn, moet worden gekozen voor de waarde "Geen open licentie".
</p>

<p class="note" title="Note">
Er kunnen ook licentiegegevens op het niveau van de dataset worden vastgelegd. Die mogen niet in tegenspraak zijn met de licenties van de Distributies.
</p>

Zie ook <a href="#license">license</a> in <a href="#resource">resource</a>.   

### accessRights

De toegangsrechten tot de distributie.

| Definitie      | Toegang                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:accessRights`                                                                                          |
| Bereik         | `Overheid:Openbaarheidsniveau`, zie https://waardelijsten.dcat-ap-donl.nl/overheid_openbaarheidsniveau.json |
| Kardinaliteit  | `0..1`                                                                                                      |
| Gebruik        | Aanbevolen                                                                                                  |

<p class="note" title="Note">
Omdat binnen de Nederlandse overheid en Europa de toegangsrechten slechts in beperkte variatie voorkomen, gebruiken we de eenvoudige waardelijst van DCAT-AP-EU voor toegangsrechten.
</p>

<p class="note" title="Note">
	Is het nodig om naast eigenschap dct:accessRights in de dataset ook een eigenschap op te nemen in de distribution? Zie Issue #6.
Net als bij de properties dct:license en dct:rights kan ook de Dataset van de Distributie access rights vastleggen, die niet in tegenspraak mogen zijn met die van de Distributies.
</p>

Zie ook <a href="#access-rights">access-rights</a> in <a href="#resource">resource</a>.  

<div class="issue" data-number="6"></div>

### rights

De overige gebruiksrechten die niet worden gedekt met dct:license of dct:accessRights, zoals de copyright statements.

| Definitie      | Rechten      |
| -------------- | ------------ |
| RDF Eigenschap | `dct:rights` |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `0..1`       |
| Gebruik        | Optioneel    |

Zie ook <a href="#rights">rights</a> in <a href="#resource">resource</a>.  

### hasPolicy

Deze eigenschap biedt de aanbieders van data de mogelijkheid om op een gestructureerde manier (complexe) voorwaarden toe te kennen waaronder afnemers de data in de distributie mogen gebruiken. een instantie van de ODRL klasse.

| Definitie      | Toegangsbeleid   |
| -------------- | ---------------- |
| RDF Eigenschap | `odrl:hasPolicy` |
| Bereik         | `odrl:Policy`    |
| Kardinaliteit  | `0..1`           |
| Gebruik        | Optioneel        |

<p class="note" title="Editor's note">
    Tot hier komen de velden uit Resource
</p>

hasPolicy komt voor in <a href="#resource">resource</a>, maar wordt niet gebruikt in DCAT-AP-DONL_2.  

<p class="note" title="Note">
Deze eigenschap is onderwerp van een uitbreidingen voor data.overheid.nl die nog verder moet worden uitgewerkt.
</p>

<div class="issue" data-number="7"></div>

### accessURL

Het web-adres (URL) van de site die toegang verschaft tot de data, aan de hand van bijvoorbeeld een webformulier, een zoekopdracht of een API-call. Als op deze URL de gegevens beschreven door deze distributie.

| Definitie      | Toegangslinks    |
| -------------- | ---------------- |
| RDF Eigenschap | `dcat:accessURL` |
| Bereik         | `xsd:anyURI`     |
| Kardinaliteit  | `1..1`           |
| Gebruik        | Verplicht        |

<p class="note" title="Note">
Deze eigenschap zorgt ook voor backwards compatibiliteit met DCAT Version 1. In DCAT versie 1 was er geen Data Service gedefinieerd, maar werden die in een Distribution aangegeven met deze eigenschap access URL.
</p>

<p class="note" title="Note">
Deze eigenschap moet niet worden verward met dcat:downloadURL. Deze eigenschap verwijst direct naar de locatie om de data te downloaden.
</p>

<p class="note" title="Note">
	(vertalen) If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page URL associated with the dcat:Dataset SHOULD be duplicated as access URL on a distribution.
</p>

### accessService

Alleen van toepassing wanneer de distributie via een dataservice bereikbaar is. De dataservice biedt dan toegang tot het bestand of de bestanden van deze distributie. Access service wordt niet ingevuld als de toegang tot de distributie...

| Definitie      | URL van de dataservice |
| -------------- | ---------------------- |
| RDF Eigenschap | `dcat:accessService`   |
| Bereik         | `dcat:DataService`     |
| Kardinaliteit  | `0..1`                 |
| Gebruik        | Aanbevolen             |

<p class="note" title="Note">
Deze eigenschap is nieuw in DCAT2 en biedt aanbieders van datasets de mogelijkheid om extra informatie te verstrekken over datasets die via een dataservice wordt aangeboden. In DCAT1 bood eigenschap dcat:accessURL de mogelijkheid om te verwijzen naar de locatie van de webservice. Deze eigenschap blijft beschikbaar in DCAT 2, zodat het backwards compatible blijft met DCAT 1.
</p>

### downloadURL

De URL waarmee eindgebruikers het bestand kunnen downloaden in een van de beschikbare formaten. Dit formaat wordt aangegeven in de distributie in eigenschap dct:format en/of dcat:mediaType.

| Definitie      | Download verwijzing |
| -------------- | ------------------- |
| RDF Eigenschap | `dcat:downloadURL`  |
| Bereik         | `xsd:anyURI`        |
| Kardinaliteit  | `0..1`              |
| Gebruik        | Aanbevolen          |

### byteSize

De omvang van de distributie (het feitelijke bestand) in bytes.

| Definitie      | Grootte bestand |
| -------------- | --------------- |
| RDF Eigenschap | `dcat:byteSize` |
| Bereik         | `xsd:decimal`   |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Optioneel       |

### conformsTo

Een vastgestelde standaard waaraan de data in de distributie voldoet. Deze property kan meerdere keren voorkomen.

| Definitie      | Standaard        |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | `dct:Standard`   |
| Kardinaliteit  | `0..1`           |
| Gebruik        | Aanbevolen       |

<p class="note" title="Note">
	De gebruikte standaard kan heel divers zijn en verschillen per context. Denk bijvoorbeeld aan een standaard die beschrijft hoe de gegevens in de dataset zijn verzameld. Of aan een standaard hoe de gegevens zijn gecodeerd, of hoe de gegevens in een model passen, of welke representatie of view deze gegevens van het geheel bevatten, etcetera.
</p>

<p class="note" title="Note">
	Merk op dat het technisch formaat van de gegevens of het media type elders worden vastgelegd.
</p>

Zie ook <a href="#conforms-to">conforms-to</a> in <a href="#resource">resource</a>.

### mediaType

Informatie over de bestandsindeling (of MIME type) van de distributie, volgens de indeling van IANA [IANA-MEDIA-TYPES].

| Definitie      | Applicatie type                                                                   |
| -------------- | --------------------------------------------------------------------------------- |
| RDF Eigenschap | `dcat:mediaType`                                                                  |
| Bereik         | `iana:Mediatypes`, zie https://waardelijsten.dcat-ap-donl.nl/iana_mediatypes.json |
| Kardinaliteit  | `0..1`                                                                            |
| Gebruik        | Aanbevolen                                                                        |

<div class="issue" data-number="8"></div>

<p class="note" title="Note">
Het kiezen van een media-type uit de lijst heeft de voorkeur boven het kiezen van een eigen waarde met behulp van dct:format. De waardelijst is zeer lang en behoorlijk volledig.
</p>

### format

Informatie over het bestandsformaat van de distributie volgens de indeling van het publicatiebureau van de EU.

| Definitie      | Dataformaat                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:format`                                                                    |
| Bereik         | `mdr:Filetype`, zie https://waardelijsten.dcat-ap-donl.nl/mdr_filetype_nal.json |
| Kardinaliteit  | `0..1`                                                                          |
| Gebruik        | Optioneel                                                                       |

<div class="issue" data-number="8"></div>

<p class="note" title="Note">
Eigenschap `dct:mediaType`. Deze heeft de voorkeur boven dct:format.
</p>

### checksum

Met een checksum of controlegetal kan een afnemer eenvoudig vaststellen of een gedownload bestand identiek is aan het aangeboden bestand (en dus niet tussentijds is gewijzigd). de uitkomst van de checksum of controlegetal die de bron

| Definitie      | Controlegetal   |
| -------------- | --------------- |
| RDF Eigenschap | `spdx:checksum` |
| Bereik         | `spdx:Checksum` |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Optioneel       |

<div class="issue" data-number="10"></div>

<p class="note" title="Note">
Deze eigenschap is opgenomen in DCAT-AP-EU en wordt geïntroduceerd in DCAT3. Hierover was in de werkgroep wel discussie, omdat het niet wordt gebruikt. Zie Issue 24 op SEMICeu/DCAT-AP.
</p>

<p class="note" title="Note">
De `spdx:Checksum` klasse bevat naast de berekende checksum-waarde ook een property die het gebruikte algoritme aangeeft. Op dit moment ondersteunt DCAT-AP-EU alleen SHA1 (`spdx:checksumAlgorithm_sha1`).
</p>

### documentation

Een informatiepagina waar aanvullende informatie over deze distributie te vinden is.

| Definitie      | Documentatie |
| -------------- | ------------ |
| RDF Eigenschap | `foaf:page`  |
| Bereik         | `xsd:anyURI` |
| Kardinaliteit  | `0..*`       |
| Gebruik        | Optioneel    |

<p class="note" title="Note">
	Merk op dat eigenschap `dct:description` gebruikt kan worden om de betreffende distributie te beschrijven. Deze tekst wordt afgebeeld bij de distributie op data.overheid.nl. De eigenschap documentation verwijst met een hyperlink naar de webpagina die ook een beschrijving geeft van de distributie, mogelijk aangevuld met extra informatie die niet wordt opgenomen in `dct:description`. Denk aan hoe de gegevens geïnterpreteerd moeten worden, een beschrijving van het formaat van de gegevens of hoe de gegevens verkregen kunnen worden.
</p>

### status

De toestand van de gegevens in de distributie. Deze moet een van de volgende waarden bevatten:

| Definitie      | Status        |
| -------------- | ------------- |
| RDF Eigenschap | `adms:status` |
| Bereik         |               |
| Kardinaliteit  |               |
| Gebruik        |               |

<p class="note" title="Note">
	Deze property is specifiek voor DCAT-AP-EU.
</p>

### distribution type

Specifiek voor data.overheid.nl. Het is bedoeld om verschillende soorten distributies te onderscheiden, aan de hand van mogelijke typen in een waardelijst. Zie de json: Data...

| Definitie      | Distributietype                                                                               |
| -------------- | --------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `donl:distributionType`                                                                       |
| Bereik         | `donl:DistributionType`, zie https://waardelijsten.dcat-ap-donl.nl/donl_distributiontype.json |
| Kardinaliteit  | `0..1`                                                                                        |
| Gebruik        | Optioneel, default waarde is 'Download' wanneer deze niet wordt aangeleverd.                  |

<div class="issue" data-number="12"></div>

<p class="note" title="Note">
De waarde Webservice kan vervallen, omdat DCAT 2 hiervoor de nieuwe klasse DataService heeft geïntroduceerd.
</p>

<div class="issue" data-number="12"></div>
