import express from 'express';
import { Accounts } from '../models/accountModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
      if (
        !request.body.username ||
        !request.body.password ||
        !request.body.fullname
      ) {
        return response.status(400).send({
          message: 'Send all required fields: username, password, fullname',
        });
      }
      const newAccounts = {
        username: request.body.username,
        password: request.body.password,
        fullname: request.body.fullname,
      };
  
      const account = await Accounts.create(newAccounts);
  
      return response.status(201).send(account);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  router.get('/', async (request, response) => {
    try {
      const account = await Accounts.find({});
  
      return response.status(200).json({
        count: account.length,
        data: account,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;