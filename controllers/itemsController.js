const axios = require('axios');

exports.busquedaController = async (req, res) => {
  const query = req.query.q;

  const items = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`, {})
    .then(res => res.data)
    .then(res => {
      let categories = [];

      if (res.filters[0] !== undefined) {
        categories = res.filters[0].values[0].path_from_root
          .map(categoria => categoria.name);
      } else {
        categories
          .push(res.available_filters[0].values
            .sort((a, b) => b.results - a.results)[0].name);
      }

      const items = [...res.results].map(item => (
        {
          id: item.id,
          title: item.title,
          condition: item.condition,
          price: {
            currency: item.currency_id,
            ammount: item.price,
          },
          picture: item.thumbnail,
          free_shipping: item.shipping.free_shipping,
        }
      ));

      return {
        author: {
          name: 'Aldana',
          lastname: 'Longhi',
        },
        categories,
        items,
      };
    })
    .catch(err => console.log(err));

  res.json(items);
};