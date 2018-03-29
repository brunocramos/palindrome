const ControllerFactory = require('./modules/core/factories/controller-factory');

const routes = (app) => {
  app.post('/palindrome', (req, res) => {
    try {
      const controller = ControllerFactory.getController('palindrome');
      controller.isPalindrome(req.body.value)
        .then(() => res.status(200).json({ ok: 1 }))
        .catch(err => res.status(400).json({ error: err.message }));
    } catch (e) {
      res.status(400).json(e);
    }
  });
};

module.exports = routes;
