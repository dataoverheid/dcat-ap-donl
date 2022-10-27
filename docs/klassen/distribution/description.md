Een distributie beschrijft hoe een (deel van) een dataset te verkrijgen is. Meestal gaat het over een download-bestand. 
Verschillende distributies van dezelfde dataset verschillen van elkaar in o.a. taal, formaat, data-schema's en 
nauwkeurigheid (resolutie).

De aanbieder van een dataset kan distributies aanbieden in meerdere verschillende formaten en/of samenstellingen die 
zijn afgestemd op de behoeften van afnemers. Deze worden elk als afzonderlijke distributie beschreven en gerelateerd 
aan de dataset.

Als een dataset (ook) wordt aangeboden in de vorm van een webservice kunnen hierover aanvullende gegevens worden 
opgenomen in een [`dcat:DataService`](#dcat-DataService). Deze kan worden gerelateerd aan de bijbehorende distributie.

De distributie geeft aan dat er gegevens van een dataset beschikbaar zijn. Dat kan zijn via een directe download, een API of een webpagina. Een waarde in de eigenschap [`dcat:downloadURL`](#dcat-downloadURL) geeft aan dat de gegevens in de distributie direct gedownload kunnen
worden.

In het [[[DCATAPDONL_11]]] werden zowel de download-bestanden als de webservices om de data op te 
vragen, in de vorm van een distributie beschreven. Het nieuwe toepassingsprofiel biedt mogelijkheid om webservices te 
beschrijven in de klasse [`dcat:DataService`](#dcat-DataService). Deze heeft nu de voorkeur. Het blijft echter mogelijk 
en toegestaan om webservices te beschrijven als distributie.
