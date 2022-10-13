## Voorbeelden

### Contact point

<aside class="example" title="Contact point">
	<pre>
		<code>
      &lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;ondersteuning&#x2215;algemeen&#x2215;contact&gt;
      a dcat:Dataset;
        dcat:contactPoint [a vcard:Organization ;
        vcard:fn "data.overheid.nl";
        vcard:hasEmail "data@koop.overheid.nl";
        vcard:hasTelephone [ 
          a vcard:Work,
          vcard:Voice;
          vcard:hasValue &lt;tel:31707000526&gt; 
          ];
        vcard:hasURL "data.overheid.nl";
        ];
      .
		</code>
	</pre>
</aside>

### Other identifier

<aside class="example" title="Other identifier">
	<pre>
		<code>
      &lt;GBI.WELZ_CULTHIS_AMK_V&gt; a dcat:Dataset;
        dct:identifier &lt;https:&#x2215;&#x2215;kaartportaal.drenthe.nl/portal/home/item.html?id=41b396ac19754bc4a414ababe0773e03&gt;;
        adms:Identifier [a adms:Identifier ;
          skos:notation "https:&#x2215;&#x2215;data.overheid.nl/dataset/2bd6eae9-3192-4e0f-a89b-c8d6b64d241f"^^xsd:anyURI;
          dct:creator &lt;https:&#x2215;&#x2215;data.overheid.nl/organisatie/koop&gt;;
        ];
  .
		</code>
	</pre>
</aside>

### Qualified attribution


TODO: Syntax en inhoud.

Voorbeeld overgenomen van [W3C](https://www.w3.org/TR/vocab-dcat-2/#qualified-attribution)

<aside class="example" title="Qualified attribution">
	<pre>
		<code>
      ex:DS987
      a dcat:Dataset ;
        prov:qualifiedAttribution [
          a prov:Attribution ;
          prov:agent &lt;https://www.ala.org.au/&gt; ;
          dcat:hadRole &lt;http://registry.it.csiro.au/def/isotc211/CI_RoleCode/distributor&gt;
        ] ;
        prov:qualifiedAttribution [
          a prov:Attribution ;
          prov:agent &lt;https://www.education.gov.au/&gt; ;
          dcat:hadRole &lt;http://registry.it.csiro.au/def/isotc211/CI_RoleCode/funder&gt;
        ] ;
      .
		</code>
	</pre>
</aside>

