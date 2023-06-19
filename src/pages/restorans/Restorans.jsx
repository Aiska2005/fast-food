import React from "react";

import CardAdress from "../../components/ui/cardAdress/CardAdress";
import Aside from "../../components/aside/Aside";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dataKfc = [
  {
    title: "KFC Авто Магистраль",
    img: "https://www.kfc.kg/admin/files/5079.jpg",
    isOpen: false,
    adress: "А. Токомбаева, 33/1",
    tel: "+996 (550) 07-88-88",
    workingTime: { start: "9:00", end: "4:00" },
  },

  {
    title: "KFC Азия Молл",
    img: "https://www.kfc.kg/admin/files/5078.jpg",
    isOpen: true,
    adress: "просп. Ч. Айтматова, 3",
    tel: "+996 (550) 07-88-88",
    workingTime: { start: "9:00", end: "4:00" },
  },

  {
    title: "KFC Аламедин Гранд",
    img: "https://www.kfc.kg/admin/files/5077.jpg",
    isOpen: false,
    adress: "просп. Жибек-Жолу, 150а/3 ТЦ Аламедин гранд",
    tel: "+996 (550) 07-88-88",
    workingTime: { start: "9:00", end: "4:00" },
  },

  {
    title: " KFC Бета Сторес",
    img: "https://www.kfc.kg/admin/files/5076.jpg",
    isOpen: false,
    adress: " просп. Чуй 150а",
    tel: "+996 (550) 07-88-88",
    workingTime: { start: "9:00", end: "4:00" },
  },

  {
    title: "KFC Бишкек Парк",
    img: "https://www.kfc.kg/admin/files/5234.jpg",
    isOpen: false,
    adress: " ул. Киевская, 148",
    tel: "+996 (550) 07-88-88",
    workingTime: { start: "9:00", end: "4:00" },
  },

  {
    title: "KFC Горького",
    img: "https://www.kfc.kg/admin/files/5075.jpg",
    isOpen: false,
    adress: "ул. Родищев 1 - ул. М.Горького 130",
    tel: "+996 (550) 07-88-88",
    workingTime: { start: "9:00", end: "4:00" },
  },
];

const Restorans = () => {
  React.useEffect(() => {
    var map;

    DG.then(function () {
      map = DG.map("map", {
        center: [54.98, 82.89],
        zoom: 13,
      });
    });
  }, []);

  return (
    <div className="container">
      <div
        id="map"
        style={{
          width: "1200px",
          height: "500px",
        }}
      ></div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {dataKfc.map((el, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <Item>
              <CardAdress item={el} key={i} />
            </Item>
          </Grid>
        ))}
      </Grid>
      <Aside />
    </div>
  );
};

export default Restorans;
