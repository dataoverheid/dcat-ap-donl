In de klasses [`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService) en [`dcat:Catalog`](#dcat-Catalog) worden veel dezelfde 
eigenschappen gebruikt. Om niet al deze eigenschappen voor elke klasse opnieuw te hoeven definiëren is de superklasse 
[`dcat:Resource`](#dcat-Resource) geïntroduceerd. Deze superklasse beschrijft deze gedeelde eigenschappen op één plaats, wat de specificatie van DCAT overzichtelijker maakt.

In een DCAT beschrijving kan een [`dcat:Resource`](#dcat-Resource) niet voorkomen, alleen de hierboven genoemde, afgeleide klasses zijn toegestaan net als natuurlijk niet van Resource afgeleide klasses uit dit DCAT profiel.
