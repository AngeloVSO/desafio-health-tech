# Desafio - Funcional Health Tech

## Objetivo
Desenvolver uma API em NodeJS que simule algumas funcionalidades de um banco digital.
Nesta simulação considere que não há necessidade de autenticação.

## Desafio
Você deverá garantir que o usuário conseguirá realizar uma movimentação de sua conta corrente para quitar uma dívida.

## Cenários

DADO QUE eu consuma a API <br>
QUANDO eu chamar a mutation `sacar` informando o número da conta e um valor válido<br>
ENTÃO o saldo da minha conta no banco de dados reduzirá de acordo<br>
E a mutation retornará o saldo atualizado.

DADO QUE eu consuma a API <br>
QUANDO eu chamar a mutation `sacar` informando o número da conta e um valor maior do que o meu saldo<br>
ENTÃO a mutation me retornará um erro informando que eu não tenho saldo suficiente

DADO QUE eu consuma a API <br>
QUANDO eu chamar a mutation `depositar` informando o número da conta e um valor válido<br>
ENTÃO a mutation atualizará o saldo da conta no banco de dados<br>
E a mutation retornará o saldo atualizado.

DADO QUE eu consuma a API <br>
QUANDO eu chamar a query `saldo` informando o número da conta<br>
ENTÃO a query retornará o saldo atualizado.

## Tecnologias utilizadas:

```
- NodeJS
- GraphQL
- GraphTools
- ApolloServer
- Knex
- MySql
- Dotenv
```
## Commo rodar:

1 - Clone o repositório
```
git clone https://github.com/AngeloVSO/funcional-health-tech
```

2 - Instale as dependências do projeto com seu gerenciador de pacotes favorito:

#### NPM ou YARN
```
npm install ou yarn
```

3 - Informe os dados necessários para conexão com banco MySQL que está no arquivo .env na pasta raíz do projeto.

4 - Em seu terminal, rode o comando para criar tabela no banco de dados:
```
npm ou yarn knex migrate:latest
```

5 - Em seu terminal, rode o comando para popular tabela no banco de dados:
```
npm ou yarn knex seed:run - o número da conta: 54678 , saldo: 1000.00
```

6 - Em seu terminal, rode o comando para rodar aplicação localmente:
```
npm run start ou yarn start - onde a aplicação rodará em http://localhost:4000/
```

## O que funciona:

- É possível verificar o saldo através da "query saldo", informando o número da conta 54678

- É possível verificar se a conta é válida, retornando um erro caso não exista no banco de dados

- É possível fazer um saque através da "mutation sacar" da conta

- É possível verificar no momento do saque se a conta é válida, retornando um erro caso não exista no banco de dados

- É possível verificar no momento do saque se o valor é menor ou igual ao saldo, retornando um erro caso valor 
seja maior que o saldo

- É possível verificar no momento do saque se o valor é menor ou igual a zero, retornando um erro caso valor 
seja zero ou negativo

- É possível fazer um depósito na conta através da "mutation depositar", informando o número da conta 54678 e valor

- É possível verificar no momento do depósito se a conta é válida, retornando um erro caso não exista no banco de dados

- É possível verificar no momento do depósito se o valor é menor ou igual a zero, retornando um erro caso valor 
seja zero ou negativo


**Mini Documentação da API:**

Requisições:
```
{
  saldo(conta: 54678) {
    conta saldo
  }
}
```

```
mutation {
  sacar(conta: 54321, valor: 140) {
    conta saldo
  }
}
```

```
mutation {
  depositar(conta: 54321, valor: 140) {
    conta
    saldo
  }
}
```

---

<h2>Autor<h2>

<table>
  <tr>
    <td align="center"><a href="https://github.com/AngeloVSO">
    <img src="https://avatars.githubusercontent.com/u/70985334?v=4" width="100px" alt="Imagem do perfil do
    Angelo O'Dwyer"/>
    <br />
    <sub><b>Angelo O'Dwyer</b></sub><br /></td>
</table>



