## Eigenschappen

In de onderstaande tabel worden de eigenschappen van de `donl:LegalFoundation` beschreven.

| **Eigenschap**                                | Kardinaliteit | Aanwezigheid | Herkomst         |
| --------------------------------------------- | ------------- | ------------ | ---------------- |
| [**title**](#dct-title2)                      | `1..1`        | Mandatory    | Legal foundation |
| [**legal domain**](#foaf-homepage)            | `1..1`        | Mandatory    | Legal foundation |
| [**juriconnect code**](#donl-juriconnectCode) | `1..1`        | Mandatory    | Legal foundation |

### title {#dct-title2}

De naam van de wettelijke grondslag. Deze naam is uitsluitend bedoeld voor presentatie doeleinden. Het is geen vereiste 
dat hier de formele naam van de wet of van het wetsartikel wordt opgenomen. "Wet BAG" kan als titel fungeren, terwijl de 
formele titel "Wet basisregistratie adressen en gebouwen" zou zijn.

| Definitie      | Waarde         |
| -------------- | -------------- |
| RDF Eigenschap | `dct:title`    |
| Bereik         | `rdfs:Literal` |
| Kardinaliteit  | `1..1`         |
| Gebruik        | Mandatory      |

### legal domain {#foaf-homepage}

Het domein waarnaar verwezen wordt die de [[[JURICONNECT]]] verwijzing bevat. Dit zal in de meeste gevallen 
[wetten.overheid.nl](https://wetten.overheid.nl) zijn.

| Definitie      | Waarde          |
| -------------- | --------------- |
| RDF Eigenschap | `foaf:homepage` |
| Bereik         | `xsd:anyURI`    |
| Kardinaliteit  | `1..1`          |
| Gebruik        | Mandatory       |

### juriconnect code {#donl-juriconnectCode}

De [[[JURICONNECT]]] code die verwijst naar de daadwerkelijke wettelijke grondslag. 
[wetten.overheid.nl](https://wetten.overheid.nl) ondersteund [[[JURICONNECT_13]]].

| Definitie      | Waarde                 |
| -------------- | ---------------------- |
| RDF Eigenschap | `donl:juriconnectCode` |
| Bereik         | `rdfs:Literal`         |
| Kardinaliteit  | `1..1`                 |
| Gebruik        | Mandatory              |
