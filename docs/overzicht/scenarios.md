Hoe kan DCAT worden gebruikt in de volgende scenarios?

#### Invullen van thema-eigenschappen

Thema's zijn de belangrijkste inhoudelijke eigenschap waarop informatie op [=DONL=] eenduidige doorzocht kan worden. De thema eigenschap is gedefinieerd voor [dcat:Dataset](#dcat-Dataset), [dcat:DataService](#dcat-DataService) en voor [dcat:Catalog](#dcat-Catalog). Er zijn meerdere thema waardes toegestaan per beschrijving. 

Zoals te lezen is in de paragraaf [Vindbaarheid](#thema-s-uit-een-voorgedefinieerde-lijst) kunnen op [=DONL=] alleen thema's worden  gekozen die door DONL zelf worden aangeboden. In lokale [=DCAT beschrijving=]en kunnen andere thema-taxonomieën worden gebruikt, zelfs per [dcat:Catalog](#dcat-Catalog) gedefinieerd, maar omdat DONL geen externe catalogi inleest, kunnen er op die manier geen thema-lijsten worden toegevoegd. DONL gaat de lijst met aangeboden thema-taxonomiën in de toekomst actief te onderhouden en indien nodig uit te breiden. 

Op dit moment zijn er tweede thema-lijsten waaruit waardes gekozen kunnen worden:

| Naam themalijst                                                                      | Type               | Gebruik     |
| ------------------------------------------------------------------------------------ | ------------------ | ----------- |
| [[[OWMS_TAXONOMIEBELEIDSAGENDA]]]                                                    | Waardelijst        | Mandatory   |
| [[[CLUSTERBEGRIPPEN]]]                                                               | Waardelijst        | Recommended |

Uit de Taxonomiebeleidsagenda kiest u een waarde die beschrijft op welke gebied de gegevens betrekking hebben. Probeer hierbij zo specifiek mogelijk te zijn. 

##### Clusterbegrippen
Kies ook één of meer clusterbegrippen die aangeven welke informatie in uw gegevens belangrijk is. Het zal voorkomen dat geen van de Clusterbegrippen verwijst naar informatie in uw gegevens. In dat geval vult u geen Clusterbegrip in. Als u vindt dat er een Clusterbegrip ontbreekt in de lijst, kunt u [contact opnemen met Stelselcatalogus](https://www.stelselcatalogus.nl/contact) om dat eventueel te laten toevoegen.

In onderstaand voorbeeld zijn zes waardes uit de taxonomie belaidsagenda en de Clusterbegrippen opgenomen om de aangeboden gegevens in de data service goed te beschrijven.

<aside class="example" title="Thema's kiezen">
	<pre>
        ex:Test a dcat:DataService;
          dct:title "Example Data Service"@nl ;
          dct:accessRights <http://publications.europa.eu/resource/authority/access-right/PUBLIC> ;
          dct:conformsTo <https://jsonapi.org> ;
          dct:description "Een overzicht van alle partijen betrokken bij recente aanbestedingen gerelateerd aan bouwen van de overheid" ;
          dcat:theme <http://standaarden.overheid.nl/owms/terms/Bouwen_en_verbouwen> ;
          dcat:theme <http://standaarden.overheid.nl/owms/terms/Ruimtelijke_ordening> ;
          dcat:theme <http://standaarden.overheid.nl/owms/terms/Ruimte_en_infrastructuur> ;
          dcat:theme <http://standaarden.overheid.nl/owms/terms/Rijksoverheid> ;
          dcat:theme <https://opendata.stelselcatalogus.nl/doc/clusterbegrip/Organisatie> ;
          dcat:theme <https://opendata.stelselcatalogus.nl/doc/clusterbegrip/Onroerende_zaak> ;
          dcat:endpointURL <https:∕∕api.examle.com> ;
        .
    </pre>
</aside>

#### Gesloten data beschrijven met DCAT

#### Organisaties die geen overheid zijn

#### Invullen creator en publisher

#### Wat doe ik als ik een REST/JSON wil omschrijven in DCAT?

#### Wat doe ik als ik een Excel wil delen?

#### [=DCAT beschrijving=] voor intern gebruik ontwikkelen

#### Interne [=DCAT beschrijving=] uitwisselen met DONL
