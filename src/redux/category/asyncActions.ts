import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Category } from "./types";

export const fetchCategoryItems = createAsyncThunk<Category[]>(
	'category/fetchCategoryStatus', async () => {
  const { data } = await axios.get<Category[]>(
    `https://62c6de9974e1381c0a6b2e65.mockapi.io/categories`,
  );
	return data;
});