Binnen grotere DCAT beschrijvingen of verzamelingen van DCAT beschrijvingen zoals [[[DONL]]] kunnen gebruikers niet meer handmatig door het aanbod zoeken. Het is dan noodzakelijk met gehulp van zoekcriteria en filters uit het aanbod de gegevens te kunnen vinden die nodig zijn. De verschillende eigenschappen waarmee de gegevens in DCAT worden beschreven kunnen allemaal als zoekcriteria gebruikt worden. Hoofdfunctie van veel eigenschappen is om de gebruiker duidelijk te maken onder welke technische, juridische en andere voorwaarden de gegevens gebruikt kunnen worden. Dat is zeer nuttig om te weten als de gebruikerde gegevensbeschrijving al gevonden heeft, maar deze waardes helpen zelden uit het grote aanbod een inhoudelijke keuze te maken. Voor dat doel
is een andere  groep eigenschappen. Twee heel belangrijke eigenschappen zijn de [`titel`](#dct-title) en de [`beschrijving`](#dct-description) beschrijving van de DCAT klasse.  Vier andere belangrijke eigenschappen die de vindbaarheid vergroten zijn  [`keyword`](#dcat-keyword), [`theme`](#dcat-theme), [`type`] en [`conformsTo`](#dct-conformsTo), ieder met hun eigen kracht en zwaktes.

#### Keyword, title en description

De eigenschappen title, keyword en description zijn vrije tekst die door de opsteller van de DCAT beschrijving worden vastgesteld om de gegevens zo goed mogelijk te beschrijven. Deze teksten zijn in eerste instantie op menselijke gebruikers gericht, omdat mensen makkelijk betekenis aan tekst geven. Er mag slechts één titel en één beschrijving worden opgegeven, maar er kunnen meerdere keywords gebruikt worden door de eigenschap te herhalen. 

Het gebruik van deze velden voelt heel natuurlijk aan, maar de vindbaarheid van deze drie velden is niet zo goed. Deze velden en dus de gerelateerde gegevens worden alleen gevonden als een gebruiker dezelfde woorden gebruikt als de opsteller. Dat blijkt in de praktijk vaak verkeerd te gaan. Ten eerste moet de gebruiker enige voorkennis hebben om de juiste termen te gebruiken. Bovendien moet de opsteller de teksten zo schrijven dat alle mogelijke, relevante zoektermen deze gegevens zullen vinden. Echter, het ligt in de lijn der verwachting dat sommige (toekomstige) gebruikers behoefte aan deze data hebben, die de opsteller niet kan voorzien of dat gebruikers tot een doelgroep behoren die de opsteller niet kent. Bovendien zijn voor een sluitende beschrijving al snel veel woorden nodig. Een voorbeeld: stel dat we een dataservice hebebn met gegevens over lantaarnpalen in gemeente X. Het ligt voor de hand dat het woord "lantaarnpaal" als keyword wordt gebruikt. Voegen we dan ook het woord “straatverlichting” toe? En het woord “straatmeubilair” ?
Wat gebeurt er als we ook een distributie met gegevens over "bushokken" hebben. Dan gebruiken we daar het woord “bushokken”. Voegen we daar ook het woord “straatmeubilair”  aan toe om consequent te zijn.

Net als bovengenoemde eigenschappen titel en beschrijving worden keywords door de opsteller van de beschrijving vastgesteld. Groot nadeel hiervan is dat een gebruiker van deze dcat deze gegevens alleen kan vinden als hij/zij dezelfde woorden gebruikt als de opsteller. Dat maakt het vinden van gegevens a.d.h.v. Keywords door geautomatiseerde systemen lastig.
De gebruiker moet enige voorkennis hebben om de juiste woorden te kennen. De opsteller zal meestal een doelgroep voor ogen hebben bij het opstellen van de beschrijving waardoor partijen buiten die doelgroep vallen een verminderde kans hebben de gegevens aangeboden te krijgen omdat ze niet de juiste woorden gebruiken. 


#### Theme

Een oplossing voor het probleem met keywords, titels en beschrijvingen is het gebruik van één of meer thema’s. Een thema maakt deel uit van een waardelijsten met ene beperkte aantal mogelijk waardes waarvan de betekenis duidelijk beschreven is. Op die manier kan er eenvoudig getoond worden welke thema beschreven en gevonden konden worden, wat zoeken en filteren van, gecumuleerde, DCAT beschrijvingen veel voorspelden maakt.

Voorbeelden van thema’s zijn de TOP-lijst[link], de lijst met Nederlandse overheidsinstelling[link] of de Clusterbegrippen van de Stelselcatalogus.[link]

Een nadeel van thema’s is dat iedere waarde toegevoegd moet zijn aan de thema’s-taxonomie, anders is deze waarde niet beschikbaar. Dat betekent dat thema-lijsten goed onderhouden moeten worden.

Merk op dat [[[DCATAP_21]]] en [[[DCAT_20]]] het mogelijk maken in een catalog een thema-taxonomie te definiëren die daarna door alle klassen die onder de catalog vallen gebruikt kunnen worden. 
Omdat [[[DONL]]] catalogs van aanbieders niet overneemt, wordt deze themeTaxonomy niet over.
Maar ook buiten [[[DONL]]] lijkt deze eigenschap slechts beperkt nuttig. Een “lokaal” geïntroduceerde” themataxonomie zal alleen bekend zijn bij alle gebruikers als zij zich deze lokale taxonomie eigen maken, wat flinke inspanningen kan vragen. Daarmee lijkt het gebruik van  deze eigenschap alleen praktisch haalbaar als een catalog waarin deze taxonomie wordt gedefinieerd veel datasets of dataservices bevat waarbij er toegevoegde waarde is voor de gebruikers. In zijn algemeenheid lijkt het beter alleen breed gedragen thema-taxonomieën te gebruiken.

#### ConformsTo
ConformdsTo is breder toepasbaar dan Thema’s omdat behalve standaardwaarden ook andere waardes ingevuld kunnen worden zolang die maar op het internet resolved worden.



#### Type

In DCAT-AP-DONL_2 wordt type niet opgenomen omdat er op dit moment weinig toegevoegde waarde is t.o.v. Keyword, Theme en ConformsTo. In [[[DCAT_20]]] en [[[DCATAP_21]]] worden suggesties gedaan welke lijsten voor types gebruikt kunnen worden, maar deze waardes zijn voor [[[DONL]]] weinig nuttig. Sommige waardelijsten overlappen met andere DCAT waardelijsten, anderen zijn gericht op andere toepassing en lijken meer verwant aan mediatype. Weer anderen voor gebruik binnen de communicatiebehoeftes van een zeer beperkt toepassingsgebied. De EU definieert een lijst die het soort organisatis beschrijft. Door de beperkte bruikbaarheid van de gesuggereerde type-waardelijsten en de overlap met andere prospecties en de beschikbaarheid van ConformsTo en Theme, leidt Type tot veel verwarring, redundantie en fouten. 
Om deze redenen wordt dcat:type niet gebruikt in DCAT-AP-DONL_2.
