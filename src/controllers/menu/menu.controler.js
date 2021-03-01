const Menu = require('../../models/menu/menu.model');
module.exports = {
    get: async (req, res) => {
        let result = await Menu.getMenu();
        res.json(result);
    }
}