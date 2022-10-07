In de klasses [`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService) en [`dcat:Catalog`](#dcat-Catalog) worden veel dezelfde 
eigenschappen gebruikt. Om niet al deze eigenschappen voor elke klasse opnieuw te hoeven definiëren is de superklasse 
[`dcat:Resource`](#dcat-Resource) geïntroduceerd. Dat betekent dat een alleenstaande [`dcat:Resource`](#dcat-Resource) 
niet mogelijk is, maar dat deze altijd een onderdeel is van de boven genoemde DCAT klasses.

Deze superklasse maakt het in de toekomst makkelijker om het informatiemodel van DCAT uit te breiden met nieuwe 
resources.
