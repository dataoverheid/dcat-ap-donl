const respecConfig = {
    latestVersion: "https://dataoverheid.github.io/dcat-ap-donl/",
    editors: [{
        name: "Casper le Gras",
        company: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
    }, {
        name: "Willem ter Berg",
        company: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
    }, {
        name: "Kees Trautwein",
        company: "Logius"
    }],
    formerEditors: [{
        name: "Jan Meijer",
        company: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
    }, {
        name: "Huub van Oers",
        company: "Dienst Uitvoering Onderwijs"
    }],
    license: "document",
    github: {
        branch: "main",
        repoURL: "dataoverheid/dcat-ap-donl",
    },
    xref: "web-platform",
    doJsonLd: true,
    lint: {
        "no-unused-dfns": false
    },
    localBiblio: {
        DONL: {
            title: "data.overheid.nl",
            href: "https://data.overheid.nl/",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        CLUSTERBEGRIPPEN: {
            title: "Clusterbegrippen Stelselcatalogus Logius",
            href: "https://www.stelselcatalogus.nl/clusterbegrippen",
            publisher: "Logius"
        },
        EPSG28992: {
            title: "EPSG:28992",
            href: "https://epsg.io/28992",
            publisher: "NSGI"
        },
        DATA_EU: {
            title: "data.europa.eu",
            href: "https://data.europa.eu/en",
            publisher: "The Publications Office of the European Union"
        },
        DCAT_20: {
            title: "DCAT 2.0",
            href: "https://www.w3.org/TR/vocab-dcat-2",
            publisher: "World Wide Web Consortium"
        },
        DCATAP_21: {
            title: "DCAT-AP 2.1",
            href: "https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/210",
            publisher: "The Publications Office of the European Union"
        },
        DCATAPDONL_11: {
            title: "DCAT-AP-DONL 1.1",
            href: "https://dcat-ap-donl.readthedocs.io/en/latest/",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        DONL_ACCESSRIGHTS_CONCEPTS: {
            title: "donl:AccessRights concepts (Github.com/dataoverheid)",
            href: "https://github.com/dataoverheid/dcat-ap-donl/tree/main/term/access-rights",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        DONL_SUPPORTINGROLE_CONCEPTS: {
            title: "donl:SupportingRole concepts (Github.com/dataoverheid)",
            href: "https://github.com/dataoverheid/dcat-ap-donl/tree/main/term/supporting-roles",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        GEONAMES: {
            title: "GeoNames.org",
            href: "https://www.geonames.org/"
        },
        HTTPS_EN_HSTS: {
            title: "HTTPS en HSTS",
            href: "https://www.forumstandaardisatie.nl/open-standaarden/https-en-hsts",
            publisher: "Forum Standaardisatie"
        },
        IANA_MEDIATYPES: {
            title: "IANA Mediatypes",
            href: "https://www.iana.org/assignments/media-types/media-types.xhtml",
            publisher: "Internet Assigned Numbers Authority"
        },
        ISO8601: {
            title: "ISO-8601",
            href: "https://www.iso.org/iso-8601-date-and-time-format.html",
            publisher: "International Organization for Standardization"
        },
        ISO19115_ROLECODE: {
            title: "ISO-19115 RoleCode",
            href: "https://standards.iso.org/iso/19115/resources/Codelists/gml/CI_RoleCode.xml",
            publisher: "International Organization for Standardization"
        },
        JURICONNECT: {
            title: "Juriconnect",
            href: "https://www.koopoverheid.nl/standaarden/juriconnect",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        JURICONNECT_13: {
            title: "Juriconnect 1.3",
            href: "https://www.juriconnect.nl/downloadreg.asp?bestand=Juriconnect%5FStandaard%5FBWB%5F1%5F3%2Epdf&type=pdf",
        },
        MDR_ACCESSRIGHTS: {
            title: "mdr:AccessRights (publications.europa.eu)",
            href: "https://publications.europa.eu/resource/authority/access-right",
            publisher: "The Publications Office of the European Union"
        },
        MDR_DATATHEME: {
            title: "mdr:DataTheme (publications.europa.eu)",
            href: "https://publications.europa.eu/resource/authority/data-theme",
            publisher: "The Publications Office of the European Union"
        },
        MDR_FILETYPE: {
            title: "mdr:Filetype (publications.europa.eu)",
            href: "https://publications.europa.eu/resource/authority/file-type",
            publisher: "The Publications Office of the European Union"
        },
        MDR_FREQUENCY: {
            title: "mdr:Frequency (publications.europa.eu)",
            href: "https://publications.europa.eu/resource/authority/frequency",
            publisher: "The Publications Office of the European Union"
        },
        MDR_LANGUAGE: {
            title: "mdr:Language (publications.europa.eu)",
            href: "https://publications.europa.eu/resource/authority/language",
            publisher: "The Publications Office of the European Union"
        },
        OWMS_40: {
            title: "OWMS 4.0",
            href: "https://standaarden.overheid.nl/owms/terms",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_EPSG28992: {
            title: "overheid:EPSG28992 (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.epsg28992",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_GEMEENTE: {
            title: "overheid:Gemeente (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/terms/Gemeente",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_KONINKRIJKSDEEL: {
            title: "overheid:Koninkrijksdeel (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/terms/Koninkrijksdeel",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_ORGANISATIE: {
            title: "overheid:Organisatie (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/terms/Organisatie",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_POSTCODEHUISNUMMER: {
            title: "overheid:PostcodeHuisnummer (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas/overheid.postcodehuisnummer",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_PROVINCIE: {
            title: "overheid:Provincie (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/terms/Provincie",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_SYNTAXCODEERSCHEMA: {
            title: "overheid:SyntaxCodeerschema (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/4.0/doc/syntax-codeerschemas",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_TAXONOMIEBELEIDSAGENDA: {
            title: "overheid:TaxonomieBeleidsagenda (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.taxonomiebeleidsagenda",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        OWMS_WATERSCHAP: {
            title: "overheid:Waterschap (standaarden.overheid.nl)",
            href: "https://standaarden.overheid.nl/owms/4.0/doc/waardelijsten/overheid.waterschap",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        },
        SPDX_CHECKSUMALGORITHM: {
            title: "spdx:ChecksumAlgorithm",
            href: "http://spdx.org/rdf/terms#ChecksumAlgorithm",
            publisher: "The Software Package Data Exchange (SPDX)"
        },
        TOOI: {
            title: "TOOI - Thesaurus en Ontologie Overheidsinformatie",
            href: "https://tardis.overheid.nl",
            publisher: "Kennis- en exploitatiecentrum voor Officiële Overheidspublicaties"
        }
    }
};
