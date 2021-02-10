import React from 'react';
import PropTypes from "prop-types";

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Bulgogi",
//     image: "https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/master/w_1280%2Cc_limit/basic-bulgogi.jpg",
//     rating: 4
//   },
//   {
//     id: 3,
//     name: "Kimbap",
//     image: "https://i0.wp.com/www.habkorea.net/wp-content/uploads/2019/11/gimbap-1.jpg?w=800&ssl=1",
//     rating: 6
//   },
//   {
//     id: 4,
//     name: "Samgyetang",
//     image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
//     rating: 8
//   }
// ]

// // function renderFood(dish){
// //   console.log(dish);
// //   return <Food name={dish.name} image={dish.image}></Food>
// // }

// function Food({ name, image, rating }){
//   return <div>
//     <h2> I like {name}</h2>
//     <h4> {rating}/5.0</h4> 
//     <img src={image} alt={name}/>
//   </div> 
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };


// function App() {
//   return  (
//   <div>
//     {foodILike.map(dish => (<Food  
//       key={dish.id} 
//       name={dish.name} 
//       image={dish.image} 
//       rating={dish.rating} />))}
//   </div>  
//   );
// }

class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count - 1 }));
  };

  render(){
    return (<div>
      <h1>The number is: {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
