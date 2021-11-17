import { useState } from "react/cjs/react.development";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
import styles from "./filter.module.css";
import _ from "lodash";

const options = [
  { value: "", label: "ALL" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const sortOptions = [
  { value: "higest", label: "higest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption: selectedOption });
    dispatch({ type: "sort", selectedOption: selectedOption });
    console.log(selectedOption);
    setValue(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    /* console.log(selectedOption); */
    dispatch({ type: "sort", selectedOption: selectedOption });
    setSort(selectedOption.sort);
  };
  return (
    <div className={styles.filter}>
      <p>filter products pased on:</p>
      <div className={styles.selectContainer}>
        <span>order by</span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={styles.select}
        />

        <div className={styles.selectContainer}>
          <span>sort by</span>
          <Select
            value={sort}
            onChange={sortHandler}
            options={sortOptions}
            className={styles.select}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
