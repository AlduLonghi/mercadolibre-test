const axios = require('axios');

exports.busquedaController = async (req, res) => {
  const query = req.query.q;

  const itemsResult = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`, {})
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

  res.json(itemsResult);
};

exports.detallesController = async (req, res) => {
    const id = req.params.id;

    const detallesItem = await axios.get(`https://api.mercadolibre.com/items/${id}`, {})
      .then(res => res.data)
      .catch(err => console.log(err));

    const descripcionItem = await axios.get(`https://api.mercadolibre.com/items/${id}/description`, {})
    .then(res => res.data.plain_text);

    const categoryItem = await axios.get(`https://api.mercadolibre.com/categories/${detallesItem.category_id}`, {})
      .then(res => res.data)
      .then(data => data.path_from_root.map(categoria => categoria.name));

      const resObj = {
          author : {
              name: 'Aldana',
              lastname: 'Longhi',
          },
          item: {
              id: detallesItem.id,
              title: detallesItem.title,
              price: {
                  currency: detallesItem.currency_id,
                  ammount: detallesItem.price,
              },
              picture: detallesItem.thumbnail,
              condition: detallesItem.condition,
              free_shipping: detallesItem.shipping.tags.find(el => el === 'mandatory_free_shipping') ? true : false,
              sold_quantity: detallesItem.sold_quantity,
              description: descripcionItem,
              categories: categoryItem,
          }
      }
      console.log(resObj);

    res.json(resObj);
};