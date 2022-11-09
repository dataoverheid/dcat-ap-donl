
 <dfn>Applicatieprofiel</dfn>
 
Dit data.overheid.nl DCAT applicatieprofiel hanteert dezelfde definitie als die van *application profile* die in §1,2 van [[[DCATAP_21]]] is opgenomen:

> The Application Profile is intended to facilitate data exchange and therefore the classes and properties defined in this document are only relevant for the data to be exchanged; there are no requirements for communicating systems to implement specific technical environments. The only requirement is that the systems can export and import data in RDF in conformance with this Application Profile.
 
 <dfn>DCAT beschrijving </dfn>

Met behulp van het DCAT-AP-DONL profiel kan iedere partij de aangeboden gegevens beschrijven, zowel aangeboden als data service en als aangeboden als distributies.


<dfn>DONL</dfn>

DONL is de afkorting voor http://data.overheid.nl. Deze voorziening biedt zowel met behulp van een website als via API’s een overzicht van het gegevens aanbod van de Nederlandse overheid.

<dfn>Gebruiker</dfn>

Een gebruiker is een persoon of automatisch systeem die/dat gebruikt maakt van [=DONL=] om gegevens te vinden. Een gebruiker gebruikt de zoekfunctionaliteit en sorteer mogelijkheden van DONL om uit het aanbod een relevante selectie te maken. Met de DCAT beschrijvingen uit die selectie kan de gebruiker daarna in detail bekijken of de beschreven gegevens voldoen.

<dfn>Open data</dfn>

[Open data](https://data.overheid.nl/en/ondersteuning/open-data/wat-is-open-data) is een verzamelnaam voor gegevensverzameling die gratis beschikbaar worden gesteld voor ieder gebruik, wat wordt aangegeven met een overeenkomstig licentie. Er zijn zeer veel aanbieders van Open Data. Veel overheden, waaronder de Nederlandse streven ernaar zoveel gegevens als Open Data aan te bieden. Twee drijvende gedachte achter de Open Data beweging zijn dat Open Data de transparantie bevorderd en er toepassingen mogelijk worden die niet door de eigenaren van de gegevens voorzien (kunnen) worden. Veel Open Data wordt aangeboden als Linked Data. Hiervoor wordt ook de term Linked Open Data, LOD, gebruikt.

<dfn>Opsteller</dfn>

De opsteller maakt een een [=DCAT beschrijving=] van het aanbod van zijn of haar organisatie zodat die gegevens door anderen gebruikt kunnen worden. Binnen de afbakening van dit profiel zal deze beschrijving gedeeld worden met [=DONL=] zodat geïntereseerden relatief eenvoudig van het bestaan op de hoogte gebracht kunnen worden.

<dfn>dcat:resource</dfn>

We gebruiken dcat:resource of resource in dit document regelmatig als een verzamelnaam voor drie veel gebruikte  klasses in een [=DCAT beschrijving=]:  [dcat:catalog](#dcat-Catalog), [dcat:dataset](#dcat-Dataset) en [dcat:dataService](#dcat-DataService). Zij zijn alledrie afgeleid van de [dcat:resource](#dcat-Resource) klasse en worden daarom soms met die naam aangeduid. Verder wordt uitgelegd bij de definite van [dcat:resource](#dcat-Resource) dat in DCAT geen instanties van resource mogen voorkomen, alleen van deze drie subklasses. Merk op dat [dcat:distributie](#dcat-Distribution) niet is afgeleid van dcat:resource en dus niet onder deze aanduiding valt.

<dfn>URI</dfn>
