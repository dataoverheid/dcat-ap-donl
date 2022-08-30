<aside class="note">

Hoewel [[[DONL]]] zelf wel `dcat:Catalog`s aanbiedt, zijn er voor nu geen plannen om data-eigenaren hun eigen 
`dcat:Catalog`s te laten uitwisselen met [[[DONL]]].

</aside>

> Subklasse van [`dcat:Dataset`](#dcat-Dataset).

Met een `dcat:Catalog` kan men groepen en verzamelingen maken van dcat informatie. Deze bevat instanties van de klasses
[`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService), [`dcat:CatalogRecord`](#dcat-CatalogRecord) 
en/of [`dcat:Catalog`](#dcat-Catalog).

Het meest voor de hand liggende voorbeelden zijn datacatalogi als [[[DONL]]] of [[[DATA_EU]]] Hierin wordt dcat 
informatie van een groot aantal datasets en aanbieders verzameld. Een catalogus kan ook worden gebruikt om de datasets 
van één aanbieder te groeperen. Een voorbeeld hiervan kan zijn: 
[alle data van de `gemeente Arnhem`](https://data.overheid.nl/datasets?facet_catalog[]=http://opendata.arnhem.nl/).

Er kan ook worden gedacht aan andere groeperingen zoals bijvoorbeeld 
[de meest populaire data van het jaar](https://data.overheid.nl/statistieken/meest-bekeken-datasets). Of een catalogus 
over een bepaald thema.

In een thematische catalogus kan men verwijzingen naar datasets verzamelen waarin bijvoorbeeld de impact van de corona 
pandemie zichtbaar wordt gemaakt. Dit onderwerp doorkruist verschillende velden en zou niet alleen naar medische data en 
sterftecijfers kunnen wijzen, maar ook naar economische of sociale data. Het verschil tussen een 
[`dcat:theme`](#dcat-theme) en een thematische catalogus is dat de [`dcat:theme`](#dcat-theme) door de data-eigenaar 
zelf wordt toegevoegd aan een [`dcat:dataset`](#dcat-Dataset) en niet door anderen aangepast kan worden. Maar iedereen 
kan een eigen [`dcat:Catalog`](#dcat-Catalog) aanmaken en verwijzen naar de dataset van anderen.

Let op! Er is dus een verschil tussen het algemene begrip van catalogus en een [`dcat:Catalog`](#dcat-Catalog). Waar een 
algemene catalogus een verzameling van verwijzingen is, gaat de [`dcat:Catalog`](#dcat-Catalog) alleen over een 
verzameling van verwijzingen naar DCAT klasses.

<div class="issue" data-number="21"></div>
