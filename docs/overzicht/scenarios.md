Hoe kan DCAT worden gebruikt in de volgende scenarios?

#### Invullen van thema-eigenschappen

#### Gesloten data beschrijven met DCAT

#### Organisaties die geen overheid zijn

#### Invullen creator en publisher

#### Wat doe ik als ik een REST/JSON wil omschrijven in DCAT?

#### Wat doe ik als ik een Excel wil delen?

#### [=DCAT beschrijving=] voor intern gebruik ontwikkelen

DCAT dient als vocabulaire om data delen makkelijker te maken. De opzet is gericht op het delen van data tussen verschillende partijen, 
maar dat betekend niet dat het ook erg goed gebruikt kan worden om interne data te beschrijven. Binnen organisaties kunnen verschillende afdelingen
immers als partij worden gezien. En overzicht is op elk niveau waardevol.

Wanneer interne data in DCAT beschreven wordt, wordt het delen van deze zelfde informatie met de buitenwereld een stuk makkelijker. Dit heeft dezelfde 
structuur en er is dus geen vertaalslag meer nodig.

Mocht dit DCAT profiel niet voldoen aan de interne behoeftes is DCAT makkelijk uit te breiden en aan te passen. Goede bronnen hiervoor zijn [[[DCAT_20]]] en [[[DCATAP_21]]].
Er kan bijvoorbeeld worden gekozen om de eigenschap [`dct:license`](#dct-license) achter wege te laten. Of er kunnen ter verreiking eigenschappen worden toevoegd.

Wanneer de data niet naar buiten wordt gecommuniceerd kan men ook andere waardelijsten gebruiken. De [TaxonomieBeleidsagenda](#waardelijst-overheid-TaxonomieBeleidsagenda)
wordt op [[[DONL]]] verplicht om consistentie te behouden, maar een eigen thema waardelijst kan voor intern gebruik veel krachtiger zijn. Of met eigen waardes voor [AccessRights](#waardelijst-donl-AccessRights)
kan binnen een organisatie direct worden duideluijk gemaakt wie er wel en wie geen toegang heeft tot de data.

Let er wel op dat wanneer men aangepaste beschrijvingen toch met de buitenwereld wil delen, er een oplossing moet zijn om deze aan te kunnen laten sluiten. Interne eigenschappen
kunnen vervallen, maar voor waardelijsten zal een mapping nodig zijn.

Ook kan men door middel van [`dcat:Catalog`](#dcat-Catalog) een eigen structuur of hierarchie creeren. 

#### Interne [=DCAT beschrijving=] uitwisselen met DONL
