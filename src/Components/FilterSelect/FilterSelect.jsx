import Select from "react-select";
import items from "../../data";
import "./FilterSelect.css";

const options = [
  { value: "cloth", label: "Cloth" },
  { value: "watch", label: "Watch" },
  { value: "phone", label: "Phone" },
  { value: "headphone", label: "HeadPhone" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blue" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectedOption) => {
    setFilterList(
      items.filter((item) => item.category === selectedOption.value)
    );
  };
  return (
    <Select
      className="FilterSelect"
      options={options}
      defaultValue={{ value: "", label: "Filter By Category" }}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
