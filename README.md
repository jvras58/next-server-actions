
# Estudo de Next.js

Este é um repositório de estudos de [Next.js](https://nextjs.org/) utilizando o canal FullCycle. Você pode assistir ao vídeo tutorial [aqui](https://www.youtube.com/watch?v=cxk-077rxNU).

## API Express

O repositório inclui uma pseudo API feita com Express. Para rodá-la, execute o seguinte comando:

```bash
node node-api/api.js
```

Isso irá expor a porta 8000.

## Rotas

Este projeto contém duas rotas principais:

- Rota de Login: Esta rota é usada para autenticar o usuário. Para fins de teste, use o usuário "admin" com a senha "admin".

- Rota Protegida: Esta rota só pode ser acessada se o usuário estiver autenticado. Ela serve como um exemplo de como implementar rotas protegidas em um aplicativo Next.js usando o conceito de Server Actions.



## Rodando o Projeto Next.js

Para rodar o projeto Next.js, use o seguinte comando:

```bash
npm run dev
```

## Autenticação

Para fins de teste, a API possui apenas o usuário "admin" com a senha "admin".

## TODOs e FIXMEs

Existem alguns TODOs e um FIXME muito importante no código. A parte de segurança e criptografia do token precisa ser observada e melhorada.

Este código foi criado para estudos de Server Actions e Server Client do Next.js.

## Aprenda Mais

Para aprender mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback e contribuições são bem-vindos!
