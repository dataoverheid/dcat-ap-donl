Hoe kan DCAT worden gebruikt in de volgende scenarios?

#### Invullen van thema-eigenschappen

#### Gesloten data beschrijven met DCAT

#### Organisaties die geen overheid zijn

#### Invullen creator en publisher

#### Wat doe ik als ik een REST/JSON wil omschrijven in DCAT?

#### Wat doe ik als ik een Excel wil delen?
Vaak begint het delen van data met data dat al beschikbaar is. Het bevindt zich dan in een database of een apart programma, maar het makkelijkste voorbeeld is een Excel bestand. Het is een bekende en laagdrempelige manier om data te verzamelen, meestal weten hergebruikers er ook goed raad mee. Het is een goed punt om te starten met het delen van data.

Bij het delen van van een Excel bestand heeft de eerste stap weinig met DCAT te maken. Het is namelijk sterk aan te raden om de data te converteren naar een csv bestand. Wanneer dit wordt gedaan blijft de ruwe data bestaan en gaat de opmaak verloren. Dat klinkt als een verlies, maar deze conversie zorgt ervoor dat de data door heel veel andere programma's (automatisch) gebruikt kan worden. Het kan worden ingeladen en binnen de context van de hergebruiker en zelf worden verwerkt of vormgegeven. Kijk bijvoorbeeld naar deze [migratieketen data](https://data.overheid.nl/dataset/immigratie-vertrek-dtenv-instroom#panel-resources). Deze data kan makkelijk uit Excel komen, maar omdat het als csv beschikbaar is gesteld kan een ander programma er automatisch een visualisatie van maken. Excel zelf kan csv ook goed importeren.

Door de simpliciteit van csv wordt de data ook minder snel verkeerd geïnterpreteerd. Goede documentatie blijft echter nodig.

Vervolgens kan men kijken naar de DCAT omschrijving. Omdat niet iedereen direct de conversie naar csv zal willen doen zullen csv en Excel beiden worden behandeld.

