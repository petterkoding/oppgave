type Base = {
    lastchanged: string;
    opprettetdato: string;
    produksjonsplassid: number;
}


interface Produksjonsplass extends Base {
    bruksnummer: number;
    bygningsnummer: number;
    gaardsnummer: number;
    kommunenummer: string;
    koordinater?:  string | NullorUndefined;
    koordinatsystem: string;
}


type ResponseData = {
    data: ProduksjonsplassInfo[]
    loading: boolean,
    errors: Object,
}

type NullorUndefined = null | undefined