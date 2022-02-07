import {Message} from "./Message/index_message";

const text = 'Hello!';
const text2 = 'Hello2!';

export const Homework = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Message text={text}/>
            <Message text={text2}/>
        </div>
    )
}

