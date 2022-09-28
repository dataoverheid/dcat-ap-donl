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

### Other identifier

<aside class="example" title="Other identifier">

```
TODO
.
```
</aside>

### Qualified attribution

<aside class="example" title="Qualified attribution">

Voorbeeld overgenomen van [W3C](https://www.w3.org/TR/vocab-dcat-2/#qualified-attribution)

```turtle
ex:DS987
  a dcat:Dataset ;
  prov:qualifiedAttribution [
    a prov:Attribution ;
    prov:agent <https://www.ala.org.au/> ;
    dcat:hadRole <http://registry.it.csiro.au/def/isotc211/CI_RoleCode/distributor>
  ] ;
  prov:qualifiedAttribution [
    a prov:Attribution ;
    prov:agent <https://www.education.gov.au/> ;
    dcat:hadRole <http://registry.it.csiro.au/def/isotc211/CI_RoleCode/funder>
  ] ;
.
```
</aside>

