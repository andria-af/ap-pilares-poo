

//1

export abstract class  Ingresso {
    constructor(
        public valorR$: number = 100,
    ){}

    public imprimeValor(): void {

    }
}

//a 

export class Normal extends Ingresso{

    public imprimeValor(): void {
        console.log(`Valor do ingresso normal R$=${this.valorR$}`) 
    }

}

//b 

export class Vip extends Ingresso{
    constructor (
        public valorAdicional: number = 100,
        
    ){super()}

    public imprimeValor(): void {
        this.valorR$= this.valorR$+ this.valorAdicional
        console.log(`Valor do ingresso Vip = ${this.valorR$}`)
    }
}

//c

export class Camarote extends Ingresso{
    constructor (
        public valorAdicional: number = 200,
    ){super()}

    public imprimeValor(
        
    ): void {
        this.valorR$= this.valorR$+ this.valorAdicional
        console.log(`Valor do ingresso Camarote= ${this.valorR$}`)
    }
}

//2

export class Imovel {
    constructor(endereço: string, preco: number){}
}

//a 
export class Novo extends Imovel{
    constructor(endereco: string, preco: number, private _precoAdicional= 1000){
        super(endereco, preco)
    }

    public get precoAdicional(): number{
        return this._precoAdicional
    }

    public imprimeValor(){
        console.log(`O valor adicional do imóvel novo é de: R$ ${this._precoAdicional}`)
    }

}

//a 
export class Velho extends Imovel{
    constructor(endereco: string, preco: number, private _precoDesconto= 1000){
        super(endereco, preco)
    }

    public get precoDesconto(): number{
        return this._precoDesconto
    }

    public imprimeValor(){
        console.log(`O valor de desconto do imóvel velho é de: - R$ ${this._precoDesconto}`)
    }

}

//2

export class Animal {
    constructor(private _especie: string, private _corPelo: string){}

    public come(): void{
   }
}

export class Cachorro extends Animal{
    constructor(_especie: string, _corPelo: string){
        super(_especie, _corPelo)
    }

    public late(): void {
        console.log("Cachorro latindo...")
    }

    public come(): void {
        console.log("Comendo...")
    }
}

export class Cavalo extends Animal{
    constructor(_especie: string, _corPelo: string){
        super(_especie, _corPelo)
    }

    public relincha(): void {
        console.log("Cavalo relinchando...")
    }

    public come(): void {
        console.log("Comendo...")        
    }
}

export class Gato extends Animal{
    constructor(_especie: string, _corPelo: string){
        super(_especie, _corPelo)
    }

    public ronrona(): void {
        console.log("Gato ronronando...")
        
    }

    public come(): void {
        console.log("Comendo...")
    }
}