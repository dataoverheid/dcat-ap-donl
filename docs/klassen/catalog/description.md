<p class="note" title="Niet gebruikt door DONL.">
    De klasse Catalog wordt in de praktijk voor DONL niet gebruikt, het ontwerp is al wel gemaakt in dit
    toepassingsprofiel en is te vinden in <a href="#Catalogus_properties">Bijlage catalogus</a>
</p>
<p>Met een <a href="https://www.w3.org/TR/vocab-dcat-2/#Class:Catalog"><code>dcat:Catalog</code></a> kan men
    groepen en verzamelingen maken van dcat informatie. Deze bevat instanties van de klasses <a
        href="#dcat-Dataset">`dcat:dataset`</a>, <a href="#Catalogusrecord">`dcat:catalogusrecord`</a>, <a
        href="#dcat-Distribution">`dcat:distributie`</a>, <a href="#dcat-DataService">`dcat:dataservice`</a> en/of <a
        href="#Catalogus">`dcat:catalog`</a>.</p>
<p>
    Het meest voor de
    hand liggende voorbeelden zijn datacatalogi als <a href="https://data.overheid.nl/">data.overheid.nl</a> of
    <a href="https://data.europa.eu/en">data.europa.eu</a>. Hierin wordt dcat
    informatie van een groot aantal
    datasets en aanbieders verzameld. Een catalogus kan ook worden gebruikt om de datasets van één aanbieder te
    groeperen (bijvoorbeeld alle data van de <a
        href="https://data.overheid.nl/datasets?sort=score%20desc%2C%20sys_modified%20desc&facet_catalog%5B0%5D=http%3A//opendata.arnhem.nl/"><code>gemeente
Arnhem</code></a>).
</p>
<p>Er kan ook worden gedacht aan andere groeperingen zoals bijvoorbeeld <a
        href="https://data.overheid.nl/statistieken/meest-bekeken-datasets"><code>de meest populaire
data van het jaar</code></a>. Of een catalogus over een bepaald thema.</p>
<p>
    In een thematische catalogus kan men verwijzingen naar datasets verzamelen waarin bijvoorbeeld de impact van
    de corona pandemie zichtbaar wordt gemaakt. Dit onderwerp doorkruist verschillende velden en zou niet alleen
    naar medische
    data en sterftecijfers kunnen wijzen, maar ook naar economische of sociale data. Het verschil tussen een <a
        href="#theme-category">theme/category</a> en een thematische catalogus is dat de <a
        href="#theme-category">theme/category</a> door de data eigenaar zelf wordt toegevoegd aan een
    dcat:dataset en niet door anderen aangepast kan worden. Maar iedereen kan een eigen dcat:catalog aanmaken en
    verwijzen naar de dataset van anderen.</p>
<p>Let op! Er is dus een verschil tussen het algemene begrip van catalogus en een <a
        href="https://www.w3.org/TR/vocab-dcat-2/#Class:Catalog"><code>dcat:Catalog</code></a>.
    Waar een algemene catalogus een verzameling van verwijzingen is, gaat de <a
        href="https://www.w3.org/TR/vocab-dcat-2/#Class:Catalog"><code>dcat:Catalog</code></a>
    alleen over een verzameling van verwijzingen naar DCAT klasses.
</p>
<p>Een algemeen type catalogus zoals het telefoon boek wordt in DCAT omschreven als <a
        href="#dcat-Dataset">`Dcat:dataset`</a>.
</p>
<div class="issue" data-number="21"></div>
<h3>Referenties</h3>
<blockquote>Subklasse van `dcat:Dataset`</blockquote>
<ul>
    <li><a href="#dcat-Dataset">`dataset`</a></li>
    <li><a href="#dcat-DataService">`dataservice`</a></li>
    <li><a href="#dcat-Distribution">`distributie`</a></li>
    <li><a href="#Catalogusrecord">`catalogusrecord`</a></li>
</ul>
