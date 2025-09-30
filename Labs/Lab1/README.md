
### Вариант = (№ в БРС mod 3) + 1


# Вариант №1

## Задание на верстку

![img1](./assets/var_1.gif)

## Задание на работу с объектами в js

*  **`Animal`**:

    * поля: `name` (строка), `hunger` (число, 0..∞, старт 0)
    * методы:

        * `increaseHunger()`: увеличить `hunger` на случайное целое от 1 до 10
        * `feed()`: установить `hunger = 0`
* Наследники **`Cow`** и **`Sheep`**:

    * переопределяют `feed()` и после базовой логики выводят в консоль «Мууу!»/«Беее!» соответственно
*  **`Farm`**:

    * поля: `animals` (массив), `intervalId` (идентификатор таймера или `null`)
    * методы:

        * `addAnimal(animal)` — добавить животное
        * `startLife()` — раз в 2 секунды вызывает `increaseHunger()` у всех животных и логирует их состояние

            * если у животного `hunger >= 100`, оно удаляется (лог «X убежал(а) с фермы!»)
        * `stopLife()` — останавливает интервал


## Пример работы

```js
const farm = new Farm();
farm.addAnimal(new Cow("Бурёнка"));
farm.addAnimal(new Sheep("Долли"));

farm.startLife();

setTimeout(() => {
  if (farm.animals[0]) farm.animals[0].feed();
}, 5000);

setTimeout(() => farm.stopLife(), 14000);
```


#  Вариант №2

## Задание на верстку

![img2](./assets/var_2.gif)

## Задание на работу с объектами в js

*  **`Client`**:

    * поля: `name` (строка), `balance` (число)
    * методы:

        * `deposit(amount)` — пополнить, лог `Имя пополнил на X. Баланс: Y`
        * `withdraw(amount)` — списать, лог `Имя снял X. Баланс: Y`
* Наследник **`VIPClient`**:

    * переопределяет `deposit(amount)`: добавляет бонус `10%` от суммы (округлить вниз)
    * после пополнения логирует `VIP-бонус: +B`
*  **`Bank`**:

    * поля: `clients` (массив), `intervalId`
    * методы:

        * `addClient(client)`
        * `startInterest(ratePercent)` — каждые 3 секунды начислять процент всем, у кого `balance > 0`
            * лог `Начислены проценты Имя: +profit. Баланс: ...`
        * `stopInterest()`


## Пример работы

```js
const bank = new Bank();
bank.addClient(new Client("Аня", 100));
bank.addClient(new VIPClient("Игорь", 200));

// каждые 10 сек
bank.startInterest(5);

setTimeout(() => bank.clients[0].deposit(50), 2000);
setTimeout(() => bank.clients[1].withdraw(250), 5000);
setTimeout(() => bank.stopInterest(), 12000);
```



# Вариант №3

## Задание на верстку

![img3](./assets/var_3.gif)

## Задание на работу с объектами в js 

*  **`Warrior`**:

    * поля: `name`, `hp` (по умолчанию 100)
    * методы:

        * `attack()` — возвращает урон: случайное целое 1..20
        * `takeDamage(dmg)` — уменьшает hp, лог `Имя получил X урона. HP: Y`
        * `isAlive()` — `hp > 0`
* Наследник **`Knight`**:

    * переопределяет `takeDamage(dmg)`: фактический урон `floor(dmg * 0.7)`, минимум 1
* Наследник **`Archer`**:

    * переопределяет `attack()`: с вероятностью 30% удвоенный урон (логировать «критический выстрел»)
* **`Arena`**:

    * поля: `warriors` (массив), `intervalId`
    * методы:

        * `addWarrior(w)`
        * `startBattle()` — раз в 1 сек: выбирает случайного атакующего и случайного защитника (не равны), наносит урон

            * если кто-то умер — удаляет его из массива (логировать)
            * когда остался один — объявить победителя и остановиться
        * `stopBattle()`



### Пример работы

```js
const arena = new Arena();
arena.addWarrior(new Knight("Гром"));
arena.addWarrior(new Archer("Тень"));
arena.addWarrior(new Warrior("Вихрь"));

arena.startBattle();

setTimeout(() => arena.stopBattle(), 20000);
```



