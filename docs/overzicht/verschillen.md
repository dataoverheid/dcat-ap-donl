## Verschillen

### Introductie van klasse [`dcat:DataService`](#dcat-DataService)

Met een Dataservice kan men toegang krijgen tot (een selectie of bewerking van) gegevens van een 
of meer datasets, speciaal bedoeld voor geautomatiseerde koppelingen tussen systemen. Voorbeelden zijn API- of WMS services.

De DataService klasse is geïntroduceerd in versie 2 van DCAT. Het biedt uitgebreidere mogelijkheden om 
geautomatiseerde toegang tot gegevens te beschrijven dan mogelijk is in de klasse [`dcat:Distributie`](#dcat-Distribution). In deze nieuwe versie van het toepassingsprofiel is de DataService klasse optioneel. Dat betekent dat het mogelijk blijft om dataservices te beschrijven met de klasse Distributie.

### Nieuwe eigenschappen

In het toepassingsprofiel worden nieuwe eigenschappen aangegeven met de tag <em class="new">nieuw</em>.

- De eigenschappen behorend tot de klasse [`dcat:DataService`](#dcat-DataService) zijn nieuw.

- Nieuw is [access service](#dcat-accessService) zodat een distributie naar `dcat:DataService`s kan verwijzen.

- Nieuw is [conforms to](#dct-conformsTo) om de [vindbaarheid](#vindbaarheid) van datasets te verbeteren.

- Nieuw zijn [creator](#dct-creator) en [qualified-attribution](#prov-qualifiedAttribution) om een beter onderscheid te kunnen maken tussen welke rollen verschillende partijen hebben rondom de dataset.

- [Legal foundation](#donl-LegalFoundation) is een aangepaste versie van de `overheid:grondslag` uit [[[DCATAPDONL_11]]].
