import "./serach-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
    className={`search-box ${className}`}
  />
);

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;
//
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
