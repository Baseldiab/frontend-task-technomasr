/* eslint-disable react/prop-types */
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart/cart.store";
import { addToWish } from "../../store/wish/wish.store";
export default function MainCard(props) {
  const dispatch = useDispatch();
  //   const auth = useAuth();

  //   const handleAddToWish = () => {
  //     if (auth.user.length) {
  //       dispatch(addToWish(props));
  //     } else {
  //       Swal.fire({
  //         title: "<strong>SIGN IN TO SYNC YOUR SAVED ITEMS ACROSS ALL YOUR DEVICES</strong>",
  //         icon: "warning",
  //         showCloseButton: true,
  //         showCancelButton: true,
  //         focusConfirm: false,
  //         confirmButtonText: "<a class= 'text-light' href='/login' >SIGN IN</a>",
  //         confirmButtonAriaLabel: "Thumbs up, great!",
  //         cancelButtonText: "CONTINUE SHOPPING",
  //         cancelButtonAriaLabel: "Thumbs down",
  //       });
  //     }
  //   };

  return (
    <Box
      className={"rounded-2xl relative h-full my-0"}
      sx={{
        backgroundColor: "#ECECEC",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <div
        className="card_img  rounded-t-2xl p-4"
        style={{
          filter: "brightness(0.8)",
          backgroundColor: "#fff",
        }}
      >
        <Link className="card__img-link img-container " to={`/products/productId=${props.id}`}>
          <img
            className="block rounded-t-2xl mx-auto w-auto max-w-[100%] !h-[250px]"
            src={props.image}
            alt={props.title}
          />
        </Link>
      </div>
      <Button
        variant="contained"
        className={"!absolute top-5 right-5 !bg-white !text-black !p-2 !rounded-xl !min-w-[50px]"}
        onClick={() => dispatch(addToWish(props))}
      >
        <FavoriteBorderIcon />
      </Button>
      <div className="card_content min-h-[160px]">
        <div className="card_body text-start px-5 py-2 mx-auto">
          <Link className="text-light" to={`/products/productId=${props.id}`}>
            <h5 className="card_title text-base font-medium">{props.title}</h5>
          </Link>
          <h6 className="card_price font-mono  text-lg font-bold text-primary">
            {props.price.toFixed(2)}$
          </h6>
        </div>
        <div className="card_footer flex justify-end  mx-auto absolute bottom-0 right-0 px-5 pb-4">
          <Button
            variant="contained"
            className={" !bg-secondary !text-white !p-2 !rounded-xl !min-w-[50px] "}
            onClick={() => dispatch(addToCart(props))}
          >
            <AddShoppingCartIcon />
          </Button>
        </div>
      </div>
    </Box>
  );
}
