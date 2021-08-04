## createElement-children

createElement children 에 관한 예제입니다. [참고 링크](https://egas.tistory.com/95)

### 조건

- children 가 3번째 인자로 주어지지 않은 경우 (위)
- children 가 3번째 인자로 주어진 경우 (아래) (기본 children이 3번째 인자에 의해 덮어 씌어집니다.)

<img src="https://user-images.githubusercontent.com/22424891/128197780-9f3c600a-b9e5-440d-96f8-480b2d72b2c0.png" height="100px"/>

## createFactory

```js
    console.log(React.createFactory('div')())
    console.log(React.createFactory(Footer)())
```

<img src="https://user-images.githubusercontent.com/22424891/128201627-9f2d9c32-81f2-4036-bb8c-526e0c16e78c.png" height="300px"/>
