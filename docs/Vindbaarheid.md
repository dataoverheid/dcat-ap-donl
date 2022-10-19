# Vindbaarheid

DCAT beschrijvingen bestaan uit allerlei eigenschappen waarmee de gegevens worden beschreven. Veel gegevens zijn aanwezig om de gebruiker duidelijk te maken onder welke technische, juridische en andere voorwaarden de gegevens gebruikt kunnen worden. Maar er is ook een groep eigenschappen die bedoeld zijn om gegevens te kunnen vinden waaraan de gebruiker behoefte heeft. deze eigenschappen maken de betrokken gegevens vindbaar.
Er zijn meerdere eigenschappen die hier voor gebruikt worden, zoals de titel/naam van de gegevens en een beschrijving die voor iedere klasse verplicht zijn. Maar er zijn vier argumenten die met name bedoeld zijn om de vindbaarheid van de gegevens te vergroten, keyword, theme, type en conformsTo.

## Keyword

Er kunnen meerdere keywords opgegeven worden door de eigenschap te herhalen. Een keyword is een vrij tekst die door de gebruiker zelf opgegeven kan worden. Het gebruik van keywords voelt heel natuurlijk aan, maar er zijn flinke nadelen aan het gebruik er van.

Net als bovengenoemde eigenschappen titel en beschrijving worden keywords door de opsteller van de beschrijving vastgesteld. Groot nadeel hiervan is dat een gebruiker van deze dcat deze gegevens alleen kan vinden als hij/zij dezelfde woorden gebruikt als de opsteller. Dat maakt het vinden van gegevens a.d.h.v. Keywords door geautomatiseerde systemen lastig.
De gebruiker moet enige voorkennis hebben om de juiste woorden te kennen. De opsteller zal meestal een doelgroep voor ogen hebben bij het opstellen van de beschrijving waardoor partijen buiten die doelgroep vallen een verminderde kans hebben de gegevens aangeboden te krijgen omdat ze niet de juiste woorden gebruiken. 


## Theme

Een oplossing voor het probleem met keywords, titels en beschrijvingen is het gebruik van één of meer thema’s. Een thema maakt deel uit van een waardelijsten met ene beperkte aantal mogelijk waardes waarvan de betekenis duidelijk beschreven is. Op die manier kan er eenvoudig getoond worden welke thema beschreven en gevonden konden worden, wat zoeken en filteren van, gecumuleerde, DCAT beschrijvingen veel voorspelden maakt.

Voorbeelden van thema’s zijn de TOP-lijst[link], de lijst met Nederlandse overheidsinstelling[link] of de Clusterbegrippen van de Stelselcatalogus.[link]

Een nadeel van thema’s is dat iedere waarde toegevoegd moet zijn aan de thema’s-taxonomie, anders is deze waarde niet beschikbaar. Dat betekent dat thema-lijsten goed onderhouden moeten worden.

Merk op dat [[[DCATAP_2]]] en [[[DCAT_20]]] het mogelijk maken in een catalog een thema-taxonomie te definiëren die daarna door alle klassen die onder de catalog vallen gebruikt kunnen worden. 
Omdat [[[DONL]]] catalogs van aanbieders niet overneemt, wordt deze themeTaxonomy niet over.
Maar ook buiten [[[DONL]]] lijkt deze eigenschap slechts beperkt nuttig. Een “lokaal” geïntroduceerde” themataxonomie zal alleen bekend zijn bij alle gebruikers als zij zich deze lokale taxonomie eigen maken, wat flinke inspanningen kan vragen. Daarmee lijkt het gebruik van  deze eigenschap alleen praktisch haalbaar als een catalog waarin deze taxonomie wordt gedefinieerd veel datasets of dataservices bevat waarbij er toegevoegde waarde is voor de gebruikers. In zijn algemeenheid lijkt het beter alleen breed gedragen thema-taxonomieën te gebruiken.

## ConformsTo
ConformdsTo is breder toepasbaar dan Thema’s omdat behalve standaardwaarden ook andere waardes ingevuld kunnen worden zolang die maar op het internet resolved worden.



## Type

In [[[DCATAPDONL_2]]] wordt type niet opgenomen omdat er op dit moment weinig toegevoegde waarde is t.o.v. Keyword, Theme en ConformsTo. In [[[DCAT_20]]] en [[[DCATAP_2]]] worden suggesties gedaan welke lijsten voor types gebruikt kunnen worden, maar deze waardes zijn voor [[[DONL]]] weinig nuttig. Sommige waardelijsten overlappen met andere DCAT waardelijsten, anderen zijn gericht op andere toepassing en lijken meer verwant aan mediatype. Weer anderen voor gebruik binnen de communicatiebehoeftes van een zeer beperkt toepassingsgebied. De EU definieert een lijst die het soort organisatis beschrijft. Door de beperkte bruikbaarheid van de gesuggereerde type-waardelijsten en de overlap met andere prospecties en de beschikbaarheid van ConformsTo en Theme, leidt Type tot veel verwarring, redundantie en fouten. 
Om deze redenen wordt dcat:type niet gebruikt in [[[DCATAPDONL_2]]].
