### Introductie

De Data Catalog vocabulaire (DCAT) is een standaard met als doel gepubliceerde gegevens en gegevensdiensten te beschrijven. Daardoor kunnen potentiële gebruikers beoordelen of de aangeboden gegevens voor hen relevant zijn en geschikt zijn voor hun gebruik. Dit selectieproces kan ook (gedeeltelijk) automatisch uitgevoerd worden. De geselecteerde bronnen kunnen dankzij de DCAT beschrijving efficiënt benaderd worden voor gebruik, of na detailonderzoek alsnog worden verworpen.

Daarnaast is het gebruikelijk om DCAT beschrijvingen op centrale systemen te verzamelen – bekend als "harvesting" – om overzichten te maken van alle aangeboden informatie in een bepaald domein, bijvoorbeeld een land of volgens andere criteria. Deze centrale DCAT registers maken het eenvoudig voor gebruikers om door een groot aanbod te zoeken naar nuttige gegevens en data services.

[[[DONL]]] is zo'n DCAT dataportaal van de Nederlandse overheid.  Een voorbeeld van een ander portaal is die van de EU, [[[DATA_EU]]]. De EU leest de DCAT data van data.overheid.nl en daardoor zijn alle datasets van data.overheid.nl ook op data.europa.eu te vinden. Het gebruik van DCAT maakt dit soort cummulatieve verzamelingen mogelijk.

Doel van dit DCAT-AP-DONL profiel is om betere beschrijvingen te verzamelen in [[[DONL]]]. Dit DCAT profiel  is gebaseerd op het [[[DCATAP_21]]] dat op zijn beurt gebaseerd is op de [[[DCAT_20]]] van het W3C. 

In deze nieuwe versie zijn de nieuwe mogelijkheden van het het toepassingsprofiel van de EU ([[[DCATAP_21]]]) meegenomen, samen met de ervaring opgedaan sinds [[[DCATAPDONL_11]]]. Het profiel is specifieker dan de algemenere beschrijvingen waarvan het is afgeleid om de functionaliteit van data.overheid.nl te verbeteren. DCAT-AP-DONL 2.0 is compatible met bovenstaande standaarden, wat betekent dat een profiel dat voldoet aan DCAT-AP-DONL 2.0 ook verwerkt kan worden binnen [[[DCAT_20]]] en [[[DCATAP_21]]]. Het is ook backwards-compatible met [[[DCATAPDONL_11]]] waardoor beschrijvingen uitwisselbaar zijn tussen beide profielen. Eigenaren van bestaande DCAT omschrijvingen volgens het [[[DCATAPDONL_11]]] profiel kunnen overwegen hun omschrijving te optimaliseren om hun databronnen beter te beschrijven.

Om zoveel mogelijk scenario's te ondersteunen, verplichten de originele [[[DCAT_20]]] van het W3C en het toepassingsprofiel van de EU ([[[DCATAP_21]]]) weinig. Omdat [[[DONL]]] alleen de Nederlandse overheid betreft kunnen we meer informatie van gebruikers vragen. Daarmee worden gegevens beter vindbaar. 


De belangrijkste wijzigingen tussen [[[DCATAPDONL_11]]] en deze DCAT-AP-DONL 2.0 zijn:</p>

<ul>
        <li>Introductie van de klasse <a href="#dcat-DataService">dataservice</a>.</li>
        <li>Nieuwe eigenschappen, aangegeven met het label <em class="new">nieuw</em>. </li>
</ul>

Andere wijziginingen worden hieronder toegelucht.

<p>Dit toepassingsprofiel blijft in ontwikkeling. Commentaren, problemen, wensen e.d. kunnen als issue worden gemeld op de <a href="https://github.com/dataoverheid/dcat-ap-donl">Github pagina</a>.
    
<aside class="note">
        <p>Men kan via de volgende links aanvragen doen voor <a href="https://github.com/dataoverheid/dcat-ap-donl/issues/33">voorbeelden</a> en <a href="https://github.com/dataoverheid/dcat-ap-donl/issues/34">best practices</a>.</p>
</aside>

<p>Op dit moment is DCAT v3 bij <a href="https://www.w3.org/TR/vocab-dcat-3/">W3C in ontwikkeling</a>, deze gaat meer in op het gebruik van versiebeheer bij datasets en distributies. Na het vaststellen van deze standaard zal er waarschijnlijk een nieuw DCAT-AP profiel verschijnen. Daarna zal gekeken worden of het DCAT-AP-DONL profiel ook bijgewerkt moet worden</p>

