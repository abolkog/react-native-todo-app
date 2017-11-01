# React Native Todo App

This is the repository is for the tutorial ["React Native Tutorial - Arabic"](http://www.abolkog.com/courses/view/react-native-tutorial) @abolkog.com

# The App
  - The app is a simple Todo App hooked to a back-end hosted on heroku

### Installation

Clone the repo and then do an ```npm install```
* To run on IOS
```sh
npm install
react-native run-ios
```
* To run on Android
```sh
npm install
react-native run-android
```

### Linter Config
```
npm install --save-dev eslint-config-react-native

```

Create .eslintrc
```
{
  "extends": ["react-native"],
  "rules": {
      "no-console": 0,
      "react/prop-types": 0,
      "react/jsx-no-bind": 0,
      "react/prefer-stateless-function": 0,
      "class-methods-use-this": 0,
      "import/default": 0,
      "import/prefer-default-export": 0,
      "no-use-before-define": 1,
      "arrow-body-style": 1,
      "react-native/no-color-literals": 0
  }
}

```


#### Contact Me
You can use the [Contact Me](http://www.abolkog.com/contact) form at my website or drop me a message on twitter @abolkog
