import { useState, useEffect, useRef, memo, FormEvent } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import classes from "./FormSearch.module.scss";

function FormSearch() {
  let navigate: any = useNavigate();

  const placeholderInput: string[] = [
    "Bạn cần tìm gì...?",
    "Điện thoại gì cũng có",
  ];

  const [placeholder, setPlaceholder] = useState(placeholderInput[0]);

  const timerId: any = useRef();

  const inputRef: any = useRef();

  useEffect((): any => {
    timerId.current = setInterval(
      (): any =>
        setPlaceholder(
          placeholderInput[Math.floor(Math.random() * placeholderInput.length)]
        ),
      5000
    );
    return clearInterval(timerId.current);
  }, []);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/search?key=${inputRef.current.value}`);
  };

  return (
    <div className={clsx(classes.searchgroup)}>
      <form className={clsx(classes.formsearch)} onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          className={clsx(classes.inputsearch)}
          placeholder={placeholder}
        />
        <div className={clsx(classes.btnsearch__group)}>
          <button className={clsx(classes.btnsearch)} type="submit">
            <SearchOutlinedIcon className={clsx(classes.btnsearch__icon)} />
          </button>
        </div>
      </form>
    </div>
  );
}
export default memo(FormSearch);
