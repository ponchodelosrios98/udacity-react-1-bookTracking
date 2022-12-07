import PropTypes from 'prop-types';

const PageTitle = ({
  title,
}) => (
  <div className="list-books-title">
    <h1>{title}</h1>
  </div>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
