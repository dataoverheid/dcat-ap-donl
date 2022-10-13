## Voorbeelden

Naast de onderstaande voorbeelden, biedt het W3C enkele voorbeelden aan van hoe een `dcat:DataService` eruit ziet op 
[www.w3.org/TR/vocab-dcat-2/#examples-data-service](https://www.w3.org/TR/vocab-dcat-2/#examples-data-service).

### Minimale set van eigenschappen

Onderstaand voorbeeld beschrijft een `dcat:DataService` met enkel de verplichte eigenschappen. Dit is de meest minimale 
representatie van een `dcat:DataService`.

<aside class="example" title="Minimale set van eigenschappen">

<pre>
	<code>
    &lt;OData/v4/2.0&gt; a dcat:DataService;
      dct:identifier &lt;OData/v4/2.0&gt;;
      dct:title "OData API";
      dct:description "Gebruik de OData API voor het opvragen van data met een zelfopgestelde zoekvraag in de vorm van een URL (query). De OData API levert de data in het machineleesbare bestandsformaat JSON.";
      dct:license &lt;http://creativecommons.org/publicdomain/zero/1.0/deed.nl&gt;;
      dct:creator &lt;http://standaarden.overheid.nl/owms/terms/Tweede_Kamer_der_Staten-Generaal&gt;;
      dct:publisher &lt;http://standaarden.overheid.nl/owms/terms/Tweede_Kamer_der_Staten-Generaal&gt;;
      dcat:contactPoint [a vcard:Organization ;
        vcard:fn "Tweede Kamer der Staten-Generaal";
        vcard:hasEmail "opendata@tweedekamer.nl";
      ];
      dcat:theme &lt;http://standaarden.overheid.nl/owms/terms/Parlement&gt;;
      dcat:endpointURL &lt;https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0&gt;;
      dcat:endpointDescription &lt;https://opendata.tweedekamer.nl/documentatie/odata-api&gt;;
    .
  </code>
</pre>  

</aside>

### Een DataService die Datasets ontsluit

De gemeente Nijmegen heeft een publiek beschikbare `OGC:WMS` webservice waarmee de gemeente gemaakte luchtfoto's 
aanbiedt. Een van de aangeboden luchtfoto's is de "Luchtfoto 2022" (De gemeente maakt jaarlijks luchtfoto's). Deze 
luchtfoto's kunnen individueel (of als bundel) als dataset aangeboden worden. De behoefte bestaat om de relaties tussen 
de dataset en de webservice duidelijk vast te leggen.

Dit voorbeeld uit zich in de volgende RDF (niet relevante eigenschappen zijn weggelaten):

<aside class="example" title="Een DataService die Datasets ontsluit">
  <pre>
    <code>
    &lt;https:&#x2215;&#x2215;opendata.nijmegen.nl&#x2215;dataset&#x2215;luchtfoto-2022&gt; a dcat:Dataset;
      dct:title "Luchtfoto 2022"@nl ;
      dcat:distribution &lt;odn.luchtfoto-2022.distribution.1&gt; ;
      dcat:distribution &lt;odn.luchtfoto-2022.distribution.2&gt; ;<br>
    &lt;odn.luchtfoto-2022.distribution.1&gt; [ a dcat:Distribution ;
      dct:title "Lage resolutie"@nl ;
      dcat:accessURL &lt;https:&#x2215;&#x2215;services.nijmegen.nl&#x2215;geoservices&#x2215;wms&#x2215;extern_Luchtfoto?&service=WMS&version=1.3.0&request=GetMap&layers=Luchtfoto2022.ecw&styles=default&transparent=true&CRS=EPSG:28992&bbox=176999.975,420000.025,191999.975,435500.025&width=750&height=775&format=image&#x2215;png&gt;;
      dcat:accessService &lt;https:&#x2215;&#x2215;services.nijmegen.nl&#x2215;geoservices&#x2215;wms&#x2215;extern_Luchtfoto&gt;;
      ];<br>
    &lt;odn.luchtfoto-2022.distribution.2&gt; [ a dcat:Distribution ;
      dct:title "Hoge resolutie"@nl ;
      dcat:accessURL &lt;https:&#x2215;&#x2215;services.nijmegen.nl&#x2215;geoservices&#x2215;wms&#x2215;extern_Luchtfoto?&service=WMS&version=1.3.0&request=GetMap&layers=Luchtfoto2022.ecw&styles=default&transparent=true&CRS=EPSG:28992&bbox=176999.975,420000.025,191999.975,435500.025&width=3000&height=3100&format=image&#x2215;png&gt; ;
      dcat:accessService &lt;https:&#x2215;&#x2215;services.nijmegen.nl&#x2215;geoservices&#x2215;wms&#x2215;extern_Luchtfoto&gt; ;
      ];<br>
    &lt;https:&#x2215;&#x2215;services.nijmegen.nl&#x2215;geoservices&#x2215;wms&#x2215;extern_Luchtfoto&gt; [ a dcat:DataService ;
      dcat:endpointURL &lt;https:&#x2215;&#x2215;services.nijmegen.nl&#x2215;geoservices&#x2215;wms&#x2215;extern_Luchtfoto?&request=getCapabilities&service=WMS&gt; ;
      rdf:servesDataset &lt;https:&#x2215;&#x2215;opendata.nijmegen.nl&#x2215;dataset&#x2215;luchtfoto-2022&gt; ;
      ];
    .
    </code>
  </pre>  
</aside>

We zien hier de dataset `https://opendata.nijmegen.nl/dataset/luchtfoto-2022` met een tweetal distributies. In de 
eigenschappen van de distributies is de relatie opgenomen via welke dataservice ze ontsloten worden. Daarnaast zien we
de dataservice `https://services.nijmegen.nl/geoservices/wms/extern_Luchtfoto`. In de eigenschappen van deze dataservice
is opgenomen dat deze de `https://opendata.nijmegen.nl/dataset/luchtfoto-2022` dataset ontsluit.
