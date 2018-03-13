import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


// DZ

// Каждый li должен быть таким ->
// checkbox | true/false
// имя таски 
// если она выполнена - зеленый цвет
// если не выполнена - красный зачеркнутый
// внизу (под списком): 
// количество задач (общее) 
// количество выполненых
// количество не выполненых
// если список задач пустой счетчики не отображаем
// а вместо списка подпись "Add task to start"
