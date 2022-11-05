import people from './people.json'

// https://www.unimed.coop.br/viver-bem/pais-e-filhos/estatura-por-idade

/** Faça a implementação da função alturaMedia, que deve receber um argumento IPeople, e verificar se a pessoa está acima, abaixo ou exatamente na altura média
 *  OBS: as idades utilizadas serão 5, 10 e 15 apenas.
 */

interface IPeople  
{
    nome: string,
    sexo: string,
    idade: number,
    altura: number
}

export function alturaMedia(pessoa : IPeople) : number 
{
    if (pessoa.idade==5)
    {
        if (pessoa.sexo=='F')
        {
            if (pessoa.altura>109.1)
            {
                return 1
            }

            else if (pessoa.altura==109.1)
            {
                return 0
            }

            else if (pessoa.altura<109.1 && pessoa.altura>0)
            {
                return -1
            }
        }

        else if (pessoa.sexo=='M')
        {
            if (pessoa.altura>108.7)
            {
                return 1
            }

            else if (pessoa.altura==108.7)
            {
                return 0
            }

            else if (pessoa.altura<108.7 && pessoa.altura>0)
            {
                return -1
            }
        }
    }

    else if (pessoa.idade==10)
    {
        if (pessoa.sexo=='F')
        {
            if (pessoa.altura>138.6)
            {
                return 1
            }

            else if (pessoa.altura==138.6)
            {
                return 0
            }

            else if (pessoa.altura<138.6 && pessoa.altura>0)
            {
                return -1
            }
        }

        else if (pessoa.sexo=='M')
        {
            if (pessoa.altura>140.3)
            {
                return 1
            }

            else if (pessoa.altura==140.3)
            {
                return 0
            }

            else if (pessoa.altura<140.3 && pessoa.altura>0)
            {
                return -1
            }
        }
    }

    else if (pessoa.idade==15)
    {
        if (pessoa.sexo=='F')
        {
            if (pessoa.altura>161.1)
            {
                return 1
            }

            else if (pessoa.altura==161.1)
            {
                return 0
            }

            else if (pessoa.altura<161.1 && pessoa.altura>0)
            {
                return -1
            }
        }

        else if (pessoa.sexo=='M')
        {
            if (pessoa.altura>167.8)
            {
                return 1
            }

            else if (pessoa.altura==167.8)
            {
                return 0
            }

            else if (pessoa.altura<167.8 && pessoa.altura>0)
            {
                return -1
            }
        }
    }
    return -2
}

let resultado: number =NaN
for (var pessoa of people)
{
    resultado=alturaMedia(pessoa)
    console.log('Nome:'+pessoa.nome)
    console.log('Idade:'+pessoa.idade)
    console.log('Altura:'+pessoa.altura)
    if (resultado==1)
    {
        console.log('A pessoa está acima da altura média\n')
    }

    else if (resultado==0)
    {
        console.log('A pessoa está na altura média\n')
    }

    else if (resultado==-1)
    {
        console.log('A pessoa está abaixo da altura média\n')
    }

    else
    {
        console.log('Erro por altura inválida')
    }
}