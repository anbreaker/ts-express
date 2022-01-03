import { Handler } from 'express';

export const getGreetings: Handler = async (req, res) => {
  res.json({ msg: 'Hello World' });
};
