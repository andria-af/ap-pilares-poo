import { Cavalo, Gato, Cachorro, Ingresso, Normal, Vip, Camarote, Velho, Novo, Imovel} from "./classes";


// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

const ingresso= new Normal();
ingresso.imprimeValor();

const ingressoVip= new Vip();
ingressoVip.imprimeValor();

const ingressoCamarote= new Camarote();
ingressoCamarote.imprimeValor();

// 2

const imovelNovo= new Novo("avenida independencia", 200000);
imovelNovo.imprimeValor();

const imovelVelho= new Velho("avenida independencia", 200000);
imovelVelho.imprimeValor();

// 3

const gato= new Gato("Felis catus", "amarelo")
gato.ronrona();

const cachorro= new Cachorro("C. lupus", "preto")
cachorro.late();

const cavalo= new Cavalo("Equus ferus", "marrom")
cavalo.relincha();
