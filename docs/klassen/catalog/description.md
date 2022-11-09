<aside class="note">

Hoewel [[[DONL]]] zelf wel `dcat:Catalog`s aanbiedt, kunnen data-eigenaren hun eigen 
`dcat:Catalog`s niet uitwisselen met [[[DONL]]].

</aside>

> Subklasse van [`dcat:Dataset`](#dcat-Dataset).

`dcat:Catalog` maakt het mogelijk om structuur aan te brengen in een DCAT beschrijving zonder de eigenschappen van de [`dcat:Resource`](#dcat-Resource) te veranderen. Instanties van de klasses
[`dcat:Dataset`](#dcat-Dataset), [`dcat:DataService`](#dcat-DataService), [`dcat:CatalogRecord`](#dcat-CatalogRecord) 
en [`dcat:Catalog`](#dcat-Catalog) zelf kunnen volgens eigen criteria verzameld worden in een overkoepelende `dcat:Catalog`. 
Naast het opdelen van complexe DCAT beschrijvingen in samenhangende delen, wordt ook het omgekeerde mogelijk: Verschillende beschrijvingen kunnen in één DCAT gecombineerd worden. 

Het gebruik van de term 'catalogus' kan verwarring opleveren. In het Nederlands (resp. Engels) is een catalogus (resp. catalogue) een register of lijst waarin een verzameling voorwerpen of termen is opgenomen, vaak met een korte omschrijving of definitie en een aantal bijzonderheden. In de informatietechnologie worden diverse soorten catalogi opgesteld, zoals termenlijsten of taxonomieën. Een dcat:Catalog is een verzameling dcat klasses, dus een verzameling van dcat:Datasets, dcat:Distributies of andere catalogi. Een dcat:catalogus is niet geschikt om de meer algemene rol van een catalogus te vervullen. DCAT kan wel gebruikt worden om een dergelijke catalogus (en het ontsluiten ervan) te beschrijven met dcat:Dataset, dcat:Distribution en dcat:DataService.

In grote datacatalogi als [[[DONL]]] of [[[DATA_EU]]] wordt DCAT  
informatie van een groot aantal datasets en aanbieders verzameld. Een dcat:catalogus kan dan bijvoorbeeld worden gebruikt om de datasets 
van één aanbieder te groeperen. Een voorbeeld hiervan is: 
[alle data van de `gemeente Arnhem`](https://data.overheid.nl/datasets?facet_catalog[]=http://opendata.arnhem.nl/). dcat:Catalogue stelt geen eisen aan de indeling van een DCAT beschrijving, dus ook andere catalogs zijn mogelijk zoals
[de meest populaire data van het jaar](https://data.overheid.nl/statistieken/meest-bekeken-datasets). 

Het laatste voorbeeld is de catalogus op basis van een gedeeld onderwerp. Hiermee kunnen gegevens waarvan door de aanbieders niet met behulp van een dcat:theme, dcat:keyword, dct:conformsTo of op een andere wijze is aangegeven dat ze een bepaald onderwerp betreffen, toch in een catalog over dat onderwerp worden opgenomen, zonder dat de oorspronkelijk aangeleverde gegevens gewijzigd hoeven te worden. Met de juiste attributen kan deze catalog zelf worden voorzien van de juiste thema's, keywords etc. Een voorbeeld hiervan zou een catalog kunnen zijn waarmee de impact van de Corona pandemie zichtbaar wordt. Toen de pandemie uitbrak waren er vanzelfsprekend geen DCAT beschrijvingen waarin COVID was opgenomen. Een COVID catalogus zou gegevens kunnen bevatten met medische data en sterftecijfers, maar economische of sociale data. Eventueel kan met de hand of op basis van meerdere filters een Corona catalogus aangemaakt.

<div class="issue" data-number="21"></div>
