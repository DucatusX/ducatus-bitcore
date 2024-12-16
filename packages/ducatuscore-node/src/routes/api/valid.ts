import express = require('express');
const router = express.Router({ mergeParams: true });
import { ChainStateProvider } from '../../providers/chain-state';

router.get('/:input', async function(req: express.Request, res) {
  let { input, chain, network } = req.params;
  try {
    let isValid = await ChainStateProvider.isValid({
      chain,
      network,
      input
    });
    res.send(isValid);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = {
  router,
  path: '/valid'
};
