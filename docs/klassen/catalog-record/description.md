<p class="note" title="Niet gebruikt door DONL.">
    De klasse Catalog Record wordt in de praktijk voor DONL niet gebruikt, het ontwerp is al wel gemaakt in dit
    toepassingsprofiel en is te vinden in <a href="#Catalogus_properties">Bijlage catalogus</a>
</p>
<p> Een Catalogusrecord geeft informatie over de registratie van een dcat:Resource in een catalogus. Het bevat
    de administratieve metadata van het dataportaal.</p>
<p>
    Bij de uitwisseling van de metadata van datasets (of andere DCAT resources) tussen dataportalen kan het
    voorkomen die metadata voldoen aan een specifieke toepassingsprofielen van DCAT. Op data.overheid.nl is het
    streven erop gericht om te standaardiseren op DCAT-AP-DONL-2, maar dat neemt niet weg dat de metadata ook
    kunnen voldoen aan de vorige versie van DCAT-AP-DONL (1.1), of aan een geheel andere, bijvoorbeeld het
    Europese DCAT-AP. In het Catalogusrecord kan de aanbieder van de data specificeren aan wel
    toepassingsprofiel de metadata voldoet.
</p>
<p>
    Deze klasse is optioneel en niet alle catalogi maken hiervan gebruik. Het is vooral bedoeld voor catalogi
    die een onderscheid maken tussen de metadata over een dataset of dataservice en metadata over een voorkomen
    van een dataset of dataservice in een catalogus. Eigenschap publicatiedatum van een dataset beschrijft
    bijvoorbeeld de datum waarop de data-eigenaar de gegevens in eerste instantie heeft gepubliceerd, terwijl de
    publicatiedatum van het catalogus record de datum beschrijft waarop de dataset is opgenomen in de catalogus.
</p>
