## Documents in Other Languages
- [中文文档](chinese)

## About
Expex is an Expanse wallet and also a Expex DEX, therefore we call it a Wallex. If you are only interested in a Expex DEX frontend, please check out [Circulr](https://expex.github.io/circulr), another open-sourced frontend project by Expex.

## Features

- Expex protocol: A web-based Expanse wallet with Expex protocol integration
- Unlock: unlock wallet by Metamask,TRZEOR,Ledger,Keystore,Mnemonic,Privatekey,Watch Only
- Assets:View balances & eth transactions 
- Trade: Sell & Buy tokens
- Airdrop: Bind  address for LRN & LRQ
- Support multiple languages

## Stack

- React
- React-Router
- Redux
- [Redux-saga]( https://github.com/redux-saga/redux-saga): An alternative side effect model for Redux apps 
- [Roadhog](https://github.com/sorrycc/roadhog): Cli tool for creating react apps, configurable version of create-react-app.
- [Antd](https://github.com/ant-design/ant-design): A react UI componnets library.
- [Dva](https://github.com/dvajs/dva): Lightweight front-end framework based on redux, redux-saga and react-router.

## Compile

```
npm install // install the node_modules
npm start // run for develop
npm run build // run for production
```

## Deploy

1. clone our project to local

2. build project

   ```
   npm run build
   ```

3. [sign up](https://firebase.google.com/) for your firebase account(if you already have one, please continue to step 4)

4. install firebase-cli

   ```
   npm install -g firebase-tools
   ```
5. deploy
    ```
    firbase deploy
     ```
    
