import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Card, SearchCardParams } from "./types";

export const fetchCardItems = createAsyncThunk<Card, SearchCardParams>(
	'card/fetchCardStatus', async (params) => {
	
	const {id} = params;

  const { data } = await axios.get(
    `https://62c6de9974e1381c0a6b2e65.mockapi.io/items/${id}`,
  );

	return data;
});