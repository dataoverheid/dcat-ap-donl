### Verschillen

#### Introductie van klasse `dcat:DataService`

In DCAT 1 wordt gebruik gemaakt van de klasse #dcat-Distributie. Deze distributie kan worden gezien als specifieke representatie van een #dcat-Dataset. Zo kan een #dcat-Dataset worden aangeboden in CSV formaat én in JSON, of zijn er subsets beschikbaar over verschillende kalenderjaren.

Bij een distributie zijn de kaders erg duidelijk. Het formaat en de inhoud zijn voor iedere gebruiker hetzelfde. Met deze gedachte is ook de DCAT omschrijving van een distributie ontwikkeld. Maar dat de kaders duidelijk zijn blijkt alleen niet altijd te kloppen. Vaak is het mogelijk om via een API subsets op te vragen, of het formaat te kunnen specificeren. Of het blijkt dat een API zelf meerdere datasets gebruikt. Om dit alles goed te kunnen omschrijven bleek DCAT 1 niet te voldoen.

De klasse #dcat-DataService maakt het mogelijk om dergelijke situaties wel te beschrijven. Er is mogelijkheid gemaakt om meerdere datasets als basis te hebben en het is verplicht om te verwijzen naar een handleiding. Daarnaast wordt er niet meer specifiek gevraad om een dataformaat of andere strakke kaders.

In de praktijk is het handig om de #dcat-Distributie te zien als direct downloadbaar bestand en een #dcat-Dataservice als API.