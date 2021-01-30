import s from "./style.module.css";

const LayoutTwo = ({ id, title, descr, colorBg = false, urlBg }) => {
  const styleBg = colorBg
    ? { backgroundImage: "none", backgroundColor: "red" }
    : {};
  const imageBg = urlBg ? { backgroundImage: "url(./bg2.jpg)" } : {};

  return (
    <>
      <section className={s.root} style={styleBg} id={id}>
        <div style={imageBg} className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3>{title}</h3>
              <span className={s.separator}></span>
            </div>
            <div className={(s.desc, s.full)}>
              <p>{descr}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default LayoutTwo;
