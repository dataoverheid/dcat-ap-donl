## Voorbeelden

### Minimale set van eigenschappen

Onderstaand voorbeeld beschrijft een `dcat:Dataset` met enkel de verplichte eigenschappen. Dit is de meest minimale 
representatie van een `dcat:Dataset`.

<aside class="example" title="Minimale set van eigenschappen">

```turtle
<https://data.overheid.nl/dataset/verkiezingsuitslag-tweede-kamer-2021>
	a dcat:Dataset;
	dct:identifier <https://data.overheid.nl/dataset/verkiezingsuitslag-tweede-kamer-2021>;
	dct:title "Verkiezingsuitslag Tweede Kamer 2021"@nl;
	dct:description "De dataset bevat de uitslagen van de verkiezing voor de Tweede Kamer van 17 maart 2021. De data is beschikbaar gesteld in EML formaat. De Kiesraad biedt geen ondersteuning voor het gebruik van het formaat. Bestemmingspagina: https://www.kiesraad.nl/verkiezingen/osv-en-eml/eml-standaard"@nl;
	dct:license <http://creativecommons.org/publicdomain/zero/1.0/deed.nl>;
	dct:creator <http://standaarden.overheid.nl/owms/terms/Kiesraad>;
	dcat:contactPoint [a vcard:Organization ;
		vcard:fn "Kiesraad";
		vcard:hasEmail "kiesraad@kiesraad.nl";
		];
	dcat:theme <http://standaarden.overheid.nl/owms/terms/Parlement>;
.
```
</aside>



### Niet publieke datasets
