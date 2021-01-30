# Prova de Conhecimentos Compasso UOL

## Versão do Node Utilizada v12.13.0

## Subindo aplicação
    1. A aplicação está usando como banco o PG, as informações de conexão devem ser inseridas no arquivo .env
    2. Para rodar as migrações, rodar *npm run migrate:up*
    3. Rodando a aplicação *npm run serve*

    > Ao rodar o migrate já estou populando o banco com todas as cidades e estados do Brasil

### Contexto CIDADE
    1. Cadastrar Cidade *METODO POST*
        http://localhost:5000/cidade
        {
            "nome": "Cidade Qualquer",
            "codigo_cidade": 123456,
            "estado_id": 1
        }

    2. Obter cidade pelo nome *METODO GET*
        http://localhost:5000/cidade/obter-por-nome/Juiz de Fora
    
    3. Obter cidades pelo estado *METODO GET*
        http://localhost:5000/cidade/obter-por-estado/?pagina=2&quantidade=10&estado=Minas

### Contexto ESTADO
    1. Listar estado *METODO GET*
        http://localhost:5000/estados

### Contexto CLIENTE
    1. Cadastrar Cliente *METODO POST*
        http://localhost:5000/cliente
        {
            "nome": "Julio",
            "sexo": "MASCULINO",
            "cidade_id": 1,
            "data_nascimento": "2000-01-01"
        }

    2. Alterar o nome do cliente *METODO PATCH*
        http://localhost:5000/cliente/:id
        {
            "nome": "NOME PARA ATUALIZAÇÃO"
        }

    3. Rovendo Cliente *METODO DELETE*
        http://localhost:5000/cliente/:id

    4. Obter Cliente pelo nome *METODO GET*
        http://localhost:5000/cliente/obter-por-nome/Julio

    5. Obter Cliente pelo Id *METODO GET*
        http://localhost:5000/cliente/obter-por-id/:id



### Arquivo .env
NODE_ENV=development
BLUEBIRD_WARNINGS=0
PORT=5000

DB_HOST=localhost
DB_NAME=UOL
DB_USER=postgres
DB_PASS=123456