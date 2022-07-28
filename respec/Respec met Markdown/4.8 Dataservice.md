| 4.8.01  | Dataservice | eindpunt URL          | dcat:endpointURL         | rdfs:Resource | 1..* | Verplicht  | de locatie of het endpoint van de webservice (a Web-resolvable IRI)               |
|---------|-------------|-----------------------|--------------------------|---------------|------|------------|-----------------------------------------------------------------------------------|
| 4.8.02  | Dataservice | eindpunt beschrijving | dcat:endpointDescription | xsd:string    | 0..1 | Verplicht  | de services die via het endpoint beschikbaar zijn, incl. parameters en functies.  |
| 4.8.03  | Dataservice | bediende dataset      | dcat:servesDataset       | dcat:Dataset  | 0..* | Aanbevolen | de dataset die dit endpoint beschikbaar stelt.                                    |
