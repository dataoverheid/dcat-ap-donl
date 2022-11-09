### Overzicht

Binnen dit toepassingsprofiel worden de onderstaande waardelijsten toegepast.

#### donl:AccessRights {#waardelijst-donl-AccessRights}

Bevat concepten die de mate van openbaarheid beschrijven van een bron. Deze waardelijst bestaat uitsluitend uit
concepten die afgeleid zijn van de concepten uit de [[[MDR_ACCESSRIGHTS]]] taxonomie die op Europees niveau toegepast
wordt.

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[DONL_ACCESSRIGHTS_TAXONOMY]]]

De concepten zelf zullen in [[[TOOI]]] opgenomen worden (en dus een `identifier.overheid.nl` identifier krijgen. De
werkversies van deze concepten zijn voorlopig raadpleegbaar op [[[DONL_ACCESSRIGHTS_CONCEPTS]]]

</aside>

##### Mapping naar mdr:AccessRights

Elk [[[DONL_ACCESSRIGHTS_CONCEPTS]]] bevat een `skos:broader` eigenschap met daarin een verwijzing naar het bovenliggende [[[MDR_ACCESSRIGHTS]]]
concept.

#### donl:Language {#waardelijst-donl-Language}

Deze taxonomie bevat concepten die de taal van een bron (data _of_ metadata) beschrijven. Alle concepten komen uit de
[[[MDR_LANGUAGE]]].

Er is geen ondersteuning voor _alle_ talen uit de [[[MDR_LANGUAGE]]]. Alleen de voor [[[DONL]]] relevante
taalconcepten zijn overgenomen.

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[DONL_LANGUAGE_TAXONOMY]]]

</aside>

#### donl:License {#waardelijst-donl-License}

Deze taxonomie bevat concepten die de licentie beschrijven die van toepassing is op een bron. Deze waardelijst bevat
voornamelijk, maar _niet_ uitsluitend, CreativeCommons licenties. Deze taxonomie is gespitst op het aanbieden van data
via een "open" licentie.

In [[[DCATAPDONL_11]]] werden van een aantal CreativeCommons licenties alleen de `4.0` versies aangeboden. In dit
profiel worden de `3.0` versies van deze licenties ook aangeboden. Dit omdat blijkt dat veel data nog via een van de
`3.0` varianten beschikbaar wordt gesteld.

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[DONL_LICENSE_TAXONOMY]]]

</aside>

#### donl:Organization {#waardelijst-donl-Organization}

#### donl:SupportingRole {#waardelijst-donl-SupportingRole}

Bevat concepten die beschrijven wat voor ondersteunende rol een bron dient voor een andere bron (het kan bijvoorbeeld aangeven dat een distributie documentatie bevat van een dataset). Deze waardelijst heette in [[[DCATAPDONL_11]]] `donl:DistributionType`. 

De lijst is aanzienlijk ingekort aangezien een aantal 'types' herleidbaar zijn uit andere metadata-eigenschappen. Zo
zijn de concepten `DOWNLOAD` en `WEBSERVICE` niet meegenomen uit de oude lijst aangezien deze informatie al geduid wordt
door middel van de eigenschappen `dcat:downloadURL` en/of `dcat:accessService` die op `dcat:Distribution` niveau 
aanwezig zijn.

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[DONL_SUPPORTINGROLE_TAXONOMY]]]

De concepten zelf zullen in [[[TOOI]]] opgenomen worden (en dus een `identifier.overheid.nl` identifier krijgen. De
werkversies van deze concepten zijn voorlopig raadpleegbaar op [[[DONL_SUPPORTINGROLE_CONCEPTS]]]

</aside>

#### iana:Mediatype {#waardelijst-iana-Mediatype}

Bevat concepten die de mimetype van een bron beschrijven. Alle concepten zijn afkomstig uit de [[[IANA_MEDIATYPES]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[IANA_MEDIATYPES_TAXONOMY]]]

</aside>

#### mdr:Filetype {#waardelijst-mdr-Filetype}

Bevat concepten die het bestandsformaat van een bron beschrijven. Alle concepten komen uit [[[MDR_FILETYPE]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[MDR_FILETYPE_TAXONOMY]]]

</aside>

#### mdr:Frequency {#waardelijst-mdr-Frequency}

Bevat concepten die beschrijven met welke frequentie een bron verwacht bijgewerkt te worden. Alle concepten komen uit 
[[[MDR_FREQUENCY]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[MDR_FREQUENCY_TAXONOMY]]]

</aside>

#### overheid:Gemeente {#waardelijst-overheid-Gemeente}

Deze taxonomie bevat concepten die de gemeenten van de Nederlandse overheid beschrijven. Alle concepten komen uit de
[[[OWMS_GEMEENTE]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[OVERHEID_GEMEENTES_TAXONOMY]]]

</aside>

#### overheid:Koninkrijksdeel {#waardelijst-overheid-Koninkrijksdeel}

Deze taxonomie bevat concepten die de koninkrijksdelen van het Koninkrijk der Nederlanden beschrijven. Alle concepten 
komen uit de [[[OWMS_KONINKRIJKSDEEL]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[OVERHEID_KONINKRIJKSDEEL_TAXONOMY]]]

</aside>

#### overheid:Provincie {#waardelijst-overheid-Provincie}

Deze taxonomie bevat concepten die de provincies van de Nederlandse overheid beschrijven. Alle concepten komen uit de
[[[OWMS_PROVINCIE]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[OVERHEID_PROVINCIES_TAXONOMY]]]

</aside>

#### overheid:Waterschap {#waardelijst-overheid-Waterschap}

Deze taxonomie bevat concepten die de waterschappen van de Nederlandse overheid beschrijven. Alle concepten komen uit de
[[[OWMS_WATERSCHAP]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[OVERHEID_WATERSCHAP_TAXONOMY]]]

</aside>

#### overheid:TaxonomieBeleidsagenda {#waardelijst-overheid-TaxonomieBeleidsagenda}

Bevat concepten die de beleidsagenda van de Nederlandse overheid vertegenwoordigen. Alle concepten komen uit de 
[[[OWMS_TAXONOMIEBELEIDSAGENDA]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[OVERHEID_TAXONOMIEBELEIDSAGENDA_TAXONOMY]]]

</aside>

##### Mapping naar mdr:DataTheme

Er wordt nog onderzocht hoe de mapping van de [[[OWMS_TAXONOMIEBELEIDSAGENDA]]] naar de [[[MDR_DATATHEME]]] aangeboden
gaat worden.

Een mogelijkheid is dat er per concept een extra `skos:broader` eigenschap wordt opgenomen met daarin de mapping naar
het bovenliggende `mdr:DataTheme` concept.

#### spdx:ChecksumAlgorithm {#waardelijst-spdx-ChecksumAlgorithm}

Bevat concepten die beschrijven welk algorithme gebruikt is om tot een hash te komen die als checksum dient van een
bron. Alle concepten komen uit de [[[SPDX_CHECKSUMALGORITHM]]].

<aside class="note">

De definitieve locatie en aangeboden serialisaties van deze waardelijst is nog niet vastgesteld.
De conceptversie van deze waardelijst is als `turtle`-bestand raadpleegbaar op [[[SPDX_CHECKSUMALGORITHM_TAXONOMY]]]

</aside>
