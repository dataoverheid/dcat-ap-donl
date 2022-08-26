## Voorbeelden

Naast de onderstaande voorbeelden, biedt het W3C enkele voorbeelden aan van hoe een `dcat:DataService` eruit ziet op 
[www.w3.org/TR/vocab-dcat-2/#examples-data-service](https://www.w3.org/TR/vocab-dcat-2/#examples-data-service).

### Minimale set van eigenschappen

Onderstaand voorbeeld beschrijft een `dcat:DataService` met enkel de verplichte eigenschappen. Dit is de meest minimale 
representatie van een `dcat:DataService`.

<aside class="example" title="Minimale set van eigenschappen">

```turtle
https://example.com/api
  rdf:type dcat:DataService ;
  dct:title "TODO: Voorbeeld beschrijven"@nl ;
```

</aside>

### Een DataService die Datasets ontsluit

De gemeente Nijmegen heeft een publiek beschikbare OGC:WMS webservice waarmee de gemeente gemaakte luchtfoto's aanbiedt. 
Een van de aangeboden luchtfoto's is de "Luchtfoto 2022" (De gemeente maakt jaarlijks luchtfoto's). Deze luchtfoto's 
kunnen individueel (of als bundel) als dataset aangeboden worden. De behoefte bestaat om de relaties tussen de dataset 
en de webservice duidelijk vast te leggen.

Dit voorbeeld uit zich in de volgende RDF (niet relevante eigenschappen zijn weggelaten):

<aside class="example" title="Een DataService die Datasets ontsluit">

```turtle
https://opendata.nijmegen.nl/dataset/luchtfoto-2022
  rdf:type dcat:Dataset ;
  dct:title "Luchtfoto 2022"@nl ;
  dcat:distribution odn.luchtfoto-2022.distribution.1 ;
  dcat:distribution odn.luchtfoto-2022.distribution.2 ;
  
odn.luchtfoto-2022.distribution.1
  rdf:type dcat:Distribution ;
  dct:title "Lage resolutie"@nl ;
  dcat:accessURL https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto?&service=WMS&version=1.3.0&request=GetMap&layers=Luchtfoto2022.ecw&styles=default&transparent=true&CRS=EPSG:28992&bbox=176999.975,420000.025,191999.975,435500.025&width=750&height=775&format=image/png ;
  dcat:accessService https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto ;

odn.luchtfoto-2022.distribution.2
  rdf:type dcat:Distribution ;
  dct:title "Hoge resolutie"@nl ;
  dcat:accessURL https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto?&service=WMS&version=1.3.0&request=GetMap&layers=Luchtfoto2022.ecw&styles=default&transparent=true&CRS=EPSG:28992&bbox=176999.975,420000.025,191999.975,435500.025&width=3000&height=3100&format=image/png ;
  dcat:accessService https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto ;
  
https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto
  rdf:type dcat:DataService ;
  dcat:endpointURL https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto?&request=getCapabilities&service=WMS ;
  rdf:servesDataset https://opendata.nijmegen.nl/dataset/luchtfoto-2022 ;
```

</aside>

We zien hier de dataset `https://opendata.nijmegen.nl/dataset/luchtfoto-2022` met een tweetal distributies. In de 
eigenschappen van de distributies is de relatie opgenomen via welke dataservice ze ontsloten worden. Daarnaast zien we
de dataservice `https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto`. In de eigenschappen van deze dataservice
is opgenomen dat deze de `https://opendata.nijmegen.nl/dataset/luchtfoto-2022` dataset ontsluit.
