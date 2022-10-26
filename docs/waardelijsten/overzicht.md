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

Elk concept bevat een `skos:broader` eigenschap met daarin een verwijzing naar het bovenliggende [[[MDR_ACCESSRIGHTS]]]
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

#### iana:Mediatype {#waardelijst-iana-Mediatype}

#### mdr:Filetype {#waardelijst-mdr-Filetype}

#### mdr:Frequency {#waardelijst-mdr-Frequency}

#### overheid:Gemeente {#waardelijst-overheid-Gemeente}

#### overheid:Koninkrijksdeel {#waardelijst-overheid-Koninkrijksdeel}

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
