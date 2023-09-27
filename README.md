# Sons of Node

A Sons of Node é uma empresa brasileira que se concentra em solucionar desafios educacionais. Nossa missão é melhorar o ensino no Brasil por meio de soluções inovadoras.

Este é o projeto **Sons of Node**, uma aplicação React e este guia fornecerá uma descrição básica de como configurar e executar este projeto localmente usando Docker.

## Pré-requisitos

- Docker e Docker Compose instalados em sua máquina.

## Setup do Projeto

1. **Clonar o repositório**

   Utilize o comando abaixo para clonar o repositório caso use chave ssh de autenticação:

   ```bash
   git clone git@github.com:SonsOfNode/SonsOfNode.git
   ```

   ou

   Utilize o comando abaixo para clonar o repositório caso possa utilizar o https para isso:

   ```bash
   git clone https://github.com/SonsOfNode/SonsOfNode.git
   ```

2. **Navegar para o diretório do projeto**

   Utilize o comando cd para navegar até o projeto

   ```bash
   cd sonsofnode
   ```

3. **Inicie o container**

   Inicie o container com o docker-compose

   ```bash
   docker-compose up -d --build
   ```

4. **Acesse a porta 3000**

   Abra seu navegador web e acesse a porta 3000 com o endereço

   ```bash
   http://localhost:3000
   ```
