## Voorbeelden

### Minimale set van eigenschappen

Onderstaand voorbeeld beschrijft een `dcat:Distribution` met enkel de verplichte eigenschappen. Dit is de meest minimale 
representatie van een `dcat:Distribution`.

<aside class="example" title="Minimale set van eigenschappen">
	<pre>
		<code>
			&lt;ScoreLeefbaarometerBuurt2020&gt; a dcat:Distribution ;
				dcat:accessURL &lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;sites&#x2215;default&#x2215;files&#x2215;dataset&#x2215;f37c3649-cc52-4e48-a864-870ae42807a2&#x2215;resources&#x2215;Leefbaarometer%203.0%20-%20meting%202020%20-%20scores%20buurt.csv&gt; ;
				dct:format &lt;http:&#x2215;&#x2215;publications.europa.eu&#x2215;resource&#x2215;authority&#x2215;file-type&#x2215;CSV&gt; ;
				dct:title "Score Leefbaarometer Buurt 2020"@nl;
				dct:description "Scores (stand en ontwikkeling) leefbaarheid op buurtniveau 2002-2008-2012-2014-2016-2018-2020"@nl;
				dct:license &lt;http:&#x2215;&#x2215;creativecommons.org&#x2215;publicdomain&#x2215;zero&#x2215;1.0&#x2215;deed.nl&gt;;
			.
		</code>
	</pre>
</aside>

### Distributie van een collectie van bestanden

<aside class="example" title="Distributie van een collectie van bestanden">
	<pre>
		<code>
			&lt;ScoreLeefbaarometerBuurt2020&gt; a dcat:Distribution ;
				dcat:accessURL &lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;sites&#x2215;default&#x2215;files&#x2215;dataset&#x2215;f37c3649-cc52-4e48-a864-870ae42807a2&#x2215;resources&#x2215;Leefbaarometer%203.0%20-%20meting%202020%20-%20scores%20buurt.csv&gt; ;
				dct:format &lt;http:&#x2215;&#x2215;publications.europa.eu&#x2215;resource&#x2215;authority&#x2215;file-type&#x2215;PDF&gt; ;
				dct:title "Score Leefbaarometer Buurt 2020"@nl;
				dct:description "Scores (stand en ontwikkeling) leefbaarheid op buurtniveau 2002-2008-2012-2014-2016-2018-2020"@nl;
				dct:license &lt;http:&#x2215;&#x2215;creativecommons.org&#x2215;publicdomain&#x2215;zero&#x2215;1.0&#x2215;deed.nl&gt;;
			.
		</code>
	</pre>
</aside>

### Documentatie als op zichzelf staande distributie
TODO: Supportring Role
<aside class="example" title="Documentatie als op zichzelf staande distributie">
	<pre>
		<code>
			&lt;LeefbaarometerDocumentatie2020&gt; a dcat:Distribution ;
				dcat:accessURL &lt;https:&#x2215;&#x2215;data.overheid.nl&#x2215;OpenDataSets&#x2215;leefbaarometer&#x2215;lbom.zip&gt; ;
				dct:format &lt;http:&#x2215;&#x2215;publications.europa.eu&#x2215;resource&#x2215;authority&#x2215;file-type&#x2215;ZIP&gt; ;
				dct:title "Score Leefbaarometer Grid 2020"@nl;
				dct:description "Scores (stand en ontwikkeling) leefbaarheid op gridniveau 2002-2008-2012-2014-2016-2018-2020. Let op: dit zip bestand bevat zowel de datasets op Gemeente-, Wijk-, Buurt-, PC4- en Grid niveau."@nl;
				dct:license &lt;http:&#x2215;&#x2215;creativecommons.org&#x2215;publicdomain&#x2215;zero&#x2215;1.0&#x2215;deed.nl&gt;;
				donl:supportingRole 
			.
		</code>
	</pre>
</aside>
