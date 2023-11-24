# BRQ Movie

Este é um projeto React Native desenvolvido como parte do teste técnico para a vaga de desenvolvedor mobile na BRQ. A aplicação utiliza a API "The Movie DB" para exibir informações sobre filmes.

## Funcionalidades

- **Login:** Permite aos usuários autenticarem-se na aplicação.
- **Home:** Exibe uma lista de filmes utilizando a API do TMDB.
- **Detalhamento:** Mostra informações detalhadas sobre um filme específico.


## API "The Movie DB"

O projeto utiliza a API do "The Movie DB" para obter informações sobre filmes. Consulte a [documentação oficial](https://developer.themoviedb.org/docs) para mais detalhes sobre como utilizar a API.

## Screeshots

| Login | Home | Empty | Details |
| --- | --- | --- | --- |
| ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-11-24 at 14 50 42](https://github.com/YuryRegis/brqmovies/assets/29512626/98560f45-fb61-46aa-a213-c8505c74fe26) | ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-11-24 at 14 51 04](https://github.com/YuryRegis/brqmovies/assets/29512626/3eb393fe-852d-46b4-9133-b1de08c4834f) | ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-11-24 at 14 51 21](https://github.com/YuryRegis/brqmovies/assets/29512626/45db784d-507f-4408-b467-9f2f04915549) | ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-11-24 at 15 31 42](https://github.com/YuryRegis/brqmovies/assets/29512626/c8f91027-9218-43bc-aef9-bdc160eb3cb0) |


## Figma do projeto

[https://www.figma.com/file/5JlOZPiTKhgWeVdLb1uNPJ/BRQ-Movies](https://www.figma.com/file/5JlOZPiTKhgWeVdLb1uNPJ/BRQ-Movies?type=design&node-id=0-1&mode=design&t=eZGxzoZazcemWXp1-0)

## Configuração

Para configurar o projeto, siga os passos abaixo:

1. Instalação de Dependências:
```
$ yarn
```

2. Executar Testes:
```
$ yarn test
```

3. Gerar Cobertura de Testes:
```
$ yarn coverage
```

#### For Android

```
$ yarn android
```

#### For iOS
```
$ yarn ios
```

4. Arquivo .env:
- Crie um arquivo `.env` com base no `.env.example`.
- Registre uma conta no TMDB para obter as chaves necessárias:
  - `API_KEY`
  - `API_TOKEN`
  - `ACCOUNT_ID`
- Configure a `BASE_URL` com o valor `"https://api.themoviedb.org/3/"`.

## Algumas justificativas

### Jest
- **Justificativa:** O [Jest](https://jestjs.io/pt-BR/docs/getting-started) é uma estrutura de teste amplamente utilizada no ecossistema do React Native. Oferece uma sintaxe simples para escrever testes e integra-se bem com o ambiente de desenvolvimento, proporcionando uma cobertura completa para testes unitários, de integração e de snapshots.

### react-native-mmkv
- **Justificativa:** O [react-native-mmkv](https://www.npmjs.com/package/react-native-mmkv-storage?activeTab=readme) é uma biblioteca que oferece acesso rápido e eficiente para armazenamento de dados no dispositivo utilizando o MMKV (uma alternativa ao AsyncStorage padrão do React Native). Sua escolha pode se dar pela performance superior em comparação com outras opções de armazenamento local, especialmente para dados mais pesados.

### React-hook-form
- **Justificativa:** Esta biblioteca é escolhida por simplificar a lógica de formulários no React Native. Oferece um conjunto de hooks que facilitam a validação, manipulação e envio de dados de formulários, reduzindo a complexidade do código e melhorando a manutenção.

### tanstack/react-query
- **Justificativa:** O [react-query](https://tanstack.com/query/v4/docs/react/overview) é uma biblioteca moderna para gerenciamento de estado e caching de dados, útil para aplicativos que dependem fortemente de dados externos, como a API "The Movie DB". Sua escolha pode estar relacionada à facilidade de fazer requisições, manipular e armazenar em cache os dados de forma eficiente.

### Shopify/restyle
- **Justificativa:** O [restyle](https://shopify.github.io/restyle/) é uma biblioteca que oferece um sistema de design-first para estilização em React Native. Permite criar e reutilizar componentes estilizados de maneira consistente, promovendo uma padronização visual e facilitando a manutenção da interface do aplicativo.

### Zod
- **Justificativa:**  O [zod](https://zod.dev/) é uma biblioteca de validação de esquema altamente eficiente e tipada, sendo uma escolha para garantir a integridade dos dados recebidos da API ou fornecidos pelos usuários. Com seu sistema de tipagem robusto, auxilia na prevenção de erros comuns de tipagem e validação de dados.

### Axios
- **Justificativa:** O [axios](https://axios-http.com/docs/intro) é uma escolha comum para fazer requisições HTTP no React Native. Oferece uma interface simples e flexível para realizar chamadas de API, com suporte a interceptores, facilitando o tratamento de erros, manipulação de requisições e respostas, além de integração bem estabelecida com o ecossistema do React Native.

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou desejar implementar melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
