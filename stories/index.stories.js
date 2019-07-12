import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import {withKnobs, number, boolean, text} from '@storybook/addon-knobs/polymer';
import { action } from '@storybook/addon-actions';

storiesOf('Demo', module)
    .addDecorator(withKnobs)
    .add('heading', () => '<h1>Hello World</h1>')
    .add('button', () => {
        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = text('Label', 'Hello World');
        button.addEventListener('click', e => action('button-click')(e.detail));
        return button;
    });
