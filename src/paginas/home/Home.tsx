import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";
import ModalCupom from "../modalCupom/ModalCupom";
import ModalPerguntas from "../modalPerguntas/ModalPerguntas";

function Home() {
  return (
    <>
      <Grid container>
        <Grid alignItems="center" item xs={12}>
          <Box className="imagemBanner"></Box>
        </Grid>
        <Grid  className="teste-back">
          <Box className="topo-home">
            
          </Box>
          <Grid xs={12} className="caixa-troca">
            <Grid item xs={6} className="texto-sobre">
              
              <Typography variant="h6" component={"h6"} className="borda-texto">
              <h2>Sobre a troca</h2>
              <hr />
                <p>Selecione o produto que você deseja troca, no ato
                disponibilizamos o cupom correspondente a categoria/produto que
                você irá trocar, em seguida direcionamos para nossa pagina de
                produtos, onde você irá escolher o que deseja comprar. Selecione
                o produto desejado, vá para a pagina de pagamento onde o cupom
                será aplicado, a partir do pagamento confirmado,
                disponibilizamos o código de retirada do produto antigo
                fornecido pelo nosso parceiro Eco, fazemos a
                entrega do seu produto novo e mais sustentável.</p>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img  className="imagem-troca" src="https://ik.imagekit.io/energen/ImagensDessa/ezgif.com-webp-to-png.png?updatedAt=1682633452485" alt="" />
            </Grid>
          </Grid>
          {/* <Grid xs={12} style={{backgroundColor: '#ffffff'}}> */}
            <Box className="margemButton">
              <ModalCupom />
              <ModalPerguntas />
            </Box>
          {/* </Grid> */}
        </Grid>
        <Grid item xs={12} className="teste-back">
          <Typography
            className="tituloIcone"
            variant="h3"
            component={"h3"}
            align="center"
          >
            <h5>Escolha o produto desejado:</h5>
          </Typography>
          <Grid item xs={12} className="alinha tituloIcone">
            <Link to="/produtos">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/maquina-de-lavar.png?updatedAt=1681779910220"
                alt=""
              />
            </Link>
            <Link to="/produtos">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/geladeira.png?updatedAt=1681779909959"
                alt=""
              />
            </Link>
            <Link to="/produtos">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/monitor-de-tv.png?updatedAt=1681779910063"
                alt=""
              />
            </Link>
            <Link to="/produtos">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/microondas.png?updatedAt=1681779909856"
                alt=""
              />
            </Link>
            <Link to="/produtos">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/ar-condicionado.png?updatedAt=1681779910087"
                alt=""
              />
            </Link>
            <Link to="/produtos">
              <img
                className="iconesProdutos"
                src="https://ik.imagekit.io/energen/Icones_Visual/ventilador.png?updatedAt=1681779909886"
                alt=""
              />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
