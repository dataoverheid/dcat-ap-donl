<aside class="note">

Hoewel [[[DONL]]] zelf wel `dcat:CatalogRecord`s aanbiedt, kunnen data-eigenaren hun eigen 
`dcat:CatalogRecord`s niet uitwisselen met [[[DONL]]].

</aside>

Een Catalogusrecord geeft informatie over de registratie van één [`dcat:Resource`](#dcat-Resource) in een catalogus. Alle records samen bevatten de administratieve metadata van een DCAT beschrijving. Met name het versiebeheer van ieder [`dcat:Resource`](#dcat-Resource) in de DCAT beschrijving kan hiermee worden bijgehouden en uitgewisseld.

Deze klasse is optioneel en niet alle catalogi maken hiervan gebruik, omdat het niet altijd nuttig is de historie van
wijzigingen in een DCAT beschrijving uit te wisselen.  Ze maakt het  catalogi mogelijk om een 
onderscheid te maken tussen de metadata over een dataset of dataservice en metadata over een voorkomen van een dataset of 
dataservice in een catalogus. Eigenschap publicatiedatum van een dataset beschrijft bijvoorbeeld de datum waarop de 
data-eigenaar de gegevens in eerste instantie heeft gepubliceerd, terwijl de publicatiedatum van het catalogus record de 
datum beschrijft waarop de dataset is opgenomen in de catalogus.

CatalogRecord kan met conformsTo aangeven aan welk toepassingsprofiel de metadata over de DCAT-resource voldoet. Dat kan belangrijk zijn bij de uitwisseling van de metadata van datasets (of andere DCAT-resources) tussen dataportalen. Het kan voorkomen dat de 
metadata moet voldoen aan een specifieke toepassingsprofielen van DCAT.


