import exceptionHandler from "../../utils/errorHandlers/exceptionHandler.mjs";
import { Object } from "../../models/database/RunDB.mjs";

export default class AdvertisementController {
  
    async getAdvertisements(_, res) {
      try {
        const advertisements = await Object.findAll({
          order: [["createdAt", "DESC"]],
          include: [{ all: true }],
        });
        res.json(advertisements);
      } catch (err) {
        exceptionHandler(err, res);
      }
    }
  
    async getAdvertisement(req, res) {
      try {
        const advertisement = await Object.findOne({
          where: { id: req.params.id },
          include: [{ all: true }],
        });
        if (advertisement) {
          res.status(200).json(advertisement);
        } else {
          res.status(404).send("No se ha encontrado");
        }
      } catch (err) {
        exceptionHandler(err, res);
      }
    }
  
    async postAdvertisement(req, res) {
      try {
        const advertisement = await Object.create(req.body);
        res.status(200).json(advertisement);
      } catch (err) {
        exceptionHandler(err, res);
      }
    }
  
    async updateAdvertisement(req, res) {
      try {
        const advertisement = await Object.findByPk(req.body.id);
        await advertisement.update(req.body);
        res.status(200).json(advertisement);
      } catch (err) {
        this.exceptionHandler(err, res);
      }
    }
  
    async deleteAdvertisement(req, res) {
      try {
        const advertisement = await Object.findByPk(req.body.id);
  
        await advertisement.destroy();
  
        res.sendStatus(200);
      } catch (err) {
        this.exceptionHandler(err, res);
      }
    }
  }
  