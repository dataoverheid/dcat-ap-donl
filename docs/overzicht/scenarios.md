Hoe kan DCAT worden gebruikt in de volgende scenarios?

#### Invullen van thema-eigenschappen

#### Gesloten data beschrijven met DCAT

#### Organisaties die geen overheid zijn

#### Invullen creator en publisher

#### Wat doe ik als ik een REST/JSON wil omschrijven in DCAT?

#### Wat doe ik als ik een Excel wil delen?

Vaak begint het delen van data met data dat al beschikbaar. Het bevindt zich dan in een database of een apart programma, maar het makkelijkste voorbeeld voor  is een Excel bestand. Het is een laagdrempelige manier om data te verzamelen en meestal weten hergebruikers er goed raad mee. Het is een goed punt om te starten met het delen van data.

Bij het delen van van een Excel bestand heeft de eerste stap weinig met DCAT te maken. Het is namelijk sterk aan te raden om de data te converteren naar een csv bestand. Wanneer dit wordt gedaan blijft de ruwe data bestaan en gaat de opmaak verloren. Dat klinkt als een verlies, maar deze conversie zorgt er wel voor dat de data door heel veel andere programma's (automatisch) gebruikt kan worden. Het kan worden ingeladen en binnen de context van de hergebruiker zelf worden vormgegeven.





#### [=DCAT beschrijving=] voor intern gebruik ontwikkelen

DCAT dient als vocabulaire om het delen van data tussen verschillende partijen makkelijker te maken. Maar het kan ook erg goed worden gebruikt om interne data te beschrijven. Binnen organisaties kunnen verschillende afdelingen immers als partij worden gezien. En overzicht is op elk niveau waardevol.

Wanneer interne data in DCAT beschreven wordt, wordt het delen van deze zelfde informatie met de buitenwereld een stuk makkelijker. Dit heeft dezelfde structuur en er is dus geen vertaling meer nodig.

Mocht DCAT-AP-DONL 2.0 niet voldoen aan de interne behoeftes is het makkelijk uit te breiden en aan te passen. Goede bronnen hiervoor zijn [[[DCAT_20]]] en [[[DCATAP_21]]].

Er kan bijvoorbeeld worden gekozen om de eigenschap [`dct:license`](#dct-license) achter wege te laten. Of er kunnen ter verrijking eigenschappen worden toevoegt.

Wanneer de data niet naar buiten wordt gecommuniceerd kan men ook andere waardelijsten gebruiken. De [TaxonomieBeleidsagenda](#waardelijst-overheid-TaxonomieBeleidsagenda)

wordt op [[[DONL]]] verplicht om consistentie te behouden, maar een eigen thema waardelijst kan voor intern gebruik veel krachtiger zijn. Ook kan bijvoorbeeld met eigen waardes voor [AccessRights](#waardelijst-donl-AccessRights) binnen een organisatie direct duidelijk worden gemaakt wie er wel en wie geen toegang heeft tot de data.

Let er wel op dat wanneer men aangepaste beschrijvingen toch met de buitenwereld wil delen, er een oplossing moet zijn om deze aan te kunnen laten sluiten. Interne eigenschappen kunnen vervallen, maar voor waardelijsten zal een mapping nodig zijn.

Ook kan men door middel van [`dcat:Catalog`](#dcat-Catalog) een eigen structuur of hiërarchie creëren.


#### Interne [=DCAT beschrijving=] uitwisselen met DONL

Het delen van DCAT beschrijvingen van interne data kan gewenst zijn om transparantie in de organisatie en processen te verhogen. Maar ook om te delen dat je gesloten data hebt, dat in overleg misschien gedeeld kan worden.

Denk in het eerste geval bijvoorbeeld aan het kenbaar maken dat je als organisatie een personeelsbestand hebt. En denk bij het tweede aan de microdata van het CBS dat niet openbaar is. Men kan een aanvraag doen om deze toch in te kunnen zien en te gebruiken.

Met alleen een DCAT beschrijving is de data meestal niet direct toegankelijk. Het is wel goed mogelijk dat er toch gevoelige informatie in staat. Dit kan in de [`description`](#dct-description) zijn, of één van de (eigen toegevoegde) velden of waardelijsten. Let hier erg goed op!

Denk verder aan welke informatie er gedeeld moet worden met een geïnteresseerde in de data. Naast het weghalen van de gevoelige informatie kan het waardevol zijn om voor het nieuwe publiek informatie toe te voegen. Bijvoorbeeld eigenschappen als [`AccessRights`](#dct-accessRights) en [`documentation`](#foaf-page1) zullen belangrijker worden. Ook kan het de moeite waard zijn de [titel]( #dct-title)en [`description`](#dct-description) te herschrijven. En zal het [contact punt](#dcat-contactPoint) voor extern anders zijn dan intern.

In dit toepassingsprofiel is voor elke klasse te vinden welke eigenschappen er [verplicht](#overzicht) zijn. 
