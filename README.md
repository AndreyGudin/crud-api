## NODE.JS-2022Q4 Task 3 Simple Crud API

1. Команда для старта сервера в режиме разработки
  `npm run start:dev`
2. Команда для старта сервера
  `npm run start:prod`
3. Команда для старта сервера в режиме multi
  `npm run start:multi`
4. Команда для старта тестов
  `npm run test`
  Чтобы протестировать режим multi, добавьте pid( эта переменная есть во всех файлах в routes) переменную в header вместо **application/json**. Pid процессов выводится в консоль
  Пример:
   
  
    `res.writeHead(400, { 'Content-Type': pid });`
  
    `res.end(JSON.stringify({ title: 'Validation failed', message: 'UUID is not valid' })); `
    
  
  Таким образом, вы увидите pid процессов, из которых пришел ответ.
