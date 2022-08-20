import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';

export const actions: HttpFunction = (req, res) => {
  return res.json({
    message: `called action input=${req.body['input'].text}`
  });
};