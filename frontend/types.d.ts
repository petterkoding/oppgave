type Base = {
    lastchanged: string;
    opprettetdato: string;
    produksjonsplassid: number;
}
type Koordinater ={
    coordinates: number[];
    crs: {
        type: string;
        properties: {
            name: string;
        }
    }
    type: string;
}




interface Produksjonsplass extends Base {
    bruksnummer: number;
    bygningsnummer: number;
    gaardsnummer: number;
    kommunenummer: string;
    koordinater: string | ReactNode | null ;
    koordinatsystem: string | null;
}


type ResponseData = {
    data: ProduksjonsplassInfo[]
    loading: boolean,
    errors?: object,
}


type ParseString = (s:string) => ReactNode