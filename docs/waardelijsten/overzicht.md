### Overzicht

Binnen dit toepassingsprofiel worden de onderstaande waardelijsten toegepast.

#### donl:AccessRights {#waardelijst-donl-AccessRights}

Bevat concepten die de mate van openbaarheid beschrijven van een bron. Deze waardelijst bestaat uitsluitend uit
concepten die afgeleid zijn van de concepten uit de [[[MDR_ACCESSRIGHTS]]] taxonomie die op Europees niveau toegepast
wordt.

<aside class="note">

De concepten zelf zullen in [[[TOOI]]] opgenomen worden (en dus een `identifier.overheid.nl` identifier krijgen. De
werkversies van deze concepten zijn voorlopig raadpleegbaar op [[[DONL_ACCESSRIGHTS_CONCEPTS]]]

</aside>

> Elk [[[DONL_ACCESSRIGHTS_CONCEPTS]]] bevat een `skos:broader` eigenschap met daarin een verwijzing naar het
> bovenliggende [[[MDR_ACCESSRIGHTS]]] concept.

| Serialisatie | Adres                                                                                       |
|--------------|---------------------------------------------------------------------------------------------|
| Turtle       | https://raw.githubusercontent.com/dataoverheid/dcat-ap-donl/main/taxonomy/access-rights.ttl |

#### donl:Language {#waardelijst-donl-Language}

Deze taxonomie bevat concepten die de taal van een bron (data _of_ metadata) beschrijven. Alle concepten komen uit de
[[[MDR_LANGUAGE]]].

Er is geen ondersteuning voor _alle_ talen uit de [[[MDR_LANGUAGE]]]. Alleen de voor [[[DONL]]] relevante
taalconcepten zijn overgenomen.

| Serialisatie | Adres                                                                                   |
|--------------|-----------------------------------------------------------------------------------------|
| Turtle       | https://raw.githubusercontent.com/dataoverheid/dcat-ap-donl/main/taxonomy/languages.ttl |

#### donl:License {#waardelijst-donl-License}

Deze taxonomie bevat concepten die de licentie beschrijven die van toepassing is op een bron. Deze waardelijst bevat
voornamelijk, maar _niet_ uitsluitend, CreativeCommons licenties. Deze taxonomie is gespitst op het aanbieden van data
via een "open" licentie.

In [[[DCATAPDONL_11]]] werden van een aantal CreativeCommons licenties alleen de `4.0` versies aangeboden. In dit
profiel worden de `3.0` versies van deze licenties ook aangeboden. Dit omdat blijkt dat veel data nog via een van de
`3.0` varianten beschikbaar wordt gesteld.

| Serialisatie | Adres                                                                                  |
|--------------|----------------------------------------------------------------------------------------|
| Turtle       | https://raw.githubusercontent.com/dataoverheid/dcat-ap-donl/main/taxonomy/licences.ttl |

#### donl:RelevantOrganization {#waardelijst-donl-RelevantOrganization}

#### donl:Role {#waardelijst-donl-Role}

Deze taxonomie bevat concepten die beschrijven in welke capaciteit een persoon of organisatie betrokken is (of is
geweest) bij een bron.

Het [[[DCATAP_21]]] beveelt de [[[ISO19115_ROLECODE]]] taxonomie aan. Deze is echter niet in linked data vorm
beschikbaar. Om deze reden biedt dit profiel zelf een `skos:ConceptScheme` aan met daarin opgenomen de `CI_RoleCode`
concepten.

Deze lijst moet gebruikt worden bij het invullen van het `prov:hadRole` eigenschap, wat onderdeel is van het
[`prov:qualifiedAttribution`](#prov-qualifiedAttribution) eigenschap, die vanuit [`dcat:Resource`](#dcat-Resource)
aangeboden wordt.

| Serialisatie | Adres                                                                               |
|--------------|-------------------------------------------------------------------------------------|
| Turtle       | https://raw.githubusercontent.com/dataoverheid/dcat-ap-donl/main/taxonomy/roles.ttl |

#### donl:SupportingRole {#waardelijst-donl-SupportingRole}

Bevat concepten die beschrijven wat voor ondersteunende rol een bron dient voor een andere bron (het kan bijvoorbeeld
aangeven dat een distributie documentatie bevat van een dataset). Deze waardelijst heette in [[[DCATAPDONL_11]]]
`donl:DistributionType`.

De lijst is aanzienlijk ingekort aangezien een aantal 'types' herleidbaar zijn uit andere metadata-eigenschappen. Zo
zijn de concepten `DOWNLOAD` en `WEBSERVICE` niet meegenomen uit de oude lijst aangezien deze informatie al geduid wordt
door middel van de eigenschappen `dcat:downloadURL` en/of `dcat:accessService` die op `dcat:Distribution` niveau
aanwezig zijn.

<aside class="note">

De concepten zelf zullen in [[[TOOI]]] opgenomen worden (en dus een `identifier.overheid.nl` identifier krijgen. De
werkversies van deze concepten zijn voorlopig raadpleegbaar op [[[DONL_SUPPORTINGROLE_CONCEPTS]]]

</aside>

| Serialisatie | Adres                                                                                          |
|--------------|------------------------------------------------------------------------------------------------|
| Turtle       | https://raw.githubusercontent.com/dataoverheid/dcat-ap-donl/main/taxonomy/supporting-roles.ttl |

#### iana:Mediatype {#waardelijst-iana-Mediatype}

Bevat concepten die de mimetype van een bron beschrijven. Deze lijst is raadpleegbaar via [[[IANA_MEDIATYPES]]].

| Serialisatie | Adres                                                        |
|--------------|--------------------------------------------------------------|
| XML          | https://www.iana.org/assignments/media-types/media-types.xml |

#### mdr:Filetype {#waardelijst-mdr-Filetype}

Bevat concepten die het bestandsformaat van een bron beschrijven. Dit is een Europese taxonomie raadpleegbaar via
[[[MDR_FILETYPE]]].

| Serialisatie | Adres                                                       |
|--------------|-------------------------------------------------------------|
| RDF/XML      | https://publications.europa.eu/resource/authority/file-type |

#### mdr:Frequency {#waardelijst-mdr-Frequency}

Bevat concepten die beschrijven met welke frequentie een bron verwacht bijgewerkt te worden. Dit is een Europese
taxonomie raadpleegbaar via [[[MDR_FREQUENCY]]].

| Serialisatie | Adres                                                       |
|--------------|-------------------------------------------------------------|
| RDF/XML      | https://publications.europa.eu/resource/authority/frequency |

#### overheid:Gemeente {#waardelijst-overheid-Gemeente}

Deze taxonomie bevat concepten die de gemeenten van de Nederlandse overheid beschrijven. Deze lijst komt uit de
[[[OWMS_40]]] en is raadpleegbaar via [[[OWMS_GEMEENTE]]].

| Serialisatie | Adres                                                   |
|--------------|---------------------------------------------------------|
| XML          | https://standaarden.overheid.nl/owms/terms/Gemeente.xml |
| RDF/XML      | https://standaarden.overheid.nl/owms/terms/Gemeente.rdf |
| N3           | https://standaarden.overheid.nl/owms/terms/Gemeente.n3  |

#### overheid:Koninkrijksdeel {#waardelijst-overheid-Koninkrijksdeel}

Deze taxonomie bevat concepten die de koninkrijksdelen van het Koninkrijk der Nederlanden beschrijven. Deze lijst komt
uit de [[[OWMS_40]]] en is raadpleegbaar via [[[OWMS_KONINKRIJKSDEEL]]].

| Serialisatie | Adres                                                          |
|--------------|----------------------------------------------------------------|
| XML          | https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel.xml |
| RDF/XML      | https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel.rdf |
| N3           | https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel.n3  |

#### overheid:Organisatie {#waardelijst-overheid-Organisatie}

Deze taxonomie bevat concepten die de overheidsorganisaties van de Nederland beschrijven. Deze lijst komt uit de
[[[OWMS_40]]] en is raadpleegbaar via [[[OWMS_ORGANISATIE]]].

| Serialisatie | Adres                                                      |
|--------------|------------------------------------------------------------|
| XML          | https://standaarden.overheid.nl/owms/terms/Organisatie.xml |
| RDF/XML      | https://standaarden.overheid.nl/owms/terms/Organisatie.rdf |
| N3           | https://standaarden.overheid.nl/owms/terms/Organisatie.n3  |

#### overheid:Provincie {#waardelijst-overheid-Provincie}

Deze taxonomie bevat concepten die de provincies van de Nederlandse overheid beschrijven. Deze lijst komt uit de
[[[OWMS_40]]] en is raadpleegbaar via [[[OWMS_PROVINCIE]]].

| Serialisatie | Adres                                                    |
|--------------|----------------------------------------------------------|
| XML          | https://standaarden.overheid.nl/owms/terms/Provincie.xml |
| RDF/XML      | https://standaarden.overheid.nl/owms/terms/Provincie.rdf |
| N3           | https://standaarden.overheid.nl/owms/terms/Provincie.n3  |

#### overheid:Waterschap {#waardelijst-overheid-Waterschap}

Deze taxonomie bevat concepten die de waterschappen van de Nederlandse overheid beschrijven. Deze lijst komt uit de
[[[OWMS_40]]] en is raadpleegbaar via [[[OWMS_WATERSCHAP]]].

| Serialisatie | Adres                                                     |
|--------------|-----------------------------------------------------------|
| XML          | https://standaarden.overheid.nl/owms/terms/Waterschap.xml |
| RDF/XML      | https://standaarden.overheid.nl/owms/terms/Waterschap.rdf |
| N3           | https://standaarden.overheid.nl/owms/terms/Waterschap.n3  |

#### overheid:TaxonomieBeleidsagenda {#waardelijst-overheid-TaxonomieBeleidsagenda}

Bevat concepten die de beleidsagenda van de Nederlandse overheid vertegenwoordigen. Deze lijst komt uit de
[[[OWMS_40]]] en is raadpleegbaar via [[[OWMS_TAXONOMIEBELEIDSAGENDA]]].

> Er wordt nog onderzocht hoe de mapping van de [[[OWMS_TAXONOMIEBELEIDSAGENDA]]] naar de [[[MDR_DATATHEME]]] aangeboden
> gaat worden.

| Serialisatie | Adres                                                                 |
|--------------|-----------------------------------------------------------------------|
| XML          | https://standaarden.overheid.nl/owms/terms/TaxonomieBeleidsagenda.xml |
| RDF/XML      | https://standaarden.overheid.nl/owms/terms/TaxonomieBeleidsagenda.rdf |
| N3           | https://standaarden.overheid.nl/owms/terms/TaxonomieBeleidsagenda.n3  |

#### spdx:ChecksumAlgorithm {#waardelijst-spdx-ChecksumAlgorithm}

Bevat concepten die beschrijven welk algorithme gebruikt is om tot een hash te komen die als checksum dient van een
bron. Alle concepten komen uit de [[[SPDX_CHECKSUMALGORITHM]]].

`spdx:ChecksumAlgorithm` is niet als LinkedData beschikbaar. Om deze reden biedt [[[DONL]]] deze lijst zelf als
LinkedData aan.

| Serialisatie | Adres                                                                         |
|--------------|-------------------------------------------------------------------------------|
| Turtle       | https://github.com/dataoverheid/dcat-ap-donl/raw/main/taxonomy/algorithms.ttl |
