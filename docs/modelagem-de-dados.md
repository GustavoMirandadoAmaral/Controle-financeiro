# Modelagem de Dados (Data Modeling)

Este documento define a estrutura das informações que o nosso sistema irá manipular. Como estamos começando sem um banco de dados complexo, essas serão as estruturas dos objetos (JSON) que usaremos na nossa aplicação.

## 1. Transação (Receita ou Despesa)
Representa uma movimentação financeira.
- `id`: (string) Identificador único.
- `titulo`: (string) Nome descritivo (ex: "Conta de Luz", "Salário").
- `valor`: (number) Valor da transação.
- `tipo`: (string) "receita" ou "despesa".
- `categoria`: (string) Categoria (ex: "Moradia", "Alimentação", "Trabalho").
- `data`: (string ou Date) Data em que a transação ocorreu ou ocorrerá.
- `status`: (string) "pago" ou "pendente".

## 2. Investimento
Representa um ativo financeiro.
- `id`: (string) Identificador único.
- `nome`: (string) Nome do investimento (ex: "Tesouro Direto", "Ações BB").
- `tipo`: (string) "Renda Fixa", "Ações", "Fundo Imobiliário", etc.
- `valorAplicado`: (number) Total investido.
- `saldoAtual`: (number) Valor atualizado.
- `rentabilidade`: (number) Porcentagem de rendimento.

*(Essa modelagem será expandida conforme criarmos novas funcionalidades)*
