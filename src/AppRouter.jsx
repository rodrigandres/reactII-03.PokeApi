import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home, Pokemones, NotFound, PokemonPage  } from './views';

export const AppRouter = () => {
	return (
	<>
		<Navigation />
		<Routes>
				<Route path='/' element={<Home />} />
				<Route path='pokemones' element={<Pokemones />} />
				<Route path='pokemon/:name' element={<PokemonPage />} />
				<Route path='*' element={<NotFound />} />
		</Routes>
	</>
	);
};