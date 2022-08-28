In de klasses <a href="#Catalogus">`catalogus`</a>, <a href="#dcat-Dataset">`dataset`</a> en <a href="#dcat-DataService">`dataservice `</a> worden veel dezelfde eigenschappen gebruikt.
    Om niet al deze eigenschappen voor elke klasse opnieuw te hoeven definieren is de superklasse <a
        href="#dcat-Resource">`resource`</a> geintroduceerd.
    Dat betekend dat men een alleenstaande `dcat:resource` niet mogelijk is, maar dat deze
    altijd een onderdeel is van de boven genoemde dcat klasses.

Deze superklasse maakt het in de toekomst makkelijker om het informatiemodel van DCAT uit te breiden met nieuwe 
resources.
