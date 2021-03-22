import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExist = await repository.findOne({ where: { email } });

    if (userExist) {
      return res.status(409).json({ error: 'User already exists.' });
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();
