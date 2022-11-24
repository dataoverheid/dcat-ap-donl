Hoe kan DCAT worden gebruikt in de volgende scenarios?

#### Invullen van thema-eigenschappen

Thema's zijn de belangrijkste inhoudelijke eigenschap waarop informatie op [=DONL=] eenduidige doorzocht kan worden. De thema eigenschap is gedefinieerd voor [dcat:Dataset](#dcat-Dataset), [dcat:DataService](#dcat-DataService) en voor [dcat:Catalog](#dcat-Catalog). Er zijn meerdere thema waardes toegestaan per beschrijving. 

Zoals te lezen is in de paragraaf [Vindbaarheid](#thema-s-uit-een-voorgedefinieerde-lijst) kunnen op [=DONL=] alleen thema's worden  gekozen die door DONL zelf worden aangeboden. In lokale [=DCAT beschrijving=]en kunnen andere thema-taxonomieën worden gebruikt, zelfs per [dcat:Catalog](#dcat-Catalog) gedefinieerd, maar omdat DONL geen externe catalogi inleest, kunnen er op die manier geen thema-lijsten worden toegevoegd. DONL gaat de lijst met aangeboden thema-taxonomiën in de toekomst actief te onderhouden en indien nodig uit te breiden. 

Op dit moment zijn er tweede thema-lijsten waaruit waardes gekozen kunnen worden:

| Naam themalijst                                                                      | Type               | Gebruik     |
| ------------------------------------------------------------------------------------ | ------------------ | ----------- |
| [[[OWMS_TAXONOMIEBELEIDSAGENDA]]]                                                    | Waardelijst        | Mandatory   |
| [[[CLUSTERBEGRIPPEN]]]                                                               | Waardelijst        | Recommended |

Uit de Taxonomiebeleidsagenda kiest u een waarde die beschrijft op welke gebied de gegevens betrekking hebben. Probeer hierbij zo specifiek mogelijk te zijn. 

##### Clusterbegrippen
Kies ook één of meer clusterbegrippen die aangeven welke informatie in uw gegevens belangrijk is. Het zal voorkomen dat geen van de Clusterbegrippen verwijst naar informatie in uw gegevens. In dat geval vult u geen Clusterbegrip in. Als u vindt dat er een Clusterbegrip ontbreekt in de lijst, kunt u [contact opnemen met Stelselcatalogus](https://www.stelselcatalogus.nl/contact) om dat eventueel te laten toevoegen.

In onderstaand voorbeeld zijn zes waardes uit de taxonomie belaidsagenda en de Clusterbegrippen opgenomen om de aangeboden gegevens in de data service goed te beschrijven.

<aside class="example" title="Thema's kiezen">
	<pre>
        ex:bouwaanbestedingen a dcat:DataService;
          dct:title "Bouw aanbesteding"@nl ;
          dct:accessRights &lt;http://publications.europa.eu/resource/authority/access-right/PUBLIC&gt; ;
          dct:conformsTo &lt;https://jsonapi.org/format/1.1/&gt; ;
          dct:conformsTo &lt;https://docs.geostandaarden.nl/api/API-Strategie/&gt; ;
          dct:description "Een overzicht van alle partijen betrokken bij recente aanbestedingen gerelateerd aan bouwen van de overheid" ;
          dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Bouwen_en_verbouwen&gt; ;
          dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Ruimtelijke_ordening&gt; ;
          dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Ruimte_en_infrastructuur&gt; ;
          dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Rijksoverheid&gt; ;
          dcat:theme &lt;https://opendata.stelselcatalogus.nl/doc/clusterbegrip/Organisatie&gt; ;
          dcat:theme &lt;https://opendata.stelselcatalogus.nl/doc/clusterbegrip/Onroerende_zaak&gt; ;
          dcat:endpointURL &lt;https:∕∕api.examle.com&gt; ;
        .
    </pre>
</aside>

#### Gesloten data beschrijven met DCAT

#### Organisaties die geen overheid zijn

#### Invullen creator en publisher

#### Wat doe ik als ik een REST/JSON wil omschrijven in DCAT?

#### Wat doe ik als ik een Excel wil delen?

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