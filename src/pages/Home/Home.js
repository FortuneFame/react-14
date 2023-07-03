import React from 'react';

import { Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return (
        <>
            <h1 className='text-center p-3 mt-4'>Welcome to My HW-14</h1>
            <div className="container mt-4">
                <Typography variant="h6" component="div">
                    <strong>Задание:</strong>
                </Typography>
                <Typography variant="body1" component="div" className="mt-2">
                    <p>*Для взаимодействия с компонентом используйте useDispatch i useSelector</p>
                    <p>*Используйте thunk</p>
                    <ol>
                        <li>
                            Создайте 3 кнопки (show users, show posts, show comments), для каждой из них создайте соответствующую компоненту.
                        </li>
                        <li>
                            При клике на каждую из кнопок должна появляться соответствующая компонента, в которой благодаря thunk и axios нужно показать соответствующие данные из:
                            <a target='blank' href="https://jsonplaceholder.typicode.com/"> https://jsonplaceholder.typicode.com/ </a>
                        </li>
                        <li>
                            Создать компонент Counter и написать написать каунтер который будет умножать\делить число 2 на самого себя при клике на соответствующую кнопку.
                        </li>
                    </ol>
                </Typography>
            </div>
        </>
    );
};

export default Home;
