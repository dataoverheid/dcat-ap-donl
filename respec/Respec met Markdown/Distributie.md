## Attributen

### Titel

De titel van de distributie.

| Definitie      | Titel          |
| -------------- | -------------- |
| RDF Eigenschap | `dct:title`    |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `1..1`         |
| Gebruik        | Verplicht      |

### Omschrijving

Een beschrijving van de distributie in aanvulling op de titel, waarmee eindgebruikers een goed beeld krijgen welke gegevens in de Distributie aanwezig zijn.

| Definitie      | Omschrijving      |
| -------------- | ----------------- |
| RDF Eigenschap | `dct:description` |
| Bereik         | `rdfs:Literal`    |
| Kardinaliteit  | `1..1`            |
| Gebruik        | Verplicht         |

### Uitgiftedatum

De datum waarop de data-eigenaar de distributie voor de eerste keer heeft gepubliceerd.

| Definitie      | Uitgiftedatum  |
| -------------- | -------------- |
| RDF Eigenschap | `dct:issued`   |
| Bereik         | `xsd:dateTime` |
| Kardinaliteit  | `0..1`         |
| Gebruik        | Optioneel      |

### Wijzigingsdatum

De datum waarop de data-eigenaar de distributie voor het laatst heeft gewijzigd. Dat geldt zowel voor een wijziging van de inhoud van de distributie als voor de metadata van de distributie.

| Definitie      | Wijzigingsdatum |
| -------------- | --------------- |
| RDF Eigenschap | `dct:modified`  |
| Bereik         | `xsd:dateTime`  |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Aanbevolen      |

### Taal

De natuurlijke taal van de gegevens in de distributie. Als er meerdere talen voorkomen in de distributie wordt deze eigenschap herhaald zodat alle talen genoemd worden.

| Definitie      | Taal           |
| -------------- | -------------- |
| RDF Eigenschap | `dct:language` |
| Bereik         | Waardelijst    |
| Kardinaliteit  | `0..*`         |
| Gebruik        | Optioneel      |

### Licentie

De formele of wettelijke toestemming waaronder de gegevens in de distributie gebruikt mogen worden.

| Definitie      | Licentie                                                                    |
| -------------- | --------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:license`                                                               |
| Bereik         | `donl:License`, zie https://waardelijsten.dcat-ap-donl.nl/donl_license.json |
| Kardinaliteit  | `1..1`                                                                      |
| Gebruik        | Verplicht                                                                   |

### Toegang

De toegangsrechten tot de distributie.

| Definitie      | Toegang                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:accessRights`                                                                                          |
| Bereik         | `Overheid:Openbaarheidsniveau`, zie https://waardelijsten.dcat-ap-donl.nl/overheid_openbaarheidsniveau.json |
| Kardinaliteit  | `0..1`                                                                                                      |
| Gebruik        | Aanbevolen                                                                                                  |

### Rechten

De overige gebruiksrechten die niet worden gedekt met dct:license of dct:accessRights, zoals de copyright statements.

| Definitie      | Rechten      |
| -------------- | ------------ |
| RDF Eigenschap | `dct:rights` |
| Bereik         | `xsd:string` |
| Kardinaliteit  | `0..1`       |
| Gebruik        | Optioneel    |


### Toegangsbeleid

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

### Toegangslinks

Het web-adres (URL) van de site die toegang verschaft tot de data, aan de hand van bijvoorbeeld een webformulier, een zoekopdracht of een API-call. Als op deze URL de gegevens beschreven door deze distributie.

| Definitie      | Toegangslinks    |
| -------------- | ---------------- |
| RDF Eigenschap | `dcat:accessURL` |
| Bereik         | `xsd:anyURI`     |
| Kardinaliteit  | `1..1`           |
| Gebruik        | Verplicht        |

### URL van de dataservice 

Alleen van toepassing wanneer de distributie via een dataservice bereikbaar is. De dataservice biedt dan toegang tot het bestand of de bestanden van deze distributie. Access service wordt niet ingevuld als de toegang tot de distributie...

| Definitie      | URL van de dataservice |
| -------------- | ---------------------- |
| RDF Eigenschap | `dcat:accessService`   |
| Bereik         | `dcat:DataService`     |
| Kardinaliteit  | `0..1`                 |
| Gebruik        | Aanbevolen             |

