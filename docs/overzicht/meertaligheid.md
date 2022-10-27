### Ondersteuning voor meertaligheid

In [language](#dct-language1) en [resource language](#dct-language) kunnen de talen worden beschreven die worden gebruikt in inhoud van de resource of distributie. Zo zal een dataset over straatmeubilair waarin de waardes 'lantarenpaal' of 'bankje' worden gebruikt als 
[resource language](#dct-language) 'Nederlands' krijgen. Dit is ongeacht of deze taal of talen gebruikt worden in de metadata. Wanneer er meerdere talen worden gebruikt wordt de eigenschap herhaalt voor alle gebruikte talen. Wanneer de inhoud geen taal bevat bevat, bijvoorbeeld omdat alle waardes nummeriek  zijn, worden deze eigenschappen weg gelaten.

Eigenschappen als `dct:title`, `dct:description` en `dct:rights` kunnen waardes in verschillende talen bevatten. Voor elke vertaling wordt de eigenschap herhaald met de toevoeging van een language tag om aan te geven in welke taal de waarde geschreven is. Elke taal mag maar één keer voorkomen. 

In dit [[[DONL]]] profiel worden de volgende talen onderteund:

| Taal       | Tag |
|------------|-----|
| Duits      | de  |
| Engels     | en  |
| Fries      | fy  |
| Nederlands | nl  |

Op data.overheid.nl worden teksten geïndexeerd, zodat eindgebruikers de datasets, dataservices of catalogi kunnen terugvinden op basis van één of meer woorden in de tekst.
