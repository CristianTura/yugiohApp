import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Card } from '../components/Card';

export const Favorites = () => {
  const data = useSelector( (state: RootState ) => state.favorites )

  return (
    <>
        <Header/>
        <main>
        {
            data?.map( (item: any ) => (
              <Card key={item.id} { ...item } favorites={true}/>
            ))
          }
        </main>
        <Footer/>
    </>
  )
}
