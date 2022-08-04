### Introductie

<p>De Data Catalog vocabulaire (DCAT) is een standaard met als doel het uitwisselen van datasets makkelijker te maken. Wanneer een dataset in DCAT omschreven is kan deze gemakkelijk worden opgepakt door verschillende data-catalogi en vervolgens worden gevonden door de gebruikers ervan. Naast het omschrijven van datasets laat het ook verschillende andere elementen omschrijven die nodig zijn bij de uitwisseling tussen verschillende data-catalogi.

<a href="data.overheid.nl">Data.overheid.nl</a> is het dataportaal van de Nederlandse overheid en kan in zijn geheel worden gezien als <code>dcat:catalog</code>. Een voorbeeld van een ander portaal (en dus <code>dcat:catalog</code>) is die van de EU, <a href="https://data.europa.eu/en">data.europa.eu</a>. De EU leest de DCAT data van <a href="data.overheid.nl">data.overheid.nl</a> en daarmee zijn direct alle datasets van <a href="data.overheid.nl">data.overheid.nl</a> ook op <a href="https://data.europa.eu/en">data.europa.eu</a> te vinden. 

Het gebruik van DCAT is dus erg waardevol, maar om zoveel mogelijk partijen aan te kunnen laten sluiten zijn de originele <a href="https://www.w3.org/TR/vocab-dcat-2/">standaard van het W3C</a> en het toepassingsprofiel van de EU (<a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210">DCAT-AP 2.1</a>) erg los. Omdat  <a href="data.overheid.nl">data.overheid.nl</a> over alleen de Nederlandse overheid gaat kunnen we iets meer informatie van gebruikers vragen. Met deze extra informatie kunnen datasets nog beter vindbaar worden gemaakt. 

In deze nieuwe versie zijn de mogelijkheden van het et toepassingsprofiel van de EU (<a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210">DCAT-AP 2.1</a>) meegenomen, samen met de gebruikservaringen gebruikservaring van <a href="https://dcat-ap-donl.readthedocs.io/en/latest/">DCAT-AP-DONL 1.1</a>. 

De belangrijkste wijzigingen zijn:</p>

<ul>
        <li>Introductie van de klasse Dataservice voor het beschrijven van webservices.</li>
        <li>Distributies worden nu gebruikt voor bestandsleveringen en niet meer voor dataservices.</li>
</ul>

<p>Dit toepassingsprofiel blijft in ontwikkeling. Commentaren, problemen, wensen etc. kunnen als issue worden gemeld op de <a href="https://github.com/dataoverheid/dcat-ap-donl">Github pagina</a>.
DCAT v3 is bij het  <a href="https://www.w3.org/TR/vocab-dcat-3/">W3C in ontwikkeling</a>, deze gaat meer in op het gebruik van versiebeheer bij datasets en distributies.</p>

<p>Aanvragen voor voorbeelden en best practices kunnen worden gedaan in:

<div class="issue" data-number="33"></div>
<div class="issue" data-number="34"></div>
