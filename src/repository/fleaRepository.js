import FleaModel from "../models/fleaModel";

export default class fleaRepository {
    constructor() {
        this.fleaModel = FleaModel.mongooseSchema;
    }

    getFleas() {
        return new Promise((resolve, reject) => {
            this.fleaModel.find({})
                .then(fleas => resolve(fleas))
                .catch(err => reject(err));
        });
    }

    getFleaByName(name) {
        return new Promise((resolve, reject) => {
            this.fleaModel.findOne({name: name})
                .then(flea => resolve(flea))
                .catch(err => reject(err));
        });
    }

    createFlea(name) {
        return new Promise((resolve, reject) => {
            this.fleaModel.create({name: name})
                .then(flea => resolve(flea))
                .catch(err => reject(err));
        });
    }

    killFlea(name) {
        return new Promise((resolve, reject) => {
            this.fleaModel.remove({name: name})
                .then(msg => resolve(msg))
                .catch(err => reject(err));
        });
    }
}
