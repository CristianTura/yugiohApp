import React, { useMemo } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataCards } from "../redux/home/actions";
import { RootState } from "../redux/store";

export const Home = () => {
  const dispatch = useDispatch();
  const [filterCards, setFilterCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showCards, setShowCards] = useState([]);


  useMemo(() => dispatch(getDataCards()), [dispatch]);

  const { cards } = useSelector((state: RootState) => state.cards);
  const filter = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    const cardFiltered = cards?.filter((item: any) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilterCards(cardFiltered);
  }, [filter, cards]);

  useEffect(() => {
    const total = filterCards?.length;
    setTotalPage(Math.ceil(total / 12));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCards]);

  useEffect(() => {
    const data = cards.slice(currentPage * 12 - 12, currentPage * 12);
    setShowCards(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  const handlePage = (page: number) => {
    setCurrentPage(currentPage + page);
    const data = filterCards.slice(currentPage * 12 - 12, currentPage * 12);
    setShowCards(data);
  };

  return (
    <>
      <Header />
      <div className="home__container-banner">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Ee97PmIqf5wY4TbeM8mnhjH7Tz-WQ2DnZw&usqp=CAU"
          alt="Banner"
        />
        <h3 className="home__tilte-banner">Find all your cards!!!</h3>
      </div>
      <main>
        {showCards?.map((item: any) => (
          <Card key={item.id} {...item} home={true} />
        ))}
      </main>
      <div className="home__btn-pages">
        <button
          className="home__btn-pages-prev"
          onClick={() => handlePage(-1)}
          disabled={currentPage === 1 ? true : false}
        >
          <i className="fa-solid fa-angles-left"/> Prev
        </button>
        <button
          className="home__btn-pages-next"
          onClick={() => handlePage(1)}
          disabled={currentPage === totalPage ? true : false}
        >
         Next <i className="fa-solid fa-angles-right"/>
        </button>
      </div>
      <Footer />
    </>
  );
};
