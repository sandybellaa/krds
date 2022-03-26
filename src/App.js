import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import List from './components/assets/layout/List';

function App() {

  let [items, setItems] = useState([]);
  let [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch("https://krds-assignment.github.io/aoc/api-assets/data.json")
    .then(response => response.json())
    .then(data => {
      setLogo(data.logo)
      setItems(data.features);
    })
  },[]);

  const [winwidth, setwinwidth] = React.useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);
  const updateWidthAndHeight = () => {
    setwinwidth(window.innerWidth);
  };

  var settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return(
    <>
      <div className="wrapper-fluid">

        <header>
          <a href="#" className="logo">
            <img src={logo} alt="Logo" />
          </a>
        </header>
        {winwidth > 770 ? 
          <>
          <div className="prt-flx">
            {items.map((item,i)=> {
              return (
                <List
                  key={i}
                  extrClass={`list-${i}`}
                  icoImg={item.logo}
                  para={item.title}
                  title={item.desc}
                  productImg={item.image}
                />
              )
            })}
          </div>
          </> : 
          
          <>
            <Slider {...settings} className="prt-slider">
              {items.map((item,i)=> {
                return (
                  <List
                    key={i}
                    extrClass={`list-${i}`}
                    icoImg={item.logo}
                    para={item.title}
                    title={item.desc}
                    productImg={item.image}
                  />
                )
              })}
            </Slider>
          </>}  
        
      </div>
    </>
  );

}

export default App;