# Sobre

# Sumário
- [Dependencias](#instrucoes)
- [Testes](#testes)
- [Uso](#uso)

# Instruções 

### 1. Dependências 
- Docker
- Docker Compose

### 2. Inicie Docker 

- Production

```
  docker-compose up -d
```

- Development

```
  docker-compose -f docker-compose-dev.yml up -d
```


### 3. Abra o postman

```
    http://localhost:9099
```

### 4. Para executar comandos na api

```
	bash cmd.sh yarn
```

### 5. Logs

Para ver os logs gerados pela aplicação, execute

```
  docker exec -it api.preach.dev
```

Para ver os logs gerados pelo banco, execute

```
  docker exec -it db.preach.dev
```

# Testes

# Uso

## Consulta

(fixo por enquanto)

```
	http://localhost:3333/bible/verse
```

## Eventos Socket

### Scroll da Biblia

Evento: 'scrollBible'
Retorno: 
- line: Posicao da linha em que o emissor se encontra


