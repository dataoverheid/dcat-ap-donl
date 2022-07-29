## A Eigenschappen die niet worden overgenomen

### thema's
| Definitie      | thema's                                                                                                                                                          |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Klasse         | Catalogus                                                                                                                                                        |
| RDF Eigenschap | dcat:themeTaxonomy                                                                                                                                               |
| Bereik         | xsd:anyURI van een waardelijst, zoals gepubliceerd op https://waardelijsten.dcat-ap-donl.nl/                                                                     |
| Kardinaliteit	 | 0..*                                                                                                                                                             |
| Gebruik        | Verplicht                                                                                                                                                        |
| Noot           | de waardelijst (controlled vocabularie) met thema's die (in eigenschap dcat:theme) gekoppeld kunnen worden aan de resources die zijn opgenomen in de catalogus.  |																						   |

### has part  
| Definitie      | has part                                                                                                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Klasse         | Catalogus                                                                                                                                                                                                |
| RDF Eigenschap | dct:hasPart                                                                                                                                                                                              |
| Bereik         | dcat:themeTaxonomy                                                                                                                                                                                       |
| Kardinaliteit	 | dcat:Resource                                                                                                                                                                                            |
| Gebruik   	 | 0..0                                                                                                                                                                                                     |                                                                                                                                                                                         |
| Noot      	 | Deze eigenschap beschrijft de administratieve metadata van de registratie van een resource in een catalogus. HIerbij kan worden gedacht aan de datum/tijd waarop een bepaalde resource is geregistreerd  |
