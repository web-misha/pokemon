import s from "./style.module.css";
const HeaderBlock = ({title, descr}) => {
  return (
    <>
      <header className={s.root}>
        <div className={s.forest}></div>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>{descr}</p>
        </div>
      </header>
    </>
  );
};

export default HeaderBlock;
