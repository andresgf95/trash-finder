import nodeCron from "node-cron";
import { Object } from "./lib/db/RunDB.mjs";
import { Op } from "sequelize";

nodeCron.schedule("0 0 0 * * 1",
    ()=>{
            Object.destroy({
            where: {
                createdAt: {
                    [Op.lt]: [new Date(new Date().valueOf() + 6.048e+8)] // Date value corresponding to 7 days
                }
            }
        })
    },
    { timezone: "Europe/Madrid" }
);