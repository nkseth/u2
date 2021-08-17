import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import ProductCard from "../../products-card/card";
import styles from "./section.module.scss";

const products = [
  {
    type: "Suit Jacket",
    price: "$599",
    img:'https://images.pexels.com/photos/7137411/pexels-photo-7137411.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
   // img: "https://s3-alpha-sig.figma.com/img/2386/a62b/fdcbdcc2768e4bf683a6910a86239a84?Expires=1627862400&Signature=I~OPLLFZQbdHTPY8lK0R4S2cDNyHZd5xBrvffEg5JIJVUKF6slsSOratpI3vRxb3HolrWLEN6zoyslEBH9FMfphqbtnlH9ZxtkOUX5oO1kcjfYrH6ZRQ~oZBDUMOkeJMC5nyOB8JxcSdWdJ27FbrPW-Wvpc7M8DyIfcvEP9da1drOdOMTovOwK~AurrNk5ZLMf4ERDGA29ExmEoKIcR5eC81PmA9q1Z32cRNgtQyvDk2ZLhBcJZ2EiRbmVds2oKKuKthFKvBY1BJnZH92nHZ7omQAvJUnAC96if-POazbT4cdHkMfkgcX1hBoetA65yGVOY9XbJ6qIZjSsht5rtmXA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    type: "Suit trousers",
    price: "$599",
    img:'https://images.pexels.com/photos/7137411/pexels-photo-7137411.png?auto=compress&cs=tinysrgb&dpr=2&w=500'

    //img: "https://s3-alpha-sig.figma.com/img/543b/7c1c/dd17dbb85154a572bd3b2a3ef7de127f?Expires=1627862400&Signature=NEtE3SpUkcdQE0rDXNbsJwSplMThQBfZPxGhqJBbi~YrnzuF5xzVwBn5XZqfLEBCw7Xpiz4xOYWBycJvyriPqagIGZxmWPhbtHezSHAu4MltLiVsTPX3YAyqG93ZvZ6hQRv10MK5t8P-J2Y45PkVPPF4CGmkjK-jwmP~ShVizTLAP5vloYvm6ItjMQigadv9-vwkh37rXdUpYriYGOgJmHG1rDy3HD~fEPSxGAeNX8UdOh2OfLVxi8N52ZLj~3dE9UEWDKpwJNEOE0tgRJ2tVUDU8SvqccQc3wcNv4D5YEZXZZxK9UlpyXcgRw4-HMKC4q6M5MPBvdyJJbCmUvOStQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    type: "Waistcoat",
    price: "$599",
    img:'https://images.pexels.com/photos/7137411/pexels-photo-7137411.png?auto=compress&cs=tinysrgb&dpr=2&w=500'

   // img: "https://s3-alpha-sig.figma.com/img/6d4c/68b2/55b4dd43eaf45bcb2868d539162cdbbe?Expires=1627862400&Signature=OPk09wHU9ojiIsBRX9wWIPlOL4C0jfaQk2Mrp6TcJScQ0e~-eKpaBFlodtlHffJaLGrF38saLA4JVi4go-JmM1h3uGfs5h5KKPsgCKXPJaj8igGjfUlsL-2bXUiH2hfenxT7FnRXx31ZyHKjVzN7L94IInOK5gvKONF~j3DBGR61NRQSgvOT2cAULNXPkLDn9PkKPGYh8wBAsv636-GBOqwsgcnGZ6zKxBjLUS8fVfM5TIdb4DaIMIqqLToPuU7GFv~5MGyqI6OLipbEt6S9Z0ZHmGX1OnbnthFPjKUZDU2xFy3MuLxXupDSXMgJnnFbNDtmGrD9CT92UNCad8eqEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    type: "Tuxedo",
    price: "$599",
    img:'https://images.pexels.com/photos/7137411/pexels-photo-7137411.png?auto=compress&cs=tinysrgb&dpr=2&w=500'

    //img: "https://s3-alpha-sig.figma.com/img/71d1/f029/ce29ba5b528724a675ba32c128b265bb?Expires=1627862400&Signature=dH-RG6T7y0oObv9Yh2U3ihpkDKGm7sndTQF71y1Sc57~OoM8~ndLwXU7sEsXtdZkJxW6nkKIm1C-46xbeCVcMgRmvkD9y4obUwZfs2emgjEMRdTq~~XckAqjE6gwwEZuuMyk4MknQsVvYzm7Z5ggNlBV5PrqCoJByjMpIWg5iyoaiT3CUZl-2UeJAde6SAz-U3QURDrJFMQyc6OAuO~ibg5PoongIb1z2Eil63rUEjMn8WSyvEbeQkxmQlMR4yu7NYkveEix344vnXruUPNIX~MfJIOFVhMcTDS6~8lkB9rl7kLvEoN8DI1tSjssfhcz2b~rhUA7gtkSVQCT3vlbAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

export default function ProductSection() {
  const customView = useMediaQuery("(max-width:1150px)");
  return (
    <div className={styles.container}>
      <Grid container spacing={2} style={{ width: "100%", margin: 0 }}>
        {products.map((item) => (
          <Grid item xs={6} sm={3} md={customView ? 3 : 6}>
            <ProductCard type={item.type} price={item.price} img={item.img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
