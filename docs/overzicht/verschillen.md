### Verschillen

#### Introductie van klasse [`dcat:DataService`](#dcat-DataService)

In [[[DCATAPDONL_11]]] wordt gebruik gemaakt van de klasse [`dcat:Distributie`](#dcat-Distribution). Deze distributie kan worden gezien als specifieke representatie van een [`dcat:Dataset`](#dcat-Dataset). Zo kan een [`dcat:Dataset`](#dcat-Dataset) worden aangeboden in CSV formaat én in JSON, of zijn er subsets beschikbaar over verschillende kalenderjaren.

Bij een [`dcat:Distributie`](#dcat-Distribution) zijn de kaders erg duidelijk. Het formaat en de inhoud zijn voor iedere gebruiker hetzelfde. Met deze gedachte is ook de DCAT omschrijving van een distributie ontwikkeld. Maar dat de kaders duidelijk zijn blijkt alleen niet altijd te kloppen. Vaak is het mogelijk om via een API subsets op te vragen, of het formaat te kunnen specificeren. Of het blijkt dat een API zelf meerdere [`dcat:Datasets`](#dcat-Dataset) gebruikt. Om dit alles goed te kunnen omschrijven bleek [[[DCATAPDONL_11]]] niet te voldoen.

De klasse [`dcat:DataService`](#dcat-DataService) maakt het mogelijk om dergelijke situaties wel te beschrijven. Er is mogelijkheid gemaakt om meerdere [`dcat:Datasets`](#dcat-Dataset) als basis te hebben en het is verplicht om te verwijzen naar een handleiding. Daarnaast wordt er niet meer specifiek gevraagd naar een dataformaat of andere strakke kaders.

In de praktijk is het handig om de [`dcat:Distributie`](#dcat-Distribution) te zien als direct downloadbaar bestand en een [`dcat:DataService`](#dcat-DataService) als API.