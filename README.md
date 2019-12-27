# Sobre

# Sumário

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

### 4. Logs

Para ver os logs gerados pela aplicação, execute

```
  docker exec -it api.preach.dev
```

Para ver os logs gerados pelo banco, execute

```
  docker exec -it db.preach.dev
```
