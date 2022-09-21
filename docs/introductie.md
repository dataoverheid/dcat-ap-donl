### Introductie

De Data Catalog vocabulaire (DCAT) is een standaard met als doel gepubliceerde gegevens en gegevensdiensten te beschrijven. Daardoor kunnen potentiële gebruikers beoordelen of de aangeboden gegevens voor hen releveant zijn en geschikt zijn voor hun gebruik. Dit selectieproces kan ook (gedeeltelijk) automatisch uitgevoerd worden. De geselecteerde bronnen kunnen dankzij de   DCAT beschrijving efficiënt benaderd worden om te gebruiken of na detail onderzoek alsnog te verwerpen. 

Daarnaast is het gebruikelijk om DCAT beschrijvingen op een centrale systemen te verzamelen (harvesting) om overzichten te maken van alle aangeboden informatie in een bepaald domein, een land of volgens andere criteria. Deze centrale DCAT registers maken het eenvoudig voor gebruikers door een groot aanbod te zoeken naar nuttige gegevens en web services.

<a href="https://data.overheid.nl/">Data.overheid.nl</a> is zo'n DCAT dataportaal van de Nederlandse overheid.  Een voorbeeld van een ander portaal is die van de EU, <a href="https://data.europa.eu/en">data.europa.eu</a>. De EU leest de DCAT data van data.overheid.nl en daarmee zijn direct alle datasets van data.overheid.nl ook op data.europa.eu te vinden. Het gebruik van DCAT maakt dit soort cummulatieve verzamelingen mogelijk.

Doel van dit DCAT-AP-DONL profiel is om betere beschrijvingen te verzamelen in [[[DONL]]]. Dit DCAT profiel  is gebaseerd op het [DCAT toepassingprofiel van de EU](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe) versie 2.1 dat op zijn beurt gebaseerd is op de [DCAT W3C standaard](https://www.w3.org/TR/vocab-dcat-2/). 

In deze nieuwe versie zijn de nieuwe mogelijkheden van het het toepassingsprofiel van de EU (DCAT-AP 2.1) meegenomen, samen met de ervaring opgedaan sinds DCAT-AP-DONL 1.1. Het profiel is specifieker dan de algemenere beschrijvingen waarvan het is afgeleid omm de functionaliteit van data.overheid.nl te verbeteren. DCAT-AP-DONL 2.0 is compatible met bovenstaande standaarden, wat betekent dat een profiel dat voldoet aan DCAT-AP-DONL 2.0 ook verwerkt kan worden binnen DCAT 2.0 en DCAT-AP v2.1. Het is ook backwards-compatible met DONL v1.1 waardoor beschrijvingen uitwisselbaar zijn tussen beide profielen. Eigenaren van bestaande DCAT-AP-DONL v1.1 profielen kunnen overwegen hun beschrijving te optimaliseren om hun databronnen beter te beschrijven.

Om zoveel mogelijk scenario's te ondersteunen, verplichten de originele <a href="https://www.w3.org/TR/vocab-dcat-2/">standaard van het W3C</a> en het toepassingsprofiel van de EU (<a href="https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210">DCAT-AP 2.1</a>) weinig. Omdat  <a href="data.overheid.nl">data.overheid.nl</a>  alleen de Nederlandse overheid betreft kunnen we meer informatie van gebruikers vragen om de datasets  beter vindbaar te maken. 


De belangrijkste wijzigingen tussen DCAT-AP-DONL 1.1 en deze DCAT-AP-DONL v2 zijn:</p>

<ul>
        <li><a href="#dcat-Distribution">Distributies</a> worden beschrijven alleen nog bestandsleveringen en geen dataservices.</li>
        <li>Introductie van de klasse <a href="#dcat-DataService">dataservice</a>.</li>

</ul>

<p>Dit toepassingsprofiel blijft in ontwikkeling. Commentaren, problemen, wensen e.d. kunnen als issue worden gemeld op de <a href="https://github.com/dataoverheid/dcat-ap-donl">Github pagina</a>.</>

<p>Op dit moment is DCAT v3 bij <a href="https://www.w3.org/TR/vocab-dcat-3/">W3C in ontwikkeling</a>, deze gaat meer in op het gebruik van versiebeheer bij datasets en distributies. Na het vaststellen van deze standaard zal er waarschijnlijk een nieuw DCAT-AP profiel verschijnen. Daarna zal gekeken worden of het DCAT-AP-DONL profiel ook bijgewerkt moet worden</p>

<p>Aanvragen voor voorbeelden en best practices kunnen worden gedaan in:

<div class="issue" data-number="33"></div>
<div class="issue" data-number="34"></div>