Het bovengenoemde voorbeeld [Migratieketen: Vertrek - DT&V instroom](https://data.overheid.nl/dataset/immigratie-vertrek-dtenv-instroom) bestaat volgens DCAT uit een aantal onderdelen. De `dcat:dataset`, welke de dataset als concept beschrijft. Wat hierin beschreven wordt is waar de data over gaat, hoe deze tot stand is gekomen en wat voor niet technische eigenschappen deze heeft. Denk bij deze niet technische eigenschappen aan de tijdsperiode van de data of de meetresolutie of gebruikslicentie.

In de DCAT omschrijving (in de voorbeelden in [turtle formaat](https://www.w3.org/TR/2014/REC-turtle-20140225/)) wordt op elke regel eerst de eigenschap weergegeven met vervolgens de waarde van de eigenschap. In dit document is te vinden hoe de eigenschappen precies ingevuld moeten worden, maar we zullen in dit voorbeeld drie uitleggen.

`dct:identifier` vraagt om een `xsd:anyURI`. Deze is voor de identifier van de dataset. Intern kan dat `5305feb3-bafc-46b5-bdba-46dd5eed6afc` zijn, maar omdat deze bij voorkeur raadpleegbaar is vullen we hier de link in die direct naar een pagina over de dataset leidt. In dit geval: https://data.overheid.nl/dataset/5305feb3-bafc-46b5-bdba-46dd5eed6afc.turtle te voldoen 

`dct:title` vraagt om een `rdfs:literal`. Een literal kan worden geïnterpreteerd als vrij textveld. Hier hoeft niet worden voldaan aan enige regels (behalve turtle syntax). Denk bij dit veld wel aan de language tag!

`dcat:theme` vraagt om een `waardelijst overheid:TaxonomieBeleidsagenda`. Wanneer er om een waarde uit een waardelijst wordt gevraagd dient men de gehelde URI van de waarde in te vullen. De mogelijke waardes en bijbehorende URI's zijn te vinden in hoofdstuk 4: [overheid:TaxonomieBeleidsagenda](#waardelijst-overheid-TaxonomieBeleidsagenda). De waardelijsten zijn in te zien door op de links ernaartoe te klikken, bv de RDF/XML. Hier kan worden gezocht naar de het passende thema 'Immigratie'. Vervolgens laat deze zien dat het label 'Immigratie' toebehoord aan "http://standaarden.overheid.nl/owms/terms/Immigratie_(thema)". Dit is wat er wordt ingevuld in `dcat:theme`

Voor het migratieketenvoorbeeld zou deze minimale vorm van `dcat:dataset` er als volgt uitzien (Het onderstaande `dct:description` is om praktische redenen ingekort):

<aside class="example" title="Begin, minimale dataset">
	<pre>
		<code>
			&lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;dataset&#x2215;immigratie-vertrek-dtenv-instroom&gt;
			a dcat:Dataset;
				dct:identifier &lt;https://data.overheid.nl/dataset/5305feb3-bafc-46b5-bdba-46dd5eed6afc&gt;;
				dct:title "Migratieketen: Vertrek - DT&V instroom"@nl;
				dct:description "Zie de ‘Staat van Migratie’ of ‘Rapportage Vreemdelingenketen’ (tot 2020) voor een inhoudelijke toelichting op de data in dit dataset."@nl;
				dct:license &lt;http://creativecommons.org/publicdomain/zero/1.0/deed.nl&gt;;
				dct:creator &lt;http://standaarden.overheid.nl/owms/terms/minjenv&gt;;
				dct:publisher &lt;http://standaarden.overheid.nl/owms/terms/minjenv&gt;;
				dcat:contactPoint [a vcard:Organization ;
					vcard:fn "minjenv";
					vcard:hasEmail "opendata@overheid.nl";
					];
				dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Immigratie_(thema)&gt;;
			.
		</code>
	</pre>
</aside>

Er is alleen wel meer informatie dan de minimale set bekend voor deze dataset. Met de extra informatie erbij ziet het er als volgt uit:

<aside class="example" title="Dataset">
	<pre>
		<code>
			&lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;dataset&#x2215;immigratie-vertrek-dtenv-instroom&gt;
			a dcat:Dataset;
				dct:identifier &lt;https://data.overheid.nl/dataset/5305feb3-bafc-46b5-bdba-46dd5eed6afc&gt;;
				dct:title "Migratieketen: Vertrek - DT&V instroom"@nl;
				dct:description "Zie de ‘Staat van Migratie’ of ‘Rapportage Vreemdelingenketen’ (tot 2020) voor een inhoudelijke toelichting op de data in dit dataset."@nl;
				dct:license &lt;http://creativecommons.org/publicdomain/zero/1.0/deed.nl&gt;;
				dct:creator &lt;http://standaarden.overheid.nl/owms/terms/minjenv&gt;;
				dct:publisher &lt;http://standaarden.overheid.nl/owms/terms/minjenv&gt;;
				dcat:contactPoint [a vcard:Organization ;
					vcard:fn "minjenv";
					vcard:hasEmail "opendata@overheid.nl";
					];
				dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Immigratie_(thema)&gt;;
                dct:accessRights
                keyword/tag
                resource language
                landing page
                conforms to
                frequency maandelijks
			.
		</code>
	</pre>
</aside>

Deze beschrijving behandeld alleen de dataset als concept. Het beschrijft nog niet hoe deze aangeboden wordt. De reden daarvoor is dat dit op verschillende manieren kan. Deze dataset kan bijvoorbeeld zowel als Excel als csv bestand worden aangeboden. Het gaat dan om dezelfde data en dus dezelfde `dcat:dataset`.

Voor deze verschillende presentaties worden `dcat:distributions` toegevoegd. Om praktische redenen is de migratie dataset opgeknipt in verschillende jaren. Elk jaar heeft een eigen distributie. De eerste omschreven distributie beschrijft de data van 2022 dat in csv formaat wordt aangeboden.  

<aside class="example" title="Minimale distributie">
	<pre>
		<code>
			&lt;Vertrek-DTenVinstroom202021.csv&gt; a dcat:Distribution ;
				dcat:accessURL &lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;sites&#x2215;default&#x2215;files&#x2215;dataset&#x2215;5305feb3-bafc-46b5-bdba-46dd5eed6afc&#x2215;resources&#x2215;Vertrek%20-%20DTenV%20instroom%202022.csv&gt; ;
				dct:format &lt;http:&#x2215;&#x2215;publications.europa.eu&#x2215;resource&#x2215;authority&#x2215;file-type&#x2215;CSV&gt; ;
				dct:title "Vertrek - DTenV Instroom 2022"@nl;
				dct:description "Indien de databron direct downloadbaar is, kunt u dit in dit veld aangeven. De hergebruiker kan dan direct de databron downloaden."@nl;
				dct:license &lt;http:&#x2215;&#x2215;creativecommons.org&#x2215;publicdomain&#x2215;zero&#x2215;1.0&#x2215;deed.nl&gt;;
			.
		</code>
	</pre>
</aside>

<aside class="example" title="Volledige distributie">
	<pre>
		<code>
			&lt;Vertrek-DTenVinstroom202021.csv&gt; a dcat:Distribution ;
				dcat:accessURL &lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;sites&#x2215;default&#x2215;files&#x2215;dataset&#x2215;5305feb3-bafc-46b5-bdba-46dd5eed6afc&#x2215;resources&#x2215;Vertrek%20-%20DTenV%20instroom%202022.csv&gt; ;
				dct:format &lt;http:&#x2215;&#x2215;publications.europa.eu&#x2215;resource&#x2215;authority&#x2215;file-type&#x2215;CSV&gt; ;
				dct:title "Vertrek - DTenV Instroom 2022"@nl;
				dct:description "Indien de databron direct downloadbaar is, kunt u dit in dit veld aangeven. De hergebruiker kan dan direct de databron downloaden."@nl;
				dct:license &lt;http:&#x2215;&#x2215;creativecommons.org&#x2215;publicdomain&#x2215;zero&#x2215;1.0&#x2215;deed.nl&gt;;
				modified
				language
				byteSize
				conformsTo
				documentation
			.
		</code>
	</pre>
</aside>

<aside class="example" title="Meerdere distributies">
	<pre>
		<code>
			&lt;Vertrek-DTenVinstroom202021.csv&gt; a dcat:Distribution ;
			&lt;Vertrek-DTenVinstroom202022.csv&gt; a dcat:Distribution ;
			.
		</code>
	</pre>
</aside>

<aside class="example" title="Distributie als documentatie">
	<pre>
		<code>
			&lt;documentatie&gt; a dcat:Distribution ;
			.
		</code>
	</pre>
</aside>

<aside class="example" title="Gehele DCAT omschrijving">
	<pre>
		<code>
		&lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;dataset&#x2215;immigratie-vertrek-dtenv-instroom&gt;
			a dcat:Dataset;
		&lt;Vertrek-DTenVinstroom202021.csv&gt; a dcat:Distribution ;
		&lt;Vertrek-DTenVinstroom202022.csv&gt; a dcat:Distribution ;
		&lt;documentatie&gt; a dcat:Distribution ;
			.
		</code>
	</pre>
</aside>


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
