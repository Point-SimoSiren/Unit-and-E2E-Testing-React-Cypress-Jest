

Testien käyttöönottaminen:

npm install --save-dev @testing-library/react @testing-library/jest-dom

Normaalisti React-komponentit renderöityy DOM:iin. Testatessa renderöidään
komponentteja toisella tavalla.

Yksi renderin palauttamista kentistä on container, se sisältää koko komponentin renderöimän HTML:n. Render palauttaa olion jossa myöskin muuta kuin container.

Expect osassa tarkistetaan, että komponenttiin renderöityy oikea sisältö, eli kurssin nimi ja laajuus tekstit.

Ajetaan testit:
CI=true npm test