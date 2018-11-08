import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import AxaController from './controller/axaController';


export default class Server {
    constructor()
    {
        this._app = express();

        this._app.use(express.static(path.join(__dirname, '/../public')));


        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({extended: true}));


        this._app.set('view engine', 'twig');
        this._app.set('views', path.join(__dirname, '../src/views/'));

        this.port = process.env.PORT || 3000;
    }

    _initControllers()
    {
        return new Promise((resolve, reject) => {
            try {
                const axaController = new AxaController();
                this._app.get('/', axaController.index.bind(axaController));
                this._app.get('/history', axaController.history.bind(axaController));
                this._app.get('/buy', axaController.buy.bind(axaController));
                this._app.post('/', axaController.delay.bind(axaController));
                resolve();
            } catch(err) {
                reject(err);
            }
        })
    }

    run()
    {
        this._initControllers();

        this._app.listen(this.port, () => console.log(`Server listening on port ${this.port}!`));
    }
}