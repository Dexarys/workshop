import AxaRepository from "../repository/axaRepository";
import _ from "underscore";
import HttpStatusService from "../services/httpStatusService";



export default class AxaController {

    constructor() {
        this.axaRepository = new AxaRepository();
        this.httpStatusService = new HttpStatusService();
    }

    index(req, res) {
        res.render('index');
    }

    history(req, res) {
        res.render('history');
    }

    buy(req, res) {
        res.render('buyContract');
    }

    delay(req, res) {
        console.log("BODY");
        console.log(req.body);
        console.log("PARAMS");
        console.log(req.params);
        res.json({msg: "TOTO"});
    }
}