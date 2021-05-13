import PropTypes from 'prop-types';
import '../estilos/Breadcrumb.scss';

const Breadcrumb = ({ categories }) => {
  const breadcrumb = categories.length !== 1 ? categories.join(' < ') : categories[0];
  return (
    <p className="breadcrumb">{breadcrumb}</p>
  );
};

Breadcrumb.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default Breadcrumb;
