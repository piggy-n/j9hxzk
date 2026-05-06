import App from './App';
import { router } from './router';
import '@/styles/global.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