### Download verwijzing

De URL waarmee eindgebruikers het bestand kunnen downloaden in een van de beschikbare formaten. Dit formaat wordt aangegeven in de distributie in eigenschap dct:format en/of dcat:mediaType.

| Definitie      | Download verwijzing |
| -------------- | ------------------- |
| RDF Eigenschap | `dcat:downloadURL`  |
| Bereik         | `xsd:anyURI`        |
| Kardinaliteit  | `0..1`              |
| Gebruik        | Aanbevolen          |

### Grootte bestand

De omvang van de distributie (het feitelijke bestand) in bytes.

| Definitie      | Grootte bestand |
| -------------- | --------------- |
| RDF Eigenschap | `dcat:byteSize` |
| Bereik         | `xsd:decimal`   |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Optioneel       |




### Standaard

Een vastgestelde standaard waaraan de data in de distributie voldoet. Deze property kan meerdere keren voorkomen.

| Definitie      | Standaard        |
| -------------- | ---------------- |
| RDF Eigenschap | `dct:conformsTo` |
| Bereik         | Waardelijst      |
| Kardinaliteit  | `0..1`           |
| Gebruik        | Aanbevolen       |

### Applicatie type  

Informatie over de bestandsindeling (of MIME type) van de distributie, volgens de indeling van IANA [IANA-MEDIA-TYPES].

| Definitie      | Applicatie type                                                                   |
| -------------- | --------------------------------------------------------------------------------- |
| RDF Eigenschap | `dcat:mediaType`                                                                  |
| Bereik         | `iana:Mediatypes`, zie https://waardelijsten.dcat-ap-donl.nl/iana_mediatypes.json |
| Kardinaliteit  | `0..1`                                                                            |
| Gebruik        | Aanbevolen                                                                        |

### Dataformaat

Informatie over het bestandsformaat van de distributie volgens de indeling van het publicatiebureau van de EU.

| Definitie      | Dataformaat                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| RDF Eigenschap | `dct:format`                                                                    |
| Bereik         | `mdr:Filetype`, zie https://waardelijsten.dcat-ap-donl.nl/mdr_filetype_nal.json |
| Kardinaliteit  | `0..1`                                                                          |
| Gebruik        | Optioneel                                                                       |







### Controlegetal

Met een checksum of controlegetal kan een afnemer eenvoudig vaststellen of een gedownload bestand identiek is aan het aangeboden bestand (en dus niet tussentijds is gewijzigd). de uitkomst van de checksum of controlegetal die de bron

| Definitie      | Controlegetal   |
| -------------- | --------------- |
| RDF Eigenschap | `spdx:checksum` |
| Bereik         | `spdx:Checksum` |
| Kardinaliteit  | `0..1`          |
| Gebruik        | Optioneel       |

### Documentatie

Een informatiepagina waar aanvullende informatie over deze distributie te vinden is.

| Definitie      | Documentatie |
| -------------- | ------------ |
| RDF Eigenschap | `foaf:page`  |
| Bereik         | `xsd:anyURI` |
| Kardinaliteit  | `0..*`       |
| Gebruik        | Optioneel    |

### Status

De toestand van de gegevens in de distributie. Deze moet een van de volgende waarden bevatten:

| Definitie      | Status        |
| -------------- | ------------- |
| RDF Eigenschap | `adms:status` |
| Bereik         |               |
| Kardinaliteit  |               |
| Gebruik        |               |

### Distributietype

Specifiek voor data.overheid.nl. Het is bedoeld om verschillende soorten distributies te onderscheiden, aan de hand van mogelijke typen in een waardelijst. Zie de json: Data...

| Definitie      | Distributietype                                                                               |
| -------------- | --------------------------------------------------------------------------------------------- |
| RDF Eigenschap | `donl:distributionType`                                                                       |
| Bereik         | `donl:DistributionType`, zie https://waardelijsten.dcat-ap-donl.nl/donl_distributiontype.json |
| Kardinaliteit  | `0..1`                                                                                        |
| Gebruik        | Optioneel, default waarde is 'Download' wanneer deze niet wordt aangeleverd.                  |
