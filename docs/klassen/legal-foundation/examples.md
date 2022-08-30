## Voorbeelden

### Minimale set van eigenschappen

Onderstaand voorbeeld beschrijft een `donl:LegalFoundation` met enkel de verplichte eigenschappen. Dit is de meest 
minimale representatie van een `donl:LegalFoundation`.

<aside class="example" title="Minimale set van eigenschappen">

<pre class="nolinks turtle">

ex:myLegalFoundation a donl:LegalFoundation;
  dct:title "Wet BAG"@nl ;
  foaf:homepage "https://wetten.overheid.nl/"^^xsd:anyURI ;
  donl:juriconnectCode "jci1.3:c:BWBR0023466&z=2022-05-01&g=2022-05-01" ;
  .

</pre>

Webapplicaties zouden bovenstaande voorbeeld kunnen vertalen naar:

<pre class="nolinks html">

&lt;a href="https://wetten.overheid.nl/jci1.3:c:BWBR0023466&z=2022-05-01&g=2022-05-01"&gt;
    Wet BAG
&lt;/a&gt;

</pre>

</aside>
