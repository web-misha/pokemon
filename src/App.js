import HeaderBlock from "./copmponents/HeaderBlock";
import Layout from "./copmponents/Layout";
import Footer from "./copmponents/Footer";

const App = () => {
  return (
    <>
      <HeaderBlock title="This is title" descr="This is Description!" />
      <Layout id="layout_one" title="Title1" descr="Subtitle1" />
      <Layout id="layout_two" title="Title2" descr="Subtitle2" colorBg={true}/>
      <Layout id="layout_three" title="Title3" descr="Subtitle3" urlBg={true}/>
    <Footer/>
    </>
  );
};

export default App;
