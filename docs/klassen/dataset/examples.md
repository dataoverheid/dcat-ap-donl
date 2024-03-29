## Voorbeelden

### Minimale set van eigenschappen

Onderstaand voorbeeld beschrijft een `dcat:Dataset` met enkel de verplichte eigenschappen. Dit is de meest minimale
representatie van een `dcat:Dataset`.

<aside class="example" title="Minimale set van eigenschappen">
	<pre>
		<code>
			&lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;dataset&#x2215;verkiezingsuitslag-tweede-kamer-2021&gt;
			a dcat:Dataset;
				dct:identifier &lt;https://data.overheid.nl/dataset/verkiezingsuitslag-tweede-kamer-2021&gt;;
				dct:title "Verkiezingsuitslag Tweede Kamer 2021"@nl;
				dct:description "De dataset bevat de uitslagen van de verkiezing voor de Tweede Kamer van 17 maart 2021. De data is beschikbaar gesteld in EML formaat. De Kiesraad biedt geen ondersteuning voor het gebruik van het formaat. Bestemmingspagina: https://www.kiesraad.nl/verkiezingen/osv-en-eml/eml-standaard"@nl;
				dct:license &lt;http://creativecommons.org/publicdomain/zero/1.0/deed.nl&gt;;
				dct:creator &lt;http://standaarden.overheid.nl/owms/terms/Kiesraad&gt;;
				dct:publisher &lt;http://standaarden.overheid.nl/owms/terms/Kiesraad&gt;;
				dcat:contactPoint [a vcard:Organization ;
					vcard:fn "Kiesraad";
					vcard:hasEmail "kiesraad@kiesraad.nl";
					];
				dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Parlement&gt;;
			.
		</code>
	</pre>
</aside>

### Niet publieke datasets

TODO: Access rights, licentie, vertaling, legal foundation.

<aside class="example" title="Minimale set van eigenschappen">
	<pre>
		<code>
			&lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;dataset&#x2215;reisdocumenten--registers&gt;
			a dcat:Dataset;
				dct:identifier &lt;https://data.overheid.nl/dataset/reisdocumenten--registers&gt;;
				dct:title "Reisdocumenten, registers"@nl;
				dct:title "Reisdocumenten, registers"@en;
				dct:description "Basisregister reisdocumenten (BRR), verificatieregister (VR), Register. Deze dataset is niet beschikbaar voor hergebruik. De reden hiervoor is benoemd in art. 10 van de Wet Openbaarheid Bestuur: ‘De eerbiediging van de persoonlijke levenssfeer’"@nl;
				dct:license &lt;http://standaarden.overheid.nl/owms/terms/geslotenlicentie&gt;;
				dct:accessRights &lt;placeholder/PRIVACY&gt;;
				dct:creator &lt;http://standaarden.overheid.nl/owms/terms/rvig&gt;;
				dct:publisher &lt;http://standaarden.overheid.nl/owms/terms/rvig&gt;;
				dcat:contactPoint [a vcard:Organization ;
					vcard:fn "Rijksdienst voor Identiteitsgegevens";
					vcard:hasEmail "info@rvig.nl";
					];
				dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Bestuur&gt;;
			.
		</code>
	</pre>
</aside>

### Temporal coverage

<aside class="example" title="Temporal coverage">
	Voorbeeld <a href="(https://www.w3.org/TR/vocab-dcat-2/#ex-temporal-coverage-closed-interval)">overgenomen van het
		W3C</a>:
	<pre>
		<code>
		&lt;ds257&gt; a dcat:Dataset ;
				dct:temporal [ a dct:PeriodOfTime ;
    			dcat:startDate "2016-03-04"^^xsd:date ;
    			dcat:endDate   "2018-08-05"^^xsd:date ;
  			] .
		</code>
	</pre>
</aside>




