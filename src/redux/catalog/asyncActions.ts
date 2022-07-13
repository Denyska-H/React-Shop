import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Catalog, SearchItemsParams } from "./types";

export const fetchCatalogItems = createAsyncThunk<Catalog[], SearchItemsParams>(
	'catalog/fetchCatalogStatus', async (params) => {
	const { category, search, sortBy, order, currentPage } = params;
  const { data } = await axios.get<Catalog[]>(
    `https://62c6de9974e1381c0a6b2e65.mockapi.io/items?&page=${currentPage}&limit=6&${category}&${search}&sortBy=${sortBy}&order=${order}`,
  );
	return data;
});