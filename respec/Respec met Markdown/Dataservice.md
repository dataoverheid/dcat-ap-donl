## Dataservice

### endpoint URL

De locatie of het endpoint van de webservice (a Web-resolvable IRI)

| Definitie      | Eindpunt URL       |
| -------------- | ------------------ |
| RDF Eigenschap | `dcat:endpointURL` |
| Bereik         | `rdfs:Resource`    |
| Kardinaliteit  | `1..*`             |
| Gebruik        | Verplicht          |

### endpoint description

De services die via het endpoint beschikbaar zijn, incl. parameters en functies.

| Definitie      | Eindpunt beschrijving      |
| -------------- | -------------------------- |
| RDF Eigenschap | `dcat:endpointDescription` |
| Bereik         | `xsd:string`               |
| Kardinaliteit  | `0..1`                     |
| Gebruik        | Verplicht                  |

<p class="note" title="Note">
	Op dit punt zouden data.overheid.nl en developer.overheid.nl kunnen samenwerken. Eindgebruikers zijn hier gebaat bij een duidelijke uitleg en voorbeelden. Het heeft niet zoveel zin om deze 2x te bedenken.
</p>

### serves dataset

De dataset die dit endpoint beschikbaar stelt.

| Definitie      | Bediende dataset     |
| -------------- | -------------------- |
| RDF Eigenschap | `dcat:servesDataset` |
| Bereik         | `dcat:Dataset`       |
| Kardinaliteit  | `0..*`               |
| Gebruik        | Aanbevolen           |

<p class="note" title="Note">
	Volgens DCAT-AP kan een dataservice voorkomen zonder bijbehorende dataset, maar kan een dataservice ook gerelateerd zijn met meerdere datasets. Verder overlappen de gegevens van dataset en dataservice elkaar grotendeels, omdat het beide "resources" zijn en dus de eigenschappen overerven van `dcat:CatalogResource`.
</p>

<p class="note" title="Note">
	Als een dataset alleen gedistribueerd wordt via een dataservice (endpoint) dan wordt deze geregistreerd als `dcat:DataService`. Als de dataset daarnaast ook andere distributies heeft, dan wordt ook een instantie dcat:Dataset aangemaakt. In dat geval worden de eigenschappen van de superklasse van catalog resource dubbel vastgelegd, dus zowel in de dataset als in de bijbehorende dataservice.
</p>