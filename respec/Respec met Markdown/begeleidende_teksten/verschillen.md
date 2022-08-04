## Verschillen

### Introductie van klasse Resource
In DCAT 1 konden alleen "datasets" worden opgenomen in een catalogus; in DCAT 2 is dat uitgebreid. Nu kunnen naast datasets ook dataservices en catalogi worden opgenomen in een catalogus. Deze drie resources hebben kenmerken die elkaar deels overlappen. Het informatiemodel van DCAT 2 heeft dat opgelost door een aparte superklasse dcat:Resource te introduceren waarin deze overlappende eigenschappen zijn opgenomen. Een voorbeeld hiervan is eigenschap dcterms:title. Elke resource heeft een titel, maar door deze op te nemen in Resource, hoeft deze in het informatiemodel niet bij elke resource apart te worden opgenomen.

### Introductie van klasse Dataservice