#Задание 4

1. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
   
   Пример вызовов:
   
   ```javascript
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
    ```
    
2. Напишите код, который будет запрашивать у пользователя пароль через `prompt` и отдавать пароль на проверку в функцию `checkPass`. Если пароль больше 8 символов, то функция должна распечатать в консоль "Успех", если меньше - "Это фиаско!". Сам `checkPass` менять нельзя!

    ```javascript
    function checkPass(password, onSuccess, onError) {
        if (password.length > 8) {
            onSuccess();
        } else {
            onError();
        }
    }
    ```