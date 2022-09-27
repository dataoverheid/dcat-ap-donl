## Voorbeelden

### Contact point

<aside class="example" title="Contact point">

```turtle
https://data.overheid.nl/ondersteuning/algemeen/contact
	a dcat:Dataset;
	dcat:contactPoint [a vcard:Organization ;
		vcard:fn "data.overheid.nl";
		vcard:hasEmail "data@koop.overheid.nl";
        vcard:hasTelephone [ a vcard:Work,
            vcard:Voice;
            vcard:hasValue <tel:31707000526> ];
        vcard:hasURL "data.overheid.nl";
	];
.
```
</aside>

<aside class="example" title="Other identifier">

```
TODO
.
```
</aside>