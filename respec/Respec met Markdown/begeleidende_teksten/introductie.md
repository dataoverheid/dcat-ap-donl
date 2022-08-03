### Introductie

<p>De Data Catalog vocabulaire (DCAT) is een standaard met als doel het uitwisselen van datasets makkelijker te maken. Wanneer een dataset in DCAT omschreven is kan deze gemakkelijk worden opgepakt door verschillende data-catalogi en vervolgens worden gevonden door de gebruikers ervan. Naast het omschrijven van datasets laat het ook verschillende andere elementen omschrijven die nodig zijn bij het uitwisselen van DCAT data tussen verschillende data-catalogi.

<a href="data.overheid.nl">Data.overheid.nl</a> is het dataportaal van de Nederlandse overheid en kan in zijn geheel worden gezien als <code>dcat:catalog</code>. Een voorbeeld van een ander portaal (en dus <code>dcat:catalog</code>) is die van de EU, <a href="https://data.europa.eu/en">data.europa.eu</a>. De EU leest de DCAT data van <a href="data.overheid.nl">data.overheid.nl</a> en daarmee zijn direct alle datasets van <a href="data.overheid.nl">data.overheid.nl</a> ook op <a href="https://data.europa.eu/en">data.europa.eu</a> te vinden. 

Het gebruik van DCAT is dus erg waardevol, maar om zoveel mogelijk partijen aan te kunnen laten sluiten zijn de originele <a href="https://www.w3.org/TR/vocab-dcat-2/">standaard van het W3C</a> en het <a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210">toepassingsprofiel van de EU</a> erg los. Omdat  <a href="data.overheid.nl">data.overheid.nl</a> over alleen de Nederlandse overheid gaat kunnen we iets meer informatie van gebruikers vragen. Op die manier maken wij datasets nog beter vindbaar.   </p>

<p>DCAT is in ontwikkeling vanuit de <a href="https://www.w3.org/TR/vocab-dcat-2/">W3C</a>, opgepakt in de <a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210">EU</a> en in Nederland verder opgepakt voor gebruik door data.Overheid.nl. DCAT is in ontwikkeling vanaf 2014. Sinds 2021 wordt ontwikkeld aan DCAT versie 2, een uitbreiding op <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">DCAT 1.1</a> op basis van gebruikservaringen. De belangrijkste wijzigingen zijn:</p>

<ul>
        <li>Introductie van de klasse Dataservice voor het beschrijven van webservices.</li>
        <li>Distributies worden nu gebruikt voor bestandsleveringen en niet meer voor dataservices.</li>
</ul>

<p>Naast deze wijzigingen is ook het gebruik van de kenmerken nauwkeuriger beschreven en zijn er gebruiksnotities toegevoegd.
De standaard is in ontwikkeling. Commentaren, problemen, wensen etc. kunnen als issue worden gemeld op de DCAT <a href="https://github.com/dataoverheid/dcat-ap-donl">Github pagina</a>.
DCAT v3 is bij het  <a href="https://www.w3.org/TR/vocab-dcat-3/">W3C in ontwikkeling</a>, deze gaat meer in op het gebruik van versiebeheer bij datasets en distributies.</p>
